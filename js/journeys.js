// Case Journeys Timeline Data and Functionality

// Timeline data for all 7 cases
const caseData = {
    tinker: {
        name: "Tinker v. Des Moines",
        shortName: "Tinker",
        events: [
            {
                date: "December 1965",
                type: "incident",
                title: "Students Wear Black Armbands",
                ruling: null,
                standard: "John Tinker (15), Mary Beth Tinker (13), and Christopher Eckhardt (16) wore black armbands to their Des Moines public schools to protest the Vietnam War. School officials had recently adopted a policy banning armbands, and all three students were suspended until they agreed to return without the armbands.",
                simplified: "Three students wore black armbands to school to show they disagreed with the Vietnam War. The school had just made a rule saying no armbands. All three kids were sent home and couldn't come back until they took off the armbands.",
                reasoning: null
            },
            {
                date: "September 1966",
                type: "district",
                title: "U.S. District Court Rules for School",
                ruling: "favor-respondent",
                standard: "The U.S. District Court for the Southern District of Iowa ruled in favor of the school district. The court found that the school's actions were reasonable to prevent disturbance of school discipline, even though no actual disruption had occurred.",
                simplified: "The first court said the school was right. The judge said schools can make rules to keep things calm, even if nothing bad actually happened when the kids wore armbands.",
                reasoning: "The court applied the reasonable forecast standard, allowing schools to restrict speech if they reasonably anticipate disruption."
            },
            {
                date: "November 1967",
                type: "appeals",
                title: "8th Circuit Court Splits Evenly",
                ruling: "mixed",
                standard: "The U.S. Court of Appeals for the Eighth Circuit heard the case and split 4-4, which meant the lower court's decision stood. Because of the tie, no new precedent was set, allowing the case to move to the Supreme Court.",
                simplified: "The next court had 8 judges, and they tied 4 to 4. Half thought the school was right, half thought the students were right. Because of the tie, the school still won, but the case could go to the Supreme Court.",
                reasoning: "An evenly split appeals court automatically affirms the lower court ruling without setting precedent."
            },
            {
                date: "February 24, 1969",
                type: "scotus",
                title: "Supreme Court Rules for Students (7-2)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 7-2 that students do not \"shed their constitutional rights to freedom of speech or expression at the schoolhouse gate.\" The Court held that student speech can only be restricted if it causes substantial disruption or invades the rights of others.",
                simplified: "The Supreme Court said students still have free speech rights at school! They ruled 7 to 2 that schools can only stop students from expressing themselves if it really causes big problems or hurts other people's rights.",
                reasoning: "Justice Fortas wrote that silent, passive expression of opinion that doesn't disrupt school activities is protected by the First Amendment."
            }
        ]
    },
    tlo: {
        name: "New Jersey v. T.L.O.",
        shortName: "T.L.O.",
        events: [
            {
                date: "March 1980",
                type: "incident",
                title: "Student Caught Smoking",
                ruling: null,
                standard: "A teacher at Piscataway High School in New Jersey caught a 14-year-old freshman (known as T.L.O.) smoking in the bathroom. When brought to the assistant principal's office, T.L.O. denied smoking. The assistant principal searched her purse and found cigarettes, rolling papers, marijuana, a pipe, money, and a list of students who owed her money.",
                simplified: "A teacher caught a 14-year-old girl smoking in the bathroom at her New Jersey high school. She said she wasn't smoking. The vice principal looked in her purse and found cigarettes, marijuana, and other things that showed she might be selling drugs.",
                reasoning: null
            },
            {
                date: "1980",
                type: "district",
                title: "Juvenile Court Finds Delinquent",
                ruling: "favor-respondent",
                standard: "The Juvenile Court found T.L.O. delinquent based on the evidence from the search. T.L.O. appealed, arguing the search violated her Fourth Amendment rights and the evidence should be excluded.",
                simplified: "The juvenile court said T.L.O. broke the law based on what they found in her purse. T.L.O. said the search wasn't fair and the evidence shouldn't count.",
                reasoning: "The juvenile court allowed the evidence and found T.L.O. guilty of the charges against her."
            },
            {
                date: "1982",
                type: "appeals",
                title: "New Jersey Supreme Court Rules for Student",
                ruling: "favor-petitioner",
                standard: "The New Jersey Supreme Court reversed the lower court, holding that the search was unreasonable. The court ruled that the Fourth Amendment applies to school searches and that the assistant principal did not have reasonable grounds to search the purse.",
                simplified: "New Jersey's highest state court said the search was wrong. They said the vice principal didn't have a good enough reason to look through T.L.O.'s purse. The evidence couldn't be used against her.",
                reasoning: "The state supreme court applied traditional Fourth Amendment standards requiring probable cause for searches."
            },
            {
                date: "January 15, 1985",
                type: "scotus",
                title: "Supreme Court Rules for School (6-3)",
                ruling: "favor-respondent",
                standard: "The Supreme Court ruled 6-3 that school officials do not need a warrant or probable cause to search students. Instead, searches are legal if they are \"reasonable under all the circumstances.\" The Court found the search of T.L.O.'s purse was reasonable.",
                simplified: "The Supreme Court said schools can search students without the same rules police have to follow. Schools just need a good reason to think a student broke a rule. The search of T.L.O.'s purse was okay because the vice principal had a reason to look.",
                reasoning: "Justice White wrote that schools need flexibility to maintain order, creating the \"reasonable suspicion\" standard for school searches."
            }
        ]
    },
    brown: {
        name: "Brown v. Board of Education",
        shortName: "Brown",
        events: [
            {
                date: "1951",
                type: "incident",
                title: "Oliver Brown Sues Topeka Schools",
                ruling: null,
                standard: "Oliver Brown, along with twelve other parents in Topeka, Kansas, tried to enroll their children in nearby white schools but were denied. The NAACP helped file a lawsuit challenging school segregation. Similar cases were filed in South Carolina, Virginia, Delaware, and Washington D.C.",
                simplified: "Oliver Brown wanted his daughter Linda to go to a school close to home, but she couldn't because it was for white kids only. He and other parents sued, saying this wasn't fair. Other families in different states did the same thing.",
                reasoning: null
            },
            {
                date: "August 1951",
                type: "district",
                title: "District Court Rules for School Board",
                ruling: "favor-respondent",
                standard: "The U.S. District Court ruled against the Browns. While the court acknowledged that segregation harmed Black children psychologically, it upheld the \"separate but equal\" doctrine from Plessy v. Ferguson (1896), finding that Topeka's Black and white schools were substantially equal in facilities.",
                simplified: "The court said the school board could keep schools separate. Even though the judges agreed that separation hurt Black kids' feelings about themselves, they said the law allowed it as long as the Black schools were just as good as white schools.",
                reasoning: "The court followed the 1896 Plessy v. Ferguson ruling that allowed 'separate but equal' facilities."
            },
            {
                date: "1952-1953",
                type: "appeals",
                title: "Cases Combined for Supreme Court",
                ruling: "mixed",
                standard: "The Supreme Court combined Brown with four similar cases from other states (Briggs v. Elliott, Davis v. County School Board, Gebhart v. Belton, and Bolling v. Sharpe). The cases were argued twice before the Court, with the second argument focusing on the intent of the 14th Amendment.",
                simplified: "The Supreme Court decided to hear Brown's case along with four other cases about school segregation from different states. The lawyers argued the case two times because the judges wanted to think carefully about what the Constitution really meant.",
                reasoning: "The Court consolidated cases to address school segregation as a national issue, not just a local one."
            },
            {
                date: "May 17, 1954",
                type: "scotus",
                title: "Supreme Court Rules Segregation Unconstitutional (9-0)",
                ruling: "favor-petitioner",
                standard: "In a unanimous decision, the Supreme Court ruled that \"separate educational facilities are inherently unequal\" and violate the Equal Protection Clause of the 14th Amendment. Chief Justice Warren wrote that segregation generates feelings of inferiority that may affect children's hearts and minds in ways unlikely to ever be undone.",
                simplified: "All nine Supreme Court justices agreed: separating kids by race in schools is always unfair and against the Constitution. The Chief Justice said making Black children go to separate schools makes them feel like they're not as good as white children, and that's wrong.",
                reasoning: "Chief Justice Warren's opinion overturned Plessy v. Ferguson, finding that separate schools can never truly be equal."
            }
        ]
    },
    payton: {
        name: "Payton v. New York",
        shortName: "Payton",
        events: [
            {
                date: "January 1970",
                type: "incident",
                title: "Police Enter Home Without Warrant",
                ruling: null,
                standard: "New York City police had probable cause to arrest Theodore Payton for murder. Without obtaining an arrest warrant, officers went to his apartment, used a crowbar to break open the door, and entered. Payton wasn't home, but police found evidence (a shell casing) in plain view that was used against him at trial.",
                simplified: "Police believed Theodore Payton committed a murder. Instead of getting a warrant from a judge, they broke into his apartment. Payton wasn't there, but the police found a bullet shell that they used as evidence against him.",
                reasoning: null
            },
            {
                date: "1971",
                type: "district",
                title: "Trial Court Allows Evidence",
                ruling: "favor-respondent",
                standard: "The trial court denied Payton's motion to suppress the evidence found in his apartment. Under New York law at the time, police could enter a home to make a felony arrest without a warrant if they had probable cause. Payton was convicted.",
                simplified: "The judge let the police use the bullet shell as evidence. New York's rules said police didn't need a warrant to go into someone's home to arrest them for a serious crime. Payton was found guilty.",
                reasoning: "New York state law permitted warrantless entries for felony arrests with probable cause."
            },
            {
                date: "1978",
                type: "appeals",
                title: "New York Court of Appeals Upholds Conviction",
                ruling: "favor-respondent",
                standard: "New York's highest court affirmed the conviction, ruling that the warrantless entry was constitutional under the Fourth Amendment. The court held that the common law tradition permitted such entries and that requiring warrants would unduly burden law enforcement.",
                simplified: "New York's top state court said the police did nothing wrong. They said requiring warrants to enter homes for arrests would make it too hard for police to do their jobs.",
                reasoning: "The state court relied on historical common law practices that allowed warrantless home arrests."
            },
            {
                date: "April 15, 1980",
                type: "scotus",
                title: "Supreme Court Rules for Payton (6-3)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 6-3 that the Fourth Amendment prohibits police from making a warrantless, nonconsensual entry into a suspect's home to make a routine felony arrest. The Court held that the home receives special Fourth Amendment protection and physical entry requires a warrant absent exigent circumstances.",
                simplified: "The Supreme Court said police must get a warrant before entering someone's home to arrest them, unless there's an emergency. The Court said people's homes deserve extra protection. The evidence found in Payton's apartment couldn't be used.",
                reasoning: "Justice Stevens wrote that the home is entitled to special protection, and routine arrests don't justify bypassing the warrant requirement."
            }
        ]
    },
    mahanoy: {
        name: "Mahanoy Area School District v. B.L.",
        shortName: "Mahanoy",
        events: [
            {
                date: "May 2017",
                type: "incident",
                title: "Student Posts Snapchat Rant",
                ruling: null,
                standard: "B.L., a 14-year-old sophomore, was upset about not making the varsity cheerleading squad. On a Saturday, from off campus, she posted a Snapchat showing herself with her middle finger raised and the caption \"F*** school f*** softball f*** cheer f*** everything.\" A screenshot reached school coaches, and B.L. was suspended from the junior varsity squad for a year.",
                simplified: "A 14-year-old girl was upset she didn't make the varsity cheerleading team. That weekend, away from school, she posted an angry message on Snapchat with bad words about school and cheerleading. Someone showed it to the coaches, and she was kicked off the JV team for a whole year.",
                reasoning: null
            },
            {
                date: "2017",
                type: "district",
                title: "District Court Rules for Student",
                ruling: "favor-petitioner",
                standard: "The U.S. District Court ruled in favor of B.L., finding that her off-campus speech was protected by the First Amendment. The court held that the school could not discipline her for speech made outside of school that did not cause substantial disruption.",
                simplified: "The first court said B.L. was right. The judge said schools can't punish students for things they say outside of school, especially when it didn't cause any real problems at school.",
                reasoning: "The court applied Tinker's substantial disruption test and found no evidence of disruption."
            },
            {
                date: "June 2020",
                type: "appeals",
                title: "3rd Circuit Affirms for Student",
                ruling: "favor-petitioner",
                standard: "The Third Circuit Court of Appeals affirmed, going further to hold that Tinker does not apply to off-campus student speech at all. The court ruled that schools generally cannot regulate what students say when they're not at school.",
                simplified: "The appeals court agreed with B.L. and went even further. They said schools have no power to punish students for anything they say outside of school. The school appealed to the Supreme Court.",
                reasoning: "The appeals court created a bright-line rule that off-campus speech is beyond school authority."
            },
            {
                date: "June 23, 2021",
                type: "scotus",
                title: "Supreme Court Rules for Student (8-1)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 8-1 that the school violated B.L.'s First Amendment rights. However, the Court declined to adopt a bright-line rule, holding that schools may sometimes regulate off-campus speech, but features of off-campus speech (speaking as private citizens, 24/7 school control concerns, parents' role) diminish schools' regulatory interest.",
                simplified: "The Supreme Court said B.L.'s punishment was wrong, with 8 justices agreeing. But they didn't say schools can never punish off-campus speech. They said schools usually shouldn't, but might be able to in some cases like severe bullying.",
                reasoning: "Justice Breyer wrote that while Tinker can apply off-campus, schools have a diminished interest in regulating speech made away from school."
            }
        ]
    },
    kennedy: {
        name: "Kennedy v. Bremerton School District",
        shortName: "Kennedy",
        events: [
            {
                date: "2008-2015",
                type: "incident",
                title: "Coach Prays on Football Field",
                ruling: null,
                standard: "Joseph Kennedy, a high school football coach in Bremerton, Washington, began kneeling at the 50-yard line after games to offer a brief, quiet prayer. Over time, students joined him. After the school district learned of the practice, they offered him private locations to pray, but he insisted on continuing at midfield. He was placed on administrative leave and not rehired.",
                simplified: "A high school football coach started kneeling and praying on the field after games. Some players started joining him. The school asked him to pray somewhere private instead, but he wanted to keep praying on the field. The school stopped letting him coach.",
                reasoning: null
            },
            {
                date: "2017",
                type: "district",
                title: "District Court Rules for School",
                ruling: "favor-respondent",
                standard: "The U.S. District Court granted summary judgment to the school district, finding that Kennedy's prayers were government speech (as a public employee acting in his official capacity) that the district could restrict to avoid Establishment Clause violations.",
                simplified: "The first court said the school was right. The judge said when a coach prays at a school game, it looks like the school is promoting religion, which isn't allowed.",
                reasoning: "The court found Kennedy was acting as a government employee, not a private citizen, when praying on the field."
            },
            {
                date: "March 2021",
                type: "appeals",
                title: "9th Circuit Affirms for School District",
                ruling: "favor-respondent",
                standard: "The Ninth Circuit affirmed, holding that Kennedy's prayers were not protected private speech because he was speaking as a public employee in the scope of his duties. The court found the school district had legitimate concerns about appearing to endorse religion.",
                simplified: "The appeals court agreed with the school. They said a coach is working for the school during games, so his prayers look like the school's prayers. Schools can't appear to support one religion.",
                reasoning: "The appeals court applied the government speech doctrine, finding coaches on duty represent the school."
            },
            {
                date: "June 27, 2022",
                type: "scotus",
                title: "Supreme Court Rules for Coach (6-3)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 6-3 that the school district violated Kennedy's First Amendment rights to free speech and free exercise of religion. The Court held that Kennedy's prayers were private speech, not government speech, and that the Establishment Clause does not require the government to suppress private religious expression.",
                simplified: "The Supreme Court said the coach should be allowed to pray. Six justices said his quiet prayers were his own personal choice, not the school telling people to pray. Schools don't have to stop people from praying on their own.",
                reasoning: "Justice Gorsuch wrote that the Constitution neither mandates nor permits the government to suppress private religious expression."
            }
        ]
    },
    arizona: {
        name: "Arizona v. Gant",
        shortName: "Arizona",
        events: [
            {
                date: "August 1999",
                type: "incident",
                title: "Police Search Car After Arrest",
                ruling: null,
                standard: "Rodney Gant was arrested for driving with a suspended license in Tucson, Arizona. After handcuffing him and placing him in a patrol car, officers searched his vehicle and found cocaine in a jacket pocket. Gant was charged with drug possession based on evidence from this search.",
                simplified: "Police arrested Rodney Gant for driving without a valid license. After they handcuffed him and put him in a police car, they searched his car and found drugs in a jacket. They charged him with having drugs because of what they found.",
                reasoning: null
            },
            {
                date: "2002",
                type: "district",
                title: "Trial Court Allows Evidence",
                ruling: "favor-respondent",
                standard: "The trial court denied Gant's motion to suppress the cocaine, relying on New York v. Belton (1981), which had been interpreted to allow police to search a vehicle's passenger compartment whenever they arrested a recent occupant, regardless of the circumstances.",
                simplified: "The first court said police could use the drugs as evidence. They followed an old rule that said police can always search a car after arresting someone from it. Gant was found guilty.",
                reasoning: "Courts had broadly interpreted the Belton rule to permit vehicle searches incident to any arrest."
            },
            {
                date: "2006",
                type: "appeals",
                title: "Arizona Supreme Court Reverses",
                ruling: "favor-petitioner",
                standard: "The Arizona Supreme Court reversed, holding that the search violated the Fourth Amendment. The court found that once Gant was secured in the patrol car, he could not access his vehicle, so the justification for a search incident to arrest (officer safety and evidence preservation) did not apply.",
                simplified: "Arizona's highest court said the search was wrong. They said once Gant was locked in the police car, he couldn't reach anything in his own car. So police had no good reason to search it without a warrant.",
                reasoning: "The state court returned to the original purposes behind the search-incident-to-arrest exception."
            },
            {
                date: "April 21, 2009",
                type: "scotus",
                title: "Supreme Court Affirms for Gant (5-4)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 5-4 that police may search a vehicle incident to arrest only if the arrestee is unsecured and within reaching distance of the passenger compartment, OR if it's reasonable to believe evidence of the crime of arrest might be found in the vehicle. Since Gant was secured and arrested for a license violation (no evidence to find), the search was unconstitutional.",
                simplified: "The Supreme Court agreed with Gant, 5 to 4. They said police can only search a car after an arrest if the person can still reach inside OR if there might be evidence of the crime inside. Since Gant was locked up and there was no evidence of his crime to find, the search was illegal.",
                reasoning: "Justice Stevens clarified Belton, limiting vehicle searches to situations with genuine safety or evidentiary justifications."
            }
        ]
    }
};

// DOM Elements
let selectedCases = [];
let currentReadingLevel = 'standard';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dropdown
    initDropdown();

    // Initialize reading level toggle
    initReadingLevel();

    // Initialize case buttons
    initCaseButtons();
});

function initDropdown() {
    const dropdown = document.querySelector('.nav-dropdown');
    const btn = dropdown?.querySelector('.nav-dropdown-btn');

    if (!dropdown || !btn) return;

    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', dropdown.classList.contains('open'));
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
}

function initReadingLevel() {
    const levelBtns = document.querySelectorAll('.level-btn');

    levelBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            levelBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            currentReadingLevel = this.dataset.level;
            document.body.classList.toggle('reading-simplified', currentReadingLevel === 'simplified');

            // Re-render timeline with new reading level
            renderTimeline();
        });
    });
}

function initCaseButtons() {
    const caseButtons = document.querySelectorAll('.case-btn');
    const clearAllBtn = document.getElementById('clear-all');

    caseButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const caseId = this.dataset.case;

            if (this.classList.contains('selected')) {
                // Deselect
                this.classList.remove('selected');
                selectedCases = selectedCases.filter(c => c !== caseId);
            } else {
                // Select
                this.classList.add('selected');
                selectedCases.push(caseId);
            }

            // Show/hide clear button
            clearAllBtn.style.display = selectedCases.length > 0 ? 'inline-block' : 'none';

            // Render timeline
            renderTimeline();
        });
    });

    clearAllBtn.addEventListener('click', function() {
        selectedCases = [];
        caseButtons.forEach(btn => btn.classList.remove('selected'));
        this.style.display = 'none';
        renderTimeline();
    });
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    const emptyState = document.getElementById('timeline-empty');
    const legend = document.getElementById('timeline-legend');

    if (selectedCases.length === 0) {
        timeline.innerHTML = '';
        emptyState.style.display = 'block';
        legend.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    legend.style.display = 'block';

    // Collect all events from selected cases
    let allEvents = [];
    selectedCases.forEach(caseId => {
        const caseInfo = caseData[caseId];
        caseInfo.events.forEach(event => {
            allEvents.push({
                ...event,
                caseId: caseId,
                caseName: caseInfo.shortName,
                sortDate: parseDateForSort(event.date)
            });
        });
    });

    // Sort by date
    allEvents.sort((a, b) => a.sortDate - b.sortDate);

    // Render events
    timeline.innerHTML = allEvents.map(event => createEventHTML(event)).join('');
}

function parseDateForSort(dateStr) {
    // Parse dates like "December 1965", "1980", "May 17, 1954"
    const months = {
        'January': 0, 'February': 1, 'March': 2, 'April': 3,
        'May': 4, 'June': 5, 'July': 6, 'August': 7,
        'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    // Try "Month Day, Year" format
    let match = dateStr.match(/(\w+)\s+(\d+),\s+(\d+)/);
    if (match) {
        return new Date(parseInt(match[3]), months[match[1]] || 0, parseInt(match[2]));
    }

    // Try "Month Year" format
    match = dateStr.match(/(\w+)\s+(\d+)/);
    if (match && months[match[1]] !== undefined) {
        return new Date(parseInt(match[2]), months[match[1]], 15);
    }

    // Try year only
    match = dateStr.match(/(\d{4})/);
    if (match) {
        return new Date(parseInt(match[1]), 6, 1);
    }

    return new Date(1900, 0, 1);
}

function createEventHTML(event) {
    const content = currentReadingLevel === 'simplified' ? event.simplified : event.standard;

    let rulingHTML = '';
    if (event.ruling) {
        const rulingLabels = {
            'favor-petitioner': 'Ruled for Petitioner',
            'favor-respondent': 'Ruled for Respondent',
            'mixed': 'Split/Mixed Decision'
        };
        rulingHTML = `<span class="card-ruling ${event.ruling}">${rulingLabels[event.ruling]}</span>`;
    }

    let reasoningHTML = '';
    if (event.reasoning) {
        reasoningHTML = `<div class="card-reasoning"><strong>Key Reasoning:</strong> ${event.reasoning}</div>`;
    }

    const typeLabels = {
        'incident': 'Initial Incident',
        'district': 'District/Trial Court',
        'appeals': 'Appeals Court',
        'scotus': 'Supreme Court'
    };

    return `
        <div class="timeline-event ${event.type}">
            <div class="timeline-card">
                <div class="card-header">
                    <span class="card-date">${event.date}</span>
                    <span class="card-case-tag ${event.caseId}">${event.caseName}</span>
                    <span class="card-type">${typeLabels[event.type]}</span>
                </div>
                <h3 class="card-title">${event.title}</h3>
                ${rulingHTML}
                <div class="card-content">${content}</div>
                ${reasoningHTML}
            </div>
        </div>
    `;
}
