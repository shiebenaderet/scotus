// Injects case-theory, competing tests, weighing, hot bench, and primary-source cards.
(function () {
    function caseIdFromPath() {
        var path = window.location.pathname;
        var file = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
        return file || '';
    }

    function currentData() {
        var id = caseIdFromPath();
        return (window.CASE_PREP_DATA && CASE_PREP_DATA[id]) ? { id: id, data: CASE_PREP_DATA[id] } : null;
    }

    function el(html) {
        var wrap = document.createElement('div');
        wrap.innerHTML = html.trim();
        return wrap.firstElementChild;
    }

    function saveKey(suffix) {
        var id = caseIdFromPath();
        return 'scotus-prep-' + id + '-' + suffix;
    }

    function loadJSON(key, fallback) {
        try {
            var raw = localStorage.getItem(key);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return fallback;
    }

    function saveJSON(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        if (typeof saveToCloud === 'function') saveToCloud(key, value);
    }

    function bindAutosave(container, key) {
        var stored = loadJSON(key, {});
        container.querySelectorAll('textarea, select, input').forEach(function (field) {
            var name = field.getAttribute('data-field');
            if (!name) return;
            if (stored[name]) field.value = stored[name];
            field.addEventListener('change', persist);
            field.addEventListener('input', persist);
        });
        function persist() {
            var data = {};
            container.querySelectorAll('textarea, select, input').forEach(function (field) {
                var name = field.getAttribute('data-field');
                if (name) data[name] = field.value;
            });
            saveJSON(key, data);
            if (typeof window.showSaveStatus === 'function') window.showSaveStatus();
        }
    }

    function relPrefix() {
        return window.location.pathname.indexOf('/cases/') !== -1 ? '../' : '';
    }

    function currentLevel() {
        return (typeof window.getReadingLevel === 'function' && window.getReadingLevel() === 'simplified')
            ? 'simplified' : 'standard';
    }

    function levelPair(stdInner, simpInner) {
        var simp = currentLevel() === 'simplified';
        return '<div class="content-block standard' + (simp ? ' hidden' : ' active') + '">' + stdInner + '</div>' +
            '<div class="content-block simplified' + (simp ? ' active' : ' hidden') + '">' + simpInner + '</div>';
    }

    function termChipHtml(t) {
        var simple = t.simple || t.meaning;
        return '<button type="button" class="legal-tip law-term-chip" aria-expanded="false">' +
            '<span class="legal-tip-word">' + escapeHtml(t.term) + '</span>' +
            '<span class="legal-tip-pop" hidden>' +
                '<span class="legal-tip-copy standard">' + escapeHtml(t.meaning) + '</span>' +
                '<span class="legal-tip-copy simplified">' + escapeHtml(simple) + '</span>' +
            '</span></button>';
    }

    function lawStepsHtml(law) {
        var steps = law.steps || [];
        if (!steps.length) {
            return '<p class="law-plain">' + escapeHtml(law.plain) + '</p>';
        }
        return '<ol class="law-steps">' + steps.map(function (s) {
            return '<li><strong>' + escapeHtml(s.label) + '</strong> ' + escapeHtml(s.text) + '</li>';
        }).join('') + '</ol>';
    }

    function lawBoxHtml(data, opts) {
        opts = opts || {};
        if (!data || !data.law) return '';
        var law = data.law;
        var chips = (law.terms || []).map(termChipHtml).join('');
        var more = opts.compact
            ? ''
            : '<p class="law-box-more">Dotted words on this page are clickable. Full glossary: <a href="' + relPrefix() + 'resources.html#law-words">Law words</a>.</p>';
        var stdBody = '<p class="law-issue"><strong>The fight:</strong> ' + escapeHtml(law.issue) + '</p>' +
            '<p class="law-plain">' + escapeHtml(law.plain) + '</p>';
        var simpBody = '<p class="law-issue"><strong>The fight:</strong> ' + escapeHtml(law.issueSimple || law.issue) + '</p>' +
            lawStepsHtml(law);
        return '<div class="law-box' + (opts.compact ? ' law-box-compact' : '') + '">' +
            '<h3>Know the law</h3>' +
            '<blockquote class="law-clause"><p>' + escapeHtml(law.clause) + '</p><cite>' + escapeHtml(law.clauseCite) + '</cite></blockquote>' +
            levelPair(stdBody, simpBody) +
            (chips ? '<div class="law-terms">' + chips + '</div>' : '') +
            more +
        '</div>';
    }

    function testCardBody(test) {
        var simple = test.textSimple || test.text;
        return levelPair(
            '<p>' + escapeHtml(test.text) + '</p>',
            '<p>' + escapeHtml(simple) + '</p>'
        );
    }

    window.scotusLawBoxHtml = lawBoxHtml;

    function injectProgressStrip() {
        var header = document.querySelector('.case-header .container');
        if (!header || document.querySelector('.case-progress')) return;
        var strip = el(
            '<nav class="case-progress" aria-label="Prep steps">' +
                '<a href="#background" data-step="background">1 Background</a>' +
                '<a href="#activity" data-step="activity">2 Sort &amp; weigh</a>' +
                '<a href="#evidence-vault" data-step="evidence-vault">3 Vault</a>' +
                '<a href="#speak" data-step="speak">4 Speak</a>' +
                '<a href="' + relPrefix() + 'debate.html?case=' + caseIdFromPath() + '">5 Debate Prep</a>' +
                '<a href="#today" data-step="today">6 Today <span class="after-debate">(after debate)</span></a>' +
            '</nav>'
        );
        header.appendChild(strip);
        strip.querySelectorAll('a[data-step]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                var id = a.getAttribute('data-step');
                if (typeof window.switchToTab === 'function' && document.getElementById(id)) {
                    e.preventDefault();
                    window.switchToTab(id);
                }
            });
        });
    }

    function updatePartyLabels(data) {
        document.querySelectorAll('.person-side.petitioner').forEach(function (badge) {
            badge.innerHTML = data.petitioner.name + '<span class="legal-role">' + data.petitioner.legal + '</span>';
        });
        document.querySelectorAll('.person-side.respondent').forEach(function (badge) {
            badge.innerHTML = data.respondent.name + '<span class="legal-role">' + data.respondent.legal + '</span>';
        });
    }

    function injectBackground(data) {
        var bg = document.querySelector('#background .container');
        var hook = document.querySelector('#background .guiding-question-connection');
        if (!bg) return;

        var qbox = el(
            '<div class="case-question-box">' +
                '<span class="label">Constitutional question for this case</span>' +
                '<h3>' + escapeHtml(data.question) + '</h3>' +
                '<span class="amendment-chip">' + escapeHtml(data.amendment) + '</span>' +
                levelPair(
                    '<p class="driving-frame">' + escapeHtml(data.drivingFrame) + '</p>',
                    '<p class="driving-frame">' + escapeHtml(data.drivingFrameSimple || data.drivingFrame) + '</p>'
                ) +
            '</div>'
        );

        var tests = el(
            '<div class="competing-tests">' +
                '<h3>Competing tests — what each side wants the Court to adopt</h3>' +
                levelPair(
                    '<p class="tests-lead">Do not just say your side is “right.” Name the <strong>rule</strong> you want. Every argument should end with: “Under our test, this fact matters because…”</p>',
                    '<p class="tests-lead">Do not just say you are right. Name the <strong>rule</strong> you want the Court to write. Then say: “Under our test, this fact matters because…”</p>'
                ) +
                '<div class="tests-grid">' +
                    '<div class="test-card petitioner">' +
                        '<div class="test-side">' + escapeHtml(data.petitioner.name) + '</div>' +
                        '<h4>' + escapeHtml(data.tests.petitioner.title) + '</h4>' +
                        testCardBody(data.tests.petitioner) +
                    '</div>' +
                    '<div class="test-card respondent">' +
                        '<div class="test-side">' + escapeHtml(data.respondent.name) + '</div>' +
                        '<h4>' + escapeHtml(data.tests.respondent.title) + '</h4>' +
                        testCardBody(data.tests.respondent) +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        var law = data.law ? el(lawBoxHtml(data, { compact: false })) : null;

        if (hook) {
            hook.parentNode.insertBefore(qbox, hook.nextSibling);
            if (law) hook.parentNode.insertBefore(law, qbox.nextSibling);
            hook.parentNode.insertBefore(tests, (law || qbox).nextSibling);
        } else {
            bg.insertBefore(tests, bg.firstChild);
            if (law) bg.insertBefore(law, tests);
            bg.insertBefore(qbox, law || tests);
        }

        if (data.hardSide) {
            var box = el(
                '<div class="hard-side-box"><h3>' + escapeHtml(data.hardSide.title) + '</h3>' + data.hardSide.html + '</div>'
            );
            tests.parentNode.insertBefore(box, tests.nextSibling);
        }

        var keyTerms = document.getElementById('key-terms');
        if (keyTerms) {
            var inner = keyTerms.querySelector('.container');
            if (inner) {
                inner.querySelectorAll('.section-header h2').forEach(function (h) {
                    h.textContent = 'Words you will need';
                });
                inner.querySelectorAll('.section-subtitle').forEach(function (p) {
                    p.textContent = 'Click a dotted word on this tab for a short definition, or open Law words in the Prepare menu.';
                });
                bg.appendChild(inner);
            }
            keyTerms.remove();
        }
    }

    function injectWeighing(id, data) {
        var tableWrap = document.querySelector('#activity .argument-sorting-table');
        if (!tableWrap) return;

        function argList(side, items) {
            return items.map(function (text, i) {
                return '<label class="weigh-arg"><select data-field="rank-' + side + '-' + i + '" aria-label="Rank this argument">' +
                    '<option value="">Rank…</option><option>1</option><option>2</option><option>3</option><option>4</option></select>' +
                    '<span>' + escapeHtml(text) + '</span></label>';
            }).join('');
        }

        var panel = el(
            '<div class="weighing-panel" id="argument-weigh">' +
                '<h3>Go deeper: weigh the arguments</h3>' +
                '<p class="instruction">Sorting is only step one. Rank each side’s points, then steelman the other side. Nuance lives here.</p>' +
                '<div class="weigh-grid">' +
                    '<div class="weigh-col"><h4>' + escapeHtml(data.petitioner.name) + '</h4>' + argList('p', data.weighing.petitioner) + '</div>' +
                    '<div class="weigh-col"><h4>' + escapeHtml(data.respondent.name) + '</h4>' + argList('r', data.weighing.respondent) + '</div>' +
                '</div>' +
                '<div class="weigh-prompts">' +
                    '<label for="weigh-why">For YOUR side: why is your #1 stronger than your #2?</label>' +
                    '<textarea id="weigh-why" data-field="why-top" placeholder="My strongest argument is _____ because _____. #2 is weaker because _____."></textarea>' +
                    '<label for="weigh-steel">Steelman: state the other side’s strongest argument in THEIR voice, then explain why it still loses.</label>' +
                    '<textarea id="weigh-steel" data-field="steelman" placeholder="They will say _____. That sounds strong because _____. It fails because _____."></textarea>' +
                    '<label for="weigh-both">Pick one fact that both sides can use. How would each side use it?</label>' +
                    '<textarea id="weigh-both" data-field="both-sides" placeholder="Fact: _____. They would say _____. We would say _____."></textarea>' +
                '</div>' +
            '</div>'
        );
        tableWrap.parentNode.insertBefore(panel, tableWrap.nextSibling);
        bindAutosave(panel, saveKey('weigh'));
    }

    function injectSpeakTab(id, data) {
        var nav = document.querySelector('.case-nav.tabbed');
        var main = document.querySelector('main.tabbed-content');
        if (!nav || !main || document.getElementById('speak')) return;

        var btn = document.createElement('button');
        btn.className = 'case-tab';
        btn.setAttribute('data-tab', 'speak');
        btn.textContent = 'Speak';
        var todayBtn = nav.querySelector('[data-tab="today"]');
        if (todayBtn) nav.insertBefore(btn, todayBtn);
        else nav.appendChild(btn);

        var samplesP = data.theorySamples.petitioner.map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('');
        var samplesR = data.theorySamples.respondent.map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('');
        var bench = data.hotBench.map(function (item, i) {
            return '<div class="hot-bench-item">' +
                '<h4>Q' + (i + 1) + '. ' + escapeHtml(item.q) + '</h4>' +
                '<p class="bench-tip">Coach: ' + escapeHtml(item.tip) + '</p>' +
                '<textarea class="hot-bench-notes" data-field="bench-' + i + '" placeholder="Answer out loud first, then jot a sentence…"></textarea>' +
                '</div>';
        }).join('');

        var section = el(
            '<section id="speak" class="case-section">' +
                '<div class="container">' +
                    '<div class="case-theory" id="case-theory">' +
                        '<div class="section-header"><h2>Your 60-second case theory</h2>' +
                        '<p class="section-subtitle">Fill this in, then say it without notes. This is what you must be able to explain.</p></div>' +
                        '<div class="prep-banner">Argue as if the Supreme Court has <strong>not</strong> decided yet. Do not quote this case’s holding or vote.</div>' +
                        (data.law ? lawBoxHtml(data, { compact: true }) : '') +
                        '<p>Choose your side, then complete the six lines. Practice with a partner who argues the other side.</p>' +
                        '<div class="theory-side-pick">' +
                            '<button type="button" class="theory-side-btn" data-side="petitioner" data-field="side-p">' + escapeHtml(data.petitioner.name) + '</button>' +
                            '<button type="button" class="theory-side-btn" data-side="respondent" data-field="side-r">' + escapeHtml(data.respondent.name) + '</button>' +
                        '</div>' +
                        '<ol class="theory-lines">' +
                            '<li><label for="th-who">Who I represent</label><textarea id="th-who" data-field="who" placeholder="Name the client, not just “petitioner.”"></textarea></li>' +
                            '<li><label for="th-facts">What happened (3 facts, no adjectives)</label><textarea id="th-facts" data-field="facts"></textarea></li>' +
                            '<li><label for="th-q">The constitutional question (one sentence)</label><textarea id="th-q" data-field="question"></textarea></li>' +
                            '<li><label for="th-clause">The clause / amendment and what it says</label><textarea id="th-clause" data-field="clause"></textarea></li>' +
                            '<li><label for="th-rule">The rule we need the Court to adopt</label><textarea id="th-rule" data-field="rule" placeholder="Under our test…"></textarea></li>' +
                            '<li><label for="th-danger">Why the other side’s rule is dangerous</label><textarea id="th-danger" data-field="danger"></textarea></li>' +
                        '</ol>' +
                        '<details class="theory-sample" data-sample="petitioner"><summary>If you get stuck — sample for ' + escapeHtml(data.petitioner.name) + '</summary><ol>' + samplesP + '</ol></details>' +
                        '<details class="theory-sample" data-sample="respondent"><summary>If you get stuck — sample for ' + escapeHtml(data.respondent.name) + '</summary><ol>' + samplesR + '</ol></details>' +
                    '</div>' +
                    '<div class="oral-practice">' +
                        '<div class="section-header"><h2>Oral practice</h2>' +
                        '<p class="section-subtitle">Write less. Talk more. A partner or teacher plays the justice.</p></div>' +
                        '<ol>' +
                            '<li><strong>60-second theory:</strong> Read your six lines, then close the laptop and say them.</li>' +
                            '<li><strong>2-minute argument:</strong> Pick your #1 point and one source from the Evidence Vault. End with “Under our test, this fact matters because…”</li>' +
                            '<li><strong>Hot bench:</strong> Answer these judge questions. Hostile questions are the point.</li>' +
                        '</ol>' +
                        '<div class="hot-bench-list">' + bench + '</div>' +
                        '<p class="speak-write-split">This is the only 60-second theory. Say it here, then write opening, arguments, and rebuttals in <a href="' + relPrefix() + 'debate.html?case=' + id + '">Debate Prep</a> — do not start a second theory there.</p>' +
                    '</div>' +
                '</div>' +
            '</section>'
        );
        var today = document.getElementById('today');
        if (today) main.insertBefore(section, today);
        else main.appendChild(section);

        var theory = section.querySelector('#case-theory');
        bindAutosave(section, saveKey('speak'));

        var saved = loadJSON(saveKey('speak'), {});
        section.querySelectorAll('.theory-side-btn').forEach(function (b) {
            if (saved.side && b.getAttribute('data-side') === saved.side) b.classList.add('selected');
            b.addEventListener('click', function () {
                section.querySelectorAll('.theory-side-btn').forEach(function (x) { x.classList.remove('selected'); });
                b.classList.add('selected');
                var store = loadJSON(saveKey('speak'), {});
                store.side = b.getAttribute('data-side');
                saveJSON(saveKey('speak'), store);
            });
        });

        btn.addEventListener('click', function () {
            if (typeof window.switchToTab === 'function') window.switchToTab('speak');
        });
    }

    function injectPair(data) {
        var today = document.querySelector('#today .container');
        if (!today || !data.pair) return;
        var box = el(
            '<div class="case-pair-box">' +
                '<h3>Build nuance: pair this case</h3>' +
                '<p>' + escapeHtml(data.pair.prompt) + '</p>' +
                '<p><a href="' + data.pair.href + '">Open ' + escapeHtml(data.pair.other) + ' →</a> &nbsp;·&nbsp; <a href="' + relPrefix() + 'compare.html">All case pairs</a></p>' +
            '</div>'
        );
        today.appendChild(box);
    }

    function replaceSources(data) {
        var grid = document.querySelector('#evidence-vault .source-cards-grid');
        var header = document.getElementById('vault-sources-header');
        if (!grid || !data.sources) return;
        if (header) {
            var p = header.querySelector('p');
            if (p) p.textContent = 'These are short primary excerpts — not the holding of this case. Flip a card and decide how EACH side could use it.';
            var h = header.querySelector('h3');
            if (h) h.textContent = 'Primary excerpts';
        }
        var intro = document.querySelector('#evidence-vault .vault-intro');
        if (intro) {
            intro.innerHTML = '<strong>Evidence Vault.</strong> Sort the facts, then work with real excerpts (constitutional text, statutes, earlier cases, and the record). The back of each card does <em>not</em> tell you who wins. You decide who can use it, and how.';
        }

        grid.innerHTML = data.sources.map(function (src, i) {
            return '<div class="source-flip-card" data-source-index="' + i + '">' +
                '<div class="source-flip-inner">' +
                    '<div class="source-front">' +
                        '<div class="source-card-header">' +
                            '<span class="source-type-tag ' + src.type + '">' + escapeHtml(src.typeLabel) + '</span>' +
                        '</div>' +
                        '<h4>' + escapeHtml(src.title) + '</h4>' +
                        '<div class="source-excerpt">' + escapeHtml(src.excerpt) + '</div>' +
                        '<button type="button" class="flip-btn" aria-expanded="false">Flip — who can use this?</button>' +
                    '</div>' +
                    '<div class="source-back">' +
                        '<div class="source-back-label">Who can use this?</div>' +
                        '<h4>' + escapeHtml(src.title) + '</h4>' +
                        '<p class="source-back-question">Do not look for a hidden “correct side.” Strong advocates can often use the same excerpt in opposite ways.</p>' +
                        '<div class="source-use-prompts">' +
                            '<label>How ' + escapeHtml(data.petitioner.name) + ' could use this</label>' +
                            '<textarea class="source-use-notes" data-field="src-' + i + '-p"></textarea>' +
                            '<label>How ' + escapeHtml(data.respondent.name) + ' could use this</label>' +
                            '<textarea class="source-use-notes" data-field="src-' + i + '-r"></textarea>' +
                        '</div>' +
                        '<div class="source-citation">' + escapeHtml(src.citation) + '</div>' +
                        '<button type="button" class="flip-btn">Flip back</button>' +
                    '</div>' +
                '</div></div>';
        }).join('');

        bindAutosave(grid, saveKey('sources'));

        function toggleCard(card, force) {
            var on = typeof force === 'boolean' ? force : !card.classList.contains('flipped');
            card.classList.toggle('flipped', on);
            card.querySelectorAll('.flip-btn').forEach(function (b) {
                b.setAttribute('aria-expanded', on ? 'true' : 'false');
            });
        }

        grid.querySelectorAll('.source-flip-card').forEach(function (card) {
            card.addEventListener('click', function (e) {
                if (e.target.closest('textarea, input, label, a, button')) return;
                toggleCard(card);
            });
            card.querySelectorAll('.flip-btn').forEach(function (b) {
                b.addEventListener('click', function (e) {
                    e.stopPropagation();
                    toggleCard(card);
                });
            });
        });
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function init() {
        var found = currentData();
        if (!found) return;
        updatePartyLabels(found.data);
        injectBackground(found.data);
        injectWeighing(found.id, found.data);
        injectSpeakTab(found.id, found.data);
        injectPair(found.data);
        replaceSources(found.data);
        injectProgressStrip();
        document.querySelectorAll('.case-tab[data-tab="today"]').forEach(function (tab) {
            if (tab.textContent.indexOf('after') === -1) {
                tab.textContent = 'Today (after debate)';
            }
        });
        if (typeof window.applyReadingLevel === 'function') {
            window.applyReadingLevel(currentLevel(), false);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
