// Reading Level Toggle
document.addEventListener('DOMContentLoaded', function() {
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

                // Hide all content blocks
                document.querySelectorAll('.content-block').forEach(block => {
                    block.classList.add('hidden');
                });

                // Show selected level content
                document.querySelectorAll(`.${selectedLevel}`).forEach(block => {
                    block.classList.remove('hidden');
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

    // Add scroll effect to navigation
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        } else if (currentScroll > lastScroll) {
            nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        }

        lastScroll = currentScroll;
    });

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

    // Argument Sorting Activity
    const sortingTable = document.querySelector('.argument-sorting-table');
    if (sortingTable) {
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
});
