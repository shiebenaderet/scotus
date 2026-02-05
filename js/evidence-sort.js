// Evidence Sort - Interactive fact sorting for the Evidence Vault
// Students slide facts toward petitioner (left) or respondent (right)
// and receive interpretive feedback on their choice.

var evidenceSortData = {
    arizona: {
        petitioner: 'Arizona',
        respondent: 'United States',
        facts: [
            {
                text: 'Arizona passed S.B. 1070 in 2010 to address what the state described as problems from illegal immigration.',
                petitionerFeedback: 'States have the right to address problems within their borders. Arizona is responding to real issues affecting its residents.',
                respondentFeedback: 'The federal government is responsible for immigration issues. A state law in this area steps into federal territory.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2011/11-182'
            },
            {
                text: 'The law increased powers of local law enforcement to contact federal immigration authorities during stops.',
                petitionerFeedback: 'States can help enforce federal law more efficiently by involving local officers who know their communities.',
                respondentFeedback: 'This expands state power into the federal domain. Immigration enforcement is a federal responsibility.',
                canBeBoth: true,
                source: 'https://en.wikipedia.org/wiki/Arizona_v._United_States'
            },
            {
                text: 'The law included three limitations: presume legal if driver\'s license shown, no consideration of race/origin, and must be consistent with federal law.',
                petitionerFeedback: 'The law includes protections against abuse with race-neutral safeguards. Arizona was careful to respect civil rights.',
                respondentFeedback: 'Even with these safeguards, the state law still attempts to regulate federal immigration matters, which it cannot do.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2011/11-182'
            },
            {
                text: 'Arizona taxpayers reported high costs from undocumented immigrants in education, healthcare, and law enforcement.',
                petitionerFeedback: 'States face direct financial burdens from federal inaction on immigration. Arizona had to protect its budget and residents.',
                respondentFeedback: 'Cost concerns, no matter how real, don\'t grant a state constitutional authority over immigration policy.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Arizona shares a border with Mexico and stated it faced unique immigration pressures.',
                petitionerFeedback: 'States in unique geographic situations have special needs that the federal government may not address quickly enough.',
                respondentFeedback: 'Federal law must apply uniformly across all states. One state\'s geography doesn\'t create special constitutional powers.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The Constitution gives Congress the power to "establish an uniform Rule of Naturalization."',
                petitionerFeedback: 'States can assist in carrying out this uniform rule. Helping enforce federal law is not the same as replacing it.',
                respondentFeedback: 'Immigration and naturalization are exclusively federal powers. The Constitution assigns this to Congress, not states.',
                canBeBoth: false,
                source: 'https://supreme.justia.com/cases/federal/us/567/387/'
            },
            {
                text: 'Local law enforcement had been assisting federal immigration enforcement before this law.',
                petitionerFeedback: 'Precedent exists for state-federal cooperation on immigration. This law formalizes what was already happening.',
                respondentFeedback: 'Past informal practice doesn\'t create a constitutional right for states to legislate in federal areas.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The federal government sued in federal court immediately after the law was passed.',
                petitionerFeedback: 'The federal government chose courts over cooperation, showing it prioritized control over solving the problem.',
                respondentFeedback: 'This shows federal supremacy in action\u2014the federal government enforcing its constitutional authority through proper channels.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The preemption doctrine holds that federal law supersedes conflicting state law.',
                petitionerFeedback: 'Preemption only applies when there is actual conflict. Arizona\'s law was designed to complement, not conflict with, federal law.',
                respondentFeedback: 'Federal immigration law preempts state laws in this area, even if the state law tries to mirror federal requirements.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'Arizona\'s law didn\'t create new immigration crimes but mirrored existing federal requirements.',
                petitionerFeedback: 'The state is copying federal law, not creating new law. It\'s reinforcing what Congress already decided.',
                respondentFeedback: 'Even mirroring federal law, the state is still legislating in a federal area where it has no authority.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supct/cert/11-182'
            }
        ]
    },
    tinker: {
        petitioner: 'Tinker Family',
        respondent: 'Des Moines Schools',
        facts: [
            {
                text: 'Students planned to wear black armbands (approximately 2 inches wide) as a silent protest against the Vietnam War.',
                petitionerFeedback: 'Symbolic expression is protected speech under the First Amendment. Wearing an armband is peaceful and non-disruptive.',
                respondentFeedback: 'Even symbolic expression can be regulated in school if it risks disrupting the learning environment.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/1968/21'
            },
            {
                text: 'The planning meeting was held at a private home (Christopher Eckhardt\'s house), not at school.',
                petitionerFeedback: 'The activity was student-initiated and planned outside school. This was personal political action, not school-sponsored disruption.',
                respondentFeedback: 'The planning location doesn\'t determine school authority. What matters is the impact when students bring it to school.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/1968/21'
            },
            {
                text: 'The Vietnam War was a deeply divisive political issue in American society.',
                petitionerFeedback: 'Political speech on important issues deserves the highest level of First Amendment protection.',
                respondentFeedback: 'Divisive issues increase the risk of school disruption. Schools must maintain a focused learning environment.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'The principal learned of the plan in advance and warned students they would be suspended.',
                petitionerFeedback: 'The school acted on speculation about possible problems, not on evidence of actual disruption.',
                respondentFeedback: 'The school gave fair warning before taking action. Students chose to violate a known rule.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/first-amendment-activities/tinker-v-des-moines/facts-and-case-summary-tinker-v-des-moines'
            },
            {
                text: 'The armbands were black cloth strips, about 2 inches wide. Students wearing them remained completely silent.',
                petitionerFeedback: 'This was a minimal, non-disruptive form of expression. No noise, no signs, no interference with classes.',
                respondentFeedback: 'Even minor symbols can become disruptive when they attract attention and distract from learning.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Students were suspended the moment they arrived at school wearing the armbands.',
                petitionerFeedback: 'Students were punished for peaceful expression before any disruption could even occur.',
                respondentFeedback: 'The school was enforcing rules that had been established and communicated before the violation.',
                canBeBoth: false,
                source: 'https://landmarkcases.org/cases/tinker-v-des-moines/'
            },
            {
                text: 'The school allowed students to wear other political symbols, including buttons and armbands supporting the war.',
                petitionerFeedback: 'The school treated viewpoints unequally\u2014allowing pro-war symbols but banning anti-war ones. This is viewpoint discrimination.',
                respondentFeedback: 'Schools sometimes need to make content-based decisions about which symbols might cause disruption.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'No actual disruption occurred at school as a result of students wearing armbands.',
                petitionerFeedback: 'The armbands caused zero disruption. The school punished speech that was completely peaceful.',
                respondentFeedback: 'The potential for disruption may justify preventive action, even if disruption hasn\'t happened yet.',
                canBeBoth: true,
                source: 'https://constitutioncenter.org/the-constitution/supreme-court-case-library/tinker-v-des-moines-independent-community-school-district'
            },
            {
                text: 'The First Amendment states: "Congress shall make no law...abridging the freedom of speech."',
                petitionerFeedback: 'This applies to public schools through the Fourteenth Amendment. Students have free speech rights at school.',
                respondentFeedback: 'Students have reduced rights in special environments like schools, where order is necessary for learning.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Students must attend school under state compulsory attendance laws.',
                petitionerFeedback: 'Since students are forced to attend, schools can\'t force them to give up constitutional rights while there.',
                respondentFeedback: 'State compulsion to attend creates a special environment where additional rules and structure are needed.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The Vietnam War was an ongoing military conflict with American casualties.',
                petitionerFeedback: 'Anti-war protest during an active war is core political speech\u2014exactly what the First Amendment protects most.',
                respondentFeedback: 'Wartime creates heightened emotions. Schools may need stricter discipline to maintain focus and order.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The students\' ages: Mary Beth was 13, John was 15, and Christopher was 16.',
                petitionerFeedback: 'Young students learning civic participation should be encouraged, not punished, for engaging with important issues.',
                respondentFeedback: 'Students\' ages indicate they need guidance and protection. Schools act in place of parents during school hours.',
                canBeBoth: true,
                source: null
            }
        ]
    },
    brown: {
        petitioner: 'Brown Family',
        respondent: 'Board of Education',
        facts: [
            {
                text: 'Five cases were consolidated from Kansas, South Carolina, Virginia, Washington D.C., and Delaware.',
                petitionerFeedback: 'This shows segregation was a nationwide problem, not an isolated local issue. It required a national solution.',
                respondentFeedback: 'Each state has different local circumstances. One ruling shouldn\'t override all local decisions at once.',
                canBeBoth: false,
                source: 'https://www.archives.gov/education/lessons/brown-v-board'
            },
            {
                text: 'The Fourteenth Amendment was ratified in 1868, 86 years before the Brown decision.',
                petitionerFeedback: 'The Amendment\'s purpose was broad equality. It took decades for courts to fully realize its promise.',
                respondentFeedback: 'The original intent of the amendment may not have specifically included school integration.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'Plessy v. Ferguson (1896) established the "separate but equal" doctrine 58 years earlier.',
                petitionerFeedback: 'The Plessy doctrine was wrong from the start. "Separate" is inherently unequal.',
                respondentFeedback: 'A long-standing legal precedent of 58 years carries significant weight and shouldn\'t be overturned lightly.',
                canBeBoth: true,
                source: 'https://www.britannica.com/event/Plessy-v-Ferguson-1896'
            },
            {
                text: 'Linda Brown lived 6 blocks from Monroe Elementary (Black school). Sumner School (white) was 7 blocks from her home.',
                petitionerFeedback: 'The law forced her to attend a specific school based solely on her race, regardless of distance or convenience.',
                respondentFeedback: 'Similar distances suggest roughly equal physical access to education under existing arrangements.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Linda walked through a dangerous railroad switchyard to reach her designated school.',
                petitionerFeedback: 'Segregation imposed physical danger on Black children. The system put them at real risk.',
                respondentFeedback: 'Routing and safety issues existed for students of all races and could be addressed without ending segregation.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Black schools often had fewer resources, books, and worse buildings in practice.',
                petitionerFeedback: '"Separate but equal" didn\'t exist in reality. The material inequality proved the system was fundamentally unfair.',
                respondentFeedback: 'Some districts were actively working to equalize spending between schools. The gap was closing.',
                canBeBoth: true,
                source: 'https://brown.oyez.org/modules/arguments-for-segregation/'
            },
            {
                text: 'Social science research indicated segregation caused psychological harm to Black children.',
                petitionerFeedback: 'Scientific evidence proved actual harm. Segregation damaged children\'s self-image and sense of worth.',
                respondentFeedback: 'Social science research is not the same as legal authority. Courts should rule on law, not psychology studies.',
                canBeBoth: false,
                source: 'https://en.wikipedia.org/wiki/Brown_v._Board_of_Education'
            },
            {
                text: 'Some Southern states argued they were actively making Black and white schools equal.',
                petitionerFeedback: 'Trying to equalize resources doesn\'t address the core harm of forced separation itself.',
                respondentFeedback: 'States were complying with the existing legal standard and making real progress toward equality.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Many Southern states would resist desegregation for years after the ruling.',
                petitionerFeedback: 'The legal ruling was correct even if implementation was difficult. Justice shouldn\'t wait for convenience.',
                respondentFeedback: 'The resistance shows the social and cultural complexity. Forcing rapid change can create more problems.',
                canBeBoth: false,
                source: 'https://www.archives.gov/publications/prologue/2004/spring/brown-v-board-1.html'
            },
            {
                text: 'The Equal Protection Clause: "nor deny to any person within its jurisdiction the equal protection of the laws."',
                petitionerFeedback: 'Clear prohibition against racial classification in government services like public education.',
                respondentFeedback: '"Equal protection" had historically been interpreted to allow separate-but-equal arrangements.',
                canBeBoth: false,
                source: 'https://www.archives.gov/education/lessons/brown-v-board'
            },
            {
                text: 'The case focused specifically on public elementary and secondary schools.',
                petitionerFeedback: 'Public institutions are subject to constitutional limits. Government-run schools cannot discriminate.',
                respondentFeedback: 'States have traditionally controlled local education. Federal courts should respect local authority.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The original framers of the Fourteenth Amendment had segregated schools in their own states.',
                petitionerFeedback: 'The Amendment\'s purpose transcended the framers\' personal practices. Its principles are bigger than its authors.',
                respondentFeedback: 'History shows the original intent of the framers supported the existence of segregated schools.',
                canBeBoth: false,
                source: 'https://www.naacpldf.org/case-issue/landmark-brown-v-board-education/'
            }
        ]
    },
    mahanoy: {
        petitioner: 'B.L.',
        respondent: 'Mahanoy School District',
        facts: [
            {
                text: 'B.L. failed to make the varsity cheerleading team and was placed on junior varsity.',
                petitionerFeedback: 'Personal frustration is understandable and natural. Being upset about a team decision is a normal human reaction.',
                respondentFeedback: 'Disappointment is normal, but it doesn\'t justify violating the code of conduct she agreed to follow.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'B.L. posted on Snapchat over the weekend, away from school property.',
                petitionerFeedback: 'The speech happened off campus and outside school hours. Schools shouldn\'t control what students say on their own time.',
                respondentFeedback: 'School interest extends to extracurricular activities. Cheerleaders represent the school even off campus.',
                canBeBoth: false,
                source: 'https://www.supremecourt.gov/opinions/20pdf/20-255_g3bi.pdf'
            },
            {
                text: 'The caption read: "F*** school f*** softball f*** cheer f*** everything."',
                petitionerFeedback: 'This was an expression of personal frustration about her own situation\u2014venting, not targeting anyone.',
                respondentFeedback: 'Vulgar language targeting the school community undermines the team and school values.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'Snapchat automatically deletes content sent to friends after it is viewed.',
                petitionerFeedback: 'The content was ephemeral\u2014meant to be temporary and private, not a permanent public statement.',
                respondentFeedback: 'Screenshots can preserve content permanently. Temporary platforms don\'t guarantee temporary impact.',
                canBeBoth: false,
                source: 'https://www.supremecourt.gov/opinions/20pdf/20-255_g3bi.pdf'
            },
            {
                text: 'The post was shared with approximately 250 Snapchat friends.',
                petitionerFeedback: 'This was a limited audience chosen by the student, not a public broadcast. She controlled who saw it.',
                respondentFeedback: '250 people is a large audience. Content shared that widely can easily spread beyond the intended group.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'A teammate took screenshots and showed them to the cheerleading coach.',
                petitionerFeedback: 'Someone else distributed the content beyond B.L.\'s control. She didn\'t bring it to school\u2014another student did.',
                respondentFeedback: 'The content reached the school community through a team member, bringing it within the school\'s interest.',
                canBeBoth: true,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'B.L. had signed a code of conduct for cheerleaders requiring respect for school and coaches.',
                petitionerFeedback: 'She signed a school code, but her speech was private and off campus. The code can\'t control her entire life.',
                respondentFeedback: 'Extracurricular participation is voluntary. She agreed to the rules as a condition of being on the team.',
                canBeBoth: true,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'The code of conduct prohibited "foul language and inappropriate gestures."',
                petitionerFeedback: 'The rule existed, but extending it to private off-campus speech goes too far.',
                respondentFeedback: 'A clear rule existed before the incident. B.L. knew the expectations.',
                canBeBoth: false,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'B.L. apologized to the coaches after they approached her about the post.',
                petitionerFeedback: 'Her apology shows understanding and maturity, not defiance. This wasn\'t a pattern of behavior.',
                respondentFeedback: 'An apology doesn\'t erase the rule violation or its impact on the team.',
                canBeBoth: false,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'The school suspended B.L. from the cheerleading team for one full year.',
                petitionerFeedback: 'A one-year suspension is disproportionate punishment for a frustrated teenager\'s off-campus social media post.',
                respondentFeedback: 'A significant consequence sends a clear message about expectations for team members.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'B.L. was a 14-year-old minor at the time of the incident.',
                petitionerFeedback: 'Minors deserve understanding about emotional regulation. Teenagers vent\u2014it\'s part of growing up.',
                respondentFeedback: 'Minors require guidance about appropriate conduct. The school has a role in teaching responsibility.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'No actual disruption occurred at school as a result of the Snapchat post.',
                petitionerFeedback: 'The speech didn\'t affect school functioning at all. There was no disruption to punish.',
                respondentFeedback: 'Potential disruption to team cohesion justifies action even if classroom disruption didn\'t occur.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supct/cert/20-255'
            }
        ]
    },
    kennedy: {
        petitioner: 'Coach Kennedy',
        respondent: 'Bremerton School District',
        facts: [
            {
                text: 'Joseph Kennedy prayed on the 50-yard line immediately after games for 15\u201330 seconds.',
                petitionerFeedback: 'A brief personal expression of faith in a public space. Quick and quiet\u2014not a sermon or ceremony.',
                respondentFeedback: 'The 50-yard line is a highly visible location on school property. This isn\'t private prayer.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2021/21-418'
            },
            {
                text: 'Kennedy initially prayed alone after games; students voluntarily joined over time.',
                petitionerFeedback: 'No coercion\u2014students chose to participate on their own. Kennedy never required anyone to join.',
                respondentFeedback: 'Students may have felt implicit pressure to join their coach, a figure of authority over their playing time.',
                canBeBoth: true,
                source: 'https://supreme.justia.com/cases/federal/us/597/21-418/'
            },
            {
                text: 'Kennedy had a long-standing and well-known history of leading students in prayer.',
                petitionerFeedback: 'A personal religious practice maintained consistently over years\u2014shows genuine personal conviction.',
                respondentFeedback: 'A pattern of leading prayer suggests this was more than a private personal exercise.',
                canBeBoth: true,
                source: 'https://supreme.justia.com/cases/federal/us/597/21-418/'
            },
            {
                text: 'The school asked Kennedy to stop praying on the field to avoid a potential Establishment Clause lawsuit.',
                petitionerFeedback: 'The school prioritized avoiding a lawsuit over protecting an employee\'s religious freedom.',
                respondentFeedback: 'The school has a legal duty to protect the institution from constitutional violations.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2021/21-418'
            },
            {
                text: 'Kennedy refused to stop praying on the field; his contract was not renewed.',
                petitionerFeedback: 'He stood firm on his religious convictions. The school punished him for exercising his faith.',
                respondentFeedback: 'He defied his employer\'s reasonable directives. Insubordination has consequences.',
                canBeBoth: true,
                source: 'https://en.wikipedia.org/wiki/Kennedy_v._Bremerton_School_District'
            },
            {
                text: 'The district permitted other coaches to make personal calls and visit friends after games.',
                petitionerFeedback: 'Unequal treatment\u2014other personal activities after games were fine, but religious expression was singled out.',
                respondentFeedback: 'Other personal activities don\'t carry the same Establishment Clause implications as prayer.',
                canBeBoth: true,
                source: 'https://supreme.justia.com/cases/federal/us/597/21-418/'
            },
            {
                text: 'On October 16, 2015, the final prayer drew media coverage. Crowds rushed the field and students had to be moved to safety.',
                petitionerFeedback: 'The media spectacle was caused by outside attention, not by the prayer itself.',
                respondentFeedback: 'The prayer attracted attention that created genuine safety concerns for students on the field.',
                canBeBoth: true,
                source: 'https://www.supremecourt.gov/opinions/21pdf/21-418_i425.pdf'
            },
            {
                text: 'The prayer occurred immediately after the game ended, before Kennedy left the field.',
                petitionerFeedback: 'This was personal time between duties\u2014the game was over and he was transitioning off the field.',
                respondentFeedback: 'He was still on the field in his role as coach. Post-game is part of the job.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2021/21-418'
            },
            {
                text: 'The Constitution prohibits "establishment of religion" and protects "free exercise of religion."',
                petitionerFeedback: 'The Free Exercise Clause protects his individual right to practice religion, including prayer.',
                respondentFeedback: 'The Establishment Clause limits government (including public schools) from endorsing religion.',
                canBeBoth: false,
                source: 'https://constitutioncenter.org/the-constitution/supreme-court-case-library/kennedy-v-bremerton-school-district'
            },
            {
                text: 'Kennedy was an employee (coach) of a public school acting in an official capacity.',
                petitionerFeedback: 'Public employees don\'t surrender their personal free speech and religious rights during every work moment.',
                respondentFeedback: 'Government employees have different obligations than private citizens when acting in their official role.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'The school district is a government-supported public institution.',
                petitionerFeedback: 'Government institutions cannot discriminate against religious exercise or single it out for restriction.',
                respondentFeedback: 'Government institutions must remain neutral and cannot appear to endorse any particular religion.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Students are required to attend public school by state compulsory attendance laws.',
                petitionerFeedback: 'Students being present doesn\'t mean a coach\'s personal prayer is forced on them.',
                respondentFeedback: 'Students are a captive audience in a government-controlled environment, making them susceptible to pressure.',
                canBeBoth: false,
                source: null
            }
        ]
    },
    tlo: {
        petitioner: 'T.L.O.',
        respondent: 'New Jersey',
        facts: [
            {
                text: 'T.L.O. was a 14-year-old high school freshman.',
                petitionerFeedback: 'Even minors have privacy rights protected by the Fourth Amendment.',
                respondentFeedback: 'Minors in school need more supervision and oversight than adults in public.',
                canBeBoth: true,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'A teacher found T.L.O. smoking in the girls\' restroom, which was a non-smoking area per school rules.',
                petitionerFeedback: 'This was a minor rule violation\u2014smoking. It didn\'t justify an invasive search of personal property.',
                respondentFeedback: 'The school has authority to investigate rule violations. A teacher witnessed the infraction directly.',
                canBeBoth: true,
                source: 'https://www.infoplease.com/us/government/judicial-branch/new-jersey-v-tlo-1985'
            },
            {
                text: 'The teacher observed T.L.O. and another student together smoking.',
                petitionerFeedback: 'Teacher observation of smoking doesn\'t connect to anything beyond cigarettes in a purse.',
                respondentFeedback: 'The teacher\'s direct observation provided a reasonable basis for the administrator to investigate further.',
                canBeBoth: false,
                source: 'https://schistory.org/education/new-jersey-v-t-l-o-1985/'
            },
            {
                text: 'The other student admitted smoking when questioned by the administrator.',
                petitionerFeedback: 'The other student\'s admission doesn\'t establish grounds to search T.L.O.\'s personal belongings.',
                respondentFeedback: 'This established the credibility of the teacher\'s report and the situation\'s seriousness.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'T.L.O. denied smoking and claimed she "didn\'t smoke at all."',
                petitionerFeedback: 'She exercised her right to deny the accusation. Denial alone shouldn\'t trigger a search.',
                respondentFeedback: 'Her false denial gave the administrator reason to doubt her credibility and investigate further.',
                canBeBoth: false,
                source: 'https://www.infoplease.com/us/government/judicial-branch/new-jersey-v-tlo-1985'
            },
            {
                text: 'The administrator searched T.L.O.\'s purse looking for cigarettes.',
                petitionerFeedback: 'Searching a student\'s purse\u2014personal property\u2014invaded her privacy based on suspicion of a minor rule violation.',
                respondentFeedback: 'The search was limited to the scope of the suspected violation: looking for evidence of smoking.',
                canBeBoth: true,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'The initial search found cigarettes in the purse, proving T.L.O. had lied about not smoking.',
                petitionerFeedback: 'Finding cigarettes validated the search only to that point. The administrator should have stopped there.',
                respondentFeedback: 'The discovery proved T.L.O. lied, which gave reason to believe she might be hiding more.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/data-news/judiciary-news/2015/05/14/judge-recalls-1985-case-still-shapes-students-rights'
            },
            {
                text: 'Continuing the search found: rolling papers, marijuana, a pipe, cash, and a list of students who owed money.',
                petitionerFeedback: 'The evidence found went far beyond the initial suspicion of smoking. The search scope was not justified.',
                respondentFeedback: 'Each new discovery expanded the reasonable suspicion, justifying the continued search.',
                canBeBoth: true,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'The search was conducted by a school administrator, not a police officer.',
                petitionerFeedback: 'School administrators aren\'t trained law enforcement. They shouldn\'t have the same search powers.',
                respondentFeedback: 'School administrators have a duty to enforce rules and maintain a safe environment for all students.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/data-news/judiciary-news/2015/05/14/judge-recalls-1985-case-still-shapes-students-rights'
            },
            {
                text: 'A student\'s purse is personal property containing personal effects.',
                petitionerFeedback: 'Personal property carries a reasonable expectation of privacy, even in school.',
                respondentFeedback: 'Schools have a custodial relationship with students and their belongings during school hours.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/1983/83-712'
            },
            {
                text: 'The Fourth Amendment states: "no Warrants shall issue, but upon probable cause."',
                petitionerFeedback: 'The text requires warrants and probable cause for government searches. Schools are government institutions.',
                respondentFeedback: 'A school exception to the full warrant requirement exists because of the special school environment.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Students attend school under state compulsory attendance laws.',
                petitionerFeedback: 'Students compelled to attend school cannot be compelled to waive their constitutional rights.',
                respondentFeedback: 'State compulsion to attend creates a special environment where different rules for safety apply.',
                canBeBoth: true,
                source: 'https://en.wikipedia.org/wiki/New_Jersey_v._T._L._O.'
            }
        ]
    },
    payton: {
        petitioner: 'Payton',
        respondent: 'New York',
        facts: [
            {
                text: 'Police had probable cause to believe Payton committed murder.',
                petitionerFeedback: 'Even with probable cause for a serious crime, constitutional protections still apply.',
                respondentFeedback: 'Probable cause for murder\u2014the most serious crime\u2014justified swift police action.',
                canBeBoth: false,
                source: 'https://legaldictionary.net/payton-v-new-york/'
            },
            {
                text: 'Police went to Payton\'s home without obtaining a search or arrest warrant.',
                petitionerFeedback: 'The home is sacrosanct under the Fourth Amendment. A warrant was required before entry.',
                respondentFeedback: 'A murder suspect might flee or destroy evidence. Speed was essential.',
                canBeBoth: false,
                source: 'https://en.wikipedia.org/wiki/Payton_v._New_York'
            },
            {
                text: 'Officers waited for Payton to answer the door, then broke in when he didn\'t respond.',
                petitionerFeedback: 'Nonconsensual forced entry into a home is exactly what the Fourth Amendment prohibits without a warrant.',
                respondentFeedback: 'Officers attempted to follow knock-and-announce procedures before entering.',
                canBeBoth: true,
                source: 'https://legaldictionary.net/payton-v-new-york/'
            },
            {
                text: 'The home is a place where "perfect and absolute privacy" is expected, according to court language.',
                petitionerFeedback: 'The home has the highest expectation of privacy. This is the core of Fourth Amendment protection.',
                respondentFeedback: 'Privacy expectations are not absolute. When a crime is involved, some intrusion may be justified.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The Fourth Amendment text: "The right of the people to be secure in their persons, houses, papers, and effects."',
                petitionerFeedback: '"Houses" is explicitly listed\u2014the Constitution singles out homes for protection.',
                respondentFeedback: 'The Amendment also allows "reasonable searches and seizures," which this was.',
                canBeBoth: false,
                source: 'https://en.wikipedia.org/wiki/Payton_v._New_York'
            },
            {
                text: 'Officers seized shell casings under the "plain view doctrine" after entering.',
                petitionerFeedback: 'The plain view doctrine doesn\'t cure an illegal entry. Evidence from an unlawful search can\'t be used.',
                respondentFeedback: 'The evidence would have been seen legitimately if they had waited and obtained a warrant.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'A New York statute permitted warrantless home entries for felony arrests.',
                petitionerFeedback: 'State law cannot override the federal Constitution. An unconstitutional statute is still unconstitutional.',
                respondentFeedback: 'The state law authorized the action. Officers followed the law as it existed.',
                canBeBoth: false,
                source: 'https://supreme.justia.com/cases/federal/us/445/573/'
            },
            {
                text: 'Police could have obtained a warrant since probable cause already existed.',
                petitionerFeedback: 'There was no emergency preventing officers from getting a warrant. They had time and evidence to do so.',
                respondentFeedback: 'Time spent obtaining a warrant could have allowed the suspect to escape or destroy evidence.',
                canBeBoth: true,
                source: 'https://legaldictionary.net/probable-cause/'
            },
            {
                text: 'Payton was a suspect, not convicted. The presumption of innocence applies.',
                petitionerFeedback: 'An unconvicted person is innocent until proven guilty. Their home deserves full constitutional protection.',
                respondentFeedback: 'Police need only probable cause to act, not a conviction. Investigation must happen before trial.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'Officers had evidence of a serious crime (murder).',
                petitionerFeedback: 'Constitutional protections don\'t disappear based on how serious the alleged crime is.',
                respondentFeedback: 'Serious crimes like murder justify more flexible enforcement to protect public safety.',
                canBeBoth: true,
                source: null
            },
            {
                text: 'No "exigent circumstances" were reported\u2014no immediate threat to anyone and no evidence the suspect was fleeing.',
                petitionerFeedback: 'Without an emergency, standard procedures\u2014including getting a warrant\u2014were available and required.',
                respondentFeedback: 'Courts have found that probable cause for serious crimes can be sufficient for home entry in some circumstances.',
                canBeBoth: true,
                source: 'https://en.wikipedia.org/wiki/Payton_v._New_York'
            },
            {
                text: 'The home is the location of most private activities of daily life.',
                petitionerFeedback: 'The privacy interest in one\'s home is paramount and deserves the strongest constitutional protection.',
                respondentFeedback: 'Crime scene evidence may be located in the home. Public safety interests must be balanced against privacy.',
                canBeBoth: false,
                source: null
            }
        ]
    }
};

// Initialize evidence sort when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('evidence-sort');
    if (!container) return;

    // Detect which case page we're on
    var pagePath = window.location.pathname;
    var pageFile = pagePath.substring(pagePath.lastIndexOf('/') + 1).replace('.html', '');
    var caseInfo = evidenceSortData[pageFile];
    if (!caseInfo) return;

    var saveKey = 'scotus-esort-' + pageFile;

    // Load saved state
    function loadState() {
        try {
            var saved = localStorage.getItem(saveKey);
            if (saved) return JSON.parse(saved);
        } catch (e) {}
        return {};
    }

    function saveState(state) {
        localStorage.setItem(saveKey, JSON.stringify(state));
        if (typeof saveToCloud === 'function') saveToCloud(saveKey, state);
    }

    var state = loadState();

    // Build the UI
    var html = '';
    html += '<div class="esort-section-toggle" id="esort-toggle">';
    html += '<div class="esort-toggle-left">';
    html += '<h3>Evidence Sort Challenge</h3>';
    html += '<div class="esort-progress"><span id="esort-progress-count">0</span> of ' + caseInfo.facts.length + ' sorted</div>';
    html += '</div>';
    html += '<span class="esort-toggle-arrow" id="esort-arrow">&#9662;</span>';
    html += '</div>';
    html += '<div class="esort-complete-banner" id="esort-complete" style="display:none">';
    html += '<span class="esort-complete-icon">&#10003;</span> All facts sorted! Nice work.';
    html += '<div class="esort-complete-cta">';
    html += '<a href="../debate.html" class="esort-cta-btn esort-cta-debate">Prepare for Debate &rarr;</a>';
    html += '<button class="esort-cta-btn esort-cta-sources" id="esort-cta-sources">Analyze Sources &darr;</button>';
    html += '</div>';
    html += '</div>';
    html += '<div class="esort-collapsible" id="esort-body">';
    html += '<div class="esort-header">';
    html += '<p>Read each fact carefully. Slide it toward the side you think it helps, then see the interpretation!</p>';
    html += '<div class="esort-sides-label">';
    html += '<span class="esort-side-left">\u2190 ' + caseInfo.petitioner + '</span>';
    html += '<span class="esort-side-right">' + caseInfo.respondent + ' \u2192</span>';
    html += '</div>';
    html += '</div>';

    caseInfo.facts.forEach(function(fact, i) {
        var savedChoice = state[i];
        var sortedClass = savedChoice ? ' sorted sorted-' + savedChoice : '';
        html += '<div class="esort-card' + sortedClass + '" data-index="' + i + '">';
        html += '<div class="esort-fact">';
        html += '<span class="esort-fact-num">#' + (i + 1) + '</span>';
        html += '<p>' + fact.text + '</p>';
        if (fact.source) {
            html += '<a class="esort-source-link" href="' + fact.source + '" target="_blank" rel="noopener">View Source \u2197</a>';
        }
        html += '</div>';
        html += '<div class="esort-controls">';
        html += '<button class="esort-btn esort-btn-left' + (savedChoice === 'petitioner' ? ' active' : '') + '" data-side="petitioner" data-index="' + i + '">';
        html += '\u2190 ' + caseInfo.petitioner;
        html += '</button>';
        html += '<button class="esort-btn esort-btn-right' + (savedChoice === 'respondent' ? ' active' : '') + '" data-side="respondent" data-index="' + i + '">';
        html += caseInfo.respondent + ' \u2192';
        html += '</button>';
        html += '</div>';

        // Feedback area
        html += '<div class="esort-feedback" id="esort-fb-' + i + '"' + (savedChoice ? '' : ' style="display:none"') + '>';
        if (savedChoice === 'petitioner') {
            html += buildFeedback(fact, 'petitioner', caseInfo, i);
        } else if (savedChoice === 'respondent') {
            html += buildFeedback(fact, 'respondent', caseInfo, i);
        }
        html += '</div>';

        html += '</div>';
    });

    html += '</div>'; // close esort-collapsible

    container.innerHTML = html;

    // Toggle collapse on header click
    var toggleBtn = document.getElementById('esort-toggle');
    var bodyEl = document.getElementById('esort-body');
    var arrowEl = document.getElementById('esort-arrow');
    if (toggleBtn && bodyEl) {
        toggleBtn.addEventListener('click', function() {
            container.classList.toggle('collapsed');
        });
    }

    // "Analyze Sources" CTA — collapse sort and scroll to sources
    var ctaSources = document.getElementById('esort-cta-sources');
    if (ctaSources) {
        ctaSources.addEventListener('click', function() {
            container.classList.add('collapsed');
            var sourcesHeader = document.getElementById('vault-sources-header');
            if (sourcesHeader) {
                setTimeout(function() {
                    sourcesHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 350);
            }
        });
    }

    // Update progress count
    updateProgress();

    // Attach event listeners
    container.addEventListener('click', function(e) {
        var btn = e.target.closest('.esort-btn');
        if (!btn) return;

        var index = parseInt(btn.dataset.index);
        var side = btn.dataset.side;
        var card = btn.closest('.esort-card');
        var fact = caseInfo.facts[index];
        var feedbackEl = document.getElementById('esort-fb-' + index);

        // Update card state
        card.className = 'esort-card sorted sorted-' + side;

        // Update button states
        var buttons = card.querySelectorAll('.esort-btn');
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // Show feedback with animation
        feedbackEl.innerHTML = buildFeedback(fact, side, caseInfo, index);
        feedbackEl.style.display = 'block';
        feedbackEl.classList.remove('fade-in');
        void feedbackEl.offsetWidth; // trigger reflow
        feedbackEl.classList.add('fade-in');

        // Save
        state[index] = side;
        saveState(state);
        updateProgress();
    });

    // "See other side" button delegation
    container.addEventListener('click', function(e) {
        var otherBtn = e.target.closest('.esort-other-btn');
        if (!otherBtn) return;

        var index = parseInt(otherBtn.dataset.index);
        var side = otherBtn.dataset.side;
        var fact = caseInfo.facts[index];
        var feedbackEl = document.getElementById('esort-fb-' + index);

        feedbackEl.innerHTML = buildFeedback(fact, side, caseInfo, index);
        feedbackEl.classList.remove('fade-in');
        void feedbackEl.offsetWidth;
        feedbackEl.classList.add('fade-in');

        // Update card visual and buttons
        var card = otherBtn.closest('.esort-card');
        card.className = 'esort-card sorted sorted-' + side;
        var buttons = card.querySelectorAll('.esort-btn');
        buttons.forEach(function(b) {
            b.classList.remove('active');
            if (b.dataset.side === side) b.classList.add('active');
        });

        state[index] = side;
        saveState(state);
    });

    function updateProgress() {
        var count = Object.keys(state).length;
        var total = caseInfo.facts.length;
        var el = document.getElementById('esort-progress-count');
        if (el) el.textContent = count;

        var banner = document.getElementById('esort-complete');
        if (count >= total) {
            // All sorted — show CTA banner (don't auto-collapse yet)
            if (banner) {
                banner.style.display = '';
                banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            if (banner) banner.style.display = 'none';
        }
    }

    // Also try loading from cloud
    if (typeof loadFromCloud === 'function') {
        loadFromCloud(saveKey).then(function(cloudState) {
            if (cloudState && typeof cloudState === 'object' && Object.keys(cloudState).length > 0) {
                state = cloudState;
                localStorage.setItem(saveKey, JSON.stringify(state));
                // Re-render with cloud state
                renderWithState(state);
            }
        });
    }

    function renderWithState(st) {
        caseInfo.facts.forEach(function(fact, i) {
            var card = container.querySelector('.esort-card[data-index="' + i + '"]');
            var feedbackEl = document.getElementById('esort-fb-' + i);
            if (!card || !feedbackEl) return;

            var choice = st[i];
            if (choice) {
                card.className = 'esort-card sorted sorted-' + choice;
                var buttons = card.querySelectorAll('.esort-btn');
                buttons.forEach(function(b) {
                    b.classList.remove('active');
                    if (b.dataset.side === choice) b.classList.add('active');
                });
                feedbackEl.innerHTML = buildFeedback(fact, choice, caseInfo, i);
                feedbackEl.style.display = 'block';
            }
        });
        updateProgress();
    }
});

function buildFeedback(fact, side, caseInfo, index) {
    var sideName = side === 'petitioner' ? caseInfo.petitioner : caseInfo.respondent;
    var otherSide = side === 'petitioner' ? 'respondent' : 'petitioner';
    var otherName = side === 'petitioner' ? caseInfo.respondent : caseInfo.petitioner;
    var text = side === 'petitioner' ? fact.petitionerFeedback : fact.respondentFeedback;

    var html = '';
    html += '<div class="esort-fb-content esort-fb-' + side + '">';
    html += '<div class="esort-fb-icon">\u2714</div>';
    html += '<div class="esort-fb-text">';
    html += '<strong>How this helps ' + sideName + ':</strong> ';
    html += text;
    html += '</div>';
    html += '</div>';

    if (fact.canBeBoth) {
        html += '<div class="esort-fb-both">';
        html += '<span class="esort-fb-both-badge">\u26A0 Can help either side!</span> ';
        html += 'This fact can be interpreted to help both ' + caseInfo.petitioner + ' and ' + caseInfo.respondent + '. ';
        html += 'Good lawyers use the same facts to build different arguments.';
        html += '</div>';
    }

    html += '<button class="esort-other-btn" data-side="' + otherSide + '" data-index="' + index + '">';
    html += 'See ' + otherName + '\'s interpretation \u2192';
    html += '</button>';

    return html;
}
