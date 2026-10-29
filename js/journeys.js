// Case Journeys Timeline Data and Functionality

// Timeline data for every case
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
                standard: "Mary Beth Tinker (13) and Christopher Eckhardt (16) wore black armbands to their Des Moines public schools on December 16, 1965, to protest the Vietnam War. John Tinker (15) wore his the next day. School officials had recently adopted a policy banning the armbands, and the students were suspended until they agreed to return without them.",
                simplified: "Two students wore black armbands on December 16, 1965, to show they disagreed with the Vietnam War. John Tinker wore his the next day. The school had just made a rule saying no armbands. The students were sent home and could not come back until they took the armbands off.",
                reasoning: null
            },
            {
                date: "September 1966",
                type: "district",
                title: "U.S. District Court Rules for School",
                ruling: "favor-respondent",
                standard: "The U.S. District Court for the Southern District of Iowa ruled in favor of the school district. Judge Stephenson held that officials did not have to wait for a material or substantial disruption: if a disturbance was reasonably to be anticipated, a preventive ban could stand.",
                simplified: "The first court said the school was right. The judge said schools can make rules to prevent trouble they reasonably see coming — they do not have to wait until a class is already disrupted.",
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
                simplified: "The Supreme Court said students do not shed free-speech rights at the schoolhouse gate. The vote was 7-2. Schools may restrict student speech only if it causes a substantial disruption or invades others’ rights.",
                reasoning: "Justice Fortas wrote that silent, passive expression of opinion that doesn't disrupt school activities is protected by the First Amendment."
            }
        ]
    },
    tlo: {
        name: "New Jersey v. T.L.O.",
        shortName: "T.L.O.",
        events: [
            {
                date: "March 7, 1980",
                type: "incident",
                title: "Student Caught Smoking",
                ruling: null,
                standard: "A teacher at Piscataway High School in New Jersey caught a 14-year-old freshman (known as T.L.O.) smoking in the bathroom. When brought to the principal's office, T.L.O. denied smoking. The assistant vice principal searched her purse and found cigarettes, rolling papers, marijuana, a pipe, money, and a list of students who owed her money.",
                simplified: "A teacher caught a 14-year-old girl smoking in the bathroom at her New Jersey high school. She said she wasn't smoking. The vice principal looked in her purse and found cigarettes, marijuana, and other things that showed she might be selling drugs.",
                reasoning: null
            },
            {
                date: "March 1981",
                type: "district",
                title: "Juvenile Court Finds Delinquent",
                ruling: "favor-petitioner",
                standard: "The Juvenile Court found T.L.O. delinquent based on the evidence from the search. T.L.O. appealed, arguing the search violated her Fourth Amendment rights and the evidence should be excluded.",
                simplified: "The juvenile court said T.L.O. broke the law based on what they found in her purse. T.L.O. said the search wasn't fair and the evidence shouldn't count.",
                reasoning: "The juvenile court allowed the evidence and found T.L.O. guilty of the charges against her."
            },
            {
                date: "1983",
                type: "appeals",
                title: "New Jersey Supreme Court Rules for Student",
                ruling: "favor-respondent",
                standard: "The New Jersey Supreme Court reversed the lower court, holding that the search was unreasonable. The court ruled that the Fourth Amendment applies to school searches and that the assistant principal did not have reasonable grounds to search the purse.",
                simplified: "New Jersey's highest state court said the search was wrong. They said the vice principal didn't have a good enough reason to look through T.L.O.'s purse. The evidence couldn't be used against her.",
                reasoning: "The state supreme court said a school official may search when there are reasonable grounds to believe a student has evidence of illegal activity or activity that would disrupt school order, but found this search unreasonable."
            },
            {
                date: "January 15, 1985",
                type: "scotus",
                title: "Supreme Court Rules for School (6-3)",
                ruling: "favor-petitioner",
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
                simplified: "Oliver Brown and other Topeka parents tried to enroll their children in nearby schools designated for white students. Kansas law allowed that racial assignment in elementary grades. With NAACP lawyers they sued, arguing separate-by-law violates equal protection. Similar suits were filed in other states.",
                reasoning: null
            },
            {
                date: "August 1951",
                type: "district",
                title: "District Court Rules for School Board",
                ruling: "favor-respondent",
                standard: "The U.S. District Court ruled against the Browns. While the court acknowledged that segregation harmed Black children psychologically, it upheld the \"separate but equal\" doctrine from Plessy v. Ferguson (1896), finding that Topeka's Black and white schools were substantially equal in facilities.",
                simplified: "The district court kept Plessy in place. Judges agreed segregation harmed Black students, but they found Topeka’s Black and white elementary schools substantially equal in facilities, so separate-but-equal still controlled.",
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
                simplified: "All nine justices agreed: racially separate public schools are inherently unequal and violate equal protection. Chief Justice Warren wrote that the classification itself generates a sense of inferiority that may never be undone.",
                reasoning: "Chief Justice Warren's opinion overturned Plessy v. Ferguson, finding that separate schools can never truly be equal."
            }
        ]
    },
    payton: {
        name: "Payton v. New York",
        shortName: "Payton",
        events: [
            {
                date: "January 15, 1970",
                type: "incident",
                title: "Police Enter Home Without Warrant",
                ruling: null,
                standard: "New York City police had probable cause to arrest Theodore Payton for murder. Without an arrest warrant, six officers went to his Bronx apartment about 7:30 a.m. on January 15, 1970. After no one answered, they used crowbars, entered, and found a .30-caliber shell casing in plain view. Payton was not home. The casing was used against him at trial.",
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
                standard: "New York's highest court affirmed the conviction, ruling that the warrantless entry was constitutional under the Fourth Amendment. In a 4–3 decision, the court said entering a home to arrest someone intrudes less than entering to search it, and pointed to the historical acceptance of such arrests and New York's long-standing statute.",
                simplified: "New York's top state court said the police did nothing wrong. They said going into a home to arrest someone is less of an intrusion than going in to search it.",
                reasoning: "The state court relied on historical common law practices that allowed warrantless home arrests."
            },
            {
                date: "April 15, 1980",
                type: "scotus",
                title: "Supreme Court Rules for Payton (6-3)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 6-3 that the Fourth Amendment prohibits police from making a warrantless, nonconsensual entry into a suspect's home to make a routine felony arrest. The Court held that the home receives special Fourth Amendment protection and physical entry requires a warrant absent exigent circumstances.",
                simplified: "The Supreme Court said police must get a warrant before entering someone's home to arrest them, unless there's an emergency. The Court said people's homes deserve extra protection. The Court overturned the decisions against Payton and Riddick and sent their cases back to New York's courts.",
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
                standard: "B.L., a 14-year-old freshman, was upset about not making the varsity cheerleading squad. On a Saturday, from the Cocoa Hut convenience store, she posted two Snaps: one with middle fingers raised and the caption \"F*** school f*** softball f*** cheer f*** everything,\" and a second that mentioned another student who also did not make varsity. A screenshot reached school coaches, and B.L. was suspended from the junior varsity squad for a year.",
                simplified: "A 14-year-old girl was upset she didn't make the varsity cheerleading team. That weekend, away from school, she posted an angry message on Snapchat with bad words about school and cheerleading. Someone showed it to the coaches, and she was kicked off the JV team for a whole year.",
                reasoning: null
            },
            {
                date: "March 2019",
                type: "district",
                title: "District Court Rules for Student",
                ruling: "favor-respondent",
                standard: "The U.S. District Court ruled in favor of B.L., finding that her off-campus speech was protected by the First Amendment. The court held that the school could not discipline her for speech made outside of school that did not cause substantial disruption.",
                simplified: "The first court said B.L. was right. The judge said schools can't punish students for things they say outside of school, especially when it didn't cause any real problems at school.",
                reasoning: "The court applied Tinker's substantial disruption test and found no evidence of disruption."
            },
            {
                date: "June 2020",
                type: "appeals",
                title: "3rd Circuit Affirms for Student",
                ruling: "favor-respondent",
                standard: "The Third Circuit Court of Appeals affirmed, going further to hold that Tinker does not apply to off-campus student speech at all. The court ruled that schools generally cannot regulate what students say when they're not at school.",
                simplified: "The appeals court agreed with B.L. and went even further. They said Tinker's disruption test does not cover speech made off campus. The school asked the Supreme Court to take the case.",
                reasoning: "The appeals court created a bright-line rule that off-campus speech is beyond school authority."
            },
            {
                date: "June 23, 2021",
                type: "scotus",
                title: "Supreme Court Rules for Student (8-1)",
                ruling: "favor-respondent",
                standard: "The Supreme Court ruled 8-1 that the school violated B.L.'s First Amendment rights. However, the Court declined to adopt a bright-line rule, holding that schools may sometimes regulate off-campus speech, but features of off-campus speech (speaking as private citizens, 24/7 school control concerns, parents' role) diminish schools' regulatory interest.",
                simplified: "The Supreme Court said B.L.'s punishment was wrong, with 8 justices agreeing. But they didn't say schools can never punish off-campus speech. They said schools usually shouldn't, but might be able to in some cases like severe bullying.",
                reasoning: "Justice Breyer wrote that while Tinker can apply off-campus, schools have a diminished interest in regulating speech made away from school."
            }
        ]
    },
    morse: {
        name: "Morse v. Frederick",
        shortName: "Morse",
        events: [
            {
                date: "January 24, 2002",
                type: "incident",
                title: "Banner at the Olympic Torch Relay",
                ruling: null,
                standard: "Principal Deborah Morse let Juneau-Douglas High School students leave class to watch the Olympic Torch Relay pass the school. Senior Joseph Frederick, who had not yet entered the school that day, stood with friends on the sidewalk across the street and unrolled a 14-foot banner reading \"BONG HiTS 4 JESUS.\" He refused to take it down, and Morse suspended him for 10 days.",
                simplified: "Students were let out of class to watch the Olympic torch go by. Joseph Frederick stood across the street and held up a banner that said \"BONG HiTS 4 JESUS.\" The principal told him to take it down. He would not, so she suspended him.",
                reasoning: null
            },
            {
                date: "2002\u20132003",
                type: "district",
                title: "District Court Rules for the School",
                ruling: "favor-petitioner",
                standard: "Frederick sued Morse and the Juneau School Board. The U.S. District Court for the District of Alaska ruled for the school. It found that Morse reasonably read the banner as promoting illegal drug use, which went against the school board's drug-prevention policies.",
                simplified: "Frederick sued. The first court sided with the school. The judge said the principal could reasonably think the banner was about drugs.",
                reasoning: "The court held that Morse had the authority to stop such messages at a school-approved activity."
            },
            {
                date: "March 2006",
                type: "appeals",
                title: "Ninth Circuit Rules for Frederick",
                ruling: "favor-respondent",
                standard: "The U.S. Court of Appeals for the Ninth Circuit reversed. It accepted that the relay was a school-authorized activity, but held that the school punished Frederick without showing that his banner created a risk of substantial disruption.",
                simplified: "The appeals court sided with Frederick. It said the school had to show the banner could cause a real disruption, and it had not.",
                reasoning: "The court applied the substantial-disruption test and found the school's drug-prevention reason was not enough."
            },
            {
                date: "June 25, 2007",
                type: "scotus",
                title: "Supreme Court Rules for the School (5-4)",
                ruling: "favor-petitioner",
                standard: "The Supreme Court ruled 5-4 that the principal did not violate the First Amendment. Chief Justice Roberts wrote that schools may take steps to protect students from speech at school events that can reasonably be regarded as encouraging illegal drug use. Justice Stevens wrote the main dissent.",
                simplified: "The Supreme Court sided with the school, 5 to 4. It said a school may stop student messages at school events that look like they encourage illegal drug use.",
                reasoning: "The majority treated the relay as a school event and held that a pro-drug message there could be restricted without proof of disruption."
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
                date: "2020",
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
    jacobson: {
        name: "Jacobson v. Massachusetts",
        shortName: "Jacobson",
        events: [
            {
                date: "February to July 1902",
                type: "incident",
                title: "Cambridge Orders Vaccination",
                ruling: null,
                standard: "With smallpox spreading in Cambridge, the board of health ordered on February 27, 1902, that everyone not successfully vaccinated since March 1, 1897, be vaccinated. Pastor Henning Jacobson refused a free vaccination and was charged under a state law that fined adults $5 for refusing.",
                simplified: "Smallpox was spreading in Cambridge, Massachusetts. The city told people to get vaccinated. Henning Jacobson said no, so he was charged. Grown-ups who said no had to pay $5.",
                reasoning: null
            },
            {
                date: "1902",
                type: "district",
                title: "Trial Court Convicts Jacobson",
                ruling: "favor-respondent",
                standard: "The trial judge excluded all of Jacobson's offers to prove that vaccination was dangerous and that it had harmed him as a child. The jury found him guilty.",
                simplified: "The judge would not let the jury hear Jacobson's proof that vaccines could hurt people. The jury said he was guilty.",
                reasoning: "The court treated Jacobson's medical evidence as immaterial to whether he broke the law."
            },
            {
                date: "1903",
                type: "appeals",
                title: "Massachusetts High Court Upholds Law",
                ruling: "favor-respondent",
                standard: "The Supreme Judicial Court of Massachusetts upheld the law and the trial court's rulings, and Jacobson was sentenced to pay the $5 fine. He took the case to the U.S. Supreme Court.",
                simplified: "The top court in Massachusetts agreed with the trial. Jacobson had to pay $5. Then he went to the U.S. Supreme Court.",
                reasoning: "The state court treated the statute as a valid health law under the police power."
            },
            {
                date: "February 20, 1905",
                type: "scotus",
                title: "Supreme Court Upholds Vaccination Law (7-2)",
                ruling: "favor-respondent",
                standard: "The Supreme Court ruled 7-2 that the Massachusetts law did not violate the Fourteenth Amendment. Justice Harlan wrote that a community may protect itself against an epidemic through reasonable regulations, while warning that courts could step in if a health rule were applied in an arbitrary or unreasonable way. Justices Brewer and Peckham dissented.",
                simplified: "The Supreme Court said Massachusetts could require the vaccine, with 7 justices agreeing. But it said courts could step in if a health rule was unreasonable.",
                reasoning: "Justice Harlan relied on the police power and on the danger smallpox posed to the whole community."
            }
        ]
    },
    arizona: {
        name: "Arizona v. United States",
        shortName: "Arizona",
        events: [
            {
                date: "April 23, 2010",
                type: "incident",
                title: "Arizona Passes S.B. 1070",
                ruling: null,
                standard: "Governor Jan Brewer signed S.B. 1070, known as the \"Support Our Law Enforcement and Safe Neighborhoods Act.\" The law required police to check immigration status during some stops when they suspected a person was in the country unlawfully, made it a state crime to not carry federal immigration papers, and made it a state crime for undocumented immigrants to look for work. Arizona said the federal government wasn't doing enough about illegal immigration.",
                simplified: "Arizona's governor signed a law called S.B. 1070. It said police had to check if people were in the country legally when they stopped them and had a reason to suspect they were not. Arizona said the federal government wasn't doing enough to stop illegal immigration, so the state needed its own rules.",
                reasoning: null
            },
            {
                date: "July 2010",
                type: "district",
                title: "Federal Court Blocks Key Parts of the Law",
                ruling: "favor-respondent",
                standard: "U.S. District Judge Susan Bolton issued an injunction blocking the most controversial parts of S.B. 1070 before they could take effect. The federal government had sued Arizona, arguing that federal immigration law preempted Arizona's law under the Supremacy Clause of the Constitution.",
                simplified: "A federal judge stopped the biggest parts of Arizona's law from going into effect. The U.S. government sued Arizona, saying only the federal government — not individual states — gets to make immigration rules.",
                reasoning: "The court found the federal government was likely to succeed in proving that federal immigration law preempted Arizona's law."
            },
            {
                date: "April 2011",
                type: "appeals",
                title: "9th Circuit Court Upholds the Block",
                ruling: "favor-respondent",
                standard: "The U.S. Court of Appeals for the Ninth Circuit affirmed the lower court's decision, agreeing that key provisions of S.B. 1070 were likely preempted by federal immigration law. The court held that states cannot set their own immigration enforcement policies that conflict with federal priorities.",
                simplified: "The next court agreed that Arizona's law should stay blocked. They said states can't make their own immigration rules when those rules go against what the federal government has decided.",
                reasoning: "The appeals court applied federal preemption doctrine, finding that Congress intended immigration enforcement to be a federal responsibility."
            },
            {
                date: "June 25, 2012",
                type: "scotus",
                title: "Supreme Court Issues a Split Decision (5-3)",
                ruling: "mixed",
                standard: "The Supreme Court struck down three of four challenged provisions but let the \"show me your papers\" requirement take effect for now, allowing police to check immigration status during lawful stops. The Court ruled 5-3 that states cannot create their own immigration crimes or penalties because federal law is supreme, and said the status-check provision could still be challenged after it took effect.",
                simplified: "The Supreme Court made a split decision — partly for Arizona, partly for the U.S. They struck down 3 parts of the law, saying states can't make their own immigration crimes. But they kept the part that lets police check if someone is in the country legally during a stop. The vote was 5 to 3.",
                reasoning: "Justice Kennedy wrote that the federal government has broad power over immigration. States can help enforce federal law but cannot create their own immigration policies that conflict with federal priorities."
            }
        ]
    }
};

caseData['fishing-rights'] = {
    name: "Washington v. Washington State Commercial Passenger Fishing Vessel Ass'n",
    shortName: "Fishing Rights",
    events: [
            {
                date: "September 1970",
                type: "incident",
                title: "United States Sues Washington",
                ruling: null,
                standard: "In 1854 and 1855, the tribes of western Washington signed treaties that kept their right to fish at their usual places “in common with all citizens.” Over the next century, state rules pushed most tribal fishers out, and in the 1960s tribal members held fish-ins. In September 1970, police arrested about 60 people at a fish-in on the Puyallup River. Nine days later, the United States sued the State of Washington as trustee for seven tribes.",
                simplified: "The tribes signed treaties in 1854 and 1855 that kept their right to fish. Over time, state rules pushed most tribal fishers out. In the 1960s they held fish-ins. In 1970 the United States sued Washington State to protect the tribes’ fishing rights.",
                reasoning: null
            },
            {
                date: "February 12, 1974",
                type: "district",
                title: "The Boldt Decision",
                ruling: "favor-respondent",
                standard: "Judge George Boldt ruled that “in common with” means “sharing equally the opportunity to take fish,” so treaty fishers could take up to 50 percent of the harvestable fish passing their usual and accustomed places.",
                simplified: "Judge George Boldt ruled for the tribes. He said they could take up to half of the fish that could be caught at their usual places.",
                reasoning: "Boldt read the treaty words using dictionaries from 1828 and 1862 and the court’s findings about what the tribes understood."
            },
            {
                date: "1975–1977",
                type: "appeals",
                title: "Appeals Court Agrees; State Courts Resist",
                ruling: "mixed",
                standard: "The Ninth Circuit Court of Appeals affirmed the Boldt decision in 1975, and the Supreme Court declined to review it in 1976. In 1977 the Washington Supreme Court ruled that the State’s fisheries agency could not carry out the federal order and that special fishing rights would violate equal protection. The federal court then began supervising parts of the State’s fishery.",
                simplified: "A federal appeals court agreed with Judge Boldt. But in 1977 Washington’s top court said the State could not follow his order. So the federal court started running parts of the State’s fishery.",
                reasoning: "Federal and state courts read the same treaty words in opposite ways, which set up the conflict for the Supreme Court."
            },
            {
                date: "July 2, 1979",
                type: "scotus",
                title: "Supreme Court Rules for the Tribes (6–3)",
                ruling: "favor-respondent",
                standard: "The Supreme Court ruled 6–3 that the treaties secure the tribes a share of each run of fish that passes through their usual places, not just an equal chance to try. Justice Stevens wrote that the share may be up to 50 percent and can be lowered if a tribe needs less to earn a moderate living. Justice Powell dissented, joined by Justices Stewart and Rehnquist.",
                simplified: "The Supreme Court ruled 6–3 for the tribes. The treaties promise them a share of the fish, up to half, not just the same chance as everyone. Three justices disagreed.",
                reasoning: "The Court read the treaties as the tribes would have understood them in 1854–1855 and pointed to Article VI: state law cannot block a treaty right."
            }
    ]
};

// DOM Elements
let selectedCases = [];
let currentReadingLevel = 'standard';
let journeyMode = 'prep';

document.addEventListener('DOMContentLoaded', function() {
    initReadingLevel();
    initCaseButtons();
    initJourneyMode();
    restoreJourneySelection();
});

function initJourneyMode() {
    var prepBtn = document.getElementById('mode-prep');
    var debriefBtn = document.getElementById('mode-debrief');
    if (!prepBtn || !debriefBtn) return;
    function setMode(mode) {
        journeyMode = mode;
        prepBtn.classList.toggle('active', mode === 'prep');
        debriefBtn.classList.toggle('active', mode === 'debrief');
        try { localStorage.setItem('scotus-journey-mode', mode); } catch (e) {}
        renderTimeline();
    }
    try {
        var saved = localStorage.getItem('scotus-journey-mode');
        if (saved === 'debrief' || saved === 'prep') setMode(saved);
    } catch (e) {}
    prepBtn.addEventListener('click', function() { setMode('prep'); });
    debriefBtn.addEventListener('click', function() { setMode('debrief'); });
}

function persistJourneyCases() {
    try { localStorage.setItem('scotus-journey-cases', JSON.stringify(selectedCases)); } catch (e) {}
}

function restoreJourneySelection() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get('case');
    var saved = null;
    try {
        var raw = localStorage.getItem('scotus-journey-cases');
        if (raw) saved = JSON.parse(raw);
    } catch (e) {}
    var toSelect;
    if (fromUrl) toSelect = [fromUrl];
    else if (Array.isArray(saved)) toSelect = saved;
    else toSelect = ['tinker'];
    toSelect.forEach(function (id) {
        var btn = document.querySelector('.case-btn[data-case="' + id + '"]');
        if (btn && !btn.classList.contains('selected')) btn.click();
    });
}

function initReadingLevel() {
    if (typeof window.getReadingLevel === 'function') {
        currentReadingLevel = window.getReadingLevel();
    }
    document.body.classList.toggle('reading-simplified', currentReadingLevel === 'simplified');
    document.addEventListener('scotus:reading-level', function (e) {
        currentReadingLevel = e.detail === 'simplified' ? 'simplified' : 'standard';
        renderTimeline();
    });
}

function initCaseButtons() {
    const caseButtons = document.querySelectorAll('.case-btn[data-case]');
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
            persistJourneyCases();
            renderTimeline();
        });
    });

    clearAllBtn.addEventListener('click', function() {
        selectedCases = [];
        caseButtons.forEach(btn => btn.classList.remove('selected'));
        this.style.display = 'none';
        persistJourneyCases();
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
        updatePartyLegend();
        return;
    }

    emptyState.style.display = 'none';
    legend.style.display = 'block';

    // Collect all events from selected cases
    let allEvents = [];
    selectedCases.forEach(caseId => {
        const caseInfo = caseData[caseId];
        caseInfo.events.forEach(event => {
            if (journeyMode === 'prep' && event.type === 'scotus') {
                return;
            }
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
    updatePartyLegend();
    if (journeyMode === 'prep' && selectedCases.length > 0) {
        timeline.insertAdjacentHTML('beforeend',
            '<div class="timeline-event scotus-hidden">' +
            '<div class="card-content"><strong>Supreme Court — hidden in Prep mode</strong>' +
            '<p>The Court agreed to hear the case. How it voted is hidden so you can argue as if the justices have not spoken yet. Switch to Debrief after your debate.</p></div></div>'
        );
    }
}

function updatePartyLegend() {
    var box = document.getElementById('party-legend');
    if (!box) return;
    if (!selectedCases.length) {
        box.hidden = true;
        box.innerHTML = '';
        return;
    }
    box.hidden = false;
    box.innerHTML = selectedCases.map(function (id) {
        var prep = window.CASE_PREP_DATA && CASE_PREP_DATA[id];
        var info = caseData[id];
        if (prep) {
            return '<p><strong>' + info.shortName + ':</strong> ' +
                '<span class="legend-petitioner">Petitioner — ' + prep.petitioner.name + '</span> · ' +
                '<span class="legend-respondent">Respondent — ' + prep.respondent.name + '</span></p>';
        }
        return '<p><strong>' + info.shortName + '</strong> — colors follow petitioner / respondent as the case was named at the Supreme Court.</p>';
    }).join('');
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
    // Colors follow the Supreme Court caption: petitioner/respondent as the case was named at SCOTUS.
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
