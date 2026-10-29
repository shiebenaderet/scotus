// Shared prep data for every case.
// Prep materials stay pre-decision: no holdings, votes, or quotes from THIS case.

var CASE_PREP_DATA = {
    jacobson: {
        shortTitle: 'Jacobson v. Massachusetts',
        petitioner: { name: 'Henning Jacobson', legal: 'Petitioner' },
        respondent: { name: 'Commonwealth of Massachusetts', legal: 'Respondent' },
        amendment: 'Fourteenth Amendment: liberty and due process',
        question: 'May a state fine an adult who refuses a smallpox vaccination during an outbreak?',
        drivingFrame: 'This case is about whether a state may limit one person’s liberty over his own body to protect a whole city from a deadly disease.',
        drivingFrameSimple: 'A city ordered smallpox vaccinations. Jacobson said no and was fined. The fight: does liberty include saying no, or may the state protect everyone?',
        drivingFrameQuick: 'A city told people to get a smallpox vaccine. Jacobson said no. So can a state fine him to keep everyone safe?',
        law: {
            issue: 'May a state make adults choose between vaccination and a fine during an outbreak, with no medical exception for adults?',
            issueSimple: 'May a state fine an adult who will not be vaccinated during an outbreak?',
            issueQuick: 'Can a state fine a grown-up who says no to a vaccine?',
            clause: 'nor shall any State deprive any person of life, liberty, or property, without due process of law',
            clauseCite: 'Fourteenth Amendment, Section 1',
            plain: 'The Fourteenth Amendment limits what a state may do to a person’s liberty. States also have the police power, the power to make laws for public health and safety. Jacobson says liberty includes refusing a medical procedure he believes could harm him, and that adults deserve the same medical exception children get. Massachusetts says stopping an epidemic is a core use of the police power, and that health boards, not juries, should weigh medical evidence for a whole city.',
            steps: [
                { label: 'The rule:', text: 'A state may not take away a person’s liberty without due process of law.' },
                { label: 'What it means here:', text: 'Massachusetts fined adults $5 for refusing a free smallpox vaccination during an outbreak.' },
                { label: 'Jacobson says:', text: 'Liberty includes deciding what is done to your own body. The law was also unfair, because only children could get a medical exception.' },
                { label: 'Massachusetts says:', text: 'Protecting people from a deadly epidemic is one of a state’s oldest powers. One person’s refusal puts neighbors at risk.' },
                { label: 'Your job:', text: 'Argue where the line belongs between personal liberty and public health. Do not just say vaccines are good or bad.' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'A state may not take away a person’s freedom unless it is fair.' },
                { label: 'Here:', text: 'The state fined grown-ups $5 for saying no to a free vaccine.' },
                { label: 'Jacobson says:', text: 'He gets to decide what is done to his own body. Kids could skip it with a doctor’s note. Grown-ups could not.' },
                { label: 'The state says:', text: 'Smallpox can kill. One person who says no can make others sick.' },
                { label: 'Your job:', text: 'Pick a side and argue for it. Do not just say vaccines are good or bad.' }
            ],
            terms: [
                { term: 'police power', meaning: 'A state’s power to make laws for the health, safety and welfare of its people. Massachusetts says a vaccination order during an epidemic is a clear use of it.', simple: 'A state’s power to make laws that protect people’s health and safety.', quick: 'A state’s power to keep people safe and healthy.' },
                { term: 'due process', meaning: 'The Fourteenth Amendment’s promise that a state must follow fair rules before taking away life, liberty or property. Jacobson says the vaccination law took his liberty.', simple: 'Fair rules a state must follow before it takes away someone’s liberty.', quick: 'Fair rules. The government must follow them before it takes away your freedom.' },
                { term: 'epidemic', meaning: 'An outbreak of disease that spreads to many people in one area at the same time. Smallpox was spreading in Cambridge in 1902.', simple: 'A disease that spreads to many people in one place at once.', quick: 'A disease that spreads to many people in one place.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Personal liberty, with a medical exception',
                text: 'A state may not punish an adult for refusing a medical procedure he reasonably believes could harm him. At the very least, adults must get the same chance children get to show a medical reason, and a court must hear that evidence.',
                textSimple: 'Jacobson’s rule: a state may not punish an adult for refusing a medical procedure he believes could hurt him. Adults should get the same medical exception children get.',
                textQuick: 'Jacobson wants this rule. A state may not punish a grown-up for saying no to something done to his body.'
            },
            respondent: {
                title: 'Reasonable public health measures',
                text: 'During an epidemic, a state may require reasonable health measures of everyone, as long as the rule has a real connection to stopping the disease. Elected lawmakers and health boards, not individual juries, decide which medical evidence to trust.',
                textSimple: 'The state’s rule: during an epidemic, a state may require reasonable health steps of everyone if they really help stop the disease.',
                textQuick: 'The state wants this rule. In an outbreak, the state may make health rules for everyone if they help stop the disease.'
            }
        },
        theorySamples: {
            petitioner: [
                'Henning Jacobson, a pastor in Cambridge, Massachusetts.',
                'During a 1902 smallpox outbreak, the city ordered everyone not recently vaccinated to be vaccinated. Jacobson refused, citing harm he said a childhood vaccination caused him, and was fined $5.',
                'May a state punish an adult for refusing a medical procedure on his own body?',
                'The Fourteenth Amendment says no state may deprive any person of liberty without due process of law.',
                'The Court should hold that adults may refuse vaccination, or at least must get a medical exception and a chance to prove it.',
                'If a state can fine you for what you refuse to let doctors do to your body, liberty has little meaning.'
            ],
            respondent: [
                'The Commonwealth of Massachusetts and the Cambridge Board of Health.',
                'Smallpox was spreading and increasing in Cambridge. The board offered free vaccination and set a $5 fine for adults who refused.',
                'May a state require reasonable health measures of everyone during an epidemic?',
                'States keep the police power to protect public health and safety, and health laws have long belonged to the states.',
                'The Court should hold that a reasonable vaccination order during an epidemic does not violate the Fourteenth Amendment.',
                'If every person may refuse, no city can stop an epidemic, and the neighbors pay the price.'
            ]
        },
        weighing: {
            petitioner: [
                'Liberty under the Fourteenth Amendment covers more than freedom from jail (Allgeyer, 1897).',
                'The law gave children a medical exception but gave adults none.',
                'The trial judge would not let Jacobson show the jury any evidence of harm.',
                'Vaccines of that era were not always pure: in 1901, nine children in Camden died after contaminated smallpox vaccine.'
            ],
            respondent: [
                'Smallpox was spreading and increasing in Cambridge when the order was made.',
                'The vaccine was free, and the penalty was a $5 fine, not forced vaccination.',
                'Health laws have long belonged to the states (Gibbons v. Ogden, 1824).',
                'Other courts had already upheld vaccination rules (Viemeister v. White, New York, 1904).'
            ]
        },
        hardSide: {
            title: 'How to argue either side without spreading health misinformation',
            html: '<p>Both sides argue about the law, not about whether vaccines work today. Jacobson’s real legal theory was <strong>liberty under the Fourteenth Amendment, a missing medical exception for adults, and his right to present evidence</strong>. Massachusetts’s real theory was <strong>the police power during an epidemic</strong>. Use the 1902 facts in the reading. Do not invent medical claims or statistics for either side.</p>'
        },
        hotBench: [
            { q: 'If a fine is allowed, what about jail? What about holding someone down?', tip: 'Both sides: say where your rule stops. The 1902 law used a fine, not force.' },
            { q: 'Why should a jury not hear Jacobson’s medical evidence?', tip: 'Massachusetts: lawmakers and health boards weigh medical evidence for everyone. Jacobson: a person on trial gets to defend himself.' },
            { q: 'Children could get a doctor’s note. Why not adults?', tip: 'Massachusetts: rules may differ by age. Jacobson: the same risk deserves the same exception.' },
            { q: 'Does it matter that smallpox was spreading at the time?', tip: 'Massachusetts leans on the emergency. Jacobson asks whether liberty depends on the news.' },
            { q: 'If your body is yours, may a person with smallpox refuse quarantine too?', tip: 'Jacobson needs a limiting principle. Massachusetts needs one too: what may the state never require?' },
            { q: 'One-sentence rule, counsel.', tip: 'Personal liberty with a medical exception vs. reasonable public health measures in an epidemic.' }
        ],
        pair: {
            other: 'Payton v. New York',
            href: 'payton.html',
            prompt: 'Payton is about when the government may enter your home. Jacobson is about what the government may require of your body. Which deserves more protection, and when may the community’s safety override either?'
        },
        sources: [
            {
                type: 'statute', typeLabel: 'The law',
                title: 'Massachusetts vaccination statute',
                excerpt: 'A board of health, “if, in its opinion, it is necessary for the public health or safety, shall require and enforce the vaccination and revaccination of all the inhabitants thereof, and shall provide them with the means of free vaccination.” An adult over 21 who refused “shall forfeit $5.” Children were excused with “a certificate, signed by a registered physician, that they are unfit subjects for vaccination.”',
                citation: 'Revised Laws of Massachusetts, ch. 75, §§ 137, 139, as quoted in the case record.'
            },
            {
                type: 'historical', typeLabel: 'Case record',
                title: 'The Cambridge order (February 27, 1902)',
                excerpt: '“Whereas, smallpox has been prevalent to some extent in the city of Cambridge, and still continues to increase; and whereas, it is necessary for the speedy extermination of the disease that all persons not protected by vaccination should be vaccinated…”',
                citation: 'Cambridge Board of Health regulation, February 27, 1902, case record.'
            },
            {
                type: 'historical', typeLabel: 'Case record',
                title: 'What Jacobson offered to prove',
                excerpt: 'Jacobson offered to prove that vaccination “quite often” caused serious injury, and that he had refused because, “when a child,” vaccination had caused him “great and extreme suffering for a long period.” The trial judge excluded all of it.',
                citation: 'Offers of proof, Jacobson trial record (1902).'
            },
            {
                type: 'government', typeLabel: 'Government history',
                title: 'Contaminated vaccine in Camden (1901)',
                excerpt: '“Nine children died from tetanus after receiving contaminated smallpox vaccine.” Congress passed the Biologics Control Act in 1902, its first regulation of how vaccines were made.',
                citation: 'U.S. Food and Drug Administration, “The Road to the Biotech Revolution: Highlights of 100 Years of Biologics Regulation.”'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Allgeyer v. Louisiana (1897)',
                excerpt: 'The Court said Fourteenth Amendment liberty means more than “the right of the citizen to be free from the mere physical restraint of his person, as by incarceration.” Jacobson reads that liberty to include his own body.',
                citation: 'Allgeyer v. Louisiana, 165 U.S. 578, 589 (1897).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Gibbons v. Ogden (1824)',
                excerpt: 'Chief Justice Marshall listed “Inspection laws, quarantine laws, health laws of every description” among the laws that belong to the states. Massachusetts says a vaccination order is exactly that kind of law.',
                citation: 'Gibbons v. Ogden, 22 U.S. 1 (1824).'
            },
            {
                type: 'court', typeLabel: 'State court',
                title: 'Viemeister v. White (New York, 1904)',
                excerpt: 'New York’s highest court upheld a rule that kept unvaccinated children out of public school. Massachusetts points to it; Jacobson replies that a school entry rule is not a criminal fine on an adult.',
                citation: 'Viemeister v. White, 179 N.Y. 235 (1904).'
            },
            {
                type: 'historical', typeLabel: 'Context',
                title: 'The Boston outbreak',
                excerpt: 'Boston: “From 1901 to 1903, there were 1596 cases of smallpox, with 270 deaths, in a city with a population of approximately 560,900.”',
                citation: 'Michael R. Albert, Kristen G. Ostheimer, and Joel G. Breman, “The Last Smallpox Epidemic in Boston and the Vaccination Controversy, 1901–1903,” New England Journal of Medicine 344, no. 5 (2001): 375–379.'
            }
        ]
    },
    tinker: {
        shortTitle: 'Tinker v. Des Moines',
        petitioner: { name: 'Tinker family (the students)', legal: 'Petitioner' },
        respondent: { name: 'Des Moines schools', legal: 'Respondent' },
        amendment: 'First Amendment — Freedom of Speech',
        question: 'May a public school ban silent political armbands because officials fear disruption?',
        drivingFrame: 'This case is about whether a school may limit student free speech to keep order — even when the speech is silent and no disruption has happened yet.',
        drivingFrameSimple: 'A school banned silent armbands. Students say that is speech. The school says it must keep order. The fight is the rule: must the school wait for real disruption?',
        drivingFrameQuick: 'A school banned quiet armbands. The students say the armbands are speech. The school says it must keep order. So must the school wait for a real problem first?',
        law: {
            issue: 'May a public school punish silent protest armbands that have not actually disrupted class?',
            issueQuick: 'Can a school punish quiet armbands when class did not stop?',
            issueSimple: 'May a public school punish silent armbands when class has not actually been disrupted?',
            clause: 'Congress shall make no law … abridging the freedom of speech.',
            clauseCite: 'First Amendment',
            plain: 'Public schools are the government, so the First Amendment applies. Tinker is about symbolic speech — a message sent by clothing, not yelling. The legal fight is whether schools need proof of real disruption (or a well-founded forecast of it) before they ban a silent political message, or whether they may act earlier to keep controversy out of the building.',
            steps: [
                { label: 'The rule:', text: 'The First Amendment says the government may not cut off free speech.' },
                { label: 'What it means here:', text: 'A public school is the government. An armband still counts as speech even if no one talks.' },
                { label: 'The students say:', text: 'The school must show class was really disrupted, or was about to be, based on facts — not a guess.' },
                { label: 'The school says:', text: 'A principal who can see trouble coming should not have to wait for a fight.' },
                { label: 'Your job:', text: 'Argue for one of those tests. Do not just say protest is good or bad.' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'The government may not cut back free speech.' },
                { label: 'Here:', text: 'A public school is part of the government. An armband is a kind of speech, even with no words.' },
                { label: 'The students say:', text: 'The school must show a real problem first. A guess is not enough.' },
                { label: 'The school says:', text: 'A principal who sees trouble coming should not have to wait for a fight.' },
                { label: 'Your job:', text: 'Pick one of these rules and argue for it.' }
            ],
            terms: [
                { term: 'symbolic speech', meaning: 'A message sent by action or clothing — here, black armbands against the Vietnam War.', simple: 'Speech without talking. Here: black armbands that protest a war.', quick: 'Speech without words. Here it is a black armband.' },
                { term: 'substantial disruption', meaning: 'The students’ proposed line: the school must show the speech would actually interfere with teaching or operations, not just that officials dislike the topic.', simple: 'Real interference with class — not “we don’t like this message.”', quick: 'A big problem that stops class.' },
                { term: 'public school as government', meaning: 'Principals and teachers are state actors. Private opinions are not the issue; government limits on student speech are.', simple: 'Public-school staff are the government. The Constitution applies to what they do.', quick: 'Principals and teachers at a public school work for the government. So the Constitution covers them.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Proven substantial disruption',
                text: 'Schools may punish student speech only if they can show it actually interferes with class, or that disruption is about to happen based on real facts — not a guess or a dislike of the message.',
                textSimple: 'The students’ rule: prove class was really disrupted, or was about to be, based on facts. A guess or “we dislike this message” is not enough.',
                textQuick: 'The students want this rule. The school must show a real problem with class. A guess is not enough.'
            },
            respondent: {
                title: 'Reasonable forecast of disruption',
                text: 'Educators who know their students should be able to step in before a protest explodes. If a reasonably careful principal can see conflict coming, the school may ban the symbol to protect learning.',
                textSimple: 'The school’s rule: if a careful principal can see conflict coming, the school may ban the symbol before a fight starts.',
                textQuick: 'The school wants this rule. If a careful principal can see trouble coming, the school may stop it early.'
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
                citation: 'Tinker case record.'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Scale of the protest',
                excerpt: 'Only a few of the district’s roughly 18,000 students wore armbands. Five students were suspended. Mary Beth wore hers through morning classes; in afternoon mathematics she was sent to the office and then home. John Tinker wore his the next day, December 17.',
                citation: 'Tinker case record (Dec. 16–17, 1965); Mary Beth Tinker’s account in Education Week, “Living History” (2005).'
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
        drivingFrameSimple: 'A vice principal searched a student’s purse. The fight is the search rule at school: warrant and probable cause, or a lower school test?',
        drivingFrameQuick: 'A school leader searched a student’s purse. So which rule should a school follow? Must it get a warrant first, or is a good reason enough?',
        law: {
            issue: 'What does the Fourth Amendment require before a public-school official searches a student’s purse?',
            issueSimple: 'What must a school official have before searching a student’s purse?',
            issueQuick: 'What does a school leader need before searching a student’s purse?',
            clause: 'The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated…',
            clauseCite: 'Fourth Amendment',
            plain: 'The Fourth Amendment bans unreasonable searches by government. A vice principal is government. On the street, police often need a warrant and probable cause. Schools argue they need a lower school-specific bar — reasonable suspicion — because they stand in loco parentis and must keep a crowded building safe. The student’s side argues a purse is still private “papers and effects,” so the usual warrant and probable-cause rules should apply.',
            steps: [
                { label: 'The rule:', text: 'The Fourth Amendment bans unreasonable government searches. A purse is private “papers and effects.”' },
                { label: 'What it means here:', text: 'A vice principal is government, so the Amendment applies at school.' },
                { label: 'The student says:', text: 'Police usually need a warrant and probable cause. A student should get the same protection.' },
                { label: 'The school says:', text: 'Schools are not police. Specific facts — reasonable suspicion, not a hunch — should be enough.' },
                { label: 'Your job:', text: 'Argue which search rule the Court should write for public schools.' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'The government may not make searches that are not reasonable. A purse holds private things.' },
                { label: 'Here:', text: 'A vice principal works for the government. So this rule covers schools.' },
                { label: 'The student says:', text: 'Police usually need a warrant or a strong reason. A student should get the same protection.' },
                { label: 'The school says:', text: 'Schools are not police. A good reason based on facts should be enough.' },
                { label: 'Your job:', text: 'Pick the search rule you think schools should follow. Argue for it.' }
            ],
            terms: [
                { term: 'warrant', meaning: 'A judge’s written permission to search, usually based on probable cause. Schools say requiring this would make hallway discipline impossible.', simple: 'A judge’s written OK to search. Schools say they cannot wait for that in a hallway.', quick: 'Written permission from a judge to search.' },
                { term: 'probable cause', meaning: 'Facts that would make a reasonable person believe a crime (or evidence of one) is here. Higher bar than reasonable suspicion.', simple: 'Solid facts that a crime is likely here. Harder to meet than reasonable suspicion.', quick: 'A strong reason, based on facts, that a crime likely happened.' },
                { term: 'reasonable suspicion', meaning: 'Specific facts — not a hunch — that a student broke a rule or the law. The school’s proposed test in this case.', simple: 'Specific facts that this student broke a rule. Not “search everyone.”', quick: 'A good reason, based on facts, to think a student broke a rule or a law.' },
                { term: 'in loco parentis', meaning: '“In the place of a parent.” Used to argue staff may search with more leeway than police, still within the Constitution.', simple: '“In the place of a parent.” The school’s reason it should have more leeway than police.', quick: 'Latin for “in the place of a parent.” The school says this gives it more room to search than police.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Reasonableness in school',
                text: 'School officials are not police. If a search is justified at the start and is not overly intrusive given the student’s age and the infraction, it should be allowed without a warrant or probable cause.',
                textSimple: 'The school’s rule: if there is a real reason to start the search, and it is not too invasive, no warrant or probable cause is required.',
                textQuick: 'The school wants this rule. If there is a real reason to start a search, and it does not go too far, no warrant is needed.'
            },
            respondent: {
                title: 'Warrant or probable cause',
                text: 'A purse is private. The Fourth Amendment normally requires a warrant and probable cause. Being a student should not mean officials can rummage through personal belongings on a hunch.',
                textSimple: 'The student’s rule: a purse is private. School officials still need a warrant or probable cause — not a hunch.',
                textQuick: 'The student wants this rule. A purse is private. A school needs a warrant or a strong reason first, not a hunch.'
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
        drivingFrameSimple: 'Kansas let cities split elementary schools by race, and Topeka did. Topeka said the buildings were similar. The fight is what “equal protection” means — not who wants nicer schools.',
        drivingFrameQuick: 'Kansas let some cities keep Black and white children in separate schools. Topeka did. The board said the buildings were alike. The question is what equal protection means.',
        law: {
            issue: 'Do racially segregated public schools violate the Fourteenth Amendment even when buildings and budgets look similar?',
            issueSimple: 'If a state splits public schools by race, is that still “equal protection” when the buildings look similar?',
            issueQuick: 'Can a state keep children apart by race if the buildings look the same?',
            clause: 'No State shall … deny to any person within its jurisdiction the equal protection of the laws.',
            clauseCite: 'Fourteenth Amendment — Equal Protection Clause',
            plain: 'Kansas law allowed some cities, including Topeka, to run separate elementary schools for Black and white children. Topeka said the buildings and pay were comparable, so Plessy’s “separate but equal” idea still fits. The Brown families say public education is a government service, and splitting children by race is itself unequal — it stamps one group as inferior — even if the brick and mortar match. The legal issue is the meaning of equal protection, not whether the families “want better schools” in a generic sense.',
            steps: [
                { label: 'The rule:', text: 'The Fourteenth Amendment says no state may deny any person equal protection of the laws.' },
                { label: 'What it means here:', text: 'Kansas let Topeka run separate elementary schools by race. Topeka said the buildings were comparable.' },
                { label: 'The families say:', text: 'Splitting children by race is itself unequal, even if the brick matches. It stamps one group as inferior.' },
                { label: 'The Board says:', text: 'Plessy allowed “separate but equal.” Education is a state job. Matching facilities satisfy the Constitution.' },
                { label: 'Your job:', text: 'Argue what equal protection means for race-separated schools — not “who wants better schools.”' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'No state may deny any person equal protection of the laws.' },
                { label: 'Here:', text: 'Topeka kept Black and white children in separate schools. It said the buildings were alike.' },
                { label: 'The families say:', text: 'Keeping children apart by race is not equal by itself. It marks one group as lower.' },
                { label: 'The board says:', text: 'An 1896 case, Plessy, allows separate schools if they are equal. States run their own schools.' },
                { label: 'Your job:', text: 'Pick one idea about what equal protection means. Argue for it.' }
            ],
            terms: [
                { term: 'Equal Protection Clause', meaning: 'The Fourteenth Amendment rule that states may not deny any person equal protection of the laws. The fight is whether race-separated schools can ever satisfy it.', simple: 'States must treat people equally under the law. The fight: can race-separated schools ever do that?', quick: 'States must treat all people the same under the law.' },
                { term: 'Plessy v. Ferguson', meaning: '1896 precedent that allowed racial segregation if facilities were “equal.” Kansas relies on it; the families ask this Court not to treat it as the last word for public schools.', simple: 'An 1896 case that allowed racial segregation if facilities were “equal.” The Board relies on it. It is not the holding of Brown.', quick: 'An 1896 case. It said keeping races apart was legal if things were equal. The board uses it.' },
                { term: 'separate but equal', meaning: 'Plessy’s formula. One side says Topeka met it. The other says separation by race in schooling cannot be equal.', simple: 'Plessy’s idea: split by race is OK if the buildings match. One side says Topeka did that. The other says race-split schools cannot be equal.', quick: 'The idea that keeping races apart is fine if the buildings match.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Separate is unequal',
                text: 'Racial separation by law stamps Black children as inferior. Even matching buildings cannot make the treatment equal under the Fourteenth Amendment.',
                textSimple: 'The families’ rule: splitting children by race is unequal by itself, even if the buildings match.',
                textQuick: 'The families want this rule. Keeping children apart by race is not equal, even if the buildings match.'
            },
            respondent: {
                title: 'Separate but equal + local control',
                text: 'Plessy v. Ferguson (1896) allows separation if facilities are equal. Education is a state job. Topeka’s Black and white schools were found substantially equal in buildings, so the Constitution is satisfied.',
                textSimple: 'The Board’s rule: Plessy allows separate schools if the buildings are equal. Matching facilities satisfy the Constitution. States run schools.',
                textQuick: 'The board wants this rule. Plessy allows separate schools if they are equal. A court found Topeka’s schools about equal.'
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
            html: '<p>The Board’s real 1950s legal theory was <strong>precedent (Plessy), equal facilities, and local/state control of schools</strong> — not a claim that Black children are inferior. You may argue those legal points. You may <strong>not</strong> argue racism as a good idea, use slurs, or claim one race is smarter or more deserving.</p><p>After the debate, you will study how the Court ruled and why. The point of taking this side is to understand how a harmful system defended itself in court — then to be able to defeat that defense.</p>'
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
                excerpt: 'Linda, a third grader, walked through a railroad switchyard and rode a bus to Monroe Elementary (designated for Black children). Sumner Elementary, for white children, was about seven blocks from her home.',
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
        drivingFrameSimple: 'Police had probable cause but no warrant. They entered a home to arrest. The fight: is that unreasonable, or is probable cause enough?',
        drivingFrameQuick: 'Police had strong reasons but no warrant. They broke into a home to arrest a man. Was that fair, or were strong reasons enough?',
        law: {
            issue: 'May police enter a suspect’s home to make a routine arrest without a warrant?',
            issueSimple: 'May police walk into a home to make a planned arrest if they have no warrant?',
            issueQuick: 'Can police go into a home to arrest someone with no warrant?',
            clause: 'The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause…',
            clauseCite: 'Fourth Amendment',
            plain: 'The Fourth Amendment specially names houses. Police had probable cause that Payton committed a felony, but no arrest warrant, and no emergency at the door. One side says the home is at the core of the Amendment: knock-and-enter for a routine arrest needs a magistrate’s warrant. The other side says once officers have probable cause, delaying at the door lets suspects destroy evidence or flee — a warrant should not be an extra hurdle for a felony arrest at the person’s own house.',
            steps: [
                { label: 'The rule:', text: 'The Fourth Amendment specially protects houses. Warrants usually need probable cause.' },
                { label: 'What it means here:', text: 'Police had probable cause Payton committed a felony. They had no warrant. There was no emergency at the door.' },
                { label: 'Payton says:', text: 'Crossing a home’s door for a planned arrest needs a judge’s warrant.' },
                { label: 'New York says:', text: 'Probable cause should be enough. Waiting for a warrant lets people flee or destroy evidence.' },
                { label: 'Your job:', text: 'Argue whether a planned, no-warrant home arrest is “unreasonable.”' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'The Fourth Amendment protects homes. A warrant is permission from a judge.' },
                { label: 'Here:', text: 'Police had strong reasons to arrest Payton. They had no warrant. It was not an emergency.' },
                { label: 'Payton says:', text: 'Police need a warrant to go into a home for a planned arrest.' },
                { label: 'New York says:', text: 'Strong reasons are enough. Waiting lets a suspect run away.' },
                { label: 'Your job:', text: 'Pick one of these rules and argue for it.' }
            ],
            terms: [
                { term: 'warrant', meaning: 'A judge’s approval before police cross the threshold of a home for a planned arrest — not a snap judgment by officers on the porch.', simple: 'A judge’s OK before police step into a home for a planned arrest.', quick: 'Permission from a judge.' },
                { term: 'probable cause', meaning: 'Facts that would lead a reasonable person to believe this person committed the crime. Both sides agree police had it; they fight over whether that is enough to enter the home.', simple: 'Solid facts this person likely committed the crime. Both sides agree police had it. They fight over whether that is enough to enter the home.', quick: 'Enough facts to believe a person did a crime.' },
                { term: 'routine arrest vs. emergency', meaning: 'If someone inside is in danger or evidence is being destroyed right now, the emergency (exigent-circumstances) idea may allow entry. Payton’s entry was planned, not a 911-in-progress scene.', simple: 'An emergency (danger right now) can change the rule. This entry was planned. It was not a 911-in-progress scene.', quick: 'In an emergency, police may not have to wait. This arrest was planned. It was not an emergency.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Warrant to cross the threshold',
                text: 'Probable cause is enough to arrest someone in public. Crossing a home’s door is different. Absent an emergency (exigent circumstances), police need a warrant from a judge.',
                textSimple: 'Payton’s rule: probable cause is enough on the street. To enter a home for a planned arrest, police need a warrant — unless it is an emergency.',
                textQuick: 'Payton wants this rule. To go into a home for a planned arrest, police need a warrant. An emergency is different.'
            },
            respondent: {
                title: 'Felony + probable cause is enough',
                text: 'If officers have probable cause that a felony suspect is inside, forcing them to wait for a warrant lets people escape, destroy evidence, or stay armed behind a door. New York’s statute was a reasonable rule.',
                textSimple: 'New York’s rule: if police have probable cause a felony suspect is inside, they should not have to wait for a warrant.',
                textQuick: 'New York wants this rule. If police have strong reasons a suspect is inside, they do not have to wait for a warrant.'
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
        drivingFrameSimple: 'A student posted on a weekend, off campus. The school punished her. The fight: does the school’s speech power follow her home?',
        drivingFrameQuick: 'B.L. posted on a weekend, away from school. The school punished her anyway. So does a school’s power over speech follow a student home?',
        law: {
            issue: 'May a public school punish a student’s vulgar off-campus social-media speech about the cheer team?',
            issueSimple: 'May a public school punish a student’s weekend Snap about cheer, posted off campus?',
            issueQuick: 'Can a public school punish a weekend post made away from school?',
            clause: 'Congress shall make no law … abridging the freedom of speech.',
            clauseCite: 'First Amendment',
            plain: 'B.L.’s Snap was sent off campus, on a weekend, using her own phone. Schools are still government. Tinker allows schools to limit on-campus speech that substantially disrupts class. The legal fight is whether that disruption idea follows a student home — so a coach may discipline a weekend post about the team — or whether off-campus speech stays with parents and, if needed, ordinary civic limits, not the student-handbook.',
            steps: [
                { label: 'The rule:', text: 'The First Amendment protects speech. A public school is still government on the weekend.' },
                { label: 'What it means here:', text: 'B.L. posted off campus, on her own phone. The school punished her for the team.' },
                { label: 'The school says:', text: 'If the post is about school and it hurts the team, the disruption idea should follow the student home.' },
                { label: 'B.L. says:', text: 'Saturday speech belongs to parents. Hurt feelings are not substantial disruption.' },
                { label: 'Your job:', text: 'Argue whether the school’s speech power stops at the campus gate.' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'The government may not cut back free speech. A public school is part of the government.' },
                { label: 'Here:', text: 'B.L. posted on her own phone, away from school. The school took her off the team.' },
                { label: 'The school says:', text: 'The post was about school and the team. So the school may act.' },
                { label: 'B.L. says:', text: 'A weekend post is her family’s business. Swear words did not stop school.' },
                { label: 'Your job:', text: 'Decide whether a school’s power stops at the school door. Then argue for it.' }
            ],
            terms: [
                { term: 'off-campus speech', meaning: 'Words or posts created outside school time and property. The school says the effects reached the cheer team; B.L. says geography and the weekend should matter.', simple: 'A post made off school grounds, not during school. Here: a weekend Snap on her own phone.', quick: 'A post or words made away from school, not during school.' },
                { term: 'substantial disruption', meaning: 'Borrowed from Tinker: would this speech actually interfere with school operations? The school says team discipline and coaching were hit; B.L. says disappointment is not disruption.', simple: 'Did this actually interfere with school? The school says the team suffered. B.L. says hurt feelings are not enough.', quick: 'A big problem that stops school work.' },
                { term: 'in loco parentis', meaning: 'The school’s claim that coaches stand in for parents on team issues even after the bell. B.L.’s side says that idea stops at the campus gate.', simple: '“In the place of a parent.” The school says coaches still have that role after the bell. B.L. says it stops at the campus gate.', quick: 'Latin for “in the place of a parent.” The school says coaches still act like parents after school.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'School-related speech, even off campus',
                text: 'If the post targets the school, a team, or the educational program, and coaches can show it hurt morale or discipline, the school may respond — otherwise online attacks on teams become untouchable.',
                textSimple: 'The school’s rule: if the post is about school or the team and it hurts discipline, the school may punish it even off campus.',
                textQuick: 'The school wants this rule. If a post is about school or the team and it hurts the team, the school may punish it.'
            },
            respondent: {
                title: 'Off campus, parents’ domain',
                text: 'Speech from a convenience store on a Saturday is the family’s business. Schools may not punish mere vulgarity or disappointment about tryouts. Tinker required substantial disruption, not hurt feelings.',
                textSimple: 'B.L.’s rule: Saturday speech off campus belongs to parents. Rude words and hurt feelings are not substantial disruption.',
                textQuick: 'B.L. wants this rule. A weekend post made away from school belongs to her family. Rude words are not a big problem at school.'
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
                'Cheer rules required respect for the school and coaches and no foul language; extracurriculars can demand more than the classroom (Vernonia).',
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
                excerpt: 'The rules told cheerleaders to “have respect for your school, coaches, teachers, other cheerleaders and teams,” to avoid “foul language and inappropriate gestures,” and not to post “negative information regarding cheerleading, cheerleaders, or coaches” on the internet. B.L. had acknowledged the rules before joining the team.',
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

    morse: {
        shortTitle: 'Morse v. Frederick',
        petitioner: { name: 'Principal Morse and the Juneau School Board', legal: 'Petitioner' },
        respondent: { name: 'Joseph Frederick (the student)', legal: 'Respondent' },
        amendment: 'First Amendment: student speech at a school event',
        question: 'May a public school punish a student for a banner at a school event that officials believe promotes illegal drug use?',
        drivingFrame: 'This case is about whether a school may limit a student message it sees as promoting illegal drugs, when the student stood on a public sidewalk during an event the school had approved.',
        drivingFrameSimple: 'A student held up a banner across the street from school during a school event. The principal said it promoted drugs. The fight: was he at school, and may a school ban that message?',
        drivingFrameQuick: 'A student held up a banner during a school event. The principal said it was about drugs. So was he at school? And can a school stop that message?',
        law: {
            issue: 'May a public school punish a student for a banner at a school-approved event because officials read it as promoting illegal drug use?',
            issueSimple: 'May a public school punish a banner at a school event because officials say it promotes illegal drugs?',
            issueQuick: 'Can a school punish a banner it says is about drugs?',
            clause: 'Congress shall make no law … abridging the freedom of speech.',
            clauseCite: 'First Amendment',
            plain: 'Public schools are part of government, so the First Amendment applies. The parties fight about two things. First, was Frederick at school when he stood on a public sidewalk during a relay the principal had approved? Second, which rule decides the case? Frederick says a school must show that speech would substantially disrupt school. The school says it may stop student messages that promote illegal drug use at school events, because teaching students to avoid drugs is part of its job.',
            steps: [
                { label: 'The rule:', text: 'The First Amendment says the government may not cut back free speech. A public school is part of the government.' },
                { label: 'What it means here:', text: 'Frederick held up a banner across the street from school during a relay the principal had approved.' },
                { label: 'The school says:', text: 'He was at a school event, and a school may stop messages that promote illegal drugs.' },
                { label: 'Frederick says:', text: 'He was on a public sidewalk, the banner was a joke, and nothing was disrupted.' },
                { label: 'Your job:', text: 'Argue which rule should decide the case, and whether he was at school.' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'The government may not cut back free speech.' },
                { label: 'Here:', text: 'A student held up a sign during a school event. He stood across the street.' },
                { label: 'The school says:', text: 'He was at school. Schools may stop messages about drugs.' },
                { label: 'Frederick says:', text: 'He was on a public sidewalk. The sign was a joke.' },
                { label: 'Your job:', text: 'Pick a side and argue for its rule.' }
            ],
            terms: [
                { term: 'school-sanctioned event', meaning: 'An activity the school approves and supervises, even away from the building. The school says the torch relay was one; Frederick says students were just let out to watch a public parade.', simple: 'An activity the school approves and watches over. The two sides disagree about whether the relay was one.', quick: 'An event the school says yes to and watches over.' },
                { term: 'substantial disruption', meaning: 'Frederick’s proposed line: a school may punish student speech only if it would seriously interfere with school. The school never claimed the banner disrupted classwork.', simple: 'Frederick’s test: the speech must seriously get in the way of school. He says nothing was disrupted.', quick: 'A big problem that stops school.' },
                { term: 'educational mission', meaning: 'The school’s argument that teaching students to avoid illegal drugs is part of its job, so a message promoting drugs at a school event works against that job.', simple: 'What a school is trying to teach. The school says it teaches students to avoid drugs.', quick: 'What a school is trying to teach.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'School events and drug messages',
                text: 'At an event the school approves and supervises, school rules apply. A school may stop student messages that can reasonably be read as promoting illegal drug use, because protecting students from drugs is part of its job.',
                textSimple: 'The school’s rule: at a school event, school rules apply, and a school may stop a message that a reasonable person would read as promoting illegal drugs.',
                textQuick: 'The school wants this rule. At a school event, the school may stop messages about using drugs.'
            },
            respondent: {
                title: 'A public sidewalk and proven disruption',
                text: 'A student on a public sidewalk who has not entered school is speaking as a citizen. Even at school, a school may punish speech only if it would substantially disrupt school, not because officials read a joke as a drug message.',
                textSimple: 'Frederick’s rule: a public sidewalk is not school, and a school must show real disruption before it punishes speech.',
                textQuick: 'Frederick wants this rule. The sidewalk is not school. The school must show a big problem first.'
            }
        },
        theorySamples: {
            petitioner: [
                'Principal Deborah Morse and the Juneau School Board.',
                'During an approved school event, a senior unrolled a 14-foot banner reading “BONG HiTS 4 JESUS” in front of the school and refused to take it down. The principal suspended him under a board policy against messages that advocate illegal drug use.',
                'May a public school stop a student message at a school event that reasonably appears to promote illegal drug use?',
                'Schools may limit some student speech that adults could say elsewhere, as in Bethel v. Fraser (1986). Board Policy 5520 banned messages advocating drugs that are illegal for minors.',
                'The Court should hold that schools may restrict student speech at school events that promotes illegal drug use.',
                'If schools must wait for disruption, they cannot back up the drug-prevention lessons they teach every day.'
            ],
            respondent: [
                'Joseph Frederick, an 18-year-old senior speaking from a public sidewalk.',
                'He had not entered school that day. He held up a banner he called meaningless and funny, hoping to get on television, across the street from campus at a relay the public also attended. He was suspended.',
                'May a school punish a student for a silly message on a public sidewalk that disrupted nothing?',
                'The First Amendment protects student speech unless it would substantially disrupt school. The school never claimed the banner disrupted classwork.',
                'The Court should hold that a school may not punish non-disruptive student speech just because officials read it as a drug message.',
                'If principals can punish any message they think hints at drugs, students will not know what they are allowed to say.'
            ]
        },
        weighing: {
            petitioner: [
                'The principal approved the relay as a social event or class trip; she pointed to the pep band, the cheerleaders and supervising teachers.',
                'Board Policy 5520 banned messages advocating drugs illegal for minors, and another policy applied school rules at approved events.',
                'Frederick refused to lower the banner when the principal asked.',
                'The superintendent wrote that the banner was not political speech.'
            ],
            respondent: [
                'Frederick had not entered school and stood on a public sidewalk off school property.',
                'Students did not need permission slips and were not required to stay with their teachers.',
                'The school never claimed the banner disrupted classwork; the disorder came before the banner and did not involve his group.',
                'Frederick said the words were meaningless and meant to get on television.'
            ]
        },
        hardSide: null,
        hotBench: [
            { q: 'If the same banner said “Legalize marijuana,” could the school punish it?', tip: 'Separate a political message from one that only promotes drug use.' },
            { q: 'Frederick never entered school that day. Why is he “at school”?', tip: 'Point to the facts: approved event, school hours, teachers supervising, school rules for events.' },
            { q: 'The school never claimed the banner disrupted class. Why isn’t that the end of the case?', tip: 'Either explain why disruption is the wrong test here, or hold the school to it.' },
            { q: 'Who decides what a confusing message means: the student, the principal, or a reasonable observer?', tip: 'Pick a standard and apply it to these exact words.' },
            { q: 'Students did not need permission slips. Doesn’t that show it was not a school trip?', tip: 'Weigh the permission-slip fact against the band, the cheerleaders and the supervising teachers.' },
            { q: 'If the school wins, could it punish a joke on a T-shirt at a school game?', tip: 'Give a limiting principle: which messages, at which events.' },
            { q: 'If Frederick wins, can a student hold up any sign at a school event as long as no class stops?', tip: 'Concede what you must; defend the line you need.' },
            { q: 'One-sentence rule, counsel.', tip: 'School events and drug messages vs. a public sidewalk and proven disruption.' }
        ],
        pair: {
            other: 'Tinker v. Des Moines',
            href: 'tinker.html',
            prompt: 'A silent political armband in school vs. a nonsense banner across the street at a school event. Which facts matter more: where the speech happened, or what it said?'
        },
        sources: [
            {
                type: 'historical', typeLabel: 'The speech',
                title: 'The banner',
                excerpt: 'On January 24, 2002, as the Olympic Torch Relay passed Juneau-Douglas High School, Joseph Frederick and his friends unrolled a 14-foot banner reading “BONG HiTS 4 JESUS” on the sidewalk across the street. Principal Morse told them to take it down. Everyone but Frederick did.',
                citation: 'Frederick v. Morse, 439 F.3d 1114 (9th Cir. 2006), statement of facts.'
            },
            {
                type: 'statute', typeLabel: 'School rule',
                title: 'Juneau School Board Policy 5520',
                excerpt: '“The Board specifically prohibits any assembly or public expression that … advocates the use of substances that are illegal to minors … .” Another board policy applied the same conduct rules to students at approved social events and class trips.',
                citation: 'Juneau School Board Policies 5520 and 5850, as quoted in the case record.'
            },
            {
                type: 'historical', typeLabel: 'School record',
                title: 'The superintendent’s memo',
                excerpt: 'The superintendent limited the suspension to the 8 days already served but agreed with the principal. He wrote that Frederick displayed the banner “in the midst of his fellow students, during school hours, at a school-sanctioned activity,” and that his speech “was not political.”',
                citation: 'Superintendent’s memorandum, as quoted in the case record.'
            },
            {
                type: 'historical', typeLabel: 'Case fact',
                title: 'Frederick’s side of the street',
                excerpt: 'Frederick got stuck in the snow and had not gone to school that day before the relay. No one disputed that he stood off school property, across Glacier Avenue. He said the words were “meaningless and funny,” meant to get on television.',
                citation: 'Frederick v. Morse, 439 F.3d 1114 (9th Cir. 2006), statement of facts.'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Tinker v. Des Moines (1969)',
                excerpt: 'Both sides discuss this case about students who wore black armbands to protest the Vietnam War. Frederick argues it requires a school to show substantial disruption before punishing student speech. The school argues it does not decide a case about a message promoting illegal drugs.',
                citation: 'Tinker v. Des Moines Indep. Cmty. Sch. Dist., 393 U.S. 503 (1969).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Bethel v. Fraser (1986)',
                excerpt: 'The Court allowed a school to punish a student for a lewd speech at a school assembly. The school says this shows students’ rights at school are not the same as adults’ rights elsewhere. Frederick says his banner was not lewd and was not at an assembly.',
                citation: 'Bethel Sch. Dist. No. 403 v. Fraser, 478 U.S. 675 (1986).'
            },
            {
                type: 'precedent', typeLabel: 'Earlier case',
                title: 'Hazelwood v. Kuhlmeier (1988)',
                excerpt: 'The Court allowed a principal to remove articles from a school-sponsored student newspaper. The school uses it to show educators may control some student speech. Frederick answers that no one thought his banner spoke for the school.',
                citation: 'Hazelwood Sch. Dist. v. Kuhlmeier, 484 U.S. 260 (1988).'
            },
            {
                type: 'court', typeLabel: 'Appeals court',
                title: 'Ninth Circuit path',
                excerpt: 'In March 2006 the U.S. Court of Appeals for the Ninth Circuit ruled for Frederick. It held that the school punished him without showing a risk of substantial disruption. Morse and the school board asked the Supreme Court to review the case.',
                citation: 'Frederick v. Morse, 439 F.3d 1114 (9th Cir. 2006).'
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
        drivingFrameSimple: 'Two religion rules sit in the same sentence. One protects the coach’s prayer. One limits the school from backing a religion. Argue which one controls here.',
        drivingFrameQuick: 'The First Amendment has two rules about religion. One protects the coach’s prayer. The other says a school may not back a religion. Which rule wins here?',
        law: {
            issue: 'May a public-school football coach kneel in prayer at midfield after games where students can see him?',
            issueQuick: 'Can a public school coach pray on the field after games, where students can see him?',
            issueSimple: 'May a public-school coach kneel to pray at midfield after games, where students can see him?',
            clause: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof…',
            clauseCite: 'First Amendment — Free Exercise and Establishment Clauses',
            plain: 'Two religion clauses sit in the same sentence. Free Exercise protects Kennedy’s own prayer. Establishment limits the school from appearing to sponsor religion. Because he is a paid coach on the school field, right after a school game, the district says players will feel pressure to join if they want playing time. Kennedy says a quiet personal prayer is his speech, not a school sermon, and that punishing it targets religion.',
            steps: [
                { label: 'The rule:', text: 'The First Amendment has two religion clauses in one sentence.' },
                { label: 'What it means:', text: 'Free Exercise protects the coach’s own prayer. Establishment limits the school from backing a religion.' },
                { label: 'The coach says:', text: 'A short personal prayer after the game is his worship, not a school service.' },
                { label: 'The school says:', text: 'A paid coach at the 50-yard line looks like school prayer. Players may feel they must join to get playing time.' },
                { label: 'Your job:', text: 'Argue which clause controls when both are in play. This is not “is religion good.”' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'The First Amendment has two rules about religion.' },
                { label: 'Rule one:', text: 'The government may not stop you from practicing your religion.' },
                { label: 'Rule two:', text: 'The government may not set up or favor a religion. A public school is part of the government.' },
                { label: 'The coach says:', text: 'His short prayer was his own, not the school’s.' },
                { label: 'The school says:', text: 'A coach on the field looks like the school praying. Players may feel they have to join.' },
                { label: 'Your job:', text: 'Pick which rule should win here and argue for it.' }
            ],
            terms: [
                { term: 'Free Exercise', meaning: 'The First Amendment protection for practicing your religion. Kennedy’s main hook: the district punished him because the conduct was prayer.', simple: 'The right to practice your religion. The coach’s main hook: he was punished because it was prayer.', quick: 'Your right to practice your religion.' },
                { term: 'Establishment Clause', meaning: 'The First Amendment limit on government endorsement of religion. The district’s main hook: a coach at the 50-yard line looks like the school is backing Christianity.', simple: 'The government may not back a religion. The school’s main hook: a coach at midfield looks like the school is backing prayer.', quick: 'The rule that the government may not set up or favor a religion.' },
                { term: 'coercion', meaning: 'Pressure that makes joining the prayer feel required — especially for students who need the coach’s approval. Not the same as a private adult praying alone at home.', simple: 'Pressure that makes joining feel required — especially if you need the coach’s approval for playing time.', quick: 'Pressure that makes someone feel they have to join.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Private religious speech',
                text: 'A brief, personal prayer after the game is the coach’s Free Exercise and free speech, not a school-led worship service. The Establishment Clause does not require the government to hide religion.',
                textSimple: 'The coach’s rule: a short personal prayer after the game is his religion and his speech, not a school church service.',
                textQuick: 'The coach wants this rule. His short prayer is his own. It is not the school praying.'
            },
            respondent: {
                title: 'Endorsement and student pressure',
                text: 'A coach in school gear at the 50-yard line is still on duty in students’ eyes. The district says players may join to protect playing time. That looks like school-sponsored prayer, which the Establishment Clause forbids.',
                textSimple: 'The school’s rule: a coach at midfield in school gear looks like school prayer. Players may feel they must join to get playing time.',
                textQuick: 'The school wants this rule. A coach on the field looks like the school praying. Players may feel they have to join.'
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
                'The prayers were short (about 30 seconds) and, Kennedy says, personal thanks — not a sermon from the school.',
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
        drivingFrameSimple: 'Congress writes national immigration law. Arizona added its own police rules. The fight is who gets to write the rules — not whether immigration is good or bad.',
        drivingFrameQuick: 'This case is about who makes immigration rules. Is it the states or the U.S. government? It is not about whether immigration is good or bad.',
        law: {
            issue: 'May Arizona add its own police-enforced immigration rules on top of federal immigration law?',
            issueSimple: 'May Arizona add its own immigration police rules on top of federal immigration law?',
            issueQuick: 'Can Arizona add its own immigration rules on top of U.S. law?',
            clause: 'This Constitution, and the Laws of the United States which shall be made in Pursuance thereof … shall be the supreme Law of the Land…',
            clauseCite: 'Article VI — Supremacy Clause',
            plain: 'Congress, not a state legislature, writes the national immigration system. Federalism still lets states police ordinary crime. S.B. 1070 tries to have Arizona officers enforce extra immigration checks and state crimes tied to status. The United States argues those pieces are preempted — they clash with, or get in the way of, the federal scheme. Arizona argues it is helping enforce the same federal rules and protecting residents the federal government has not. The issue is who gets to write the rules, not whether immigration is “good” or “bad.”',
            steps: [
                { label: 'The rule:', text: 'The Supremacy Clause says valid federal law beats state law when the two conflict.' },
                { label: 'What it means here:', text: 'Congress makes the rules about who may come and stay in the country. States still run their own police.' },
                { label: 'The United States says:', text: 'S.B. 1070 is a second set of immigration rules. Federal law already covers this subject, so the state rules are blocked.' },
                { label: 'Arizona says:', text: 'The law copies federal rules and helps enforce them. Helping is not replacing Congress.' },
                { label: 'Your job:', text: 'Argue who gets to write the rules — not whether immigration is good or bad.' }
            ],
            stepsQuick: [
                { label: 'The rule:', text: 'When a U.S. law and a state law clash, the U.S. law wins.' },
                { label: 'Here:', text: 'Congress makes the U.S. immigration rules. States still run their own police.' },
                { label: 'The United States says:', text: 'Arizona made a second set of immigration rules. U.S. law already covers this, so Arizona’s rules must go.' },
                { label: 'Arizona says:', text: 'Its law copies U.S. rules and helps enforce them. Helping is not the same as replacing Congress.' },
                { label: 'Your job:', text: 'Argue about who makes the rules. Do not argue about whether immigration is good or bad.' }
            ],
            terms: [
                { term: 'Supremacy Clause', meaning: 'Article VI: valid federal law beats conflicting state law. If S.B. 1070 collides with Congress’s immigration statutes, the state provisions fall.', simple: 'When federal law and state law clash, valid federal law wins. If Arizona’s law collides with Congress, Arizona’s law falls.', quick: 'The part of the Constitution that makes U.S. law the highest law.' },
                { term: 'preemption', meaning: 'The doctrine that implements supremacy. Field preemption (federal law occupies the subject) and conflict preemption (state law stands in the way) are both in play.', simple: 'Federal law can block a state law. Either Congress already filled that subject, or the state rule gets in the way.', quick: 'When U.S. law covers something, a state cannot make its own rules about it.' },
                { term: 'federalism', meaning: 'The Constitution’s split of power. States run local police; the national government generally sets immigration status rules. Arizona is a border-line case in that split.', simple: 'Power is split. States run local police. The national government usually writes the rules about immigration status.', quick: 'Sharing power between the states and the U.S. government.' }
            ]
        },
        tests: {
            petitioner: {
                title: 'Cooperative enforcement',
                text: 'S.B. 1070 mirrors federal requirements and helps enforce them. States police their streets every day. Helping federal law is not the same as replacing it.',
                textSimple: 'Arizona’s rule: the law copies federal rules and helps enforce them. Helping is not replacing Congress.',
                textQuick: 'Arizona wants this rule. A state may help enforce U.S. immigration law. Helping is not replacing Congress.'
            },
            respondent: {
                title: 'Field preemption',
                text: 'The Constitution gives Congress naturalization and foreign-affairs power. A second, state-written immigration code — even one that copies federal rules — conflicts with a uniform national system.',
                textSimple: 'The United States’ rule: immigration is a federal subject. A second set of state rules, even a copy, conflicts with one national system.',
                textQuick: 'The United States wants this rule. Immigration is a job for the U.S. government. A state may not add its own set of rules, even a copy.'
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

// Washington v. Washington State Commercial Passenger Fishing Vessel Ass'n (1979).
// Pre-decision only: the 1974 Boldt ruling and earlier cases are fair game; this
// case's holding, vote and opinion language are not.
CASE_PREP_DATA['fishing-rights'] = {
    shortTitle: 'Washington v. Fishing Vessel Ass’n',
    petitioner: { name: 'State of Washington', legal: 'Petitioner' },
    respondent: { name: 'Treaty tribes and the United States', legal: 'Respondent' },
    amendment: 'Treaty rights and the Supremacy Clause (Article VI)',
    question: 'Do the 1854–1855 treaties give tribes only the same chance to fish as everyone else, or a share of the fish?',
    drivingFrame: 'This case is about what a treaty promise means and who manages a scarce resource. The State says it must give every citizen the same chance at the salmon. The tribes say they kept a right to the fish themselves when they gave up their land.',
    drivingFrameSimple: 'The tribes gave up their land but kept the right to fish. The State says that means the same chance as everyone. The tribes say it means a real share of the fish.',
    drivingFrameQuick: 'The tribes kept the right to fish. The State says that is the same chance as everyone. The tribes say it is a share of the fish.',
    law: {
        issue: 'Does a treaty right to take fish “in common with all citizens” mean an equal chance to fish, or a share of each run?',
        issueSimple: 'Does “in common with all citizens” mean the same chance for everyone, or a real share for the tribes?',
        issueQuick: 'Did the treaty promise a chance to fish, or a share of the fish?',
        clause: 'The right of taking fish, at all usual and accustomed grounds and stations, is further secured to said Indians in common with all citizens of the Territory …',
        clauseCite: 'Treaty of Medicine Creek (1854), Article 3; treaties are “the supreme Law of the Land” under Article VI',
        plain: 'Tribes are sovereign nations, and these treaties were agreements between governments. Under Article VI, treaties made by the United States outrank state law. Both sides agree the tribes kept a right to fish at their usual places. The fight is over what “in common with all citizens” means: the same chance every newcomer has, or a share of the fish that the State must protect when it writes its rules.',
        steps: [
            { label: 'The rule:', text: 'Under Article VI, a treaty made by the United States is the supreme law of the land. States must follow it.' },
            { label: 'The treaty words:', text: 'The tribes kept the right to fish at their usual places “in common with all citizens.”' },
            { label: 'The State says:', text: 'Those words mean the same chance to fish as everyone else. The State must manage salmon for all.' },
            { label: 'The tribes say:', text: 'Those words promised a real share of the fish. An equal chance left them about 2 percent.' },
            { label: 'Your job:', text: 'Argue for one meaning of the treaty words. Do not argue about whether tribes deserve rights.' }
        ],
        stepsQuick: [
            { label: 'The rule:', text: 'A treaty is the highest law. States must follow it.' },
            { label: 'The words:', text: 'The tribes may fish “in common with” everyone.' },
            { label: 'The State says:', text: 'That means the same chance for all.' },
            { label: 'The tribes say:', text: 'That means a real share of the fish.' },
            { label: 'Your job:', text: 'Pick one meaning and argue for it.' }
        ],
        terms: [
            { term: 'treaty', meaning: 'A binding agreement between nations. Article VI makes treaties of the United States the supreme law of the land, above state law.', simple: 'A deal between nations. It outranks state law.', quick: 'A deal between nations.' },
            { term: 'usual and accustomed places', meaning: 'The places where a tribe traditionally fished, on and off its reservation. The treaties protect fishing at these places.', simple: 'The places where a tribe has always fished.', quick: 'Where a tribe has always fished.' },
            { term: 'trust responsibility', meaning: 'The legal duty of the United States to protect tribal lands, resources and treaty rights. It is why the United States sued on the tribes’ behalf.', simple: 'The duty of the United States to protect tribal rights. That is why it sued for the tribes.', quick: 'The job of the United States to protect tribal rights.' }
        ]
    },
    tests: {
        petitioner: {
            title: 'Equal opportunity',
            text: '“In common with all citizens” gives treaty fishers the same chance to fish at their usual places as anyone else, plus protection from being shut out. It does not promise a set share, and the State may manage the runs for every citizen.',
            textSimple: 'The State’s rule: the treaty gives tribes the same chance to fish as everyone, not a set share. The State manages the fish for all.',
            textQuick: 'The State wants this rule. Tribes get the same chance as everyone. No set share.'
        },
        respondent: {
            title: 'A share of the fish',
            text: 'The tribes kept a right to take fish, not just to try. Read as the tribes understood it in 1854–1855, the treaty secures a fair share of each run that passes their usual places, and the State must write its rules to protect that share.',
            textSimple: 'The tribes’ rule: the treaty promised a real share of the fish, as the tribes understood it. The State must protect that share.',
            textQuick: 'The tribes want this rule. The treaty promised them a real share of the fish.'
        }
    },
    theorySamples: {
        petitioner: [
            'The State of Washington, its Departments of Fisheries and Game, and the non-Indian commercial fishers who depend on the runs.',
            'After a federal judge in 1974 read the treaties to allow tribes up to half of the harvestable fish, the State’s own supreme court said its agency could not carry out that order.',
            'Does “in common with all citizens” promise tribes a share of the fish, or the same chance every citizen has?',
            'The treaty words describe a right held in common. The Fourteenth Amendment promises every citizen equal protection of the laws.',
            'The Court should hold that the treaties guarantee tribes access and an equal opportunity to fish, not a fixed percentage.',
            'Thousands of families earn a living from these runs, and the State must be able to manage them for everyone.'
        ],
        respondent: [
            'Twenty treaty tribes, including the Nisqually, Puyallup, Makah and the Yakama Nation, with the United States as their trustee.',
            'The tribes gave up most of their land in 1854–1855 and kept the right to fish. Under “equal opportunity,” they caught about 2 percent of the salmon and trout by 1974.',
            'Did the tribes keep a right to take fish, or only a right to try?',
            'Treaties are the supreme law of the land, and a treaty is read the way the tribes would have understood it.',
            'The Court should hold that the treaties secure the tribes a fair share of each run that passes their usual places.',
            'A promise of fish that leaves the tribes almost no fish is not a promise kept.'
        ]
    },
    weighing: {
        petitioner: [
            'The treaty words say “in common with all citizens,” not “a share for the tribes.”',
            'Over 6,600 non-Indian commercial fishers earned a living from the runs.',
            'The State’s supreme court said special rights for one group violate equal protection.',
            'Managing a scarce resource for conservation is a core state job.'
        ],
        respondent: [
            'About three-fourths of the people in the region were Indians when the treaties were signed.',
            'The treaties were explained in Chinook Jargon, about 300 words, so the tribes’ understanding should control.',
            'Under the equal-chance rule, the tribes caught about 2 percent of the salmon and trout.',
            'Article VI makes treaties the supreme law of the land, binding on state judges.'
        ]
    },
    hardSide: null,
    hotBench: [
        { q: 'If “in common with” means equal shares, why didn’t the treaty just say “half”?', tip: 'Think about what the negotiators expected when fish were plentiful and settlers were few.' },
        { q: 'The tribes are about 800 commercial fishers and the others are over 6,600. Why should the smaller group get up to half?', tip: 'The treaty right belongs to the tribes as nations, not to individual fishers counted one by one.' },
        { q: 'Why shouldn’t a treaty word mean what a dictionary said it meant in 1854?', tip: 'Ask whose understanding matters when the treaty was explained in a 300-word trade language.' },
        { q: 'If the State cannot manage its own fish, who protects the salmon runs?', tip: 'Both sides can agree on conservation. The question is who shares the fish that remain.' },
        { q: 'Doesn’t a special right for one group violate equal protection?', tip: 'Tribes are nations with treaties, not just a group of citizens. Explain why that matters, or why it does not.' },
        { q: 'The State’s own Fisheries Department offered one-third. Why isn’t that a fair compromise?', tip: 'Decide whether the treaty sets a number or a principle.' },
        { q: 'May a state court refuse to follow a federal court’s reading of a treaty?', tip: 'Read Article VI closely: it speaks directly to state judges.' },
        { q: 'Counsel, state the exact rule you want us to write. One sentence.', tip: 'Practice until you can say your test without notes.' }
    ],
    pair: {
        other: 'Arizona v. United States',
        href: 'arizona.html',
        prompt: 'Both cases ask how far a state may go when federal law (or a federal treaty) covers the same ground. Who writes the rules in each case?'
    },
    sources: [
        {
            type: 'statute', typeLabel: 'Treaty',
            title: 'Treaty of Medicine Creek, Article 3',
            excerpt: '“The right of taking fish, at all usual and accustomed grounds and stations, is further secured to said Indians in common with all citizens of the Territory …”',
            citation: 'Treaty of Medicine Creek, Dec. 26, 1854, art. 3 (transcript: HistoryLink.org Essay 5253).'
        },
        {
            type: 'constitution', typeLabel: 'Constitution',
            title: 'The Supremacy Clause',
            excerpt: '“… all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby …”',
            citation: 'U.S. Const. art. VI, cl. 2.'
        },
        {
            type: 'court', typeLabel: 'Lower court',
            title: 'The Boldt decision (1974)',
            excerpt: 'Judge Boldt wrote that “in common with” means “sharing equally the opportunity to take fish” at usual and accustomed places, so treaty fishers could take up to 50 percent of the harvestable fish.',
            citation: 'United States v. Washington, 384 F. Supp. 312 (W.D. Wash. 1974).'
        },
        {
            type: 'court', typeLabel: 'State court',
            title: 'Washington Supreme Court (1977)',
            excerpt: 'The state court held that the State’s fisheries agency could not carry out the federal order, and said recognizing special fishing rights for Indians would violate the Equal Protection Clause.',
            citation: 'Puget Sound Gillnetters Ass’n v. Moos, 88 Wash. 2d 677 (1977).'
        },
        {
            type: 'precedent', typeLabel: 'Earlier case',
            title: 'United States v. Winans (1905)',
            excerpt: 'The Supreme Court said a treaty with the Yakama was “not a grant of rights to the Indians, but a grant of right from them.”',
            citation: 'United States v. Winans, 198 U.S. 371 (1905).'
        },
        {
            type: 'historical', typeLabel: 'Treaty council',
            title: 'What Governor Stevens said',
            excerpt: 'At the Treaty of Point Elliott council on January 22, 1855, Stevens told the tribes: “We want to place you in homes where you can cultivate the soil, using potatoes and other articles of food, and where you will be able to pass in canoes over the waters of the Sound and catch fish and back to the mountains to get roots and berries.”',
            citation: 'Treaty council record, Jan. 22, 1855, as found in United States v. Washington, 384 F. Supp. 312 (W.D. Wash. 1974).'
        },
        {
            type: 'government', typeLabel: 'Court finding',
            title: 'Who fishes for a living',
            excerpt: 'By the early 1970s, over 6,600 non-Indian fishers and about 800 Indian fishers made their living from commercial fishing, and about 280,000 people held sport fishing licenses in Washington.',
            citation: 'Findings in United States v. Washington, 384 F. Supp. 312 (W.D. Wash. 1974).'
        },
        {
            type: 'court', typeLabel: 'Court finding',
            title: 'The 2 percent',
            excerpt: 'In 1974, before the Boldt order took effect and while the “equal opportunity” rule still applied, treaty tribes caught about 2 percent of the salmon and trout harvested in the treaty area.',
            citation: 'United States v. Washington, 459 F. Supp. 1020, 1032 (W.D. Wash. 1978).'
        },
        {
            type: 'court', typeLabel: 'Lower court',
            title: 'Resistance to the federal order',
            excerpt: 'A federal appeals court wrote in 1978: “The state’s extraordinary machinations in resisting the [1974] decree have forced the district court to take over a large share of the management of the state’s fishery in order to enforce its decrees.”',
            citation: 'Puget Sound Gillnetters Ass’n v. United States District Court, 573 F.2d 1123 (9th Cir. 1978).'
        }
    ]
};

