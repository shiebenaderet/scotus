// Shared prep data for all seven cases.
// Prep materials stay pre-decision: no holdings, votes, or quotes from THIS case.

var CASE_PREP_DATA = {
    tinker: {
        shortTitle: 'Tinker v. Des Moines',
        petitioner: { name: 'Tinker family (the students)', legal: 'Petitioner' },
        respondent: { name: 'Des Moines schools', legal: 'Respondent' },
        amendment: 'First Amendment — Freedom of Speech',
        question: 'May a public school ban silent political armbands because officials fear disruption?',
        drivingFrame: 'This case is about whether a school may limit student free speech to keep order — even when the speech is silent and no disruption has happened yet.',
        tests: {
            petitioner: {
                title: 'Proven substantial disruption',
                text: 'Schools may punish student speech only if they can show it actually interferes with class, or that disruption is about to happen based on real facts — not a guess or a dislike of the message.'
            },
            respondent: {
                title: 'Reasonable forecast of disruption',
                text: 'Educators who know their students should be able to step in before a protest explodes. If a reasonably careful principal can see conflict coming, the school may ban the symbol to protect learning.'
            }
        },
        theorySamples: {
            petitioner: [
                'Mary Beth Tinker, John Tinker, and Christopher Eckhardt — public school students in Des Moines.',
                'They wore silent black armbands to protest the Vietnam War. The school banned only those armbands and suspended them.',
                'May a public school punish silent political expression based on fear of disruption?',
                'The First Amendment says the government may not abridge freedom of speech. Public schools are the government.',
                'The Court should hold that schools may not ban political symbols unless they prove actual, substantial disruption.',
                'A “ban first, prove harm never” rule would let officials silence any unpopular view.'
            ],
            respondent: [
                'The Des Moines Independent Community School District.',
                'Administrators learned of a planned armband protest during a bitterly divided war, created a district-wide ban, and suspended students who refused to remove the armbands.',
                'May schools act to prevent disruption of learning before a protest gets out of hand?',
                'Schools stand in place of parents during the day and must keep a safe, orderly classroom.',
                'The Court should hold that schools may restrict student symbols when officials reasonably forecast disruption.',
                'Waiting for a fight or a walkout puts other students’ education at risk and second-guesses principals from hundreds of miles away.'
            ]
        },
        weighing: {
            petitioner: [
                'Armbands are silent symbolic speech protected like other non-verbal expression.',
                'Only a few of about 18,000 students wore them. There were no fights, threats, or walkouts.',
                'The school allowed campaign buttons and Iron Crosses, but banned only the anti-war armbands.',
                'Students do not give up constitutional rights when they walk into a public school.'
            ],
            respondent: [
                'The Vietnam War split the country; a former student had been killed; officials feared conflict.',
                'Officials said they reasonably expected argument and classroom distraction — they did not have to wait for a riot.',
                'Teachers and principals know their buildings better than judges and should get deference.',
                'Schools exist to educate, and they may teach when and where political protest is appropriate.'
            ]
        },
        hardSide: null,
        hotBench: [
            { q: 'If we rule for the students, what happens when a student wears a swastika or a Klan symbol?', tip: 'Distinguish political protest from speech that targets other students or threatens safety.' },
            { q: 'The school did not wait for a riot. Why should it have to wait?', tip: 'Ask what facts, if any, made disruption more than a guess.' },
            { q: 'Why isn’t a two-inch cloth strip a classroom distraction by itself?', tip: 'Compare armbands to buttons, jewelry, or sports logos the school already allowed.' },
            { q: 'Does it matter that only a few of 18,000 students wore armbands, and five were suspended?', tip: 'Small numbers cut both ways: low disruption risk, or a ban that singled out a tiny unpopular group.' },
            { q: 'If principals may ban speech they think will cause trouble, what speech is safe?', tip: 'Unpopular speech is the speech that most needs a clear legal test.' },
            { q: 'The students knew the rule and broke it. Why shouldn’t that end the case?', tip: 'A rule cannot make an unconstitutional ban legal just because students were warned.' },
            { q: 'Should middle-schoolers have the same speech rights as adults downtown?', tip: 'You can admit some school authority without giving up all political speech.' },
            { q: 'Counsel, state the exact rule you want us to write. One sentence.', tip: 'Practice until you can say your test without notes.' }
        ],
        pair: {
            other: 'Mahanoy v. B.L.',
            href: 'mahanoy.html',
            prompt: 'Tinker is silent, on-campus, political speech. Mahanoy is vulgar, off-campus, social media speech. What should “disruption” mean in each place?'
        },
        sources: [
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'First Amendment text',
                excerpt: '“Congress shall make no law … abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble …” Public schools are part of government, so this limit applies to them.',
                citation: 'U.S. Const. amend. I.'
            },
            {
                type: 'statute', typeLabel: 'School policy',
                title: 'The armband ban',
                excerpt: 'After hearing of the planned protest, Des Moines principals adopted a policy: any student wearing a black armband would be asked to remove it; refusal meant suspension.',
                citation: 'Tinker v. Des Moines Indep. Cmty. Sch. Dist., case record (policy adopted Dec. 1965).'
            },
            {
                type: 'court', typeLabel: 'Lower court',
                title: 'District court sided with the school',
                excerpt: 'Judge Stephenson held that schools need not wait for a “material or substantial” disruption. If disturbance is reasonably to be anticipated, a ban meant to prevent it can stand. He upheld the armband rule on that forecast.',
                citation: 'Tinker v. Des Moines Indep. Cmty. Sch. Dist., 258 F. Supp. 971 (S.D. Iowa 1966).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Stromberg v. California (1931)',
                excerpt: 'The Supreme Court held that displaying a red flag as a political symbol was protected expression. Speech is not only spoken words.',
                citation: 'Stromberg v. California, 283 U.S. 359 (1931).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'West Virginia v. Barnette (1943)',
                excerpt: 'The Court held that public schools could not force students to salute the flag or recite the Pledge — even during World War II. Officials may not compel patriotism.',
                citation: 'W. Va. State Bd. of Educ. v. Barnette, 319 U.S. 624 (1943).'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Other symbols were allowed',
                excerpt: 'Students wore political campaign buttons and some wore Iron Crosses. The new rule targeted black armbands protesting the Vietnam War, not all political clothing.',
                citation: 'Tinker case record; U.S. Courts, Facts and Case Summary — Tinker v. Des Moines.'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Scale of the protest',
                excerpt: 'Only a few of the district’s roughly 18,000 students wore armbands. Five students were suspended. Mary Beth wore hers through morning classes; in afternoon mathematics she was sent to the office and then home. John Tinker wore his the next day, December 17.',
                citation: 'Tinker case record (Dec. 16–17, 1965); U.S. Courts, Facts and Case Summary — Tinker v. Des Moines.'
            },
            {
                type: 'news', typeLabel: 'Context',
                title: 'A divided war at home',
                excerpt: 'By late 1965 the United States had committed large numbers of troops to Vietnam. Des Moines administrators noted a former student had been killed and worried the armbands would inflame students.',
                citation: 'Historical context from the Tinker record and contemporary reporting on U.S. troop levels, 1965.'
            }
        ]
    },

    tlo: {
        shortTitle: 'New Jersey v. T.L.O.',
        petitioner: { name: 'New Jersey (the State)', legal: 'Petitioner' },
        respondent: { name: 'T.L.O. (the student)', legal: 'Respondent' },
        amendment: 'Fourth Amendment — Search and Seizure',
        question: 'May a school official search a student’s purse without a warrant, and if so, how much suspicion is enough?',
        drivingFrame: 'This case is about whether student privacy must yield so schools can enforce rules and keep drugs out of the building.',
        tests: {
            petitioner: {
                title: 'Reasonableness in school',
                text: 'School officials are not police. If a search is justified at the start and is not overly intrusive given the student’s age and the infraction, it should be allowed without a warrant or probable cause.'
            },
            respondent: {
                title: 'Warrant or probable cause',
                text: 'A purse is private. The Fourth Amendment normally requires a warrant and probable cause. Being a student should not mean officials can rummage through personal belongings on a hunch.'
            }
        },
        theorySamples: {
            petitioner: [
                'The State of New Jersey, standing behind Assistant Vice Principal Choplick and Piscataway High School.',
                'A teacher caught T.L.O. smoking in a restroom. She denied it. Choplick opened her purse, saw cigarettes, then rolling papers, then evidence of drug sales.',
                'Must school officials get a warrant before searching a student who has just broken a school rule?',
                'The Fourth Amendment bans unreasonable searches — it does not always require a warrant, especially where schools must keep order.',
                'The Court should hold that a school search is legal if it is reasonable under the circumstances, not if police-style probable cause exists.',
                'A warrant rule would freeze discipline. Drugs and weapons do not wait for a judge.'
            ],
            respondent: [
                'T.L.O., a 14-year-old freshman whose name is initials to protect her privacy.',
                'She was accused of smoking in a restroom, denied it, and her purse was opened and then emptied — letters, money, and private papers included.',
                'Does the Fourth Amendment still protect a student’s personal belongings at school?',
                'People have the right to be secure in their “persons, houses, papers, and effects” against unreasonable searches. A purse is an “effect.”',
                'The Court should hold that school officials need probable cause — and usually a warrant — before a full search of a purse.',
                'If a denial of an accusation is enough to dump out a purse, students have almost no privacy left.'
            ]
        },
        weighing: {
            petitioner: [
                'A teacher saw the rule violation; the first look in the purse immediately confirmed cigarettes.',
                'Rolling papers in plain view gave a new reason to look further for drugs.',
                'Schools act in place of parents and cannot wait for warrants during the school day.',
                'Requiring police standards would make it nearly impossible to keep drugs and weapons out.'
            ],
            respondent: [
                'A purse holds diaries, letters, and other highly personal items — not just school supplies.',
                'Denying an accusation should not by itself authorize a full search.',
                'The exclusionary rule exists so officials cannot benefit from illegal searches (Mapp v. Ohio).',
                'Tinker said students do not shed constitutional rights at the schoolhouse gate — including the Fourth Amendment.'
            ]
        },
        hardSide: {
            title: 'Watch the party labels',
            html: '<p>In this case the <strong>State of New Jersey is the petitioner</strong> (it asked the Supreme Court to hear the case). <strong>T.L.O., the student, is the respondent</strong>. Petitioner does not mean “the victim” or “the kid.” Know which side you represent before you speak.</p>'
        },
        hotBench: [
            { q: 'If the first look found cigarettes, why keep searching letters and a money list?', tip: 'Each extra step needs its own reason. Argue whether rolling papers changed the situation.' },
            { q: 'Should a locker, a purse, and a phone all get the same privacy?', tip: 'Schools own lockers; students own purses and phones. Use that difference.' },
            { q: 'The school allows smoking in designated areas. Why search at all?', tip: 'The issue was the restroom rule, then a possible lie, then drugs — keep the chain clear.' },
            { q: 'If we require warrants, how does a principal handle a rumor of a knife in a backpack?', tip: 'You can argue for a school standard without saying students have zero privacy.' },
            { q: 'Does “in loco parentis” mean a principal may do anything a parent could do at home?', tip: 'Parents are not the government. Principals are.' },
            { q: 'T.L.O. was 14. Should age change the standard?', tip: 'Intrusiveness can depend on age; the constitutional text does not vanish because someone is young.' },
            { q: 'If the search was illegal, should the marijuana still be usable in juvenile court?', tip: 'That is the exclusionary rule question — separate from whether the school may discipline her.' },
            { q: 'Counsel, state your test in one sentence.', tip: 'Reasonable suspicion vs. probable cause vs. warrant. Pick one and defend it.' }
        ],
        pair: {
            other: 'Payton v. New York',
            href: 'payton.html',
            prompt: 'T.L.O. is a school purse. Payton is a home. Why might the Fourth Amendment treat those places differently?'
        },
        sources: [
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Fourth Amendment text',
                excerpt: '“The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause…”',
                citation: 'U.S. Const. amend. IV.'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'The restroom report',
                excerpt: 'A teacher found T.L.O. and another student in a school restroom; smoking was allowed in designated areas of Piscataway High but not in restrooms. One student admitted smoking; T.L.O. denied smoking at all.',
                citation: 'T.L.O. case record (incident of March 7, 1980).'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'What the purse contained',
                excerpt: 'The search found cigarettes, rolling papers, a small amount of marijuana, a pipe, empty bags, a substantial amount of one-dollar bills, an index card of names owing money, and two letters suggesting marijuana sales.',
                citation: 'T.L.O. case record (Piscataway High School search, March 7, 1980).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Tinker’s schoolhouse-gate line',
                excerpt: 'In 1969 the Court said students do not “shed their constitutional rights to freedom of speech or expression at the schoolhouse gate.” T.L.O. argues the same idea should protect privacy, not only speech.',
                citation: 'Tinker v. Des Moines Indep. Cmty. Sch. Dist., 393 U.S. 503 (1969).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Mapp v. Ohio (1961)',
                excerpt: 'The Court held that evidence from an illegal search cannot be used in state court. T.L.O. asked the juvenile court to throw out the purse evidence for that reason.',
                citation: 'Mapp v. Ohio, 367 U.S. 643 (1961).'
            },
            {
                type: 'legal', typeLabel: 'Legal idea',
                title: 'In loco parentis',
                excerpt: 'Schools have long claimed authority “in place of parents” during the school day — setting rules, searching for contraband, and disciplining students without acting like police on the street.',
                citation: 'Common-law doctrine of in loco parentis, as argued by school officials in T.L.O.'
            },
            {
                type: 'court', typeLabel: 'State court',
                title: 'New Jersey Supreme Court concern',
                excerpt: 'New Jersey’s highest court concluded the Fourth Amendment applies in schools and that this purse search went too far — which is why the State asked the U.S. Supreme Court to step in.',
                citation: 'State in Interest of T.L.O., 94 N.J. 331 (1983).'
            },
            {
                type: 'government', typeLabel: 'School context',
                title: 'Safety vs. speed',
                excerpt: 'School officials argued they must respond in minutes, not days: if a student may have drugs or a weapon, waiting for a magistrate would make the search pointless.',
                citation: 'Briefing arguments for New Jersey in New Jersey v. T.L.O.'
            }
        ]
    },

    brown: {
        shortTitle: 'Brown v. Board of Education',
        petitioner: { name: 'Brown family and other parents', legal: 'Petitioner' },
        respondent: { name: 'Topeka Board of Education', legal: 'Respondent' },
        amendment: 'Fourteenth Amendment — Equal Protection',
        question: 'May a state require racially separate public schools if it claims the buildings and books are equal?',
        drivingFrame: 'This case is not mainly “safety vs. rights.” It asks whether “equal protection of the laws” allows a state to separate children by race.',
        tests: {
            petitioner: {
                title: 'Separate is unequal',
                text: 'Racial separation by law stamps Black children as inferior. Even matching buildings cannot make the treatment equal under the Fourteenth Amendment.'
            },
            respondent: {
                title: 'Separate but equal + local control',
                text: 'Plessy v. Ferguson (1896) allows separation if facilities are equal. Education is a state job. Topeka’s Black and white schools were found substantially equal in buildings, so the Constitution is satisfied.'
            }
        },
        theorySamples: {
            petitioner: [
                'Oliver Brown, Linda Brown, and the other families who were turned away from neighborhood schools because of race.',
                'Linda had to travel through a railroad yard to a Black school while a white school sat seven blocks from home. Kansas law allowed that separation.',
                'Does forced racial segregation in public schools deny equal protection of the laws?',
                'The Fourteenth Amendment says no state shall deny any person the equal protection of the laws.',
                'The Court should hold that state-mandated racial separation in public education is itself unequal, even if buildings look similar.',
                'A rule that “matching desks make segregation legal” would freeze a racial caste system into public school.'
            ],
            respondent: [
                'The Board of Education of Topeka, acting under Kansas law that allowed cities to operate separate elementary schools.',
                'The district court found Topeka’s Black and white elementary schools substantially equal in facilities, transportation, and teachers, while still following Plessy.',
                'May a state assign students by race when it provides comparable school facilities?',
                'Plessy said separate facilities for the races are constitutional if they are equal. Education has always been run by states and school boards, not by the Supreme Court.',
                'The Court should hold that as long as facilities are equal, the Equal Protection Clause does not require mixed classrooms, and local voters should set school policy.',
                'A nationwide mixing order would turn this Court into a national school board and overturn 58 years of precedent without a constitutional amendment.'
            ]
        },
        weighing: {
            petitioner: [
                'Linda’s travel burden existed only because of race, not because the nearby school was full.',
                'Sweatt v. Painter (1950) already said “equal” means more than bricks — reputation and opportunity matter.',
                'Social science and the Clarks’ doll research were offered to show segregation harms children’s sense of self.',
                'The Fourteenth Amendment was meant to end state racial caste after the Civil War.'
            ],
            respondent: [
                'Plessy v. Ferguson is the governing precedent until the Court or the country changes it.',
                'The Topeka trial court found the schools substantially equal in tangible things.',
                'The Constitution does not mention education; states traditionally run schools.',
                'A sudden nationwide rule would disrupt school systems that have operated this way for generations.'
            ]
        },
        hardSide: {
            title: 'How to argue for the Board — and what you may not argue',
            html: '<p>The Board’s real 1950s legal theory was <strong>precedent (Plessy), equal facilities, and local/state control of schools</strong> — not a claim that Black children are inferior. You may argue those legal points. You may <strong>not</strong> argue racism as a good idea, use slurs, or claim one race is smarter or more deserving.</p><p>After the debate, you will study why a unanimous Court rejected even the “polite” version of separate-but-equal. The point of taking this side is to understand how a harmful system defended itself in court — then to be able to defeat that defense.</p>'
        },
        hotBench: [
            { q: 'If the buildings are equal, where is the constitutional harm?', tip: 'Petitioners: harm is the message of the law. Respondents: the Clause is about facilities and legal rights, not feelings.' },
            { q: 'Why shouldn’t this Court just follow Plessy?', tip: 'Petitioners must explain when precedent should be overruled. Respondents must explain why stability matters.' },
            { q: 'Education is not in the Constitution. Why is this our problem?', tip: 'Equal protection limits how a state may run whatever schools it chooses to run.' },
            { q: 'Sweatt was about a law school. Why does that matter for third grade?', tip: 'Intangibles (prestige, networks) exist in elementary school too — or don’t, if you are the Board.' },
            { q: 'If we rule for the families, what happens to rural districts next month?', tip: 'Counsel should have a practical answer, not only a moral one.' },
            { q: 'If we rule for the Board, what stops a state from separating students in courthouses too?', tip: 'Respondents must show a limiting principle; petitioners should press the slide.' },
            { q: 'Does “equal protection” mean equal funding, or only the same legal right to enroll?', tip: 'Stay on the question actually presented: race-based assignment by law.' },
            { q: 'Counsel, state your test in one sentence.', tip: 'Inherently unequal vs. equal facilities plus Plessy.' }
        ],
        pair: {
            other: 'the unit driving question',
            href: '../index.html',
            prompt: 'Brown is about equal protection, not “community safety.” How is “tradition” or “local control” different from a real public-safety limit on a right?'
        },
        sources: [
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Equal Protection Clause',
                excerpt: '“No State shall … deny to any person within its jurisdiction the equal protection of the laws.”',
                citation: 'U.S. Const. amend. XIV, § 1.'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Plessy v. Ferguson (1896)',
                excerpt: 'The Court allowed a Louisiana law separating railway cars by race, so long as the accommodations were equal. That “separate but equal” idea is the Board’s strongest legal shield.',
                citation: 'Plessy v. Ferguson, 163 U.S. 537 (1896).'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Linda Brown’s route to school',
                excerpt: 'Linda, age 9, walked through a railroad switchyard and rode a bus to Monroe Elementary (designated for Black children). Sumner Elementary, for white children, was about seven blocks from her home.',
                citation: 'National Archives; Brown v. Board case history (Topeka facts).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Sweatt v. Painter (1950)',
                excerpt: 'Texas created a new Black law school rather than admit Heman Sweatt to the University of Texas. The Court said equal means more than walls: reputation, faculty, and alumni networks mattered.',
                citation: 'Sweatt v. Painter, 339 U.S. 629 (1950).'
            },
            {
                type: 'court', typeLabel: 'Lower court',
                title: 'Topeka trial findings',
                excerpt: 'The three-judge district court found segregation harmful to Black children but held that Topeka’s Black and white elementary schools were substantially equal in facilities, so Plessy still controlled.',
                citation: 'Brown v. Board of Education, 98 F. Supp. 797 (D. Kan. 1951).'
            },
            {
                type: 'statute', typeLabel: 'State law',
                title: 'Kansas segregation statute',
                excerpt: 'Kansas law allowed cities of the first class (in practice, cities over 15,000 people) to maintain separate elementary schools for white and Black children. Topeka used that authority for grades 1–6. Its junior and senior high schools were not segregated.',
                citation: 'Kan. Gen. Stat. § 72-1724 (1949); Brown v. Board of Education, 98 F. Supp. 797 (D. Kan. 1951).'
            },
            {
                type: 'academic', typeLabel: 'Social science',
                title: 'Evidence of psychological harm',
                excerpt: 'NAACP lawyers offered research, including Kenneth and Mamie Clark’s doll studies, to show that legal segregation damaged Black children’s self-image — an argument that facilities-alone tests miss.',
                citation: 'Social science appendix, Brown litigation; Clark doll studies (1930s–1950s).'
            },
            {
                type: 'brief', typeLabel: 'Legal argument',
                title: 'Thurgood Marshall’s framing',
                excerpt: 'NAACP counsel argued that the Fourteenth Amendment forbids states from using race as a sorting rule in public education, because the classification itself is the inequality.',
                citation: 'Oral argument and briefing, Brown v. Board of Education (1952–1954).'
            }
        ]
    },

    payton: {
        shortTitle: 'Payton v. New York',
        petitioner: { name: 'Theodore Payton (and Obie Riddick)', legal: 'Petitioner' },
        respondent: { name: 'New York (the State)', legal: 'Respondent' },
        amendment: 'Fourth Amendment — the home',
        question: 'May police enter a home to make a routine felony arrest without a warrant if they have probable cause?',
        drivingFrame: 'This case asks when community safety (catching a dangerous suspect) may override the special privacy of the home.',
        tests: {
            petitioner: {
                title: 'Warrant to cross the threshold',
                text: 'Probable cause is enough to arrest someone in public. Crossing a home’s door is different. Absent an emergency (exigent circumstances), police need a warrant from a judge.'
            },
            respondent: {
                title: 'Felony + probable cause is enough',
                text: 'If officers have probable cause that a felony suspect is inside, forcing them to wait for a warrant lets people escape, destroy evidence, or stay armed behind a door. New York’s statute was a reasonable rule.'
            }
        },
        theorySamples: {
            petitioner: [
                'Theodore Payton, and in the companion case Obie Riddick — people whose homes were entered without arrest warrants.',
                'Officers with probable cause but no warrant used a crowbar on Payton’s door at 7:30 a.m. He was not home. They seized a shell casing in plain view.',
                'Does the Fourth Amendment require a warrant before police enter a home to make a routine arrest?',
                'The Amendment specially names “houses.” A home is not a sidewalk.',
                'The Court should hold that non-emergency home entry to arrest requires a warrant, even when police have probable cause.',
                'A probable-cause-only rule would let police kick in any door of anyone they think is guilty, at dawn, with no judge in the loop.'
            ],
            respondent: [
                'The State of New York, defending a statute that allowed warrantless home arrests for felonies based on probable cause.',
                'Police had strong reason to think Payton had committed murder. They went to arrest him. A warrant delay, the State says, risks flight and more violence.',
                'If police already have probable cause for a felony, why should a judge’s signature be required only because the suspect is at home?',
                'The Fourth Amendment bans unreasonable seizures. An arrest based on probable cause is the classic reasonable seizure.',
                'The Court should hold that the same probable-cause arrest power that works in public should work at the suspect’s residence, as New York law provided.',
                'A warrant requirement for every home arrest would slow police in the exact cases — homicide, armed robbery — where speed matters most.'
            ]
        },
        weighing: {
            petitioner: [
                'The text lists “houses” separately; the home has always had extra protection in Anglo-American law.',
                'Payton was not in the middle of a chase; officers had time to find a judge.',
                'United States v. Watson allowed public arrests without warrants — that is not the same as breaking a door.',
                'If the entry was illegal, the shell casing should be kept out of the trial.'
            ],
            respondent: [
                'Watson already said warrants are not required for felony arrests with probable cause in public; New York asks for the same inside.',
                'Murder and armed robbery suspects are dangerous; waiting can cost lives.',
                'New York’s legislature, accountable to voters, wrote this arrest rule.',
                'The officers had probable cause, not a hunch — the Amendment’s main safeguard was already met.'
            ]
        },
        hardSide: null,
        hotBench: [
            { q: 'What if the suspect is about to flush evidence or run out the back?', tip: 'That is exigent circumstances — both sides can accept emergencies without giving up the rest of the case.' },
            { q: 'Payton was not even home. Why does he have a claim?', tip: 'The right is about the house and the seizure of evidence, not only about grabbing the person.' },
            { q: 'If police can arrest you on the porch without a warrant, why not six feet inside?', tip: 'The threshold is the whole fight. Defend why that line matters or why it is arbitrary.' },
            { q: 'Does a murder charge change the Fourth Amendment?', tip: 'The text does not list “except for serious crimes.” Policy arguments still matter to reasonableness.' },
            { q: 'Riddick’s young son opened the door. Is that consent?', tip: 'A child opening a door is not the same as an adult saying “come in and search.”' },
            { q: 'Should we trust police to decide “probable cause” with no judge until after the door is down?', tip: 'Warrants exist because hindsight and adrenaline are bad mixers.' },
            { q: 'If we require warrants, will officers just wait outside forever?', tip: 'They can watch the house, get a warrant by phone/procedures of the era, or enter if an emergency appears.' },
            { q: 'Counsel, one-sentence rule.', tip: 'Warrant to enter unless exigency vs. probable cause felony arrest anywhere.' }
        ],
        pair: {
            other: 'New Jersey v. T.L.O.',
            href: 'tlo.html',
            prompt: 'A school purse vs. a locked apartment. Which facts make a warrant more necessary in one place than the other?'
        },
        sources: [
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Fourth Amendment — houses',
                excerpt: 'The Amendment protects “persons, houses, papers, and effects” against unreasonable searches and seizures, and says warrants require probable cause.',
                citation: 'U.S. Const. amend. IV.'
            },
            {
                type: 'statute', typeLabel: 'State law',
                title: 'New York’s arrest statute',
                excerpt: 'New York law at the time allowed officers to enter a home to arrest for a felony without a warrant if they had probable cause. That statute is what Payton asked the Court to strike down.',
                citation: 'N.Y. Crim. Proc. Law (warrantless felony-arrest entry provision, as applied in Payton).'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'The 7:30 a.m. entry',
                excerpt: 'On January 15, 1970, about 7:30 a.m., six officers went to Payton’s Bronx apartment. No one answered. After waiting, they used crowbars, entered, and found a .30-caliber shell casing in plain view. Payton was not there.',
                citation: 'Payton v. New York, case record (entry of January 15, 1970, about 7:30 a.m.).'
            },
            {
                type: 'historical', typeLabel: 'Companion case',
                title: 'Obie Riddick’s doorway',
                excerpt: 'In the companion case, officers came to Riddick’s Queens home without a warrant. His young son opened the door; they entered and found Riddick in bed. The Court took both cases together.',
                citation: 'Riddick v. New York, companion to Payton v. New York.'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'United States v. Watson (1976)',
                excerpt: 'The Court held that police do not need a warrant to arrest someone in a public place if they have probable cause. New York argues the home should not get a different arrest rule.',
                citation: 'United States v. Watson, 423 U.S. 411 (1976).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Mapp and illegal entries',
                excerpt: 'Mapp v. Ohio (1961) kept illegally seized evidence out of court. Payton argues that if the door-breaking was illegal, the shell casing cannot be used.',
                citation: 'Mapp v. Ohio, 367 U.S. 643 (1961).'
            },
            {
                type: 'legal', typeLabel: 'Legal idea',
                title: 'Exigent circumstances',
                excerpt: 'Even strong home-privacy arguments usually admit exceptions: hot pursuit, someone in danger, or evidence being destroyed right now. The fight is whether a routine arrest, with time to find a judge, counts.',
                citation: 'Fourth Amendment doctrine on exigency, as argued in Payton briefing.'
            },
            {
                type: 'legal', typeLabel: 'Common law',
                title: '“A man’s house is his castle”',
                excerpt: 'English and American law long treated the home as the place most protected from the king’s officers. Payton uses that tradition; New York says modern policing of felonies changed the balance.',
                citation: 'Common-law maxim; see discussion in Fourth Amendment home-entry cases preceding Payton.'
            }
        ]
    },

    mahanoy: {
        shortTitle: 'Mahanoy v. B.L.',
        petitioner: { name: 'Mahanoy Area School District', legal: 'Petitioner' },
        respondent: { name: 'B.L. (the student)', legal: 'Respondent' },
        amendment: 'First Amendment — off-campus speech',
        question: 'May a school punish a student for a vulgar Snapchat posted off campus, on a weekend, that slams school and cheer?',
        drivingFrame: 'This case tests whether Tinker’s disruption idea follows students home onto their phones.',
        tests: {
            petitioner: {
                title: 'School-related speech, even off campus',
                text: 'If the post targets the school, a team, or the educational program, and coaches can show it hurt morale or discipline, the school may respond — otherwise online attacks on teams become untouchable.'
            },
            respondent: {
                title: 'Off campus, parents’ domain',
                text: 'Speech from a convenience store on a Saturday is the family’s business. Schools may not punish mere vulgarity or disappointment about tryouts. Tinker required substantial disruption, not hurt feelings.'
            }
        },
        theorySamples: {
            petitioner: [
                'Mahanoy Area School District and its cheerleading program.',
                'B.L. failed to make varsity cheer, went to a store on the weekend, and posted Snaps with profanity about school, softball, and cheer. Teammates saw them; coaches pulled her from the team for a year.',
                'May a school discipline a student-athlete for off-campus speech that is about the school and the team?',
                'Schools may regulate speech that substantially disrupts school activities. Team membership is a school activity with extra rules.',
                'The Court should hold that Tinker can reach off-campus speech aimed at the school, especially for extracurriculars.',
                'A campus-only rule would create a loophole: bully the team from Snapchat, then claim the school is powerless.'
            ],
            respondent: [
                'B.L., a 14-year-old student speaking on her own time, off school property.',
                'She posted a short, frustrated Snap using profanity after not making varsity. It was Saturday. She did not threaten anyone.',
                'Does the First Amendment allow a year-long team ban for off-campus venting that is rude but not a true disruption of class?',
                'Tinker protects student speech unless it substantially disrupts school. Parents, not principals, police Saturday speech.',
                'The Court should hold that ordinary off-campus, non-threatening speech on a personal phone is beyond school punishment.',
                'If coaches can bench you for a weekend Snap, students will never know when they are “at school.”'
            ]
        },
        weighing: {
            petitioner: [
                'The posts were about school and cheer, not a private family fight — they targeted the program.',
                'Cheer rules required a good attitude; extracurriculars can demand more than the classroom (Vernonia).',
                'Teammates saw the Snaps; coaches described a team discipline problem, not just adult annoyance.',
                'Other courts had allowed schools to punish online attacks that hit the school community.'
            ],
            respondent: [
                'The Snap was off campus, on a weekend, from a convenience store — classic parental territory.',
                'Tinker requires substantial disruption of school, not that coaches found the language crude.',
                'She did not harass a named student or threaten violence.',
                'Losing a year of cheer is a serious penalty for a teenager’s frustrated joke.'
            ]
        },
        hardSide: null,
        hotBench: [
            { q: 'If this Snap is protected, may a student post “the principal is the n-word” from home?', tip: 'Draw a line: vulgar disappointment vs. targeted harassment or true threats.' },
            { q: 'She chose to join cheer. Didn’t she agree to extra rules?', tip: 'You can waive some privileges without waiving the First Amendment entirely — or the school will argue she did.' },
            { q: 'Where is the substantial disruption — a canceled class, or unhappy coaches?', tip: 'Demand facts. Morale is squishy; a walkout is not.' },
            { q: 'If Tinker was about a silent armband in the hallway, why does it apply to Snapchat at all?', tip: 'Either extend Tinker carefully or argue it is the wrong test off campus.' },
            { q: 'Does it matter that ~250 friends, including teammates, could see it?', tip: 'Audience size can look like school impact — or like ordinary teenage broadcasting.' },
            { q: 'Should the rule be different for a threat to shoot up the school sent from a bedroom?', tip: 'Both sides should concede true threats; don’t overclaim.' },
            { q: 'If we side with B.L., can schools still punish cheating rings organized in a group chat?', tip: 'Have a limiting principle: speech vs. conduct; disruption vs. taste.' },
            { q: 'One-sentence rule, counsel.', tip: 'School-related off-campus speech vs. off-campus parental domain.' }
        ],
        pair: {
            other: 'Tinker v. Des Moines',
            href: 'tinker.html',
            prompt: 'Same amendment, different facts. What does B.L.’s Snap have that the armbands did not — and what do the armbands have that the Snap does not?'
        },
        sources: [
            {
                type: 'historical', typeLabel: 'The speech',
                title: 'The Snapchat posts',
                excerpt: 'On Saturday at the Cocoa Hut convenience store, B.L. posted two Snaps to about 250 friends. The first showed her and a friend with middle fingers raised and the caption “Fuck school fuck softball fuck cheer fuck everything.” The second mentioned another student who also did not make varsity. Neither post threatened violence.',
                citation: 'Mahanoy Area Sch. Dist. v. B.L., case record (May 2017 posts).'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'The penalty',
                excerpt: 'Coaches suspended B.L. from the junior varsity cheerleading team for the upcoming year. She remained an ordinary student; the punishment was the extracurricular, not expulsion.',
                citation: 'Mahanoy Area Sch. Dist. v. B.L., statement of facts.'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Tinker’s disruption test',
                excerpt: 'Tinker said student speech may be limited when it substantially disrupts school or invades others’ rights — not merely because officials dislike the message. Both sides claim this test; they disagree whether it reaches a weekend phone.',
                citation: 'Tinker v. Des Moines Indep. Cmty. Sch. Dist., 393 U.S. 503 (1969).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Bethel v. Fraser (1986)',
                excerpt: 'The Court allowed a school to punish a student’s sexual innuendo in a school assembly. The district analogizes: schools may police lewd speech tied to school life. B.L. replies: an assembly is not a Snap from a store.',
                citation: 'Bethel Sch. Dist. No. 403 v. Fraser, 478 U.S. 675 (1986).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Vernonia v. Acton (1995)',
                excerpt: 'Student athletes were held to a different Fourth Amendment standard for drug testing because sports are voluntary and highly regulated. The district borrows that idea for team speech rules.',
                citation: 'Vernonia Sch. Dist. 47J v. Acton, 515 U.S. 646 (1995).'
            },
            {
                type: 'statute', typeLabel: 'Team rules',
                title: 'Cheerleading expectations',
                excerpt: 'The program expected cheerleaders to show respect and a positive attitude and to avoid behavior that reflected poorly on the school. B.L. had been told about those expectations.',
                citation: 'Mahanoy cheerleading rules / handbook, as described in the case record.'
            },
            {
                type: 'legal', typeLabel: 'Legal idea',
                title: 'Who raises children on Saturday?',
                excerpt: 'B.L. argues that off-hours speech belongs to parents and to the student, not to the government. If schools follow children onto private phones, the “schoolhouse gate” disappears.',
                citation: 'Briefing for B.L., Mahanoy Area Sch. Dist. v. B.L.'
            },
            {
                type: 'court', typeLabel: 'Appeals court',
                title: 'Third Circuit path',
                excerpt: 'The U.S. Court of Appeals for the Third Circuit ruled for B.L., treating off-campus speech as generally outside Tinker. The school district asked the Supreme Court to reject that campus-only line.',
                citation: 'B.L. v. Mahanoy Area Sch. Dist., 964 F.3d 170 (3d Cir. 2020).'
            }
        ]
    },

    kennedy: {
        shortTitle: 'Kennedy v. Bremerton',
        petitioner: { name: 'Coach Joseph Kennedy', legal: 'Petitioner' },
        respondent: { name: 'Bremerton School District', legal: 'Respondent' },
        amendment: 'First Amendment — Free Exercise and Establishment',
        question: 'May a public school stop a coach from kneeling to pray at midfield after games because it looks like the school is endorsing religion?',
        drivingFrame: 'This case is a clash inside the First Amendment: the coach’s right to practice religion vs. the school’s duty not to establish religion or pressure students.',
        tests: {
            petitioner: {
                title: 'Private religious speech',
                text: 'A brief, personal prayer after the game is the coach’s Free Exercise and free speech, not a school-led worship service. The Establishment Clause does not require the government to hide religion.'
            },
            respondent: {
                title: 'Endorsement and student pressure',
                text: 'A coach in school gear at the 50-yard line is still on duty in students’ eyes. The district says players may join to protect playing time. That looks like school-sponsored prayer, which the Establishment Clause forbids.'
            }
        },
        theorySamples: {
            petitioner: [
                'Joseph Kennedy, a high school football coach in Bremerton, Washington.',
                'After games he knelt at midfield for a short prayer of thanks. The district told him to stop; when he continued, it did not rehire him to coach.',
                'May a public employer punish an employee for a brief personal prayer in view of others?',
                'The Free Exercise Clause bars government from prohibiting religious practice; the Free Speech Clause protects private expression.',
                'The Court should hold that a short, personal post-game prayer is private speech, not government speech, and cannot be the reason for discipline.',
                'A “pray only in a closet” rule treats religious exercise as something shameful and would not be applied to a coach taking a brief phone call at midfield.'
            ],
            respondent: [
                'Bremerton School District, a public employer responsible for not endorsing religion.',
                'Kennedy prayed at the most visible spot on the field, in coaching clothes, while students were still around. After he publicized that he would keep praying, a crowd and media rushed the field on October 16. A parent told the principal a son felt he had to join to get playing time.',
                'When a coach prays at midfield, is that private worship — or a school event students cannot easily avoid?',
                'The Establishment Clause forbids government from putting its weight behind a religion. Coaches are government employees at school events.',
                'The Court should hold that the district may require employees not to lead or appear to lead prayer on the field, while still allowing truly private prayer out of view of students.',
                'If coaches may turn the 50-yard line into a chapel, students of other faiths (or none) will feel the team has an official religion.'
            ]
        },
        weighing: {
            petitioner: [
                'The prayers were short (about 15–30 seconds) and, Kennedy says, personal thanks — not a sermon from the school.',
                'The Free Exercise Clause protects religious practice for government employees too, not only for students.',
                'The district offered alternatives that would hide the prayer; Kennedy argues that is discrimination because of religion.',
                'Students who joined did so, in his account, voluntarily after the game had ended.'
            ],
            respondent: [
                'Midfield, school logo, players in uniform: a reasonable spectator would think this is a school ritual.',
                'Santa Fe v. Doe (2000) struck down school-sponsored prayer at football games, even when labeled student-led.',
                'A parent told the principal a son felt playing-time pressure. Coaches control who gets in the game.',
                'On October 16, 2015, a crowd rushed the field after publicity; the district had a safety and control problem, not only a theology problem.'
            ]
        },
        hardSide: {
            title: 'Do not turn this into “religion is good” vs. “religion is bad”',
            html: '<p><strong>Coach’s best facts:</strong> short prayer, after the whistle, personal thanks, Free Exercise text.</p><p><strong>District’s best facts:</strong> 50-yard line, school gear, students gathering, playing-time power, the October 16 crowd, Santa Fe v. Doe.</p><p>Win by explaining <em>who is speaking</em> (the man vs. the school) and <em>who feels they must join</em> — not by attacking anyone’s faith.</p>'
        },
        hotBench: [
            { q: 'If a coach took a knee for a political cause at midfield, would you treat it the same?', tip: 'Consistency on “private vs. job speech” makes you more credible.' },
            { q: 'When does a coach stop being “the school” after the clock hits zero?', tip: 'Both sides need a time-and-place line, not a vibe.' },
            { q: 'Santa Fe banned prayer over the loudspeaker. Why is kneeling different — or why isn’t it?', tip: 'PA system vs. personal kneeling is the key distinction to win or collapse.' },
            { q: 'Can a Jewish or Muslim player really feel free not to join the coach?', tip: 'Coercion can be quiet. Playing time is a powerful quiet.' },
            { q: 'The district offered a private place to pray. Why isn’t that a fair compromise?', tip: 'Free Exercise vs. “you may practice if we cannot see you.”' },
            { q: 'What if the coach invited the whole team to the 50 and said “let us pray”?', tip: 'If your rule cannot stop that, it is too broad. If it can, say how.' },
            { q: 'Does the Establishment Clause require schools to be hostile to religion?', tip: 'Neither side should want “hostility.” Define neutrality.' },
            { q: 'One-sentence rule.', tip: 'Private employee prayer vs. no on-field religious display by on-duty coaches.' }
        ],
        pair: {
            other: 'Tinker v. Des Moines',
            href: 'tinker.html',
            prompt: 'Tinker is student political speech. Kennedy is employee religious speech. Who counts as “the government” in each case?'
        },
        sources: [
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Free Exercise Clause',
                excerpt: '“Congress shall make no law … prohibiting the free exercise” of religion. Kennedy argues a short personal prayer is exactly the exercise that clause names.',
                citation: 'U.S. Const. amend. I.'
            },
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Establishment Clause',
                excerpt: 'The same sentence forbids laws “respecting an establishment of religion.” The district argues a coach praying at midfield in school gear looks like the school has a team religion.',
                citation: 'U.S. Const. amend. I.'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Santa Fe Independent School Dist. v. Doe (2000)',
                excerpt: 'The Court held that student-led prayer over a football loudspeaker was still school-sponsored worship. The district uses Santa Fe: football games are school events; religious ritual in the center of the field is not “private.”',
                citation: 'Santa Fe Indep. Sch. Dist. v. Doe, 530 U.S. 290 (2000).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Engel v. Vitale (1962)',
                excerpt: 'The Court struck down a brief, supposedly voluntary prayer written for New York classrooms. The district argues even short, “optional” school prayer can be unconstitutional.',
                citation: 'Engel v. Vitale, 370 U.S. 421 (1962).'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Where and how he prayed',
                excerpt: 'Kennedy knelt at the 50-yard line after games, usually for about 30 seconds, often still in Bremerton coaching clothes. Over his years as coach, players sometimes joined; the parties disagree about how often Bremerton students joined the later games the district focused on. The district offered off-field options; he insisted on the field.',
                citation: 'Kennedy v. Bremerton Sch. Dist., case record.'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Pressure and playing time',
                excerpt: 'Principal John Polm testified that a parent said a son felt compelled to join the prayers, even though he was an atheist, because he feared losing playing time. Kennedy denied requiring anyone to participate. Coaches decide who plays, so the district treats that report as evidence of pressure.',
                citation: 'District correspondence and Polm testimony, Kennedy v. Bremerton Sch. Dist. record.'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'October 16, 2015',
                excerpt: 'After Kennedy announced he would pray at the October 16, 2015 homecoming game, spectators and media came onto the field. The district reported that in the rush, some band members and cheerleaders were knocked down. Bremerton players were singing the fight song at the time; people from the crowd and the opposing team reached Kennedy at midfield.',
                citation: 'Kennedy v. Bremerton Sch. Dist., case record (Oct. 16, 2015 homecoming game).'
            },
            {
                type: 'legal', typeLabel: 'Legal idea',
                title: 'Government speech vs. private speech',
                excerpt: 'If the prayer is the coach’s private speech, punishing it is a Free Exercise/speech problem. If it is the school speaking through its employee, the Establishment Clause is the problem. That is the fork in the road.',
                citation: 'Party briefs, Kennedy v. Bremerton Sch. Dist. (pre-decision framing).'
            }
        ]
    },

    arizona: {
        shortTitle: 'Arizona v. United States',
        petitioner: { name: 'Arizona (the State)', legal: 'Petitioner' },
        respondent: { name: 'United States (federal government)', legal: 'Respondent' },
        amendment: 'Supremacy Clause / federalism — not a Bill of Rights “safety vs. rights” case',
        question: 'May a state copy or add its own immigration crimes and police duties when Congress already occupies immigration law?',
        drivingFrame: 'This case is about who gets to write immigration rules — states or the national government — not about whether immigration is “good” or “bad.”',
        tests: {
            petitioner: {
                title: 'Cooperative enforcement',
                text: 'S.B. 1070 mirrors federal requirements and helps enforce them. States police their streets every day. Helping federal law is not the same as replacing it.'
            },
            respondent: {
                title: 'Field preemption',
                text: 'The Constitution gives Congress naturalization and foreign-affairs power. A second, state-written immigration code — even one that copies federal rules — conflicts with a uniform national system.'
            }
        },
        theorySamples: {
            petitioner: [
                'The State of Arizona, a border state whose legislature passed S.B. 1070.',
                'Arizona said federal inaction left it with costs in schools, hospitals, and policing. The law directed local officers to work with federal immigration rules and created overlapping state offenses.',
                'May a state assist in enforcing federal immigration law inside its borders?',
                'The Tenth Amendment reserves police power to the states. The Supremacy Clause knocks out only actual conflicts, not helpful copies of federal law.',
                'The Court should hold that states may enforce measures that parallel federal immigration rules and do not discriminate by race.',
                'A “Washington only” rule would leave border states unable to respond while waiting on Congress.'
            ],
            respondent: [
                'The United States, which sued to block S.B. 1070 before it took effect.',
                'Arizona created state immigration crimes and expanded local status checks. The United States argues that is a second immigration system, not a helping hand.',
                'May one state write its own immigration code when the Constitution assigns this area to the national government?',
                'Article I gives Congress a uniform rule of naturalization. The Supremacy Clause makes federal law supreme when states enter that field.',
                'The Court should hold that S.B. 1070 is preempted because immigration is a federal field and conflicting state enforcement harms foreign policy and uniformity.',
                'Fifty different “show me your papers” regimes would make U.S. immigration policy depend on which highway you are driving.'
            ]
        },
        weighing: {
            petitioner: [
                'State and local police already help with federal crimes; 287(g) even trains local officers on immigration.',
                'Arizona designed race-neutral safeguards (license as presumption of status, no racial profiling language).',
                'Border geography and local costs are real; federalism lets states respond to local conditions.',
                'Preemption should require a true conflict, not just overlapping subject matter.'
            ],
            respondent: [
                'Chy Lung v. Freeman (1875) treated immigration as a national foreign-affairs power.',
                'Even a copy of federal law, if enforced by state officers with state penalties, is still state immigration policy.',
                'Civil-rights groups warned of racial profiling of Latino residents who are U.S. citizens.',
                'Foreign countries deal with the United States, not with 50 state immigration codes.'
            ]
        },
        hardSide: {
            title: 'Argue preemption, not campaign talking points',
            html: '<p>The constitutional fight is <strong>Who has the power?</strong> Arizona: we are helping enforce existing federal law. United States: you are writing a second immigration code, which the Supremacy Clause does not allow.</p><p>Do not turn your oral argument into “immigration is good/bad.” Judges will ask about the <strong>Supremacy Clause, the Naturalization Clause, and whether S.B. 1070 conflicts with federal law</strong>.</p>'
        },
        hotBench: [
            { q: 'If Arizona can do this, why not 49 other states with 49 other definitions?', tip: 'Uniformity is the United States’ strongest policy point. Arizona must explain how parallel enforcement stays uniform.' },
            { q: 'Isn’t S.B. 1070 just copying federal law? How can a copy “conflict”?', tip: 'Conflict can be extra penalties, extra stops, and different charging decisions — not only opposite text.' },
            { q: 'What is preemption, in one sentence, as if we are 13?', tip: 'When federal and state law collide, federal law wins. The fight is whether they collide.' },
            { q: 'Does the Tenth Amendment let Arizona protect its budget?', tip: 'Money problems do not create constitutional powers the document did not grant.' },
            { q: 'How do you answer the racial-profiling worry without ignoring it?', tip: 'Arizona: look at the statute’s limits. United States: incentives on the street matter more than paper limits.' },
            { q: 'Congress already lets some local officers help through 287(g). Why isn’t that enough for Arizona?', tip: 'United States: that’s the point — help is by federal invitation. Arizona: invitation cannot be the only path.' },
            { q: 'Immigration involves Mexico and diplomacy. Why do states belong in that?', tip: 'Chy Lung and foreign affairs. Arizona must show this is ordinary local policing, not foreign policy.' },
            { q: 'One-sentence rule.', tip: 'Parallel state help vs. federal field preemption.' }
        ],
        pair: {
            other: 'the unit driving question',
            href: '../index.html',
            prompt: 'Arizona is federal vs. state power. How is that different from Tinker’s “individual vs. school order” story? Don’t mash them into one slogan.'
        },
        sources: [
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Supremacy Clause',
                excerpt: 'The Constitution and federal laws “shall be the supreme Law of the Land … any Thing in the Constitution or Laws of any State to the Contrary notwithstanding.”',
                citation: 'U.S. Const. art. VI, cl. 2.'
            },
            {
                type: 'constitution', typeLabel: 'Constitution',
                title: 'Naturalization power',
                excerpt: 'Congress has power “To establish an uniform Rule of Naturalization.” The United States argues immigration policy must be uniform; Arizona argues enforcement on the street is still local police work.',
                citation: 'U.S. Const. art. I, § 8, cl. 4.'
            },
            {
                type: 'statute', typeLabel: 'State law',
                title: 'S.B. 1070 in plain language',
                excerpt: 'Arizona’s 2010 law (Support Our Law Enforcement and Safe Neighborhoods Act) expanded local officers’ role in checking immigration status and created state-level immigration-related offenses. Critics nicknamed it “show me your papers.”',
                citation: 'Ariz. S.B. 1070 (2010).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Chy Lung v. Freeman (1875)',
                excerpt: 'The Court struck down a California law that let a state commissioner decide which arriving passengers were “lewd” or “paupers.” Immigration and foreign relations, the Court said, belong to the national government.',
                citation: 'Chy Lung v. Freeman, 92 U.S. 275 (1875).'
            },
            {
                type: 'government', typeLabel: 'Federal program',
                title: '287(g) cooperation',
                excerpt: 'Federal law already lets ICE train and authorize some local officers to help with immigration enforcement. Arizona says S.B. 1070 continues that tradition; the United States says help must stay on federal terms.',
                citation: 'Immigration and Nationality Act § 287(g), 8 U.S.C. § 1357(g).'
            },
            {
                type: 'legal', typeLabel: 'Legal idea',
                title: 'What “preemption” means',
                excerpt: 'Preemption is the rule that federal law knocks out conflicting state law. Sometimes Congress says so expressly; sometimes courts find the federal government “occupied the field.” That is the heart of this case.',
                citation: 'Supremacy Clause doctrine; party briefs in Arizona v. United States.'
            },
            {
                type: 'historical', typeLabel: 'Context',
                title: 'Arizona’s stated reasons',
                excerpt: 'Governor Jan Brewer and the legislature pointed to border location and costs in education, health care, and law enforcement, and argued Washington was not enforcing existing federal immigration law.',
                citation: 'Arizona legislative findings / S.B. 1070 statements of purpose (2010).'
            },
            {
                type: 'civil-rights', typeLabel: 'Civil rights',
                title: 'Profiling concern',
                excerpt: 'The ACLU and other groups argued status checks during ordinary stops would fall hardest on Latino residents, including U.S. citizens, because officers would use appearance as a shortcut.',
                citation: 'Contemporary civil-rights commentary on S.B. 1070 (ACLU and similar organizations, 2010).'
            }
        ]
    }
};
