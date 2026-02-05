// Helper function to check if user is a teacher (staff)
function isTeacher(user) {
    return user && user.email && user.email.endsWith('@edmonds.wednet.edu');
}

// Global vault unlock function (will be set up after DOM loads)
var globalUnlockVault = null;

// Reading Level Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Dropdown
    var dropdown = document.querySelector('.nav-dropdown');
    var dropdownBtn = dropdown ? dropdown.querySelector('.nav-dropdown-btn') : null;
    if (dropdown && dropdownBtn) {
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            dropdownBtn.setAttribute('aria-expanded', dropdown.classList.contains('open'));
        });
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
                dropdownBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const levelButtons = document.querySelectorAll('.level-btn');

    if (levelButtons.length > 0) {
        levelButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class and aria-pressed from all buttons
                levelButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });

                // Add active class and aria-pressed to clicked button
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');

                // Get selected level
                const selectedLevel = this.getAttribute('data-level');

                // Hide all content blocks and two-sides summaries
                document.querySelectorAll('.content-block, .two-sides-summary').forEach(block => {
                    block.classList.add('hidden');
                    block.classList.remove('active');
                });

                // Show selected level content
                document.querySelectorAll(`.content-block.${selectedLevel}, .two-sides-summary.${selectedLevel}`).forEach(block => {
                    block.classList.remove('hidden');
                    block.classList.add('active');
                });
            });
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
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

    // Guiding Question Expand/Collapse
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    const questionDetails = document.getElementById('question-details');

    if (learnMoreBtn && questionDetails) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle state
            this.setAttribute('aria-expanded', String(!isExpanded));
            this.classList.toggle('expanded');
            questionDetails.classList.toggle('expanded');

            // Update button text
            const arrow = this.querySelector('.arrow');
            if (arrow) {
                arrow.textContent = isExpanded ? '▼' : '▲';
            }
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
            select.setAttribute('aria-label', `Select which side this argument helps: ${shortText}`);
            
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

        const checkAnswersBtn = document.createElement('button');
        checkAnswersBtn.textContent = 'Check Answers';
        checkAnswersBtn.className = 'check-answers-btn';
        checkAnswersBtn.type = 'button';
        checkAnswersBtn.setAttribute('aria-label', 'Check your answers and see your score');
        
        const showAnswersBtn = document.createElement('button');
        showAnswersBtn.textContent = 'Show Answer Key';
        showAnswersBtn.className = 'show-answers-btn';
        showAnswersBtn.type = 'button';
        showAnswersBtn.style.display = 'none';
        showAnswersBtn.setAttribute('aria-label', 'Show the complete answer key with explanations');
        
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset';
        resetBtn.className = 'reset-answers-btn';
        resetBtn.type = 'button';
        resetBtn.style.display = 'none';
        resetBtn.setAttribute('aria-label', 'Reset all answers and start over');
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'activity-buttons';
        buttonContainer.appendChild(checkAnswersBtn);
        buttonContainer.appendChild(showAnswersBtn);
        buttonContainer.appendChild(resetBtn);
        
        // Find the table inside sortingTable and insert buttons AFTER it
        const table = sortingTable.querySelector('table');
        if (table) {
            table.insertAdjacentElement('afterend', buttonContainer);
        } else {
            sortingTable.appendChild(buttonContainer);
        }

        const answerKeySection = document.createElement('div');
        answerKeySection.className = 'answer-key-section';
        answerKeySection.style.display = 'none';
        sortingTable.appendChild(answerKeySection);

        // Check answers functionality
        checkAnswersBtn.addEventListener('click', function() {
            const rows = sortingTable.querySelectorAll('tbody tr');
            let correctCount = 0;
            let totalCount = 0;
            
            rows.forEach(row => {
                const select = row.querySelector('select');
                const correctAnswer = row.getAttribute('data-correct-answer');
                const answerCell = row.querySelector('.answer-cell');
                
                if (select && correctAnswer && answerCell) {
                    totalCount++;
                    const userAnswer = select.value;
                    const selectedOption = select.options[select.selectedIndex];
                    const userAnswerText = selectedOption ? selectedOption.text : '';
                    
                    // Get the correct answer text
                    const correctOption = Array.from(select.options).find(opt => opt.value === correctAnswer);
                    const correctAnswerText = correctOption ? correctOption.text : correctAnswer;
                    
                    if (userAnswer === '') {
                        answerCell.textContent = '—';
                        answerCell.className = 'answer-cell unanswered';
                    } else if (userAnswer === correctAnswer) {
                        answerCell.textContent = userAnswerText + ' ✓';
                        answerCell.className = 'answer-cell correct';
                        correctCount++;
                    } else {
                        answerCell.textContent = userAnswerText + ' ✗ (Correct: ' + correctAnswerText + ')';
                        answerCell.className = 'answer-cell incorrect';
                    }
                    answerCell.style.display = 'block';
                }
            });
            
            // Show score
            const scoreDiv = document.createElement('div');
            scoreDiv.className = 'score-display';
            scoreDiv.textContent = `Score: ${correctCount} out of ${totalCount} correct`;
            if (correctCount === totalCount) {
                scoreDiv.className += ' perfect-score';
            }
            
            // Remove existing score if present
            const existingScore = buttonContainer.querySelector('.score-display');
            if (existingScore) {
                existingScore.remove();
            }
            
            buttonContainer.appendChild(scoreDiv);
            
            // Show reset button
            resetBtn.style.display = 'inline-block';
            showAnswersBtn.style.display = 'inline-block';

            // Unlock Evidence Vault
            unlockVault();
            saveVaultUnlock();
        });
        
        // Show answer key
        showAnswersBtn.addEventListener('click', function() {
            if (answerKeySection.style.display === 'none') {
                answerKeySection.style.display = 'block';
                showAnswersBtn.textContent = 'Hide Answer Key';
                
                // Create answer key only if it doesn't exist
                if (!answerKeySection.querySelector('.answer-key-columns')) {
                    const rows = sortingTable.querySelectorAll('tbody tr');
                    const select = rows[0] ? rows[0].querySelector('select') : null;
                    
                    // Get all unique answer values and their labels
                    const answerGroups = {};
                    const answerLabels = {};
                    
                    if (select) {
                        Array.from(select.options).forEach(option => {
                            if (option.value && option.value !== '') {
                                answerGroups[option.value] = [];
                                answerLabels[option.value] = option.text;
                            }
                        });
                    }
                    
                    // Group arguments by their correct answer
                    rows.forEach(row => {
                        const argumentText = row.querySelector('td:first-child').textContent;
                        const correctAnswer = row.getAttribute('data-correct-answer');
                        const explanation = row.getAttribute('data-explanation') || 'This argument supports this position.';
                        
                        if (correctAnswer && answerGroups[correctAnswer]) {
                            answerGroups[correctAnswer].push({
                                argument: argumentText,
                                explanation: explanation
                            });
                        }
                    });
                    
                    // Create column-based layout matching existing argument-side design
                    const columnsContainer = document.createElement('div');
                    columnsContainer.className = 'answer-key-columns';
                    
                    // Get the order of sides from the select options to match argument section styling
                    const answerOrder = [];
                    if (select) {
                        Array.from(select.options).forEach(option => {
                            if (option.value && option.value !== '') {
                                answerOrder.push(option.value);
                            }
                        });
                    }
                    
                    // Create a column for each answer group that has arguments
                    let columnIndex = 0;
                    answerOrder.forEach((answerValue) => {
                        if (answerGroups[answerValue] && answerGroups[answerValue].length > 0) {
                            const column = document.createElement('div');
                            column.className = 'answer-key-column argument-side';
                            
                            // Use same header style as argument sections
                            const columnHeader = document.createElement('h3');
                            columnHeader.className = 'side-title';
                            // First two columns get petitioner/respondent styling
                            // Skip "Both" and "Neither" for special styling
                            if (columnIndex === 0) {
                                columnHeader.classList.add('side-petitioner');
                            } else if (columnIndex === 1 && !answerValue.toLowerCase().includes('both') && !answerValue.toLowerCase().includes('neither')) {
                                columnHeader.classList.add('side-respondent');
                            } else {
                                // For "Both" and "Neither", use a neutral style
                                columnHeader.style.backgroundColor = '#16213e';
                                columnHeader.style.color = '#ffffff';
                            }
                            columnHeader.textContent = answerLabels[answerValue] || answerValue;
                            column.appendChild(columnHeader);
                            columnIndex++;
                            
                            const argumentsList = document.createElement('ul');
                            argumentsList.className = 'answer-key-arguments argument-list';
                            
                            answerGroups[answerValue].forEach(item => {
                                const argumentItem = document.createElement('li');
                                argumentItem.className = 'answer-key-item';
                                
                                const argumentText = document.createElement('div');
                                argumentText.className = 'answer-key-argument';
                                argumentText.textContent = item.argument;
                                
                                const explanationDivider = document.createElement('div');
                                explanationDivider.className = 'answer-key-divider';
                                
                                const explanationText = document.createElement('div');
                                explanationText.className = 'answer-key-explanation';
                                explanationText.innerHTML = '<strong>Why:</strong> ' + item.explanation;
                                
                                argumentItem.appendChild(argumentText);
                                argumentItem.appendChild(explanationDivider);
                                argumentItem.appendChild(explanationText);
                                argumentsList.appendChild(argumentItem);
                            });
                            
                            column.appendChild(argumentsList);
                            columnsContainer.appendChild(column);
                        }
                    });
                    
                    answerKeySection.innerHTML = '<h3>Answer Key</h3>';
                    answerKeySection.appendChild(columnsContainer);
                }
            } else {
                answerKeySection.style.display = 'none';
                showAnswersBtn.textContent = 'Show Answer Key';
            }
        });
        
        // Reset functionality
        resetBtn.addEventListener('click', function() {
            const rows = sortingTable.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const select = row.querySelector('select');
                const answerCell = row.querySelector('.answer-cell');

                if (select) {
                    select.value = '';
                }
                if (answerCell) {
                    answerCell.style.display = 'none';
                    answerCell.className = 'answer-cell';
                    answerCell.textContent = '';
                }
            });

            // Clear saved selections
            localStorage.removeItem(sortSaveKey);
            if (typeof saveToCloud === 'function') saveToCloud(sortSaveKey, null);
            
            // Reset answer key section
            answerKeySection.innerHTML = '';
            answerKeySection.style.display = 'none';
            showAnswersBtn.textContent = 'Show Answer Key';
            
            // Hide buttons and clear score
            resetBtn.style.display = 'none';
            showAnswersBtn.style.display = 'none';
            answerKeySection.style.display = 'none';
            showAnswersBtn.textContent = 'Show Answer Key';
            
            const scoreDisplay = buttonContainer.querySelector('.score-display');
            if (scoreDisplay) {
                scoreDisplay.remove();
            }
        });
    }

    // Flip-card height matching: set container height to taller of front/back
    document.querySelectorAll('.source-flip-card').forEach(function(card) {
        var inner = card.querySelector('.source-flip-inner');
        var front = card.querySelector('.source-front');
        var back = card.querySelector('.source-back');
        if (!inner || !front || !back) return;

        function setHeight() {
            // Temporarily make both visible to measure
            inner.style.height = 'auto';
            front.style.position = 'relative';
            back.style.position = 'relative';
            back.style.transform = 'none';
            var h = Math.max(front.offsetHeight, back.offsetHeight);
            front.style.position = '';
            back.style.position = '';
            back.style.transform = '';
            inner.style.height = h + 'px';
            card.style.minHeight = h + 'px';
        }
        setHeight();
        window.addEventListener('resize', setHeight);
    });

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
                    var analysis = back && back.querySelector('.source-back-analysis') ? back.querySelector('.source-back-analysis').textContent : '';
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
