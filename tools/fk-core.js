/* ---- fk-core.js, copied unchanged ------------------------------------------ */
/* Shared reading-level measure (see READING-LEVELS.md). Copy this block into a
   repo's check-levels script unchanged so every site measures the same way. */
const LEVEL_NAMES = ['Quick', 'Clear', 'Full', 'Deep'];
const LEVEL_BLURBS = {
  Quick: 'Short sentences. Key words explained.',
  Clear: 'Plain words, a little more detail.',
  Full: 'The grade-level reading.',
  Deep: 'Adds real quotes from the time and what historians argue.'
};
const LEVEL_LIMITS = { Quick: 5.0, Clear: 7.5, Full: 10.5 }; // Deep: must beat Full

function syllables(word) {
  let w = String(word).toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

function fkGrade(html) {
  const text = String(html || '').replace(/<[^>]+>/g, ' ').replace(/\([^)]*\)/g, ' ');
  const sentences = text.split(/[.!?]+["”’')]*(?=\s|$)/).filter(s => s.trim().split(/\s+/).length > 2);
  const words = text.split(/\s+/).filter(w => /[a-z]/i.test(w));
  if (!sentences.length || !words.length) return { grade: 0, wordsPerSentence: 0 };
  const syl = words.reduce((a, w) => a + syllables(w), 0);
  return {
    grade: 0.39 * words.length / sentences.length + 11.8 * syl / words.length - 15.59,
    wordsPerSentence: words.length / sentences.length
  };
}

/* levels: { Quick: html, Clear: html, Full: html, Deep: html } (any may be missing).
   Returns a list of problems for one topic. */
function checkTopic(topic, levels) {
  const problems = [];
  const g = {};
  LEVEL_NAMES.forEach(n => { if (levels[n]) g[n] = fkGrade(levels[n]).grade; });
  Object.keys(LEVEL_LIMITS).forEach(n => {
    if (g[n] != null && g[n] > LEVEL_LIMITS[n]) problems.push(`${topic}: ${n} measures ${g[n].toFixed(1)} (limit ${LEVEL_LIMITS[n]})`);
  });
  for (let i = 1; i < LEVEL_NAMES.length; i++) {
    const a = LEVEL_NAMES[i - 1], b = LEVEL_NAMES[i];
    if (g[a] != null && g[b] != null && !(g[b] > g[a])) problems.push(`${topic}: ${b} (${g[b].toFixed(1)}) does not measure harder than ${a} (${g[a].toFixed(1)})`);
  }
  return problems;
}

module.exports = { LEVEL_NAMES, LEVEL_BLURBS, LEVEL_LIMITS, syllables, fkGrade, checkTopic };
/* ---- end of fk-core.js ------------------------------------------------------ */
