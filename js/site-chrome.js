// Shared header, footer, save status, and keyboard behavior for every page.
(function () {
    var VERSION = 'v1.26.0';
    var READING_KEY = 'scotus-reading-level';

    function initDropdowns() {
        document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
            if (dropdown.getAttribute('data-chrome') === '1') return;
            dropdown.setAttribute('data-chrome', '1');
            var btn = dropdown.querySelector('.nav-dropdown-btn');
            if (!btn) return;
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                // Only one menu open at a time
                document.querySelectorAll('.nav-dropdown.open').forEach(function (other) {
                    if (other === dropdown) return;
                    other.classList.remove('open');
                    var b = other.querySelector('.nav-dropdown-btn');
                    if (b) b.setAttribute('aria-expanded', 'false');
                });
                var open = dropdown.classList.toggle('open');
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
            document.addEventListener('click', function (e) {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('open');
                    btn.setAttribute('aria-expanded', 'false');
                }
            });
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                    btn.setAttribute('aria-expanded', 'false');
                    btn.focus();
                }
            });
            function setOpen(open) {
                dropdown.classList.toggle('open', open);
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            }
            function items() {
                return Array.prototype.slice.call(dropdown.querySelectorAll('.nav-dropdown-content a, .nav-dropdown-content button')).filter(function (el) { return el.offsetParent !== null; });
            }
            // Close when keyboard focus moves somewhere outside the menu
            dropdown.addEventListener('focusout', function (e) {
                var next = e.relatedTarget;
                if (next && dropdown.contains(next)) return;
                if (!next) return; // focus went to the page itself (e.g. a click); the click handler decides
                setOpen(false);
            });
            // Arrow keys: from the button into the links, and between the links
            dropdown.addEventListener('keydown', function (e) {
                if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Home' && e.key !== 'End') return;
                if (e.target === btn) {
                    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
                    e.preventDefault();
                    setOpen(true); // open first: items() skips hidden ones
                    var all = items();
                    if (all.length) all[e.key === 'ArrowUp' ? all.length - 1 : 0].focus();
                    return;
                }
                var list = items();
                var i = list.indexOf(document.activeElement);
                if (i === -1) return;
                e.preventDefault();
                if (e.key === 'Home') i = 0;
                else if (e.key === 'End') i = list.length - 1;
                else if (e.key === 'ArrowDown') i = (i + 1) % list.length;
                else i = (i - 1 + list.length) % list.length;
                list[i].focus();
            });
        });
    }

    /* The current page gets aria-current="page" (a tinted row in the menu) and
       its menu button gets the 4px cream bar. The home page and every case page
       count as Cases; pages in the Prepare menu light up Prepare. */
    function markCurrentNav() {
        var here = window.location.pathname.replace(/index\.html$/, '');
        var onHome = /\/$/.test(here);
        document.querySelectorAll('.site-header .nav-dropdown').forEach(function (dd) {
            var hit = false;
            dd.querySelectorAll('.nav-dropdown-content a').forEach(function (a) {
                var cur = !a.hash && a.pathname.replace(/index\.html$/, '') === here;
                if (cur) { a.setAttribute('aria-current', 'page'); hit = true; }
                else a.removeAttribute('aria-current');
            });
            if (dd.getAttribute('data-menu') === 'cases' && onHome) hit = true;
            var btn = dd.querySelector('.nav-dropdown-btn');
            if (btn) btn.setAttribute('data-current', hit ? 'true' : 'false');
        });
    }

    function unifyFooter() {
        document.querySelectorAll('.site-version').forEach(function (el) {
            el.textContent = VERSION;
        });
        document.querySelectorAll('footer p').forEach(function (p) {
            if (/SCOTUS Debate Project/.test(p.textContent) && !p.querySelector('a') && !p.classList.contains('site-version')) {
                p.textContent = '© 2026 SCOTUS Debate Project · Educational use only';
            }
        });
        /* Square = petitioner, diamond = respondent: the site mark */
        document.querySelectorAll('.logo-icon').forEach(function (el) {
            var mark = document.createElement('span');
            mark.className = 'logo-mark';
            mark.setAttribute('aria-hidden', 'true');
            mark.innerHTML = '<svg class="mk mk-pet" viewBox="0 0 16 16" focusable="false"><rect x="1" y="1" width="14" height="14"/></svg>' +
                '<svg class="mk mk-res" viewBox="0 0 16 16" focusable="false"><path d="M8 0 16 8 8 16 0 8z"/></svg>';
            el.parentNode.replaceChild(mark, el);
        });
    }

    function ensureSaveChip() {
        if (document.getElementById('save-status')) return;
        var chip = document.createElement('div');
        chip.id = 'save-status';
        chip.className = 'save-status';
        chip.hidden = true;
        chip.setAttribute('role', 'status');
        document.body.appendChild(chip);
    }

    var saveTimer;
    window.showSaveStatus = function (ok) {
        var chip = document.getElementById('save-status');
        if (!chip) return;
        var signedIn = typeof currentUser !== 'undefined' && currentUser;
        chip.hidden = false;
        chip.classList.add('visible');
        chip.textContent = ok === false
            ? 'Could not save'
            : (signedIn ? 'Saved to your account' : 'Saved on this device');
        clearTimeout(saveTimer);
        saveTimer = setTimeout(function () {
            chip.classList.remove('visible');
        }, 1800);
    };

    /* Shown only to signed-out readers (theme.css hides it under html.signed-in),
       and only until they close it once. */
    var SAVE_HINT_KEY = 'scotus-save-hint-closed';
    function addSaveHint() {
        if (document.querySelector('.save-hint')) return;
        try { if (localStorage.getItem(SAVE_HINT_KEY)) return; } catch (e) {}
        var main = document.querySelector('main');
        if (!main) return;
        var path = window.location.pathname;
        if (!/(debate|compare|cases\/|journeys|review)/.test(path)) return;
        var p = document.createElement('p');
        p.className = 'save-hint';
        p.innerHTML = '<span>Your work saves in this browser only. To move it to another computer, open My Work and choose Download Save File.</span>' +
            '<button type="button" class="save-hint-close" aria-label="Close this note">\u00d7</button>';
        p.querySelector('button').addEventListener('click', function () {
            p.remove();
            try { localStorage.setItem(SAVE_HINT_KEY, '1'); } catch (e) {}
        });
        main.insertBefore(p, main.firstChild);
    }

    /* My Work menu (the header's last button): the save file, and sign-in for
       teachers (firebase-init.js fills #auth-slot).
          Students cannot sign in (the district blocks Google sign-in for student
          accounts), so their work lives only in this browser. A save file copies
          every 'scotus-' key as its raw saved text, and opening one writes those keys
          back, so each page reads its work exactly as it saved it. Settings that
          belong to this computer are left out. */
    var SAVE_APP = 'scotus-debate-project';
    var NOT_WORK = ['scotus-reading-level', 'scotus-save-hint-closed'];

    function isWorkKey(k) {
        return typeof k === 'string' && k.indexOf('scotus-') === 0 && NOT_WORK.indexOf(k) < 0;
    }

    function workNote(text) {
        var n = document.getElementById('work-note');
        if (!n) return;
        n.textContent = text;
        n.hidden = !text;
    }

    function two(n) { return (n < 10 ? '0' : '') + n; }

    function downloadWork() {
        var work = {};
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var k = localStorage.key(i);
                if (isWorkKey(k)) work[k] = localStorage.getItem(k);
            }
        } catch (e) {
            workNote('This browser is not saving work, so there is nothing to download.');
            return;
        }
        var count = Object.keys(work).length;
        if (!count) { workNote('There is no saved work in this browser yet.'); return; }

        var d = new Date();
        var stamp = d.getFullYear() + '-' + two(d.getMonth() + 1) + '-' + two(d.getDate()) + '-' + two(d.getHours()) + two(d.getMinutes());
        var file = { app: SAVE_APP, format: 1, saved: d.toISOString(), work: work };
        var url = URL.createObjectURL(new Blob([JSON.stringify(file, null, 1)], { type: 'application/json' }));
        var a = document.createElement('a');
        a.href = url;
        a.download = 'scotus-work-' + stamp + '.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        workNote('Downloaded ' + a.download + '.');
    }

    function openWork(fileObj) {
        if (!fileObj) return;
        workNote('');
        var reader = new FileReader();
        reader.onerror = function () { workNote('That file could not be read.'); };
        reader.onload = function () {
            var data;
            try { data = JSON.parse(reader.result); } catch (e) { data = null; }
            if (!data || data.app !== SAVE_APP || !data.work || typeof data.work !== 'object') {
                workNote('That is not a save file from this site. Nothing was changed.');
                return;
            }
            var keys = Object.keys(data.work).filter(function (k) { return isWorkKey(k) && typeof data.work[k] === 'string'; });
            if (!keys.length) { workNote('That save file has no work in it. Nothing was changed.'); return; }
            if (!window.confirm('This adds the work in the file to this computer. Work with the same name will be replaced. Continue?')) return;

            var pushes = [];
            try {
                keys.forEach(function (k) {
                    localStorage.setItem(k, data.work[k]);
                    /* Signed in: the account copy wins when a page loads, so update it too */
                    if (typeof currentUser !== 'undefined' && currentUser && typeof saveToCloud === 'function') {
                        var v;
                        try { v = JSON.parse(data.work[k]); } catch (e) { v = data.work[k]; }
                        pushes.push(saveToCloud(k, v));
                    }
                });
            } catch (e) {
                workNote('This browser is not saving work, so the file could not be opened here.');
                return;
            }
            workNote('Opened your save file. The page will reload.');
            Promise.all(pushes).then(function () {
                setTimeout(function () { location.reload(); }, 1200);
            });
        };
        reader.readAsText(fileObj);
    }

    function buildMyWork() {
        var slot = document.getElementById('auth-container');
        if (!slot || document.getElementById('mywork')) return;
        var wrap = document.createElement('div');
        wrap.className = 'nav-dropdown mywork';
        wrap.id = 'mywork';
        wrap.innerHTML =
            '<button class="nav-dropdown-btn" type="button" aria-expanded="false" aria-haspopup="true">My Work <span class="dropdown-arrow">&#9662;</span></button>' +
            '<div class="nav-dropdown-content">' +
                '<p class="menu-note" id="mywork-who">Your work saves in this browser.</p>' +
                '<button type="button" class="menu-item" id="work-download">Download Save File</button>' +
                '<button type="button" class="menu-item" id="work-open">Open Save File</button>' +
                '<input type="file" id="work-file" accept=".json,application/json" hidden>' +
                '<p class="menu-note" id="work-note" role="status" aria-live="polite" hidden></p>' +
                '<div class="menu-account" id="auth-slot">' +
                    '<button type="button" class="menu-item" onclick="signInWithGoogle()">Teacher Sign In</button>' +
                '</div>' +
            '</div>';
        slot.innerHTML = '';
        slot.appendChild(wrap);
        var workFile = document.getElementById('work-file');
        document.getElementById('work-download').addEventListener('click', downloadWork);
        document.getElementById('work-open').addEventListener('click', function () { workFile.value = ''; workFile.click(); });
        workFile.addEventListener('change', function () { openWork(workFile.files[0]); });
    }

    /* Reading versions (READING-LEVELS.md). The CSS classes and the saved value
       keep their original names so saved choices and existing markup still work:
         quick       -> "Quick"  (new; written for each case as it is rebuilt)
         simplified  -> "Clear"  (the old Simplified text measures in the Clear band)
         standard    -> "Full"
       A block with no version at the chosen level shows the nearest one that
       exists, so a page that has not been rebuilt yet still shows real text. */
    var LEVELS = ['quick', 'simplified', 'standard'];
    var LEVEL_LABEL = { quick: 'Quick', simplified: 'Clear', standard: 'Full' };
    var FALLBACK = { quick: ['quick', 'simplified', 'standard'],
                     simplified: ['simplified', 'standard'],
                     standard: ['standard'] };
    var LEVELED = '.content-block, .two-sides-summary, .legal-tip-copy';

    function getReadingLevel() {
        try {
            var v = localStorage.getItem(READING_KEY);
            if (LEVELS.indexOf(v) !== -1) return v;
        } catch (e) {}
        /* No storage (private window): use what the <head> script set, e.g. from ?v= */
        var fromPage = { quick: 'quick', clear: 'simplified', full: 'standard' }[document.documentElement.getAttribute('data-version')];
        return fromPage || 'standard';
    }

    function levelOf(el) {
        for (var i = 0; i < LEVELS.length; i++) if (el.classList.contains(LEVELS[i])) return LEVELS[i];
        return null;
    }

    /* Every case now has Quick, Clear and Full, so every page shows the three
       named buttons. A page part with no Quick text falls back to Clear (see
       FALLBACK), so the label never promises text that is not there. */
    function upgradeButtons() {
        document.querySelectorAll('.reading-toggle-inline').forEach(function (wrap) {
            var lab = wrap.querySelector('.toggle-label');
            if (lab) { lab.textContent = 'Version'; lab.id = lab.id || 'version-label'; }
            wrap.setAttribute('role', 'group');
            if (lab) wrap.setAttribute('aria-labelledby', lab.id);
        });
        document.querySelectorAll('.level-btn[data-level="standard"]').forEach(function (std) {
            var wrap = std.parentNode;
            if (wrap.getAttribute('data-three') === '1') return;
            if (wrap.querySelector('.level-btn[data-level="quick"]')) return;
            var simp = wrap.querySelector('.level-btn[data-level="simplified"]');
            if (!simp) return;
            wrap.setAttribute('data-three', '1');
            var quick = std.cloneNode(false);
            quick.setAttribute('data-level', 'quick');
            quick.removeAttribute('data-chrome-level');
            quick.classList.remove('active');
            [quick, simp, std].forEach(function (btn) {
                wrap.appendChild(btn);
                btn.textContent = LEVEL_LABEL[btn.getAttribute('data-level')];
            });
        });
    }

    function applyReadingLevel(level, persist) {
        if (LEVELS.indexOf(level) === -1) level = 'standard';
        if (persist !== false) {
            try { localStorage.setItem(READING_KEY, level); } catch (e) {}
        }
        var btnLevels = Array.prototype.map.call(document.querySelectorAll('.level-btn'), function (b) {
            return b.getAttribute('data-level');
        });
        var lit = FALLBACK[level].filter(function (l) { return btnLevels.indexOf(l) !== -1; })[0];
        document.querySelectorAll('.level-btn').forEach(function (btn) {
            var on = btn.getAttribute('data-level') === lit;
            btn.classList.toggle('active', on);
            btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        /* Siblings with level classes form one set; show the best match in each. */
        var seen = [];
        document.querySelectorAll(LEVELED).forEach(function (block) {
            var parent = block.parentNode;
            if (seen.indexOf(parent) !== -1) return;
            seen.push(parent);
            var set = Array.prototype.filter.call(parent.children, function (c) {
                return c.matches(LEVELED) && levelOf(c);
            });
            var have = set.map(levelOf);
            var show = FALLBACK[level].filter(function (l) { return have.indexOf(l) !== -1; })[0];
            set.forEach(function (c) {
                var match = levelOf(c) === show;
                c.classList.toggle('hidden', !match);
                c.classList.toggle('active', match);
            });
        });
        document.body.classList.toggle('reading-simplified', level !== 'standard');
        document.body.classList.toggle('reading-quick', level === 'quick');
        /* The <head> script hides the other versions before first paint; from here on
           the classes above decide, so that early CSS steps aside. */
        document.documentElement.setAttribute('data-version', { quick: 'quick', simplified: 'clear', standard: 'full' }[level]);
        document.documentElement.classList.add('levels-ready');
        document.dispatchEvent(new CustomEvent('scotus:reading-level', { detail: level }));
    }

    function initReadingLevel() {
        upgradeButtons();
        document.querySelectorAll('.level-btn').forEach(function (btn) {
            if (btn.getAttribute('data-chrome-level') === '1') return;
            btn.setAttribute('data-chrome-level', '1');
            btn.addEventListener('click', function () {
                applyReadingLevel(btn.getAttribute('data-level'), true);
            });
        });
        applyReadingLevel(getReadingLevel(), false);
    }

    window.getReadingLevel = getReadingLevel;
    window.applyReadingLevel = applyReadingLevel;

    function init() {
        buildMyWork();
        markCurrentNav();
        initDropdowns();
        unifyFooter();
        ensureSaveChip();
        addSaveHint();
        initReadingLevel();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
