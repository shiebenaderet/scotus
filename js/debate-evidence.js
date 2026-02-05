// debate-evidence.js — Pulls argument sort + evidence sort data into Debate Prep
// Lets students rank their strongest arguments and facts to guide writing.

// ============================================================
// ARGUMENT DATA (extracted from case page sorting tables)
// ============================================================
var argumentData = {
    tinker: [
        "Students must attend school and should focus on education, not political protests.",
        "Wearing armbands is a form of symbolic speech protected by the First Amendment.",
        "The students' armbands were silent and did not disrupt classes or bother other students.",
        "Teachers and principals know their schools better than judges and should decide what might cause disruption.",
        "Banning speech just because officials disagree with the message violates the First Amendment.",
        "School officials should be able to prevent problems before they happen, not wait until after disruption occurs.",
        "Schools have a responsibility to teach good citizenship and appropriate behavior.",
        "No actual disruption happened - the school acted only on fear of possible problems.",
        "The Vietnam War was very controversial and could cause serious problems in schools.",
        "The school allowed other political symbols but banned only anti-war armbands.",
        "Students do not lose their constitutional rights when they enter school.",
        "Schools need authority to maintain order so students can learn effectively.",
        "The First Amendment protects unpopular speech, especially about political issues."
    ],
    tlo: [
        "Schools have special responsibilities for student safety that require flexibility.",
        "T.L.O. was caught violating a school rule and then lied about her smoking habits.",
        "Evidence obtained through illegal searches should not be allowed in court.",
        "School officials need to be able to investigate rule violations quickly to maintain order.",
        "Students are minors who need more supervision and guidance than adults.",
        "Allowing warrantless searches gives school officials too much power over students.",
        "The \"in loco parentis\" principle gives schools authority to act like parents in supervising students.",
        "The search went beyond what was necessary to investigate the original smoking violation.",
        "T.L.O.'s purse was her private property and should have been protected from search.",
        "The search immediately revealed cigarettes, proving that T.L.O. had lied about not smoking.",
        "Students should not lose their constitutional rights when they enter school.",
        "Finding rolling papers gave reasonable suspicion that T.L.O. might possess drugs.",
        "The Fourth Amendment protects all people, including students, from unreasonable searches.",
        "School officials are government employees and should need warrants just like police officers."
    ],
    brown: [
        "Government cannot classify and separate people based on their race.",
        "States should have the right to organize their school systems based on local traditions.",
        "Separating people by race automatically suggests that one race is inferior to another.",
        "Education is too important to allow racial discrimination in public schools.",
        "The Fourteenth Amendment was not originally intended to require integrated schools.",
        "\"Separate but equal\" has worked effectively for nearly 60 years without major problems.",
        "Research shows that segregation causes psychological harm to Black children.",
        "Both Black and white schools have similar buildings, teachers, and educational materials.",
        "Even when facilities look equal, segregated schools are inferior in reputation and opportunities.",
        "The Fourteenth Amendment requires that all people be treated equally under the law.",
        "Forcing integration could cause social problems and conflicts in communities.",
        "The \"separate but equal\" rule has been the law since 1896 and has worked for many years."
    ],
    payton: [
        "The Fourth Amendment protects people's homes from unreasonable government searches.",
        "Police had strong evidence that Payton committed murder based on witness statements.",
        "The Supreme Court has consistently required warrants for searches of homes.",
        "Allowing warrantless arrests in homes would effectively eliminate the warrant requirement.",
        "Police have traditionally had the power to arrest suspects without warrants in public places.",
        "The suspect could destroy evidence or flee if police had to wait for a warrant.",
        "There is an important difference between searching a home and entering to arrest someone.",
        "Most states believe that arrest warrants should be required for home entries.",
        "Police can enter homes without warrants in true emergencies.",
        "Throughout American history, police have made home arrests without warrants.",
        "Getting a warrant is not difficult for police to obtain.",
        "A person's home deserves the strongest Fourth Amendment protection."
    ],
    mahanoy: [
        "Other courts have allowed schools to punish students for criticizing school officials online.",
        "Social media posts can be seen by many students and can spread quickly to cause disruption.",
        "B.L. never required anyone to see her posts - they were shared with her chosen friends.",
        "The Court's decision in Tinker bars schools from punishing speech based on disagreement with the message.",
        "With online learning, there is no clear separation between on-campus and off-campus activities.",
        "Allowing schools to punish off-campus speech gives them too much control over students' lives.",
        "The First Amendment protects students' right to express frustration and criticism.",
        "Most federal courts have ruled that schools can regulate student speech that affects the school, even when made off-campus.",
        "Schools need authority to maintain discipline and positive culture in their programs.",
        "B.L. made her posts on a weekend, away from school property, using her personal social media account.",
        "Snapchat posts disappear quickly and are not permanent like other social media.",
        "Cheerleaders represent the school and should maintain appropriate conduct at all times.",
        "B.L.'s posts contained no threats, harassment, or even mention of her specific school."
    ],
    kennedy: [
        "Praying at midfield was an important part of his personal religious practice.",
        "Accommodating his prayer practice does not violate the Establishment Clause.",
        "A reasonable observer would think the school was endorsing Christianity when they saw the coach praying.",
        "Students might feel pressured to join prayer to stay on the team or please their coach.",
        "The Free Exercise Clause protects his right to pray according to his faith.",
        "Kennedy's refusal to compromise created safety issues when media and crowds rushed the field.",
        "The government cannot force religious people to hide their faith or pray only in private.",
        "The school offered reasonable alternatives - Kennedy could pray privately in his office.",
        "Schools have a special responsibility to avoid even the appearance of religious endorsement.",
        "His prayers were personal, brief, and quiet - not attempts to convert students or promote religion.",
        "The Establishment Clause requires schools to remain neutral on religious matters.",
        "When a government employee prays publicly, it appears that the government endorses that religion.",
        "Public employees retain their First Amendment rights even while working.",
        "He never required, asked, or pressured students to join his prayers."
    ],
    arizona: [
        "The Constitution gives Congress the exclusive power to make immigration laws.",
        "States have always helped enforce federal laws within their borders.",
        "Federal immigration law is so complete that it leaves no room for state laws.",
        "Arizona's law only copies existing federal requirements and doesn't create new crimes.",
        "The federal government doesn't have enough resources to enforce immigration law everywhere.",
        "State immigration enforcement could interfere with America's relationships with other countries.",
        "Arizona faces special problems from illegal immigration because it borders Mexico.",
        "Different state immigration laws would create confusing and conflicting rules across the country.",
        "The Supremacy Clause makes federal law more important than conflicting state laws.",
        "States have the right to protect their borders and citizens from harm.",
        "State enforcement of immigration law could lead to racial profiling and discrimination.",
        "Federal immigration priorities focus on dangerous criminals, not all undocumented immigrants.",
        "Arizona taxpayers pay high costs for illegal immigration in schools, hospitals, and police services."
    ]
};

// ============================================================
// ARGUMENT SORT CODE MAPPING
// Case pages use short codes (T/D/N/B etc.) in select dropdowns.
// Map them to "petitioner"/"respondent" so debate prep can filter.
// ============================================================
var argSortCodeMap = {
    tinker:  { T: 'petitioner', D: 'respondent' },
    tlo:     { N: 'petitioner', T: 'respondent' },
    brown:   { B: 'petitioner', S: 'respondent' },
    payton:  { P: 'petitioner', N: 'respondent' },
    mahanoy: { M: 'petitioner', B: 'respondent' },
    kennedy: { K: 'petitioner', B: 'respondent' },
    arizona: { A: 'petitioner', U: 'respondent' }
};

// ============================================================
// HELPERS
// ============================================================

// Derive localStorage case key from debate case name
// "Tinker v. Des Moines (1969)" → "tinker" via debateCases[name].caseLink
function getCaseFileKey(caseName) {
    if (typeof debateCases === 'undefined') return null;
    var c = debateCases[caseName];
    if (!c || !c.caseLink) return null;
    return c.caseLink.replace('cases/', '').replace('.html', '');
}

// ============================================================
// EVIDENCE PANEL — "Your Evidence" tab
// ============================================================

function initEvidencePanel(caseName, side) {
    var container = document.getElementById('tab-evidence');
    if (!container) return;

    var caseKey = getCaseFileKey(caseName);
    if (!caseKey) {
        container.innerHTML = '<div class="alert-info">Could not load evidence data for this case.</div>';
        return;
    }

    // Load argument sort data
    var argSortRaw = localStorage.getItem('scotus-sort-' + caseKey);
    var argSort = null;
    try { argSort = argSortRaw ? JSON.parse(argSortRaw) : null; } catch(e) {}

    // Load evidence sort data
    var eSortRaw = localStorage.getItem('scotus-esort-' + caseKey);
    var eSort = null;
    try { eSort = eSortRaw ? JSON.parse(eSortRaw) : null; } catch(e) {}

    var args = argumentData[caseKey] || [];
    var eSortData = (typeof evidenceSortData !== 'undefined') ? evidenceSortData[caseKey] : null;

    // Filter arguments by side
    // Argument sort uses short codes (T/D/N/B etc.), translate to petitioner/respondent
    var codeMap = argSortCodeMap[caseKey] || {};
    var otherSide = (side === 'petitioner') ? 'respondent' : 'petitioner';
    var myArgs = [];
    var otherArgs = [];
    if (argSort && args.length) {
        for (var i = 0; i < args.length; i++) {
            var translatedSide = codeMap[argSort[i]] || argSort[i];
            if (translatedSide === side) {
                myArgs.push({ index: i, text: args[i] });
            } else if (translatedSide === otherSide) {
                otherArgs.push({ index: i, text: args[i] });
            }
        }
    }

    // Filter evidence facts that match student's chosen side
    var myFacts = [];
    if (eSort && eSortData && eSortData.facts) {
        var facts = eSortData.facts;
        for (var j = 0; j < facts.length; j++) {
            if (eSort[j] === side) {
                var feedback = side === 'petitioner' ? facts[j].petitionerFeedback : facts[j].respondentFeedback;
                myFacts.push({ index: j, text: facts[j].text, feedback: feedback, canBeBoth: facts[j].canBeBoth });
            }
        }
    }

    // Load ranking state
    var rankKey = 'scotus-debate-ranks-' + caseKey + '-' + side;
    var ranks = loadRanks(rankKey);

    // Build HTML
    var html = '';

    // Status message if nothing was sorted
    var hasArgs = myArgs.length > 0;
    var hasFacts = myFacts.length > 0;

    if (!hasArgs && !hasFacts) {
        html += '<div class="alert-info" style="margin-top: 0;">';
        html += '<strong>No sorted evidence found.</strong> Complete the Argument Sort activity and the Evidence Sort Challenge on your case page first, then come back here to see your evidence.';
        html += '<br><br><a href="' + (debateCases[caseName] ? debateCases[caseName].caseLink : '#') + '" style="color: var(--accent); font-weight: 600;">Go to your case page &rarr;</a>';
        html += '</div>';
        container.innerHTML = html;
        return;
    }

    html += '<div class="alert-info" style="margin-top: 0;">';
    html += 'These are the arguments and facts you sorted to <strong>your side</strong> on the case page. Star your strongest picks — they\'ll appear as reminders when you write your arguments and sources.';
    html += '</div>';

    // ARGUMENTS SECTION
    if (hasArgs) {
        html += '<div class="ev-panel-section">';
        html += '<h3 class="ev-panel-heading">Your Arguments <span class="ev-panel-count">' + myArgs.length + ' sorted to your side</span></h3>';
        for (var a = 0; a < myArgs.length; a++) {
            var argRanked = ranks.args && ranks.args.indexOf(myArgs[a].index) !== -1;
            html += '<div class="ev-item' + (argRanked ? ' starred' : '') + '" data-type="arg" data-idx="' + myArgs[a].index + '">';
            html += '<button class="ev-star-btn' + (argRanked ? ' active' : '') + '" title="Star this for your debate" aria-label="Star argument">';
            html += argRanked ? '&#9733;' : '&#9734;';
            html += '</button>';
            html += '<div class="ev-item-text">' + escHtmlSafe(myArgs[a].text) + '</div>';
            html += '</div>';
        }
        html += '</div>';
    }

    // FACTS SECTION
    if (hasFacts) {
        html += '<div class="ev-panel-section">';
        html += '<h3 class="ev-panel-heading">Your Facts <span class="ev-panel-count">' + myFacts.length + ' sorted to your side</span></h3>';
        for (var f = 0; f < myFacts.length; f++) {
            var factRanked = ranks.facts && ranks.facts.indexOf(myFacts[f].index) !== -1;
            html += '<div class="ev-item' + (factRanked ? ' starred' : '') + '" data-type="fact" data-idx="' + myFacts[f].index + '">';
            html += '<button class="ev-star-btn' + (factRanked ? ' active' : '') + '" title="Star this for your debate" aria-label="Star fact">';
            html += factRanked ? '&#9733;' : '&#9734;';
            html += '</button>';
            html += '<div class="ev-item-text">';
            html += '<p>' + escHtmlSafe(myFacts[f].text) + '</p>';
            html += '<p class="ev-item-feedback"><em>Why it helps your side:</em> ' + escHtmlSafe(myFacts[f].feedback) + '</p>';
            if (myFacts[f].canBeBoth) {
                html += '<span class="ev-both-badge">Can help both sides</span>';
            }
            html += '</div>';
            html += '</div>';
        }
        html += '</div>';
    }

    // YOUR PICKS SUMMARY
    html += '<div class="ev-picks-summary" id="ev-picks-summary"></div>';

    container.innerHTML = html;

    // Render picks summary
    renderPicksSummary(ranks, myArgs, myFacts);

    // Attach star click handlers via delegation
    container.addEventListener('click', function(e) {
        var starBtn = e.target.closest('.ev-star-btn');
        if (!starBtn) return;

        var item = starBtn.closest('.ev-item');
        var type = item.getAttribute('data-type');
        var idx = parseInt(item.getAttribute('data-idx'));

        // Toggle star
        var arr = type === 'arg' ? ranks.args : ranks.facts;
        var pos = arr.indexOf(idx);
        if (pos !== -1) {
            arr.splice(pos, 1);
            item.classList.remove('starred');
            starBtn.classList.remove('active');
            starBtn.innerHTML = '&#9734;';
        } else {
            arr.push(idx);
            item.classList.add('starred');
            starBtn.classList.add('active');
            starBtn.innerHTML = '&#9733;';
        }

        saveRanks(rankKey, ranks);
        renderPicksSummary(ranks, myArgs, myFacts);
        updateWritingReferences(ranks, myArgs, myFacts, otherArgs);
        updateEvidenceDrawer(ranks, myArgs, myFacts);
    });
}

// ============================================================
// PICKS SUMMARY + WRITING REFERENCES
// ============================================================

function renderPicksSummary(ranks, myArgs, myFacts) {
    var el = document.getElementById('ev-picks-summary');
    if (!el) return;

    var starredArgs = [];
    var starredFacts = [];

    if (ranks.args) {
        for (var i = 0; i < ranks.args.length; i++) {
            for (var a = 0; a < myArgs.length; a++) {
                if (myArgs[a].index === ranks.args[i]) {
                    starredArgs.push(myArgs[a]);
                    break;
                }
            }
        }
    }

    if (ranks.facts) {
        for (var j = 0; j < ranks.facts.length; j++) {
            for (var f = 0; f < myFacts.length; f++) {
                if (myFacts[f].index === ranks.facts[j]) {
                    starredFacts.push(myFacts[f]);
                    break;
                }
            }
        }
    }

    if (starredArgs.length === 0 && starredFacts.length === 0) {
        el.innerHTML = '<p class="ev-picks-empty">Star your strongest arguments and facts above to build your debate picks.</p>';
        return;
    }

    var html = '<h3 class="ev-picks-title">Your Debate Picks</h3>';

    if (starredArgs.length > 0) {
        html += '<div class="ev-picks-group"><h4>Starred Arguments</h4><ol>';
        for (var sa = 0; sa < starredArgs.length; sa++) {
            html += '<li>' + escHtmlSafe(starredArgs[sa].text) + '</li>';
        }
        html += '</ol></div>';
    }

    if (starredFacts.length > 0) {
        html += '<div class="ev-picks-group"><h4>Starred Facts</h4><ol>';
        for (var sf = 0; sf < starredFacts.length; sf++) {
            html += '<li>' + escHtmlSafe(starredFacts[sf].text) + '</li>';
        }
        html += '</ol></div>';
    }

    el.innerHTML = html;
}

function updateWritingReferences(ranks, myArgs, myFacts, otherArgs) {
    // Build starred evidence HTML (used on multiple tabs)
    var starredArgsHtml = '';
    var starredFactsHtml = '';

    if (ranks.args && ranks.args.length > 0) {
        starredArgsHtml = '<strong>Your starred arguments:</strong><ol>';
        for (var i = 0; i < ranks.args.length; i++) {
            for (var a = 0; a < myArgs.length; a++) {
                if (myArgs[a].index === ranks.args[i]) {
                    starredArgsHtml += '<li>' + escHtmlSafe(myArgs[a].text) + '</li>';
                    break;
                }
            }
        }
        starredArgsHtml += '</ol>';
    }

    if (ranks.facts && ranks.facts.length > 0) {
        starredFactsHtml = '<strong>Your starred facts:</strong><ol>';
        for (var j = 0; j < ranks.facts.length; j++) {
            for (var f = 0; f < myFacts.length; f++) {
                if (myFacts[f].index === ranks.facts[j]) {
                    starredFactsHtml += '<li>' + escHtmlSafe(myFacts[f].text) + '</li>';
                    break;
                }
            }
        }
        starredFactsHtml += '</ol>';
    }

    var hasEvidence = starredArgsHtml || starredFactsHtml;

    // ---- Opening Statement: show starred arguments (preview in opening) ----
    var openRef = document.getElementById('ev-opening-reference');
    if (openRef) {
        if (hasEvidence) {
            openRef.innerHTML = '<strong>Your research — use these to preview your arguments:</strong>' +
                (starredArgsHtml ? starredArgsHtml : '') +
                (starredFactsHtml ? starredFactsHtml : '');
            openRef.style.display = 'block';
        } else {
            openRef.style.display = 'none';
        }
    }

    // ---- Arguments tab: show starred arguments + facts ----
    var argRef = document.getElementById('ev-arg-reference');
    if (argRef) {
        if (hasEvidence) {
            argRef.innerHTML = starredArgsHtml + starredFactsHtml;
            argRef.style.display = 'block';
        } else {
            argRef.style.display = 'none';
        }
    }

    // ---- Rebuttals tab: show the OTHER side's arguments ----
    var rebRef = document.getElementById('ev-rebuttals-reference');
    if (rebRef) {
        if (otherArgs && otherArgs.length > 0) {
            var rebHtml = '<strong>The other side\'s arguments — prepare rebuttals for these:</strong><ol>';
            for (var r = 0; r < otherArgs.length; r++) {
                rebHtml += '<li>' + escHtmlSafe(otherArgs[r].text) + '</li>';
            }
            rebHtml += '</ol>';
            rebRef.innerHTML = rebHtml;
            rebRef.style.display = 'block';
        } else {
            rebRef.style.display = 'none';
        }
    }

    // ---- Closing Statement: show starred arguments + facts (summarize) ----
    var closeRef = document.getElementById('ev-closing-reference');
    if (closeRef) {
        if (hasEvidence) {
            closeRef.innerHTML = '<strong>Your strongest evidence — summarize these in your closing:</strong>' +
                (starredArgsHtml ? starredArgsHtml : '') +
                (starredFactsHtml ? starredFactsHtml : '');
            closeRef.style.display = 'block';
        } else {
            closeRef.style.display = 'none';
        }
    }
}

// ============================================================
// RANK PERSISTENCE
// ============================================================

function loadRanks(key) {
    try {
        var raw = localStorage.getItem(key);
        if (raw) {
            var data = JSON.parse(raw);
            return { args: data.args || [], facts: data.facts || [] };
        }
    } catch(e) {}
    return { args: [], facts: [] };
}

function saveRanks(key, ranks) {
    localStorage.setItem(key, JSON.stringify(ranks));
    if (typeof saveToCloud === 'function') saveToCloud(key, ranks);
}

// ============================================================
// STARRED SOURCES — Pull saved sources into debate prep
// ============================================================

function initStarredSources(caseName, side) {
    var srcRef = document.getElementById('ev-src-reference');
    if (!srcRef) return;

    var caseKey = getCaseFileKey(caseName);
    if (!caseKey) return;

    var starredRaw = localStorage.getItem('scotus-starred-sources-' + caseKey);
    var starred = null;
    try { starred = starredRaw ? JSON.parse(starredRaw) : null; } catch(e) {}

    if (!starred || Object.keys(starred).length === 0) return;

    // Build a reference of starred sources for the Sources writing tab
    var html = '<strong>Your saved sources from the Evidence Vault:</strong>';
    html += '<div class="ev-saved-sources">';
    var keys = Object.keys(starred);
    for (var i = 0; i < keys.length; i++) {
        var src = starred[keys[i]];
        html += '<div class="ev-saved-source">';
        html += '<div class="ev-saved-source-title">' + escHtmlSafe(src.title) + '</div>';
        if (src.side) {
            html += '<span class="ev-saved-source-side">' + escHtmlSafe(src.side) + '</span>';
        }
        html += '<div class="ev-saved-source-excerpt">' + escHtmlSafe(src.excerpt) + '</div>';
        if (src.citation) {
            html += '<div class="ev-saved-source-cite"><em>' + escHtmlSafe(src.citation) + '</em></div>';
        }
        html += '</div>';
    }
    html += '</div>';

    srcRef.innerHTML = html;
    srcRef.style.display = 'block';
}

// escHtml is defined in debate.html's inline script.
// Provide a fallback in case this file loads first.
var _escHtmlFallback = function(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};
function escHtmlSafe(str) {
    return (typeof escHtml === 'function') ? escHtml(str) : _escHtmlFallback(str);
}

// ============================================================
// EVIDENCE DRAWER — Floating panel with insert-to-textarea
// ============================================================

var _evDrawerLastTextarea = null;
var _evDrawerTexts = [];
var _evDrawerListenerAttached = false;

function toggleEvidenceDrawer(forceState) {
    var drawer = document.getElementById('ev-drawer');
    var overlay = document.getElementById('ev-drawer-overlay');
    if (!drawer || !overlay) return;

    var shouldOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('open');

    if (shouldOpen) {
        drawer.classList.add('open');
        overlay.classList.add('open');
    } else {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
    }
}

var _evDrawerTrackingInit = false;
function initEvidenceDrawerTracking() {
    if (_evDrawerTrackingInit) return;
    _evDrawerTrackingInit = true;

    // Track last focused textarea for insert functionality
    document.addEventListener('focusin', function(e) {
        if (e.target && e.target.classList && e.target.classList.contains('debate-textarea')) {
            // Remove highlight from previous
            if (_evDrawerLastTextarea && _evDrawerLastTextarea !== e.target) {
                _evDrawerLastTextarea.classList.remove('ev-focus-target');
            }
            _evDrawerLastTextarea = e.target;
            _evDrawerLastTextarea.classList.add('ev-focus-target');

            // Update hint text
            var hint = document.getElementById('ev-drawer-hint');
            var fieldLabel = _evDrawerLastTextarea.getAttribute('placeholder') || '';
            if (fieldLabel.length > 40) fieldLabel = fieldLabel.substring(0, 40) + '...';
            if (hint && fieldLabel) {
                hint.innerHTML = 'Inserting into: <strong>' + escHtmlSafe(fieldLabel) + '</strong>';
            }
        }
    });

    // Close drawer on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') toggleEvidenceDrawer(false);
    });
}

function updateEvidenceDrawer(ranks, myArgs, myFacts) {
    var body = document.getElementById('ev-drawer-body');
    var badge = document.getElementById('ev-drawer-badge');
    var toggle = document.getElementById('ev-drawer-toggle');
    if (!body) return;

    var starredArgs = [];
    var starredFacts = [];

    if (ranks && ranks.args) {
        for (var i = 0; i < ranks.args.length; i++) {
            for (var a = 0; a < myArgs.length; a++) {
                if (myArgs[a].index === ranks.args[i]) {
                    starredArgs.push(myArgs[a]);
                    break;
                }
            }
        }
    }

    if (ranks && ranks.facts) {
        for (var j = 0; j < ranks.facts.length; j++) {
            for (var f = 0; f < myFacts.length; f++) {
                if (myFacts[f].index === ranks.facts[j]) {
                    starredFacts.push(myFacts[f]);
                    break;
                }
            }
        }
    }

    var totalStarred = starredArgs.length + starredFacts.length;

    // Update badge
    if (badge) {
        if (totalStarred > 0) {
            badge.textContent = totalStarred;
            badge.style.display = '';
        } else {
            badge.style.display = 'none';
        }
    }

    // Empty state
    if (totalStarred === 0) {
        body.innerHTML = '<div class="ev-drawer-empty">' +
            '<p>Star your best arguments and facts on the <strong>Your Evidence</strong> tab to see them here.</p>' +
            '<p><button class="starter-option" style="display: inline-block; width: auto;" onclick="showDebateTab(\'evidence\'); toggleEvidenceDrawer(false);">Go to Your Evidence</button></p>' +
            '</div>';
        return;
    }

    var html = '';

    // Store texts in a module-level lookup for safe insertion
    _evDrawerTexts = [];

    // Starred arguments
    if (starredArgs.length > 0) {
        html += '<div class="ev-drawer-section">';
        html += '<div class="ev-drawer-section-title">Starred Arguments (' + starredArgs.length + ')</div>';
        for (var sa = 0; sa < starredArgs.length; sa++) {
            var argIdx = _evDrawerTexts.length;
            _evDrawerTexts.push(starredArgs[sa].text);
            html += '<div class="ev-drawer-item">';
            html += '<div class="ev-drawer-item-text">' + escHtmlSafe(starredArgs[sa].text) + '</div>';
            html += '<button class="ev-drawer-insert-btn" data-drawer-idx="' + argIdx + '">Insert &#8595;</button>';
            html += '</div>';
        }
        html += '</div>';
    }

    // Starred facts
    if (starredFacts.length > 0) {
        html += '<div class="ev-drawer-section">';
        html += '<div class="ev-drawer-section-title">Starred Facts (' + starredFacts.length + ')</div>';
        for (var sf = 0; sf < starredFacts.length; sf++) {
            var factIdx = _evDrawerTexts.length;
            _evDrawerTexts.push(starredFacts[sf].text);
            html += '<div class="ev-drawer-item">';
            html += '<div class="ev-drawer-item-text">' + escHtmlSafe(starredFacts[sf].text) + '</div>';
            if (starredFacts[sf].feedback) {
                html += '<div class="ev-drawer-item-feedback">Why it helps: ' + escHtmlSafe(starredFacts[sf].feedback) + '</div>';
            }
            html += '<button class="ev-drawer-insert-btn" data-drawer-idx="' + factIdx + '">Insert &#8595;</button>';
            html += '</div>';
        }
        html += '</div>';
    }

    body.innerHTML = html;

    // Attach insert handler via delegation (once)
    if (!_evDrawerListenerAttached) {
        _evDrawerListenerAttached = true;
        body.addEventListener('click', function(e) {
            var btn = e.target.closest('.ev-drawer-insert-btn');
            if (!btn) return;
            var idx = parseInt(btn.getAttribute('data-drawer-idx'));
            if (!isNaN(idx) && _evDrawerTexts[idx]) {
                insertDrawerEvidence(btn, _evDrawerTexts[idx]);
            }
        });
    }
}

function insertDrawerEvidence(btn, text) {
    if (!_evDrawerLastTextarea) {
        // Flash the hint to tell them to click a textarea
        var hint = document.getElementById('ev-drawer-hint');
        if (hint) {
            hint.innerHTML = '<strong style="color: #dc2626;">Click in a writing box first!</strong>';
            setTimeout(function() {
                hint.innerHTML = 'Click in any writing box, then use <strong>Insert</strong> to add evidence to your writing.';
            }, 2000);
        }
        return;
    }

    var ta = _evDrawerLastTextarea;
    var current = ta.value;
    var sep = current.trim() ? '\n\n' : '';
    ta.value = current + sep + text;

    // Scroll textarea to bottom to show inserted text
    ta.scrollTop = ta.scrollHeight;

    // Trigger input event so auto-save picks it up
    var evt = new Event('input', { bubbles: true });
    ta.dispatchEvent(evt);

    // Visual feedback on button
    var original = btn.innerHTML;
    btn.innerHTML = 'Inserted &#10003;';
    btn.classList.add('inserted');
    setTimeout(function() {
        btn.innerHTML = original;
        btn.classList.remove('inserted');
    }, 1500);
}
