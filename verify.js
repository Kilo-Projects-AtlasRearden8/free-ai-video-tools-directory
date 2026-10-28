// verify.js — self-test for the Free AI Video Tools Directory
// Runs with plain Node.js, no dependencies.
// Exits 0 on success, non-zero on any failure.

const fs = require("fs");
const path = require("path");

let failures = 0;
function fail(msg) {
  console.error("FAIL: " + msg);
  failures += 1;
}
function ok(msg) {
  console.log("ok: " + msg);
}

const root = process.cwd();

// 1. tools.json exists and is valid JSON
let tools;
try {
  tools = JSON.parse(fs.readFileSync(path.join(root, "tools.json"), "utf8"));
  ok("tools.json is valid JSON");
} catch (e) {
  fail("tools.json is not valid JSON: " + e.message);
  process.exit(1);
}

// 2. tools array present
if (!Array.isArray(tools.tools)) {
  fail("tools.json is missing a 'tools' array");
  process.exit(1);
}
const list = tools.tools;
ok("tools.json contains " + list.length + " tools");

// 3. Every listing has required fields
const required = ["name", "category", "cost", "platform", "steps", "link"];
list.forEach((t, i) => {
  required.forEach((field) => {
    if (t[field] === undefined || t[field] === null || t[field] === "") {
      fail("tool #" + i + " (" + (t.name || "unknown") + ") missing field: " + field);
    }
  });
  if (!Array.isArray(t.steps) || t.steps.length === 0) {
    fail("tool #" + i + " (" + (t.name || "unknown") + ") has no steps");
  }
  if (typeof t.link === "string" && !t.link.startsWith("https://")) {
    fail("tool #" + i + " (" + t.name + ") link is not https: " + t.link);
  }
});

// 4. Categories cover the four required areas
const cats = [...new Set(list.map((t) => t.category))];
["Editing", "Captioning", "Thumbnails", "Enhancement"].forEach((c) => {
  if (!cats.includes(c)) fail("missing category: " + c);
});
ok("categories present: " + cats.join(", "));

// 5. index.html exists and contains embedded fallback data + Asdale credit
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!html.includes('<script id="fallback"')) fail("index.html missing embedded fallback data");
else ok("index.html has embedded fallback data");
if (!html.includes("Asdale Dynamics, LLC")) fail("index.html does not credit Asdale Dynamics, LLC");
else ok("index.html credits Asdale Dynamics, LLC");
if (!html.includes("tools.json")) fail("index.html does not reference tools.json");
else ok("index.html references tools.json");

// 6. LICENSE has exact copyright line
const license = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
if (!license.includes("Copyright (c) 2026 Asdale Dynamics, LLC")) {
  fail("LICENSE missing exact copyright line");
} else {
  ok("LICENSE has exact copyright line");
}

// 7. README credits Asdale Dynamics, LLC
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
if (!readme.includes("Asdale Dynamics, LLC")) fail("README does not credit Asdale Dynamics, LLC");
else ok("README credits Asdale Dynamics, LLC");

// 8. No affiliate / referral / UTM parameters anywhere
const all = [html, JSON.stringify(list), readme, license].join("\n");
if (/affiliate|referral|utm_source|tag=/i.test(all.replace(/No affiliate links/gi, ""))) {
  fail("possible affiliate/referral tracking found");
} else {
  ok("no affiliate or tracking links detected");
}

if (failures > 0) {
  console.error("\n" + failures + " check(s) failed.");
  process.exit(1);
}
console.log("\nAll checks passed.");
process.exit(0);
