// Shared header, footer, save status, and keyboard behavior for every page.
(function () {
    var VERSION = 'v1.25.0';
    var READING_KEY = 'scotus-reading-level';

    function relPrefix() {
        return window.location.pathname.indexOf('/cases/') !== -1 ? '../' : '';
    }

    function initDropdowns() {
        document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
            if (dropdown.getAttribute('data-chrome') === '1') return;
            dropdown.setAttribute('data-chrome', '1');
            var btn = dropdown.querySelector('.nav-dropdown-btn');
            if (!btn) return;
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
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
                return Array.prototype.slice.call(dropdown.querySelectorAll('.nav-dropdown-content a'));
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
                var list = items();
                if (!list.length) return;
                var i = list.indexOf(document.activeElement);
                if (e.target === btn) {
                    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
                    e.preventDefault();
                    setOpen(true);
                    list[e.key === 'ArrowUp' ? list.length - 1 : 0].focus();
                    return;
                }
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

    /* The current page gets aria-current="page" (shown as a 4px cream bar). Case
       pages count as Cases; pages in the Prepare menu light up Prepare. */
    function markCurrentNav() {
        var path = window.location.pathname;
        var file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        var onCase = path.indexOf('/cases/') !== -1;
        document.querySelectorAll('.site-header .header-nav > a').forEach(function (a) {
            var href = a.getAttribute('href') || '';
            var target = href.split('#')[0].split('/').pop() || (href.charAt(0) === '#' ? 'index.html' : '');
            var isCases = /#cases$/.test(href);
            var current = isCases ? (file === 'index.html' || onCase) : (target === file && !onCase);
            if (current) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });
        document.querySelectorAll('.site-header .nav-dropdown').forEach(function (dd) {
            var hit = false;
            dd.querySelectorAll('.nav-dropdown-content a').forEach(function (a) {
                var target = (a.getAttribute('href') || '').split('#')[0].split('/').pop();
                if (target === file && !onCase) { a.setAttribute('aria-current', 'page'); hit = true; }
                else a.removeAttribute('aria-current');
            });
            var btn = dd.querySelector('.nav-dropdown-btn');
            if (btn) btn.setAttribute('data-current', hit ? 'true' : 'false');
        });
    }

    function labelCompareLinks() {
        document.querySelectorAll('.nav-dropdown-content a[href*="compare.html"]').forEach(function (a) {
            if (a.getAttribute('data-nav') === 'compare' || /compare/i.test(a.textContent)) {
                a.textContent = 'Compare (debrief)';
            }
        });
    }

    function ensureCompareLink() {
        var menus = document.querySelectorAll('.nav-dropdown-content');
        menus.forEach(function (menu) {
            if (menu.querySelector('a[href*="compare.html"]')) return;
            var a = document.createElement('a');
            a.href = relPrefix() + 'compare.html';
            a.setAttribute('data-nav', 'compare');
            a.textContent = 'Compare (debrief)';
            menu.appendChild(a);
        });
    }

    function ensureLawWordsLink() {
        var menus = document.querySelectorAll('.nav-dropdown-content');
        menus.forEach(function (menu) {
            if (menu.querySelector('a[href*="resources.html#law-words"]')) return;
            var a = document.createElement('a');
            a.href = relPrefix() + 'resources.html#law-words';
            a.setAttribute('data-nav', 'law-words');
            a.textContent = 'Law words';
            var debate = menu.querySelector('a[href*="debate.html"]');
            if (debate && debate.nextSibling) menu.insertBefore(a, debate.nextSibling);
            else if (debate) menu.appendChild(a);
            else menu.appendChild(a);
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

    function addSaveHint() {
        if (document.querySelector('.save-hint')) return;
        var main = document.querySelector('main');
        if (!main) return;
        var path = window.location.pathname;
        if (!/(debate|compare|cases\/|journeys|review)/.test(path)) return;
        var p = document.createElement('p');
        p.className = 'save-hint';
        p.innerHTML = 'Work saves automatically. Sign in with your school account to keep it across computers; otherwise it stays in this browser.';
        main.insertBefore(p, main.firstChild);
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
        markCurrentNav();
        initDropdowns();
        ensureCompareLink();
        ensureLawWordsLink();
        labelCompareLinks();
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
