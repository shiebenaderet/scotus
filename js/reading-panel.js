/* Reading panel: one "Reading" button in the masthead of every page.
   Version (Quick, Clear, Full), Listen, Text size, Line spacing, Font, Contrast
   and Motion, plus the translate tip. Loaded on every page after site-chrome.js.

   Version is the site's existing reading level. It is saved by site-chrome.js
   under its old key and values (quick, simplified = Clear, standard = Full) and
   applied with window.applyReadingLevel, so every leveled block, the case-bar
   shortcut buttons, Journeys and Debate Prep keep working. The other settings are
   saved here under 'scotus:reading' and live as attributes on <html>; the small
   script in each page's <head> applies them before the first paint.

   Listen is the reader kit's (reference/reader-kit/reader-tools.js): the browser's
   own speech, one sentence per utterance, the sentence being read marked with the
   CSS Custom Highlight API (whole paragraph where the API is missing), and pause
   as a cancel that remembers the sentence. Every storage access is wrapped. */
(function () {
  'use strict';

  var root = document.documentElement;
  var KEY = 'scotus:reading';
  var ALLOWED = {
    size: ['normal', 'large', 'larger'],
    spacing: ['normal', 'wide'],
    font: ['atkinson', 'lexend', 'opendyslexic', 'verdana'],
    contrast: ['standard', 'high'],
    motion: ['system', 'reduce']
  };
  /* Panel names <-> the site's saved level names */
  var TO_LEVEL = { quick: 'quick', clear: 'simplified', full: 'standard' };
  var TO_VERSION = { quick: 'quick', simplified: 'clear', standard: 'full' };
  var NAME = { quick: 'Quick', clear: 'Clear', full: 'Full' };
  var FALLBACK = { quick: ['quick', 'simplified', 'standard'], simplified: ['simplified', 'standard'], standard: ['standard'] };
  var FONT_CSS = { lexend: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap' };

  var prefs = {};
  Object.keys(ALLOWED).forEach(function (k) {
    var v = root.getAttribute('data-' + k);
    prefs[k] = ALLOWED[k].indexOf(v) > -1 ? v : ALLOWED[k][0];
  });

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch (e) { /* private window: this visit only */ }
  }

  function currentLevel() {
    if (typeof window.getReadingLevel === 'function') return window.getReadingLevel();
    return TO_LEVEL[root.getAttribute('data-version')] || 'standard';
  }
  function currentVersion() { return TO_VERSION[currentLevel()] || 'full'; }

  function reduced() {
    return prefs.motion === 'reduce' ||
      !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* ------------------------------------------------------------ fonts */
  var loadedCss = {};
  function loadFontCss(id) {
    if (!FONT_CSS[id] || loadedCss[id]) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = FONT_CSS[id];
    document.head.appendChild(l);
    loadedCss[id] = true;
  }

  /* ------------------------------------------------------------ markup */
  var SVG_AA = '<svg class="aa" viewBox="0 0 26 20" aria-hidden="true" focusable="false"><path d="M1.5 18 7 2.5 12.5 18M3.6 12.5h6.8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="18.6" cy="13.6" r="3.9" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M22.5 8.6V18" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
  var PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';

  function radio(name, pref, value, label, style) {
    return '<label class="opt"' + (style ? ' style="font-family:' + style + '"' : '') + '><input type="radio" name="' + name +
      '" value="' + value + '" data-pref="' + pref + '">' + label + '</label>';
  }

  var PANEL_HTML =
    '<div class="rp-head"><h2 id="rp-h">Reading</h2>' +
      '<button class="btn btn-outline" type="button" id="rp-close">Close</button></div>' +
    '<div class="rp-body">' +
      '<fieldset class="rp-set" role="radiogroup" aria-labelledby="rp-ver-l">' +
        '<legend id="rp-ver-l">Version</legend>' +
        '<p class="rp-one" id="rp-one" hidden>This page has one version. Your choice still applies on case pages.</p>' +
        '<div class="opts opts-col" id="rp-ver-opts">' +
          '<label class="opt opt-ver"><input type="radio" name="p-version" value="quick" data-pref="version"><span class="opt-name">Quick</span><span class="opt-blurb">Short sentences. Key words explained.</span></label>' +
          '<label class="opt opt-ver"><input type="radio" name="p-version" value="clear" data-pref="version"><span class="opt-name">Clear</span><span class="opt-blurb">Plain words, a little more detail.</span></label>' +
          '<label class="opt opt-ver"><input type="radio" name="p-version" value="full" data-pref="version"><span class="opt-name">Full</span><span class="opt-blurb">The grade-level reading.</span></label>' +
        '</div>' +
      '</fieldset>' +
      '<section class="rp-set" aria-labelledby="rp-listen-l">' +
        '<h3 class="rp-label" id="rp-listen-l">Listen</h3>' +
        '<p class="rp-help">The computer reads this page aloud, one sentence at a time, and marks the sentence it is reading. While it reads, tap a paragraph to jump there.</p>' +
        '<div class="rp-listen"><button class="btn btn-solid" type="button" id="listen-btn" data-listen-toggle></button></div>' +
        '<p class="rp-note" id="listen-none" hidden>This browser cannot read aloud.</p>' +
      '</section>' +
      '<fieldset class="rp-set" role="radiogroup" aria-labelledby="rp-size-l"><legend id="rp-size-l">Text size</legend><div class="opts">' +
        radio('p-size', 'size', 'normal', 'Normal') + radio('p-size', 'size', 'large', 'Large') + radio('p-size', 'size', 'larger', 'Larger') +
      '</div></fieldset>' +
      '<fieldset class="rp-set" role="radiogroup" aria-labelledby="rp-sp-l"><legend id="rp-sp-l">Line spacing</legend><div class="opts">' +
        radio('p-spacing', 'spacing', 'normal', 'Normal') + radio('p-spacing', 'spacing', 'wide', 'Wide') +
      '</div></fieldset>' +
      '<fieldset class="rp-set" role="radiogroup" aria-labelledby="rp-font-l"><legend id="rp-font-l">Font</legend><div class="opts opts-col">' +
        radio('p-font', 'font', 'atkinson', 'Atkinson Hyperlegible Next', "'Atkinson Hyperlegible Next','Atkinson Hyperlegible',Verdana,sans-serif") +
        radio('p-font', 'font', 'lexend', 'Lexend', "'Lexend',system-ui,sans-serif") +
        radio('p-font', 'font', 'opendyslexic', 'OpenDyslexic', "'OpenDyslexic',Verdana,sans-serif") +
        radio('p-font', 'font', 'verdana', 'Verdana', 'Verdana,Tahoma,sans-serif') +
      '</div></fieldset>' +
      '<fieldset class="rp-set" role="radiogroup" aria-labelledby="rp-con-l"><legend id="rp-con-l">Contrast</legend><div class="opts">' +
        radio('p-contrast', 'contrast', 'standard', 'Standard') + radio('p-contrast', 'contrast', 'high', 'High') +
      '</div></fieldset>' +
      '<fieldset class="rp-set" role="radiogroup" aria-labelledby="rp-mo-l"><legend id="rp-mo-l">Motion</legend><div class="opts">' +
        radio('p-motion', 'motion', 'system', 'Follow my computer') + radio('p-motion', 'motion', 'reduce', 'Reduce motion') +
      '</div></fieldset>' +
      '<div class="rp-set"><p class="translate-tip">To read this page in another language, right-click and choose Translate to.</p></div>' +
    '</div>';

  var rb, rp, rc, player, stopBtn, toggles = [], liveBox, liveTimer;

  function build() {
    var inner = document.querySelector('.site-header .header-inner');
    if (inner && !document.getElementById('reading-btn')) {
      var tools = document.createElement('div');
      tools.className = 'site-tools';
      tools.innerHTML = '<button class="btn btn-outline btn-reading" type="button" id="reading-btn" aria-expanded="false" aria-controls="reading-panel">' +
        SVG_AA + 'Reading</button>';
      var auth = document.getElementById('auth-container');
      if (auth && auth.parentNode === inner) inner.insertBefore(tools, auth);
      else inner.appendChild(tools);
    }
    rb = document.getElementById('reading-btn');

    rp = document.createElement('div');
    rp.className = 'rp';
    rp.id = 'reading-panel';
    rp.setAttribute('role', 'dialog');
    rp.setAttribute('aria-modal', 'false');
    rp.setAttribute('aria-labelledby', 'rp-h');
    rp.hidden = true;
    rp.innerHTML = PANEL_HTML;
    document.body.appendChild(rp);
    rc = document.getElementById('rp-close');

    player = document.createElement('div');
    player.className = 'player';
    player.id = 'player';
    player.setAttribute('role', 'region');
    player.setAttribute('aria-label', 'Listen');
    player.hidden = true;
    player.innerHTML = '<span class="player-label">Listen</span>' +
      '<button class="btn btn-solid" type="button" id="player-toggle" data-listen-toggle></button>' +
      '<button class="btn btn-outline" type="button" id="player-stop">Stop</button>';
    document.body.appendChild(player);
    stopBtn = document.getElementById('player-stop');

    liveBox = document.createElement('p');
    liveBox.className = 'version-live';
    liveBox.setAttribute('role', 'status');
    liveBox.setAttribute('aria-live', 'polite');
    liveBox.hidden = true;
    document.body.appendChild(liveBox);
  }

  /* ------------------------------------------------------------ settings */
  function reflect() {
    var ver = currentVersion();
    document.querySelectorAll('input[data-pref]').forEach(function (r) {
      var k = r.getAttribute('data-pref');
      r.checked = (k === 'version' ? ver : prefs[k]) === r.value;
    });
    document.querySelectorAll('[data-set-version]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-version') === ver));
    });
  }

  function setVersion(v) {
    if (!TO_LEVEL[v]) return;
    if (typeof window.applyReadingLevel === 'function') {
      window.applyReadingLevel(TO_LEVEL[v], true);
    } else {
      try { localStorage.setItem('scotus-reading-level', TO_LEVEL[v]); } catch (e) {}
      onLevel(TO_LEVEL[v]);
    }
  }

  function setPref(key, value) {
    if (key === 'version') { setVersion(value); return; }
    if (!ALLOWED[key] || ALLOWED[key].indexOf(value) < 0 || prefs[key] === value) return;
    prefs[key] = value;
    root.setAttribute('data-' + key, value);
    save();
    reflect();
    if (key === 'font') loadFontCss(value);
  }

  /* ------------------------------------------------------------ version cue */
  var LEVELED = '.content-block, .two-sides-summary';
  function levelOf(el) {
    if (el.classList.contains('quick')) return 'quick';
    if (el.classList.contains('simplified')) return 'simplified';
    if (el.classList.contains('standard')) return 'standard';
    return null;
  }

  function pageIsLeveled() {
    if (document.querySelector('.content-block.quick, .content-block.simplified, .content-block.standard, ' +
        '.two-sides-summary.simplified, .legal-tip-copy.simplified, .legal-tip-copy.quick')) return true;
    if (document.getElementById('timeline')) return true;
    if (document.getElementById('debate-tests-box')) return true;
    return false;
  }

  /* The reading areas that get a "Quick reading" label at the top */
  function cueHosts() {
    var hosts = [];
    document.querySelectorAll('main .case-section > .container').forEach(function (c) {
      if (c.querySelector('.content-block.standard, .two-sides-summary.standard')) hosts.push(c);
    });
    var tl = document.querySelector('.timeline-container');
    if (tl && document.querySelector('#timeline .timeline-event')) hosts.push(tl);
    var recap = document.getElementById('speak-recap');
    if (recap && recap.querySelector('.content-block') && getComputedStyle(document.getElementById('debate-workspace') || recap).display !== 'none') hosts.push(recap);
    return hosts;
  }

  function shownLevelIn(host) {
    var declared = host.getAttribute('data-levels');
    if (declared) {
      var have = declared.split(/\s+/);
      return FALLBACK[currentLevel()].filter(function (l) { return have.indexOf(l) > -1; })[0] || 'standard';
    }
    var blocks = host.querySelectorAll(LEVELED);
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (!levelOf(b) || b.classList.contains('hidden')) continue;
      if (b.closest('.legal-tip-pop')) continue;
      return levelOf(b);
    }
    return currentLevel();
  }

  function updateCues() {
    var chosen = currentLevel();
    var hosts = cueHosts();
    document.querySelectorAll('.version-cue').forEach(function (c) {
      if (hosts.indexOf(c.parentNode) < 0) c.parentNode.removeChild(c);
    });
    hosts.forEach(function (host) {
      var cue = host.querySelector(':scope > .version-cue');
      if (!cue) {
        cue = document.createElement('p');
        cue.className = 'version-cue';
        cue.setAttribute('data-no-listen', '');
        var head = host.querySelector(':scope > .section-header');
        if (head && head.nextSibling) host.insertBefore(cue, head.nextSibling);
        else if (head) host.appendChild(cue);
        else host.insertBefore(cue, host.firstChild);
      }
      var shown = shownLevelIn(host);
      var text = '<span class="cue-name">' + NAME[TO_VERSION[shown]] + ' reading</span>';
      if (shown !== chosen) {
        text += '<span>This part has no ' + NAME[TO_VERSION[chosen]] + ' version yet.</span>';
      }
      if (cue.innerHTML !== text) cue.innerHTML = text;
    });
  }

  function announce(level) {
    if (!liveBox) return;
    clearTimeout(liveTimer);
    liveBox.hidden = false;
    liveBox.textContent = 'Now showing ' + NAME[TO_VERSION[level]];
    liveTimer = setTimeout(function () { liveBox.hidden = true; liveBox.textContent = ''; }, 2600);
  }

  var lastLevel = TO_LEVEL[root.getAttribute('data-version')] || null;
  function onLevel(level) {
    if (!level) level = currentLevel();
    root.setAttribute('data-version', TO_VERSION[level] || 'full');
    root.classList.add('levels-ready');
    reflect();
    updateCues();
    if (lastLevel && level !== lastLevel) {
      stopListening();
      if (pageIsLeveled()) announce(level);
    }
    lastLevel = level;
  }

  /* ------------------------------------------------------------ panel */
  function openPanel() {
    var one = document.getElementById('rp-one');
    /* The home page's chooser explains the setting itself, so it needs no note */
    if (one) one.hidden = pageIsLeveled() || !!document.querySelector('.versions input[data-pref="version"]');
    rp.hidden = false;
    rb.setAttribute('aria-expanded', 'true');
    loadFontCss('lexend'); /* the font choices preview in their own face */
    var first = rp.querySelector('input[name="p-version"]:checked') || rc;
    first.focus();
  }
  function closePanel(returnFocus) {
    if (rp.hidden) return;
    rp.hidden = true;
    rb.setAttribute('aria-expanded', 'false');
    if (returnFocus !== false) rb.focus();
  }

  /* ------------------------------------------------------------ listen */
  var synth = window.speechSynthesis;
  var HAS_HL = !!(window.CSS && CSS.highlights && window.Highlight);
  var items = [], idx = 0, playing = false, token = 0, markedEl = null, voice = null;
  var BLOCKS = 'h1, h2, h3, h4, h5, p, li, dt, dd, td, blockquote, figcaption, .person-description, .source-excerpt, .card-content, .argument-evidence';
  var SKIP = '.site-header, footer, .site-footer, nav, .rp, .player, .version-live, .version-cue, .legal-tip-pop, button, select, textarea, label, ' +
    '.save-hint, .save-status, .activity-buttons, .case-header .reading-toggle-inline, [data-no-listen], [aria-hidden="true"], .skip-link, .ev-drawer, .case-info-float, script, style';

  function pickVoice() {
    if (!synth) return;
    var vs = synth.getVoices(), best = null, score = -1;
    for (var i = 0; i < vs.length; i++) {
      var v = vs[i], s = 0;
      if (!/^en/i.test(v.lang)) continue;
      if (/en[-_]US/i.test(v.lang)) s += 2;
      if (v.localService) s += 1;
      if (/natural|google|samantha|aria|jenny/i.test(v.name)) s += 1;
      if (s > score) { score = s; best = v; }
    }
    voice = best;
  }
  if (synth) {
    pickVoice();
    if (synth.addEventListener) synth.addEventListener('voiceschanged', pickVoice);
  }

  function isVisible(el) { return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length); }

  /* The text nodes of a block that a reader can actually see (no hidden pop-ups) */
  function textNodes(el) {
    var out = [];
    var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest('.legal-tip-pop, [hidden], script, style')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = tw.nextNode())) out.push(n);
    return out;
  }
  function textOf(el) { return textNodes(el).map(function (n) { return n.nodeValue; }).join(''); }

  function split(text) {
    var res = [];
    if (window.Intl && Intl.Segmenter) {
      var it = new Intl.Segmenter('en', { granularity: 'sentence' }).segment(text)[Symbol.iterator](), n;
      while (!(n = it.next()).done) {
        var a = n.value.index, b = a + n.value.segment.length;
        if (text.slice(a, b).replace(/\s/g, '')) res.push([a, b]);
      }
      return res;
    }
    var re = /[^.!?]+[.!?]*["”’)]*\s*/g, m;
    while ((m = re.exec(text))) {
      if (m[0].replace(/\s/g, '')) res.push([m.index, m.index + m[0].length]);
      if (!m[0]) re.lastIndex++;
    }
    return res.length ? res : [[0, text.length]];
  }

  function listenRoot() {
    var active = document.querySelector('.tabbed-content .case-section.active-tab');
    if (active) return [active];
    var marked = document.querySelectorAll('[data-listen]');
    if (marked.length) return Array.prototype.slice.call(marked);
    var main = document.querySelector('main');
    return main ? [main] : [];
  }

  function collect() {
    var out = [];
    listenRoot().forEach(function (r) {
      var els = r.querySelectorAll(BLOCKS);
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el.closest(SKIP) || !isVisible(el)) continue;
        if (el.querySelector(BLOCKS)) {
          /* a block holding other blocks: read its own loose text only if it has no child blocks */
          var kids = el.querySelectorAll(BLOCKS);
          var hasVisibleKid = false;
          for (var k = 0; k < kids.length; k++) if (!kids[k].closest(SKIP) && isVisible(kids[k])) { hasVisibleKid = true; break; }
          if (hasVisibleKid) continue;
        }
        var text = textOf(el);
        if (!text.replace(/\s/g, '')) continue;
        split(text).forEach(function (rg) {
          var said = text.slice(rg[0], rg[1]).replace(/\s+/g, ' ').trim();
          if (said) out.push({ el: el, start: rg[0], end: rg[1], text: said });
        });
      }
    });
    return out;
  }

  function rangeFor(el, start, end) {
    var range = document.createRange();
    var nodes = textNodes(el), pos = 0, set = false;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i], len = node.nodeValue.length;
      if (!set && start < pos + len) { range.setStart(node, start - pos); set = true; }
      if (set && end <= pos + len) { range.setEnd(node, end - pos); return range; }
      pos += len;
    }
    if (set) range.setEndAfter(el.lastChild || el); else range.selectNodeContents(el);
    return range;
  }
  function clearMark() {
    if (HAS_HL) CSS.highlights.delete('rd-sent');
    if (markedEl) { markedEl.classList.remove('rd-cur'); markedEl = null; }
  }
  function mark(item) {
    clearMark();
    if (HAS_HL) CSS.highlights.set('rd-sent', new Highlight(rangeFor(item.el, item.start, item.end)));
    else { item.el.classList.add('rd-cur'); markedEl = item.el; }
    var r = item.el.getBoundingClientRect(), vh = window.innerHeight || root.clientHeight;
    if (r.top < 130 || r.bottom > vh - 110) item.el.scrollIntoView({ block: 'center', behavior: reduced() ? 'auto' : 'smooth' });
  }
  function render() {
    var active = player && !player.hidden;
    var word = playing ? 'Pause' : (active ? 'Resume' : 'Listen');
    toggles.forEach(function (b) { b.innerHTML = (playing ? PAUSE : PLAY) + '<span>' + word + '</span>'; });
    root.classList.toggle('is-listening', !!active);
  }
  function speakFrom(i) {
    token++;
    var my = token;
    synth.cancel();
    if (i >= items.length) { stopListening(); return; }
    idx = i; playing = true;
    mark(items[i]);
    render();
    var u = new SpeechSynthesisUtterance(items[i].text);
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : 'en-US';
    u.onend = function () { if (my === token && playing) speakFrom(idx + 1); };
    u.onerror = function (e) {
      if (my !== token) return;
      if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
      speakFrom(idx + 1);
    };
    synth.speak(u);
  }
  function pauseListening() { playing = false; token++; if (synth) synth.cancel(); render(); }
  function stopListening() {
    if (!synth || !player) return;
    pauseListening(); clearMark(); idx = 0; items = [];
    player.hidden = true; render();
  }
  function toggleListening() {
    if (!synth) return;
    if (playing) { pauseListening(); return; }
    if (!items.length) items = collect();
    if (!items.length) return;
    player.hidden = false;
    speakFrom(idx);
  }

  /* ------------------------------------------------------------ wiring */
  function init() {
    build();
    toggles = Array.prototype.slice.call(document.querySelectorAll('[data-listen-toggle]'));

    document.addEventListener('change', function (e) {
      var r = e.target;
      if (r && r.matches && r.matches('input[data-pref]') && r.checked) setPref(r.getAttribute('data-pref'), r.value);
    });
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-set-version]');
      if (b) setVersion(b.getAttribute('data-set-version'));
    });

    rb.addEventListener('click', function () { if (rp.hidden) openPanel(); else closePanel(); });
    rc.addEventListener('click', function () { closePanel(); });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || rp.hidden) return;
      /* Esc inside the panel, or anywhere when no other pop-up claims it */
      e.preventDefault();
      closePanel();
    });

    if (!synth) {
      toggles.forEach(function (b) { b.disabled = true; });
      var none = document.getElementById('listen-none');
      if (none) none.hidden = false;
    } else {
      toggles.forEach(function (b) { b.addEventListener('click', toggleListening); });
      stopBtn.addEventListener('click', function () { stopListening(); rb.focus(); });
      window.addEventListener('pagehide', function () { synth.cancel(); });
      /* While the player is open, a click on a paragraph moves the reading there */
      document.addEventListener('click', function (e) {
        if (player.hidden) return;
        if (e.target.closest('a, button, select, textarea, input, label, .rp, .player')) return;
        if (!items.length) return;
        for (var i = 0; i < items.length; i++) {
          if (items[i].el === e.target || items[i].el.contains(e.target)) { speakFrom(i); return; }
        }
      });
    }

    document.addEventListener('scotus:reading-level', function (e) { onLevel(e.detail); });
    /* Content that arrives later (Journeys timeline, Debate Prep) gets its cue too */
    var main = document.querySelector('main');
    if (main && window.MutationObserver) {
      var pending = false;
      new MutationObserver(function () {
        if (pending) return;
        pending = true;
        requestAnimationFrame(function () { pending = false; updateCues(); });
      }).observe(main, { childList: true, subtree: true });
    }

    loadFontCss(prefs.font);
    onLevel(currentLevel());
    render();
  }

  window.scotusReading = {
    open: function () { openPanel(); },
    collect: function () { return collect(); },
    setVersion: setVersion,
    isLeveled: pageIsLeveled
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
