// Shared header, footer, save status, and keyboard behavior for every page.
(function () {
    var VERSION = 'v1.20.0';

    function relPrefix() {
        return window.location.pathname.indexOf('/cases/') !== -1 ? '../' : '';
    }

    function initHamburger() {
        var inner = document.querySelector('.site-header .header-inner');
        var nav = document.querySelector('.site-header .header-nav');
        if (!inner || !nav || document.querySelector('.nav-toggle')) return;
        var btn = document.createElement('button');
        btn.className = 'nav-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Open menu');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
        inner.insertBefore(btn, nav);

        function setOpen(open) {
            nav.classList.toggle('open', open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        }

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            setOpen(!nav.classList.contains('open'));
        });
        document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && e.target !== btn) setOpen(false);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                setOpen(false);
                btn.focus();
            }
        });
        nav.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { setOpen(false); });
        });
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

    function unifyFooter() {
        document.querySelectorAll('.site-version').forEach(function (el) {
            el.textContent = VERSION;
        });
        document.querySelectorAll('footer p').forEach(function (p) {
            if (/SCOTUS Debate Project/.test(p.textContent) && !p.querySelector('a') && !p.classList.contains('site-version')) {
                p.textContent = '© 2026 SCOTUS Debate Project · Educational use only';
            }
        });
        document.querySelectorAll('.logo-icon').forEach(function (el) {
            el.textContent = '⚖';
            el.setAttribute('aria-hidden', 'true');
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

    function init() {
        initHamburger();
        initDropdowns();
        ensureCompareLink();
        labelCompareLinks();
        unifyFooter();
        ensureSaveChip();
        addSaveHint();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
