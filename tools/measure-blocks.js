#!/usr/bin/env node
/* Measure each leveled block on a case page with the shared FK (READING-LEVELS.md).
     node tools/measure-blocks.js cases/tinker.html
   Pairs blocks by order: the Nth .content-block.standard with the Nth .simplified
   and the Nth .quick (simplified = Clear, standard = Full), and measures the page's Quick, Clear and Full as a whole. */
const fs = require('fs');
const { fkGrade, checkTopic } = require('./fk-core.js');
const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8');
function blocks(cls) {
  const out = [];
  const re = new RegExp('<div class="(?:content-block|two-sides-summary) ' + cls + '\\b[^"]*">', 'g');
  let m;
  while ((m = re.exec(src))) {
    const tag = /<(\/?)div\b[^>]*>/g; tag.lastIndex = re.lastIndex;
    let depth = 1, t;
    while (depth && (t = tag.exec(src))) depth += t[1] ? -1 : 1;
    out.push(src.slice(re.lastIndex, t.index));
  }
  return out;
}
const L = { Quick: blocks('quick'), Clear: blocks('simplified'), Full: blocks('standard') };
const n = Math.max(L.Quick.length, L.Full.length);
for (let k = 0; k < n; k++) {
  console.log(`block ${k + 1}: ` + ['Quick', 'Clear', 'Full'].map(name => {
    const h = L[name][k]; if (!h) return `${name} -`;
    const words = h.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => /[a-z]/i.test(w)).length;
    return `${name} ${fkGrade(h).grade.toFixed(1)} (${words}w)`;
  }).join(' | '));
}
const all = {};
for (const name of ['Quick', 'Clear', 'Full']) if (L[name].length) all[name] = L[name].join(' ');
console.log('whole page: ' + Object.entries(all).map(([k, v]) => `${k} ${fkGrade(v).grade.toFixed(1)}`).join(' | '));
const p = checkTopic(file, all);
console.log(p.length ? p.join('\n') : 'within limits and stepping up');
