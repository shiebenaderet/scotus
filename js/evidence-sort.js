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
                source: 'https://www.oyez.org/cases/2011/11-182'
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
                text: 'The federal government sued Arizona in federal court in July 2010, before the law took effect.',
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
                text: 'Arizona argued its law mirrored existing federal requirements instead of creating a new immigration system.',
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
                text: 'Students were sent home after arriving at school wearing the armbands — Mary Beth during afternoon math class, John the following day.',
                petitionerFeedback: 'Students were punished for peaceful expression before any disruption could even occur.',
                respondentFeedback: 'The school was enforcing rules that had been established and communicated before the violation.',
                canBeBoth: false,
                source: 'https://landmarkcases.org/cases/tinker-v-des-moines/'
            },
            {
                text: 'The school allowed other political symbols, including campaign buttons and Iron Crosses, but banned the black anti-war armbands.',
                petitionerFeedback: 'The school allowed other controversial symbols but banned only the anti-war armbands. That looks like viewpoint discrimination.',
                respondentFeedback: 'Schools sometimes need to make content-based decisions about which symbols might cause disruption.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'There were no fights, threats, or halted classes. A few students made hostile remarks outside class.',
                petitionerFeedback: 'The students did not fight, shout, or stop class. Hostile remarks outside class are not a disrupted school day.',
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
                text: 'The Court heard five school cases together: four from Kansas, South Carolina, Virginia, and Delaware, and one from Washington, D.C., decided the same day.',
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
                text: 'Linda Brown walked six blocks to a bus stop to ride to Monroe Elementary (Black school), about a mile away. Sumner School (white) was seven blocks from her home.',
                petitionerFeedback: 'The law forced her to attend a specific school based solely on her race, regardless of distance or convenience.',
                respondentFeedback: 'The trial court found Topeka\'s Black and white schools substantially equal in buildings, teachers, and courses.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'In 1950, Topeka had only 4 Black elementary schools with average enrollment of 165 students, while 18 white schools averaged 342 students each.',
                petitionerFeedback: 'Black students were crammed into fewer schools while white schools had more space. This proves "separate" was never "equal."',
                respondentFeedback: 'The district was providing separate facilities for both races as the law required.',
                canBeBoth: false,
                source: 'https://www.archives.gov/publications/prologue/2004/spring/brown-v-board-1.html'
            },
            {
                text: 'Black schools had 143 empty seats on average, while overcrowded white schools had only 28 — but Topeka refused to reassign students.',
                petitionerFeedback: 'The district let white schools stay crowded rather than send white children to Black schools. Race mattered more than education.',
                respondentFeedback: 'School assignments were made according to existing state law and established neighborhood patterns.',
                canBeBoth: false,
                source: 'https://www.archives.gov/publications/prologue/2004/spring/brown-v-board-1.html'
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
                text: '13 of 18 white elementary schools in Topeka were in racially mixed neighborhoods — yet Black children from all over the city were assigned to the four all-Black schools.',
                petitionerFeedback: 'Even in mixed neighborhoods, Black children were bused away. Geography didn\'t determine school — race did.',
                respondentFeedback: 'The district maintained orderly assignments as had been the established practice under state law.',
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
        petitioner: 'Mahanoy School District',
        respondent: 'B.L.',
        facts: [
            {
                text: 'B.L. failed to make the varsity cheerleading team and was placed on junior varsity.',
                respondentFeedback: 'Personal frustration is understandable and natural. Being upset about a team decision is a normal human reaction.',
                petitionerFeedback: 'Disappointment is normal, but it doesn\'t justify violating the code of conduct she agreed to follow.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'B.L. posted on Snapchat over the weekend, away from school property.',
                respondentFeedback: 'The speech happened off campus and outside school hours. Schools shouldn\'t control what students say on their own time.',
                petitionerFeedback: 'School interest extends to extracurricular activities. Cheerleaders represent the school even off campus.',
                canBeBoth: false,
                source: 'https://www.supremecourt.gov/opinions/20pdf/20-255_g3bi.pdf'
            },
            {
                text: 'The caption read: "F*** school f*** softball f*** cheer f*** everything."',
                respondentFeedback: 'This was an expression of personal frustration about her own situation\u2014venting, not targeting anyone.',
                petitionerFeedback: 'Vulgar language targeting the school community undermines the team and school values.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'B.L. posted the images to her Snapchat story, which friends could view for 24 hours.',
                respondentFeedback: 'The posts were meant to vanish in a day, not stay up as a public statement.',
                petitionerFeedback: 'Screenshots can preserve content permanently. A 24-hour story can still spread through the school.',
                canBeBoth: false,
                source: 'https://www.supremecourt.gov/opinions/20pdf/20-255_g3bi.pdf'
            },
            {
                text: 'The post was shared with approximately 250 Snapchat friends.',
                respondentFeedback: 'This was a limited audience chosen by the student, not a public broadcast. She controlled who saw it.',
                petitionerFeedback: '250 people is a large audience. Content shared that widely can easily spread beyond the intended group.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'A student took pictures of the posts with a separate phone and shared them; another student showed them to her mother, a cheerleading coach.',
                respondentFeedback: 'Someone else distributed the content beyond B.L.\'s control. She didn\'t bring it to school\u2014another student did.',
                petitionerFeedback: 'The content reached the school community through a team member, bringing it within the school\'s interest.',
                canBeBoth: true,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'B.L. had acknowledged team rules for cheerleaders requiring respect for school and coaches.',
                respondentFeedback: 'She agreed to team rules, but her speech was private and off campus. The code can\'t control her entire life.',
                petitionerFeedback: 'Extracurricular participation is voluntary. She agreed to the rules as a condition of being on the team.',
                canBeBoth: true,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'The code of conduct prohibited "foul language and inappropriate gestures."',
                respondentFeedback: 'The rule existed, but extending it to private off-campus speech goes too far.',
                petitionerFeedback: 'A clear rule existed before the incident. B.L. knew the expectations.',
                canBeBoth: false,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'B.L. apologized, but school officials kept her suspension in place.',
                respondentFeedback: 'Her apology shows understanding and maturity, not defiance. This wasn\'t a pattern of behavior.',
                petitionerFeedback: 'An apology doesn\'t erase the rule violation or its impact on the team.',
                canBeBoth: false,
                source: 'https://harvardlawreview.org/print/vol-135/mahanoy-v-b-l/'
            },
            {
                text: 'The school suspended B.L. from the cheerleading team for one full year.',
                respondentFeedback: 'A one-year suspension is disproportionate punishment for a frustrated teenager\'s off-campus social media post.',
                petitionerFeedback: 'A significant consequence sends a clear message about expectations for team members.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'B.L. was a 14-year-old minor at the time of the incident.',
                respondentFeedback: 'Minors deserve understanding about emotional regulation. Teenagers vent\u2014it\'s part of growing up.',
                petitionerFeedback: 'Minors require guidance about appropriate conduct. The school has a role in teaching responsibility.',
                canBeBoth: true,
                source: 'https://www.oyez.org/cases/2020/20-255'
            },
            {
                text: 'There was no walkout or canceled class. Some cheerleaders were upset, and a coach described a few minutes of talk about the posts in Algebra.',
                respondentFeedback: 'Hurt feelings and a short classroom conversation are not the substantial disruption Tinker requires.',
                petitionerFeedback: 'Potential disruption to team cohesion justifies action even if classroom disruption didn\'t occur.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supct/cert/20-255'
            }
        ]
    },
    morse: {
        petitioner: 'Principal Morse and the School Board',
        respondent: 'Joseph Frederick',
        facts: [
            {
                text: 'The principal let students leave class to watch the Olympic Torch Relay as an approved social event or class trip.',
                petitionerFeedback: 'An approved school event means school rules still applied, even across the street.',
                respondentFeedback: 'Students were just let out to watch a public parade, not taught a class.',
                canBeBoth: true,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'Frederick got stuck in the snow and never entered the school that day before the relay.',
                petitionerFeedback: 'He chose to join classmates at a school-approved event during school hours.',
                respondentFeedback: 'He was never at school that day. He went straight to a public sidewalk.',
                canBeBoth: true,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'Frederick stood on a public sidewalk across the street, off school property.',
                petitionerFeedback: 'Students across the street were still under teacher supervision.',
                respondentFeedback: 'A public sidewalk is not school. The school’s rules should stop at its property line.',
                canBeBoth: false,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'The principal pointed out that the pep band played, the cheerleaders came out in uniform, and teachers supervised.',
                petitionerFeedback: 'School groups performing and teachers supervising are signs of a school activity.',
                respondentFeedback: 'School groups at a public event do not turn a public sidewalk into a classroom.',
                canBeBoth: false,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'Students said they did not need parental permission slips, as they did for field trips.',
                petitionerFeedback: 'Not every school activity needs a permission slip.',
                respondentFeedback: 'Without permission slips, the relay looks less like a school trip and more like a public event.',
                canBeBoth: false,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'The principal said the banner violated school policy against material that “advertises or promotes use of illegal drugs.”',
                petitionerFeedback: 'The school enforced a rule students already knew about.',
                respondentFeedback: 'The policy only applies if the banner actually promoted drugs, and Frederick says it did not.',
                canBeBoth: false,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'Frederick said the words on the banner were meaningless and funny, meant to get on television.',
                petitionerFeedback: 'A joke can still be read as promoting drugs by the students who see it.',
                respondentFeedback: 'If the words meant nothing, the banner did not promote drug use.',
                canBeBoth: true,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'Some students threw bottles and snowballs and fought before the banner went up. Frederick’s group was not involved.',
                petitionerFeedback: 'The crowd was already hard to control, so a pro-drug message could make things worse.',
                respondentFeedback: 'The disorder happened before the banner and had nothing to do with Frederick.',
                canBeBoth: true,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'When the principal told the group to lower the banner, everyone but Frederick did.',
                petitionerFeedback: 'Frederick defied a school official at a school event.',
                respondentFeedback: 'Refusing to give up a sign is part of standing up for free speech.',
                canBeBoth: true,
                source: 'https://openjurist.org/439/f3d/1114'
            },
            {
                text: 'The school district never claimed the banner disrupted classwork.',
                petitionerFeedback: 'The school’s concern was its drug-prevention mission, not a class being interrupted.',
                respondentFeedback: 'With no disruption, the school had no good reason to punish the speech.',
                canBeBoth: false,
                source: 'https://openjurist.org/439/f3d/1114'
            }
        ]
    },
    kennedy: {
        petitioner: 'Coach Kennedy',
        respondent: 'Bremerton School District',
        facts: [
            {
                text: 'Joseph Kennedy prayed on the 50-yard line immediately after games for about 30 seconds.',
                petitionerFeedback: 'A brief personal expression of faith in a public space. Quick and quiet\u2014not a sermon or ceremony.',
                respondentFeedback: 'The 50-yard line is a highly visible location on school property. This isn\'t private prayer.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/2021/21-418'
            },
            {
                text: 'Kennedy initially prayed alone after games; over time some players joined. He said they asked to join and he never required it.',
                petitionerFeedback: 'No coercion\u2014students chose to participate on their own. Kennedy never required anyone to join.',
                respondentFeedback: 'Students may have felt implicit pressure to join their coach, a figure of authority over their playing time.',
                canBeBoth: true,
                source: 'https://supreme.justia.com/cases/federal/us/597/21-418/'
            },
            {
                text: 'For years Kennedy also led locker-room prayers and gave postgame talks with religious references. He stopped both after the district\'s September 2015 letter.',
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
                text: 'Kennedy refused to stop praying on the field. He was placed on paid leave, his evaluation recommended against rehiring him, and he did not apply to coach the next season.',
                petitionerFeedback: 'He stood firm on his religious convictions. The school punished him for exercising his faith.',
                respondentFeedback: 'He defied his employer\'s reasonable directives. Insubordination has consequences.',
                canBeBoth: true,
                source: 'https://www.scotusblog.com/2022/04/in-the-case-of-the-praying-football-coach-both-sides-invoke-religious-freedom/'
            },
            {
                text: 'The district permitted other coaches to make personal calls and visit friends after games.',
                petitionerFeedback: 'Unequal treatment\u2014other personal activities after games were fine, but religious expression was singled out.',
                respondentFeedback: 'Other personal activities don\'t carry the same Establishment Clause implications as prayer.',
                canBeBoth: true,
                source: 'https://supreme.justia.com/cases/federal/us/597/21-418/'
            },
            {
                text: 'On October 16, 2015, the final prayer drew media coverage. People jumped fences to reach the field and knocked over student band members.',
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
        petitioner: 'New Jersey',
        respondent: 'T.L.O.',
        facts: [
            {
                text: 'T.L.O. was a 14-year-old high school freshman.',
                respondentFeedback: 'Even minors have privacy rights protected by the Fourth Amendment.',
                petitionerFeedback: 'Minors in school need more supervision and oversight than adults in public.',
                canBeBoth: true,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'A teacher found T.L.O. smoking in the girls\' restroom, which was a non-smoking area per school rules.',
                respondentFeedback: 'This was a minor rule violation\u2014smoking. It didn\'t justify an invasive search of personal property.',
                petitionerFeedback: 'The school has authority to investigate rule violations. A teacher witnessed the infraction directly.',
                canBeBoth: true,
                source: 'https://www.infoplease.com/us/government/judicial-branch/new-jersey-v-tlo-1985'
            },
            {
                text: 'The teacher observed T.L.O. and another student together smoking.',
                respondentFeedback: 'Teacher observation of smoking doesn\'t connect to anything beyond cigarettes in a purse.',
                petitionerFeedback: 'The teacher\'s direct observation provided a reasonable basis for the administrator to investigate further.',
                canBeBoth: false,
                source: 'https://schistory.org/education/new-jersey-v-t-l-o-1985/'
            },
            {
                text: 'The other student admitted smoking when questioned by the administrator.',
                respondentFeedback: 'The other student\'s admission doesn\'t establish grounds to search T.L.O.\'s personal belongings.',
                petitionerFeedback: 'This established the credibility of the teacher\'s report and the situation\'s seriousness.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'T.L.O. denied smoking and said she did not smoke at all.',
                respondentFeedback: 'She exercised her right to deny the accusation. Denial alone shouldn\'t trigger a search.',
                petitionerFeedback: 'Her false denial gave the administrator reason to doubt her credibility and investigate further.',
                canBeBoth: false,
                source: 'https://www.infoplease.com/us/government/judicial-branch/new-jersey-v-tlo-1985'
            },
            {
                text: 'The administrator searched T.L.O.\'s purse looking for cigarettes.',
                respondentFeedback: 'Searching a student\'s purse\u2014personal property\u2014invaded her privacy based on suspicion of a minor rule violation.',
                petitionerFeedback: 'The search was limited to the scope of the suspected violation: looking for evidence of smoking.',
                canBeBoth: true,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'The initial search found cigarettes in the purse, proving T.L.O. had lied about not smoking.',
                respondentFeedback: 'Finding cigarettes validated the search only to that point. The administrator should have stopped there.',
                petitionerFeedback: 'The discovery proved T.L.O. lied, which gave reason to believe she might be hiding more.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/data-news/judiciary-news/2015/05/14/judge-recalls-1985-case-still-shapes-students-rights'
            },
            {
                text: 'After seeing rolling papers, the administrator kept searching and found marijuana, a pipe, cash, a list of students who owed T.L.O. money, and two letters.',
                respondentFeedback: 'The evidence found went far beyond the initial suspicion of smoking. The search scope was not justified.',
                petitionerFeedback: 'Each new discovery expanded the reasonable suspicion, justifying the continued search.',
                canBeBoth: true,
                source: 'https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo'
            },
            {
                text: 'The search was conducted by a school administrator, not a police officer.',
                respondentFeedback: 'School administrators aren\'t trained law enforcement. They shouldn\'t have the same search powers.',
                petitionerFeedback: 'School administrators have a duty to enforce rules and maintain a safe environment for all students.',
                canBeBoth: false,
                source: 'https://www.uscourts.gov/data-news/judiciary-news/2015/05/14/judge-recalls-1985-case-still-shapes-students-rights'
            },
            {
                text: 'A student\'s purse is personal property containing personal effects.',
                respondentFeedback: 'Personal property carries a reasonable expectation of privacy, even in school.',
                petitionerFeedback: 'Schools have a custodial relationship with students and their belongings during school hours.',
                canBeBoth: false,
                source: 'https://www.oyez.org/cases/1983/83-712'
            },
            {
                text: 'The Fourth Amendment states: "no Warrants shall issue, but upon probable cause."',
                respondentFeedback: 'The text requires warrants and probable cause for government searches. Schools are government institutions.',
                petitionerFeedback: 'A school exception to the full warrant requirement exists because of the special school environment.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'Students attend school under state compulsory attendance laws.',
                respondentFeedback: 'Students compelled to attend school cannot be compelled to waive their constitutional rights.',
                petitionerFeedback: 'State compulsion to attend creates a special environment where different rules for safety apply.',
                canBeBoth: true,
                source: 'https://en.wikipedia.org/wiki/New_Jersey_v._T._L._O.'
            }
        ]
    },
    jacobson: {
        petitioner: 'Henning Jacobson',
        respondent: 'Massachusetts',
        facts: [
            {
                text: 'Smallpox had been spreading in Cambridge and was still increasing when the board of health made its order.',
                respondentFeedback: 'The order answered a real, growing outbreak. Waiting would have let the disease spread further.',
                petitionerFeedback: 'An emergency does not erase the Constitution. Liberty still limits what the state may require.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'The law required the city to provide vaccination for free.',
                respondentFeedback: 'Cost kept no one from obeying. The law asked little of each person.',
                petitionerFeedback: 'Free or not, the procedure is done to his body. Price was never his objection.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'An adult over 21 who refused had to pay a $5 fine.',
                respondentFeedback: 'The penalty was small and nobody was forced. The law respected choice while protecting others.',
                petitionerFeedback: 'It was still a criminal conviction. The state punished him for refusing a medical procedure.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'Children with a doctor’s certificate that they were unfit for vaccination were excused. Adults had no such exception.',
                respondentFeedback: 'Lawmakers can draw different lines for children and adults.',
                petitionerFeedback: 'The same medical risk should get the same exception. Treating adults worse is unfair.',
                canBeBoth: false,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'The chairman of the board of health offered to vaccinate Jacobson for free, and Jacobson declined.',
                respondentFeedback: 'Officials gave him every chance to comply before charging him.',
                petitionerFeedback: 'An offer he had a right to refuse is not a reason to punish him.',
                canBeBoth: true,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'Jacobson said a vaccination he received as a child caused him “great and extreme suffering for a long period.”',
                petitionerFeedback: 'His own medical history gave him a real reason to refuse.',
                respondentFeedback: 'One person’s past reaction cannot decide a rule for a whole city during an epidemic.',
                canBeBoth: false,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'The trial judge excluded every fact Jacobson offered to prove about harm from vaccination.',
                petitionerFeedback: 'He never got to make his defense to the jury.',
                respondentFeedback: 'Medical policy for everyone belongs to lawmakers and health boards, not to a single jury.',
                canBeBoth: false,
                source: 'https://www.law.cornell.edu/supremecourt/text/197/11'
            },
            {
                text: 'In 1901, nine children in Camden, New Jersey, died of tetanus after receiving contaminated smallpox vaccine.',
                petitionerFeedback: 'Vaccines in his time could be impure and dangerous. His fear was not imaginary.',
                respondentFeedback: 'Congress answered with a 1902 law regulating vaccine makers. The fix is safer vaccines, not no vaccination.',
                canBeBoth: true,
                source: 'https://www.fda.gov/files/about%20fda/published/The-Road-to-the-Biotech-Revolution--Highlights-of-100-Years-of-Biologics-Regulation.pdf'
            },
            {
                text: 'In Boston, 270 people died of smallpox during the 1901 to 1903 outbreak.',
                respondentFeedback: 'The danger to the community was deadly and close by.',
                petitionerFeedback: 'A serious danger still does not give the state unlimited power over a person’s body.',
                canBeBoth: false,
                // Albert, Ostheimer and Breman, NEJM 344 (2001): 375-379. No link: the
                // article goes on to describe the Court's ruling.
                source: null
            },
            {
                text: 'In 1904, New York’s highest court upheld a rule keeping unvaccinated children out of public school.',
                respondentFeedback: 'Other courts already treated vaccination rules as ordinary health laws.',
                petitionerFeedback: 'A school entry rule is not a criminal fine on an adult.',
                canBeBoth: false,
                source: 'https://biotech.law.lsu.edu/cases/vaccines/Viemeister.pdf'
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
                text: 'The Fourth Amendment names houses, and the saying "a man\'s house is his castle" goes back to English law.',
                petitionerFeedback: 'The home has the highest expectation of privacy. This is the core of Fourth Amendment protection.',
                respondentFeedback: 'Privacy expectations are not absolute. When a crime is involved, some intrusion may be justified.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'The Fourth Amendment text: "The right of the people to be secure in their persons, houses, papers, and effects."',
                petitionerFeedback: '"Houses" is explicitly listed\u2014the Constitution singles out homes for protection.',
                respondentFeedback: 'The Amendment bans only unreasonable searches and seizures. New York says this entry was reasonable.',
                canBeBoth: false,
                source: 'https://en.wikipedia.org/wiki/Payton_v._New_York'
            },
            {
                text: 'Officers seized a shell casing under the "plain view doctrine" after entering.',
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
                text: 'New York\'s highest court treated the arrest as routine, with ample time to get a warrant; no court relied on an emergency to justify the entry.',
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

evidenceSortData['fishing-rights'] = {
        petitioner: 'State of Washington',
        respondent: 'Treaty Tribes',
        facts: [
            {
                text: 'In 1854 and 1855, the tribes gave up most of their land to the United States and kept the right to fish at their usual places.',
                petitionerFeedback: 'The tribes kept only part of what they had. A right to fish that the State can shrink is not the right they kept.',
                respondentFeedback: 'The tribes kept access to their places. The treaty did not set aside a number of fish.',
                canBeBoth: true,
                source: 'https://www.historylink.org/file/5253'
            },
            {
                text: 'The treaty says the tribes fish “in common with all citizens of the Territory.”',
                petitionerFeedback: 'The State reads “in common” as one shared right that every citizen holds equally.',
                respondentFeedback: 'Judge Boldt read “common” as “belonging equally,” which supports an equal share.',
                canBeBoth: true,
                source: 'https://wdfw.wa.gov/sites/default/files/2021-12/boldt_decision.pdf'
            },
            {
                text: 'When the treaties were signed, about three-fourths of the roughly 10,000 people in the region were Indians.',
                petitionerFeedback: 'Things changed after 1855. The State has to manage the fish for the population it has now.',
                respondentFeedback: 'No tribe would have agreed to a deal that let a few settlers take nearly all the fish.',
                canBeBoth: true,
                source: 'https://wdfw.wa.gov/sites/default/files/2021-12/boldt_decision.pdf'
            },
            {
                text: 'The treaties were explained in Chinook Jargon, a trade language of about 300 words.',
                petitionerFeedback: 'The written English words are what both governments signed.',
                respondentFeedback: 'If the tribes could not understand the English terms, the treaty should be read the way they understood it.',
                canBeBoth: false,
                source: 'https://wdfw.wa.gov/sites/default/files/2021-12/boldt_decision.pdf'
            },
            {
                text: 'By the early 1970s, over 6,600 non-Indian commercial fishers and about 800 Indian commercial fishers made a living from fishing.',
                petitionerFeedback: 'A large tribal share would fall on thousands of non-Indian families who also depend on the runs.',
                respondentFeedback: 'Under an equal-chance rule, a few hundred tribal fishers could never keep up with thousands of others.',
                canBeBoth: true,
                source: 'https://wdfw.wa.gov/sites/default/files/2021-12/boldt_decision.pdf'
            },
            {
                text: 'In 1974, before the Boldt order took effect, treaty tribes caught about 2 percent of the salmon and trout in the treaty area.',
                petitionerFeedback: 'Catch numbers reflect boats and skill. The treaty promised a chance, not a result.',
                respondentFeedback: 'An equal chance that produces 2 percent shows the treaty promise was not being kept.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'In 1977 the Washington Supreme Court said special fishing rights for tribes would violate the Equal Protection Clause.',
                petitionerFeedback: 'The State’s highest court agreed that every citizen must be treated the same.',
                respondentFeedback: 'Tribes are nations with treaty rights, so treating treaty rights differently is not unequal treatment of citizens.',
                canBeBoth: false,
                source: null
            },
            {
                text: 'After state courts blocked the State’s fish agency, the federal district court began supervising parts of the State’s fishery itself.',
                petitionerFeedback: 'A federal judge running a state’s fisheries goes beyond what courts should do.',
                respondentFeedback: 'Article VI binds state judges to treaties. The federal court stepped in only because the State would not follow the treaty.',
                canBeBoth: true,
                source: null
            }
        ]
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
