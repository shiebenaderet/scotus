// Helper function to check if user is a teacher (staff)
function isTeacher(user) {
    return user && user.email && user.email.endsWith('@edmonds.wednet.edu');
}

// Global vault unlock function (will be set up after DOM loads)
var globalUnlockVault = null;
document.addEventListener('DOMContentLoaded', function() {
    // Reading level is handled in site-chrome.js and persists across pages.

    // ============================================
    // TABBED CASE INTERFACE
    // ============================================
    const tabbedContent = document.querySelector('.tabbed-content');
    const caseTabs = document.querySelectorAll('.case-nav.tabbed .case-tab');

    if (tabbedContent && caseTabs.length > 0) {
        // Get case identifier for storage key
        const currentPath = window.location.pathname;
        const casePageFile = currentPath.substring(currentPath.lastIndexOf('/') + 1).replace('.html', '') || 'case';
        const progressKey = 'scotus-progress-' + casePageFile;

        // Load progress from localStorage
        function loadCaseProgress() {
            try {
                const saved = localStorage.getItem(progressKey);
                if (saved) {
                    return JSON.parse(saved);
                }
            } catch(e) {}
            return { completed: [], lastTab: 'background' };
        }

        // Save progress to localStorage
        function saveCaseProgress(progress) {
            localStorage.setItem(progressKey, JSON.stringify(progress));
            if (typeof saveToCloud === 'function') {
                saveToCloud(progressKey, progress);
            }
        }

        // Update tab completion indicators
        function updateTabCompletionUI(progress) {
            caseTabs.forEach(tab => {
                const tabId = tab.getAttribute('data-tab');
                if (progress.completed.includes(tabId)) {
                    tab.classList.add('completed');
                } else {
                    tab.classList.remove('completed');
                }
            });
        }

        // Switch to a specific tab
        function switchToTab(tabId) {
            const progress = loadCaseProgress();

            // Update tab active states
            caseTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('data-tab') === tabId) {
                    tab.classList.add('active');
                }
            });

            // Update section visibility
            document.querySelectorAll('.tabbed-content .case-section').forEach(section => {
                section.classList.remove('active-tab');
                if (section.id === tabId || (tabId === 'today' && section.id === 'resources')) {
                    section.classList.add('active-tab');
                }
            });

            // Map activity to the section id (activity -> activity)
            // Handle special cases where data-tab might differ from section id
            const sectionId = tabId === 'activity' ? 'activity' : tabId;
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active-tab');
            }

            // Save last tab
            progress.lastTab = tabId;
            saveCaseProgress(progress);

            if (history.replaceState) {
                history.replaceState(null, '', '#' + tabId);
            } else {
                window.location.hash = tabId;
            }

            document.querySelectorAll('.case-progress a[data-step]').forEach(function (a) {
                a.classList.toggle('current', a.getAttribute('data-step') === tabId);
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (tabId === 'evidence-vault') {
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        if (typeof window.syncFlipCardHeights === 'function') {
                            window.syncFlipCardHeights();
                        }
                    });
                });
            }
        }

        // Mark current section as complete
        function markSectionComplete(tabId) {
            const progress = loadCaseProgress();
            if (!progress.completed.includes(tabId)) {
                progress.completed.push(tabId);
                saveCaseProgress(progress);
                updateTabCompletionUI(progress);
            }
        }

        // Expose globally for use by other scripts
        window.markSectionComplete = markSectionComplete;
        window.switchToTab = switchToTab;

        // Set up tab click handlers
        caseTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');

                // Check if tab is locked (e.g., evidence vault)
                if (this.classList.contains('locked')) {
                    return;
                }

                switchToTab(tabId);
            });
        });

        // Load initial state
        const progress = loadCaseProgress();
        updateTabCompletionUI(progress);

        // If returning to page, restore last tab (or use URL hash)
        const hash = window.location.hash.replace('#', '');
        if (hash && document.getElementById(hash)) {
            switchToTab(hash);
        } else if (progress.lastTab && document.getElementById(progress.lastTab)) {
            switchToTab(progress.lastTab);
        }

        window.addEventListener('hashchange', function () {
            var next = window.location.hash.replace('#', '');
            if (next && document.getElementById(next)) switchToTab(next);
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const id = href && href.length > 1 ? href.slice(1) : '';
            if (id && typeof window.switchToTab === 'function' && document.getElementById(id) && document.querySelector('.tabbed-content')) {
                e.preventDefault();
                window.switchToTab(id);
                return;
            }
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation (if present)
    const nav = document.querySelector('.main-nav');
    if (nav) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            } else if (currentScroll > lastScroll) {
                nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }

            lastScroll = currentScroll;
        });
    }

    // Evidence Vault unlock logic (independent of sorting table)
    const pagePath = window.location.pathname;
    const pageFile = pagePath.substring(pagePath.lastIndexOf('/') + 1).replace('.html', '');
    const vaultSaveKey = 'scotus-vault-' + pageFile;
    const vaultLocked = document.getElementById('vault-locked');
    const vaultContent = document.getElementById('vault-content');
    const vaultNavLink = document.getElementById('vault-nav');

    function unlockVault() {
        if (vaultLocked) vaultLocked.style.display = 'none';
        if (vaultContent) vaultContent.classList.add('unlocked');
        if (vaultNavLink) vaultNavLink.classList.add('unlocked');
        // Recalculate flip card heights now that vault is visible
        setTimeout(function() {
            if (typeof window.syncFlipCardHeights === 'function') window.syncFlipCardHeights();
        }, 50);
    }

    // Expose unlockVault globally for teacher auto-unlock
    globalUnlockVault = unlockVault;

    function saveVaultUnlock() {
        localStorage.setItem(vaultSaveKey, 'true');
        if (typeof saveToCloud === 'function') saveToCloud(vaultSaveKey, true);
    }

    // Check if vault was previously unlocked for THIS case only
    function checkVaultStatus() {
        var stored = localStorage.getItem(vaultSaveKey);
        if (stored === 'true') {
            unlockVault();
            return;
        }
        // If not in localStorage, check cloud
        if (typeof loadFromCloud === 'function') {
            loadFromCloud(vaultSaveKey).then(function(val) {
                if (val === true || val === 'true') {
                    unlockVault();
                }
            });
        }
    }

    // Only check if vault elements exist on this page
    if (vaultLocked || vaultContent) {
        checkVaultStatus();
    }

    // Argument Sorting Activity
    const sortingTable = document.querySelector('.argument-sorting-table');
    if (sortingTable) {
        const sortSaveKey = 'scotus-sort-' + pageFile;

        function saveSortSelections() {
            const rows = sortingTable.querySelectorAll('tbody tr');
            const answers = [];
            rows.forEach(row => {
                const select = row.querySelector('select');
                answers.push(select ? select.value : '');
            });
            localStorage.setItem(sortSaveKey, JSON.stringify(answers));
            if (typeof saveToCloud === 'function') saveToCloud(sortSaveKey, answers);
        }

        function loadSortSelections() {
            try {
                const saved = localStorage.getItem(sortSaveKey);
                if (saved) {
                    const answers = JSON.parse(saved);
                    const rows = sortingTable.querySelectorAll('tbody tr');
                    rows.forEach((row, i) => {
                        const select = row.querySelector('select');
                        if (select && answers[i]) select.value = answers[i];
                    });
                }
            } catch(e) {}

            // Also try loading from cloud if signed in
            if (typeof loadFromCloud === 'function') {
                loadFromCloud(sortSaveKey).then(answers => {
                    if (answers && Array.isArray(answers)) {
                        localStorage.setItem(sortSaveKey, JSON.stringify(answers));
                        const rows = sortingTable.querySelectorAll('tbody tr');
                        rows.forEach((row, i) => {
                            const select = row.querySelector('select');
                            if (select && answers[i]) select.value = answers[i];
                        });
                    }
                });
            }
        }

        // Add ARIA labels to all select dropdowns
        const selectDropdowns = sortingTable.querySelectorAll('select');
        selectDropdowns.forEach((select, index) => {
            const row = select.closest('tr');
            const argumentText = row ? row.querySelector('td:first-child').textContent : '';
            const shortText = argumentText.length > 50 ? argumentText.substring(0, 47) + '...' : argumentText;
            select.setAttribute('aria-label', 'Which side would you use this argument for: ' + shortText);
            if (![...select.options].some(o => o.value === 'BOTH')) {
                const both = document.createElement('option');
                both.value = 'BOTH';
                both.textContent = 'Both sides could use this';
                select.appendChild(both);
            }
            
            // Add aria-live region for answer feedback
            const answerCell = row ? row.querySelector('.answer-cell') : null;
            if (answerCell && !answerCell.hasAttribute('aria-live')) {
                answerCell.setAttribute('aria-live', 'polite');
                answerCell.setAttribute('aria-atomic', 'true');
            }
        });
        // Auto-save on each dropdown change
        selectDropdowns.forEach(select => {
            select.addEventListener('change', saveSortSelections);
        });

        // Load any saved selections
        loadSortSelections();

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done sorting — open the Evidence Vault';
        doneBtn.className = 'check-answers-btn';
        doneBtn.type = 'button';
        doneBtn.setAttribute('aria-label', 'Finish sorting and open the Evidence Vault. There is no score.');

        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset';
        resetBtn.className = 'reset-answers-btn';
        resetBtn.type = 'button';
        resetBtn.setAttribute('aria-label', 'Clear your sort choices');

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'activity-buttons';
        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(resetBtn);

        const table = sortingTable.querySelector('table');
        if (table) {
            table.insertAdjacentElement('afterend', buttonContainer);
        } else {
            sortingTable.appendChild(buttonContainer);
        }

        function showSortNextSteps() {
            if (buttonContainer.querySelector('.debate-prep-cta')) return;
            var note = document.createElement('p');
            note.className = 'score-display';
            note.textContent = 'No score — you decided how to use each argument. Rank and steelman in Weigh below, then Speak.';
            buttonContainer.appendChild(note);
            var ctaWrap = document.createElement('div');
            ctaWrap.style.marginTop = '12px';
            var nextBtn = document.createElement('button');
            nextBtn.type = 'button';
            nextBtn.className = 'debate-prep-cta';
            nextBtn.textContent = 'Next: Speak (60-second theory) \u2192';
            nextBtn.style.cssText = 'display: inline-block; margin: 8px 8px 0 0; padding: 12px 28px; background: #6366f1; color: #fff; border: none; border-radius: 8px; font-weight: 600; font-size: 1em; cursor: pointer;';
            nextBtn.addEventListener('click', function() {
                if (typeof window.switchToTab === 'function') window.switchToTab('speak');
            });
            var ctaLink = document.createElement('a');
            ctaLink.href = '../debate.html?case=' + encodeURIComponent(pageFile);
            ctaLink.className = 'debate-prep-cta';
            ctaLink.textContent = 'Then write the speech in Debate Prep \u2192';
            ctaLink.style.cssText = 'display: inline-block; margin-top: 8px; padding: 12px 20px; color: #6366f1; font-weight: 600;';
            ctaWrap.appendChild(nextBtn);
            ctaWrap.appendChild(ctaLink);
            buttonContainer.appendChild(ctaWrap);
        }

        doneBtn.addEventListener('click', function() {
            saveSortSelections();
            unlockVault();
            saveVaultUnlock();
            showSortNextSteps();
            if (typeof window.switchToTab === 'function') {
                window.switchToTab('evidence-vault');
            }
        });

        resetBtn.addEventListener('click', function() {
            sortingTable.querySelectorAll('tbody tr').forEach(function(row) {
                const select = row.querySelector('select');
                if (select) select.value = '';
            });
            localStorage.removeItem(sortSaveKey);
            if (typeof saveToCloud === 'function') saveToCloud(sortSaveKey, null);
            const note = buttonContainer.querySelector('.score-display');
            if (note) note.remove();
            const cta = buttonContainer.querySelector('.debate-prep-cta');
            if (cta && cta.parentElement) cta.parentElement.remove();
        });
    }

    // Flip-card height matching: set container height to taller of front/back.
    // Must re-run when the vault tab becomes visible — hidden tabs measure as 0.
    function syncFlipCardHeights() {
        document.querySelectorAll('.source-flip-card').forEach(function(card) {
            var inner = card.querySelector('.source-flip-inner');
            var front = card.querySelector('.source-front');
            var back = card.querySelector('.source-back');
            if (!inner || !front || !back) return;
            if (card.offsetWidth === 0) return;
            inner.style.height = 'auto';
            front.style.position = 'relative';
            back.style.position = 'relative';
            back.style.transform = 'none';
            var h = Math.max(front.offsetHeight, back.offsetHeight, 220);
            front.style.position = '';
            back.style.position = '';
            back.style.transform = '';
            if (h > 0) {
                inner.style.height = h + 'px';
                card.style.minHeight = h + 'px';
            }
        });
    }
    window.syncFlipCardHeights = syncFlipCardHeights;
    syncFlipCardHeights();
    window.addEventListener('resize', syncFlipCardHeights);

    // ================================================
    // SOURCE CARD STARRING — Save sources to evidence collection
    // ================================================
    var sourceCards = document.querySelectorAll('.source-flip-card');
    if (sourceCards.length > 0) {
        var srcSaveKey = 'scotus-starred-sources-' + pageFile;

        function loadStarredSources() {
            try {
                var raw = localStorage.getItem(srcSaveKey);
                return raw ? JSON.parse(raw) : {};
            } catch(e) { return {}; }
        }

        function saveStarredSources(data) {
            localStorage.setItem(srcSaveKey, JSON.stringify(data));
            if (typeof saveToCloud === 'function') saveToCloud(srcSaveKey, data);
        }

        function updateSourceStarCount() {
            var counter = document.getElementById('source-star-count');
            if (counter) {
                var data = loadStarredSources();
                var count = Object.keys(data).length;
                counter.textContent = count;
                counter.closest('.source-star-counter').style.display = count > 0 ? '' : 'none';
            }
        }

        var starred = loadStarredSources();

        // Add counter above source grid
        var sourcesHeader = document.getElementById('vault-sources-header');
        if (sourcesHeader) {
            var counterEl = document.createElement('div');
            counterEl.className = 'source-star-counter';
            counterEl.style.display = Object.keys(starred).length > 0 ? '' : 'none';
            counterEl.innerHTML = '<span class="source-star-counter-icon">&#9733;</span> <span id="source-star-count">' + Object.keys(starred).length + '</span> source(s) saved for debate prep';
            sourcesHeader.appendChild(counterEl);
        }

        sourceCards.forEach(function(card, idx) {
            var front = card.querySelector('.source-front');
            var back = card.querySelector('.source-back');
            if (!front) return;

            // Create star button on the back of the card
            var starBtn = document.createElement('button');
            starBtn.className = 'source-star-btn' + (starred[idx] ? ' active' : '');
            starBtn.innerHTML = starred[idx] ? '&#9733; Saved' : '&#9734; Save for Debate';
            starBtn.setAttribute('aria-label', 'Save source for debate prep');

            // Prevent star click from flipping the card
            starBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                var current = loadStarredSources();

                if (current[idx]) {
                    // Unstar
                    delete current[idx];
                    starBtn.classList.remove('active');
                    starBtn.innerHTML = '&#9734; Save for Debate';
                } else {
                    // Star — extract source data from card
                    var title = front.querySelector('h4') ? front.querySelector('h4').textContent : '';
                    var excerpt = front.querySelector('.source-excerpt') ? front.querySelector('.source-excerpt').textContent : '';
                    var sideLabel = front.querySelector('.source-side-label') ? front.querySelector('.source-side-label').textContent.trim() : '';
                    var analysisEl = back && back.querySelector('.source-back-analysis');
                    var notes = back ? Array.from(back.querySelectorAll('.source-use-notes')).map(function(t) { return t.value; }).filter(Boolean).join(' | ') : '';
                    var analysis = (analysisEl ? analysisEl.textContent : '') || notes;
                    var citation = back && back.querySelector('.source-citation') ? back.querySelector('.source-citation').textContent.replace(/^MLA:\s*/i, '') : '';

                    current[idx] = {
                        title: title,
                        excerpt: excerpt,
                        side: sideLabel,
                        analysis: analysis,
                        citation: citation
                    };
                    starBtn.classList.add('active');
                    starBtn.innerHTML = '&#9733; Saved';
                }

                saveStarredSources(current);
                updateSourceStarCount();
            });

            // Add star button to the back of the card
            if (back) {
                back.appendChild(starBtn);
            }
        });

        // Add post-sources CTA after the source grid
        var sourceGrid = document.querySelector('.source-cards-grid');
        if (sourceGrid) {
            var ctaDiv = document.createElement('div');
            ctaDiv.className = 'vault-next-steps';
            ctaDiv.innerHTML = '<h3>Ready for the next step?</h3>' +
                '<p>Use your research to build your debate arguments, or review the key concepts first.</p>' +
                '<div class="vault-next-btns">' +
                '<a href="../debate.html" class="vault-next-btn vault-next-debate">Prepare for Debate &rarr;</a>' +
                '<a href="../review.html" class="vault-next-btn vault-next-review">Review Key Concepts &rarr;</a>' +
                '</div>';
            sourceGrid.parentNode.insertBefore(ctaDiv, sourceGrid.nextSibling);
        }
    }
});

// Teacher/Staff auto-unlock: called by firebase-init.js after auth state changes
function onAuthReady(user) {
    // If user is a teacher (staff), automatically unlock the Evidence Vault
    if (isTeacher(user) && typeof globalUnlockVault === 'function') {
        globalUnlockVault();
    }
}
