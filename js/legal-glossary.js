/**
 * Click-to-open explanations of constitutional terms.
 * Works on Chromebooks and phones (no hover required).
 * Never includes this Court's holding — only the law the parties are arguing about.
 */
(function () {
  "use strict";

  var TERMS = [
    {
      term: "in loco parentis",
      meaning:
        "Latin for “in the place of a parent.” The idea that, during the school day, staff may act a bit like a parent — with more leeway than police on the street, but still bound by the Constitution."
    },
    {
      term: "substantial disruption",
      meaning:
        "Tinker’s test: schools may limit student speech if they can show the speech would actually interfere with class or school operations — not just because they dislike the message or fear a little controversy."
    },
    {
      term: "reasonable suspicion",
      meaning:
        "A lower bar than probable cause. It means specific facts that would make a reasonable person think a student broke a school rule or the law — not a hunch, and not “search everyone.”"
    },
    {
      term: "probable cause",
      meaning:
        "Facts that would make a reasonable person believe a crime was committed (or that evidence is in this place). Police usually need this, plus a warrant, to search a home."
    },
    {
      term: "separate but equal",
      meaning:
        "The old Plessy v. Ferguson idea: the Fourteenth Amendment allows racial segregation if the separate facilities are “equal.” Brown’s parties fight over whether that idea still controls public schools."
    },
    {
      term: "Plessy v. Ferguson",
      meaning:
        "An 1896 Supreme Court decision that allowed racial segregation if facilities were “equal.” It is earlier precedent the Board relies on in Brown — not the holding of Brown itself."
    },
    {
      term: "Equal Protection Clause",
      meaning:
        "Part of the Fourteenth Amendment. It says no state may deny any person “the equal protection of the laws.” Brown asks what that means for racially segregated public schools."
    },
    {
      term: "Establishment Clause",
      meaning:
        "Part of the First Amendment. It limits the government from establishing a religion or appearing to endorse one. In Kennedy, the school says a coach’s prayer at the 50-yard line looks like the school is backing Christianity."
    },
    {
      term: "Free Exercise Clause",
      meaning:
        "Part of the First Amendment. It protects the right to practice your religion. In Kennedy, the coach says kneeling to pray after a game is his own worship, not a school program."
    },
    {
      term: "Free Exercise",
      meaning:
        "The First Amendment protection for practicing your religion. Different from the Establishment Clause, which limits government-sponsored religion."
    },
    {
      term: "Supremacy Clause",
      meaning:
        "Article VI of the Constitution: when federal law and state law collide on the same subject, valid federal law wins. Arizona is about whether parts of S.B. 1070 collide with Congress’s immigration rules."
    },
    {
      term: "off-campus speech",
      meaning:
        "Words or posts created outside school time and property. Mahanoy asks whether a school’s disruption authority follows a student onto a weekend phone."
    },
    {
      term: "symbolic speech",
      meaning:
        "A message sent by action or clothing, not just words — like an armband, a flag, or a silent protest. Courts still treat it as First Amendment speech if a viewer would get the message."
    },
    {
      term: "Fourteenth Amendment",
      meaning:
        "Ratified after the Civil War. It requires states to give due process and equal protection. Most school and state cases reach the Bill of Rights through this amendment."
    },
    {
      term: "Fourth Amendment",
      meaning:
        "The part of the Bill of Rights that protects people from unreasonable searches and seizures. It usually requires a warrant based on probable cause — the fight is what “unreasonable” means at school or in a home."
    },
    {
      term: "Tenth Amendment",
      meaning:
        "Powers not given to the United States, nor banned to the states, are reserved to the states or the people. Arizona uses this to argue local police power; the United States answers with the Supremacy Clause."
    },
    {
      term: "First Amendment",
      meaning:
        "The part of the Bill of Rights that protects speech, press, religion, assembly, and petition. Public schools and police are government, so these limits apply to them — the fight is how far they go."
    },
    {
      term: "Bill of Rights",
      meaning:
        "The first ten amendments to the Constitution. They list limits on government power, including speech, religion, and searches. Public schools and police count as government."
    },
    {
      term: "public school",
      meaning:
        "A government-run school. Teachers, principals, and coaches are state actors, so the Constitution applies to what they do — unlike a purely private school in many situations."
    },
    {
      term: "preemption",
      meaning:
        "When federal law occupies a field (or conflicts with a state rule), the state rule is blocked. Arizona asks whether S.B. 1070 is preempted by federal immigration law."
    },
    {
      term: "federalism",
      meaning:
        "The split of power between the national government and the states. Immigration is mostly a federal subject; states still run local police. Arizona is a border-line case in that split."
    },
    {
      term: "warrant",
      meaning:
        "A judge’s written permission to search a place or arrest someone, usually based on probable cause. Payton asks whether police need one to enter a home for a routine arrest."
    },
    {
      term: "precedent",
      meaning:
        "An earlier court decision that later courts are supposed to follow in similar cases. Parties cite precedent (like Tinker or Plessy) to argue what this Court should do."
    },
    {
      term: "petitioner",
      meaning:
        "The side that asked the Supreme Court to take the case (they lost below, or they want the lower ruling reviewed). It is a role, not “the good guys.”"
    },
    {
      term: "respondent",
      meaning:
        "The side defending the lower court’s result. They argue this Court should leave that outcome in place. It is a role, not “the villains.”"
    },
    {
      term: "Constitution",
      meaning:
        "The supreme law of the United States. It sets up the federal government and lists rights the government may not violate. State and school rules lose if they clash with it."
    },
    {
      term: "amendment",
      meaning:
        "A change added to the Constitution. The Bill of Rights is the first ten amendments. Later ones, like the Fourteenth, also matter in these cases."
    }
  ];

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function skipElement(el) {
    if (!el || el.nodeType !== 1) return true;
    var tag = el.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA" || tag === "INPUT" || tag === "BUTTON" || tag === "A" || tag === "LABEL" || tag === "CITE") {
      return true;
    }
    if (el.closest && el.closest(".legal-tip, .law-box, .no-legal-tips, code, pre, .q-opt, .q-card, .nav-dropdown, .header-nav, .site-header")) {
      return true;
    }
    return false;
  }

  function wrapFirstInTextNode(node, term, meaning) {
    var text = node.nodeValue;
    if (!text) return false;
    var re = new RegExp("\\b" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+") + "\\b", "i");
    var m = text.match(re);
    if (!m) return false;
    var idx = m.index;
    var matched = m[0];
    var before = text.slice(0, idx);
    var after = text.slice(idx + matched.length);
    var tip = document.createElement("button");
    tip.type = "button";
    tip.className = "legal-tip";
    tip.setAttribute("aria-expanded", "false");
    tip.innerHTML =
      '<span class="legal-tip-word">' +
      escapeHtml(matched) +
      '</span><span class="legal-tip-pop" hidden>' +
      escapeHtml(meaning) +
      "</span>";
    var parent = node.parentNode;
    if (before) parent.insertBefore(document.createTextNode(before), node);
    parent.insertBefore(tip, node);
    if (after) parent.insertBefore(document.createTextNode(after), node);
    parent.removeChild(node);
    return true;
  }

  function walk(root, term, meaning, used) {
    if (used[term]) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (skipElement(p)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      if (wrapFirstInTextNode(node, term, meaning)) {
        used[term] = true;
        return;
      }
    }
  }

  function enhance(root) {
    if (!root || root.getAttribute("data-legal-enhanced") === "1") return;
    var used = {};
    TERMS.forEach(function (t) {
      walk(root, t.term, t.meaning, used);
    });
    root.setAttribute("data-legal-enhanced", "1");
  }

  function enhanceAll() {
    ["background", "speak", "activity", "today", "speak-recap", "law-words"].forEach(function (id) {
      var n = document.getElementById(id);
      if (n) enhance(n);
    });
  }

  function closeAll(except) {
    document.querySelectorAll(".legal-tip").forEach(function (btn) {
      if (btn === except) return;
      btn.setAttribute("aria-expanded", "false");
      var pop = btn.querySelector(".legal-tip-pop");
      if (pop) pop.hidden = true;
    });
  }

  function onDocClick(e) {
    var tip = e.target.closest && e.target.closest(".legal-tip");
    if (!tip) {
      closeAll(null);
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    var open = tip.getAttribute("aria-expanded") === "true";
    closeAll(null);
    if (!open) {
      tip.setAttribute("aria-expanded", "true");
      var pop = tip.querySelector(".legal-tip-pop");
      if (pop) pop.hidden = false;
    }
  }

  function renderResourcesLaw() {
    var list = document.getElementById("law-glossary-list");
    if (list) {
      var sorted = TERMS.slice().sort(function (a, b) {
        return a.term.toLowerCase().localeCompare(b.term.toLowerCase());
      });
      list.classList.add("no-legal-tips");
      list.innerHTML = sorted
        .map(function (t) {
          return '<dt>' + escapeHtml(t.term) + '</dt><dd>' + escapeHtml(t.meaning) + '</dd>';
        })
        .join('');
    }
    var frames = document.getElementById("law-case-frames");
    if (frames && window.CASE_PREP_DATA && typeof window.scotusLawBoxHtml === "function") {
      var order = ["tinker", "mahanoy", "tlo", "payton", "kennedy", "brown", "arizona"];
      var hrefs = {
        tinker: "cases/tinker.html",
        mahanoy: "cases/mahanoy.html",
        tlo: "cases/tlo.html",
        payton: "cases/payton.html",
        kennedy: "cases/kennedy.html",
        brown: "cases/brown.html",
        arizona: "cases/arizona.html"
      };
      frames.innerHTML = order
        .map(function (id) {
          var data = CASE_PREP_DATA[id];
          if (!data || !data.law) return "";
          return (
            '<article class="law-case-frame">' +
            "<h4>" +
            escapeHtml(data.shortTitle) +
            ' · <a href="' +
            hrefs[id] +
            '">Open case</a></h4>' +
            window.scotusLawBoxHtml(data, { compact: true, prefix: "" }) +
            "</article>"
          );
        })
        .join("");
    }
  }

  window.SCOTUS_LEGAL_TERMS = TERMS;
  window.enhanceLegalTips = function (root) {
    if (root) {
      root.removeAttribute("data-legal-enhanced");
      enhance(root);
    } else {
      enhanceAll();
    }
  };

  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });

  function boot() {
    renderResourcesLaw();
    setTimeout(enhanceAll, 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
