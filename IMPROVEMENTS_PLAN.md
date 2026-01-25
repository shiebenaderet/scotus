# SCOTUS Debate Project - Improvement Plan

## ✅ Completed: Guiding Question Integration
- Added guiding question prominently on homepage
- Added "Connecting to Our Guiding Question" section to Payton case
- Styled with prominent, engaging design

## 🎯 Next Major Improvements

### 1. Complete Guiding Question Integration
**Status:** Started (Payton done, need to add to other 6 cases)

**Action Items:**
- Add guiding question connection section to all remaining cases:
  - Brown v. Board of Education
  - Arizona v. United States
  - Tinker v. Des Moines
  - New Jersey v. T.L.O.
  - Kennedy v. Bremerton School District
  - Mahanoy Area School District v. B.L.

**Each case should explain:**
- How the case relates to the guiding question
- What rights are being limited
- What community protection is being claimed
- The tension between the two

---

### 2. Current Events & News Videos Section

**Where to Find News Videos:**
- **C-SPAN**: https://www.c-span.org/search/?query=supreme+court
  - Search for specific cases or "Supreme Court" for current coverage
- **PBS NewsHour**: https://www.pbs.org/newshour/tag/supreme-court
  - Educational, balanced coverage
- **NPR**: https://www.npr.org/sections/politics/supreme-court
  - Audio and video segments
- **CNN, ABC, NBC**: Search their archives for case coverage
- **YouTube**: Search "[Case Name] news coverage" or "[Case Name] Supreme Court"
- **SCOTUSblog**: https://www.scotusblog.com (has media roundups)

**Implementation Plan:**
1. Add "Connecting to Today" section on each case page
2. Include:
   - News video from when case was decided (if available)
   - Recent news about related issues
   - Contemporary examples of similar questions
   - Links to current cases that cite this precedent

**Example Structure:**
```html
<section id="current-events" class="case-section">
    <h2>Connecting to Today</h2>
    <div class="current-events-grid">
        <div class="event-item">
            <span class="event-tag">📺 News Coverage</span>
            <h3>Original Case Coverage</h3>
            <p>Watch how news outlets covered this case when it was decided</p>
            <a href="[video link]">Watch Video →</a>
        </div>
        <div class="event-item">
            <span class="event-tag">📰 Recent News</span>
            <h3>Related Issues Today</h3>
            <p>How this case's principles apply to current events</p>
            <a href="[article link]">Read Article →</a>
        </div>
    </div>
</section>
```

---

### 3. Deeper Dive Resources

**Resource Categories to Add:**

#### A. News Coverage
- Original news articles from when case was decided
- Recent news articles about related issues
- Opinion pieces analyzing the case

#### B. Academic Analysis
- Law review articles
- Academic papers
- Scholarly analysis

#### C. Historical Context
- Historical documents
- Timeline of related events
- Background on the era

#### D. Related Cases
- Cases that cite this one
- Cases that were overturned by this one
- Similar cases students might compare

**Where to Find These:**
- **HeinOnline**: Academic legal database (may require subscription)
- **Google Scholar**: Free academic papers
- **JSTOR**: Academic articles (many free)
- **Library of Congress**: Historical documents
- **National Archives**: Case documents
- **SCOTUSblog**: Case analysis and commentary
- **Justia**: Related cases and citations

**Implementation:**
Expand the Resources section on each case page with tabs or categories:
- News & Media
- Academic Analysis  
- Historical Context
- Related Cases

---

### 4. Court Decision Section

**What to Add:**
- The actual outcome of each case
- Key quotes from majority opinion
- Notable dissents
- Impact of the decision

**Placement:** After the Argument Activity, before Resources

**Structure:**
```html
<section id="decision" class="case-section">
    <h2>The Court's Decision</h2>
    <div class="decision-content">
        <h3>Outcome</h3>
        <p>[Who won and what the Court decided]</p>
        
        <h3>Key Reasoning</h3>
        <p>[Main points from the majority opinion]</p>
        
        <h3>Impact</h3>
        <p>[How this decision affected law and society]</p>
    </div>
</section>
```

---

### 5. Debate Preparation Tools

**Add:**
- Printable debate worksheet
- Argument ranking template
- Position statement template
- Rebuttal preparation guide

**Implementation:**
- Add "Debate Prep" section to resources.html
- Create downloadable PDF templates
- Or add interactive forms on case pages

---

### 6. Additional Improvements

#### A. Search Functionality
- Allow students to search across cases
- Filter by topic, amendment, or year

#### B. Progress Tracking
- Track which cases students have completed
- Show completion status

#### C. Comparison Tool
- Allow students to compare cases side-by-side
- See how different cases address similar questions

#### D. Student Reflection Section
- After completing activity, prompt students to reflect
- "How does this case relate to the guiding question?"
- "What do you think the Court should have decided?"

#### E. Teacher Resources
- Separate section with:
  - Answer keys
  - Discussion questions
  - Assessment rubrics
  - Extension activities

---

## Implementation Priority

### High Priority (Do First):
1. ✅ Guiding question integration (in progress)
2. Court Decision sections (students need to know outcomes)
3. "Connecting to Today" sections with news videos
4. Expand Resources sections with deeper dives

### Medium Priority:
5. Debate preparation worksheets
6. Student reflection prompts
7. Related cases links

### Lower Priority (Nice to Have):
8. Search functionality
9. Progress tracking
10. Comparison tool
11. Teacher resources section

---

## Finding News Videos - Quick Guide

### For Each Case, Search:
1. **YouTube**: "[Case Name] news" or "[Case Name] Supreme Court decision"
2. **C-SPAN**: Search case name in video library
3. **PBS NewsHour Archives**: Check their Supreme Court coverage
4. **Archive.org**: Historical news broadcasts
5. **Case-specific**: Some cases have dedicated documentaries

### Best Practices:
- Verify video is educational and appropriate
- Check video length (3-10 minutes ideal)
- Ensure video is still accessible
- Include transcript or summary if available
- Note the date of coverage (original vs. retrospective)

---

## Next Steps

1. **Complete guiding question** on all 7 cases
2. **Add Court Decision sections** to all cases
3. **Research and add news videos** for each case
4. **Expand Resources sections** with categorized links
5. **Add "Connecting to Today"** sections

Would you like me to:
- Complete the guiding question on all cases?
- Add Court Decision sections?
- Create the structure for news videos/current events?
- Help research specific resources for a particular case?
