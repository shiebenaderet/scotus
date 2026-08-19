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
        "Latin for “in the place of a parent.” The idea that, during the school day, staff may act a bit like a parent — with more leeway than police on the street, but still bound by the Constitution.",
      simple:
        "Latin for “in the place of a parent.” During the school day, staff may act a bit like a parent — still limited by the Constitution."
    },
    {
      term: "substantial disruption",
      meaning:
        "Tinker’s test: schools may limit student speech if they can show the speech would actually interfere with class or school operations — not just because they dislike the message or fear a little controversy.",
      simple:
        "Real interference with class or school — not “we don’t like this message” or “we fear a little controversy.”"
    },
    {
      term: "reasonable suspicion",
      meaning:
        "A lower bar than probable cause. It means specific facts that would make a reasonable person think a student broke a school rule or the law — not a hunch, and not “search everyone.”",
      simple:
        "Specific facts that this student broke a rule or the law. Lower than probable cause. Not a hunch."
    },
    {
      term: "probable cause",
      meaning:
        "Facts that would make a reasonable person believe a crime was committed (or that evidence is in this place). Police usually need this, plus a warrant, to search a home.",
      simple:
        "Solid facts that a crime is likely, or that evidence is in this place. Police usually need this, plus a warrant, to search a home."
    },
    {
      term: "separate but equal",
      meaning:
        "The old Plessy v. Ferguson idea: the Fourteenth Amendment allows racial segregation if the separate facilities are “equal.” Brown’s parties fight over whether that idea still controls public schools.",
      simple:
        "Plessy’s old idea: split by race is allowed if the buildings are “equal.” Brown’s parties fight over whether that still controls public schools."
    },
    {
      term: "Plessy v. Ferguson",
      meaning:
        "An 1896 Supreme Court decision that allowed racial segregation if facilities were “equal.” It is earlier precedent the Board relies on in Brown — not the holding of Brown itself.",
      simple:
        "An 1896 case that allowed racial segregation if facilities were “equal.” The Board uses it in Brown. It is not Brown’s holding."
    },
    {
      term: "Equal Protection Clause",
      meaning:
        "Part of the Fourteenth Amendment. It says no state may deny any person “the equal protection of the laws.” Brown asks what that means for racially segregated public schools.",
      simple:
        "Part of the Fourteenth Amendment: states must treat people equally under the law. Brown asks what that means for schools split by race."
    },
    {
      term: "Establishment Clause",
      meaning:
        "Part of the First Amendment. It limits the government from establishing a religion or appearing to endorse one. In Kennedy, the school says a coach’s prayer at the 50-yard line looks like the school is backing Christianity.",
      simple:
        "The government may not set up a religion or look like it is backing one. In Kennedy, the school says a coach praying at midfield looks like school prayer."
    },
    {
      term: "Free Exercise Clause",
      meaning:
        "Part of the First Amendment. It protects the right to practice your religion. In Kennedy, the coach says kneeling to pray after a game is his own worship, not a school program.",
      simple:
        "You have the right to practice your religion. In Kennedy, the coach says a short prayer after the game is his worship, not a school program."
    },
    {
      term: "Free Exercise",
      meaning:
        "The First Amendment protection for practicing your religion. Different from the Establishment Clause, which limits government-sponsored religion.",
      simple:
        "The right to practice your religion. Different from the rule that the government may not back a religion."
    },
    {
      term: "Supremacy Clause",
      meaning:
        "Article VI of the Constitution: when federal law and state law collide on the same subject, valid federal law wins. Arizona is about whether parts of S.B. 1070 collide with Congress’s immigration rules.",
      simple:
        "When federal law and state law clash, valid federal law wins. Arizona asks whether S.B. 1070 clashes with Congress’s immigration rules."
    },
    {
      term: "off-campus speech",
      meaning:
        "Words or posts created outside school time and property. Mahanoy asks whether a school’s disruption authority follows a student onto a weekend phone.",
      simple:
        "A post made off school grounds, not during school. Mahanoy asks whether the school can still punish a weekend phone post."
    },
    {
      term: "symbolic speech",
      meaning:
        "A message sent by action or clothing, not just words — like an armband, a flag, or a silent protest. Courts still treat it as First Amendment speech if a viewer would get the message.",
      simple:
        "A message sent by clothing or action, not talking — like an armband. It still counts as speech if people get the message."
    },
    {
      term: "Fourteenth Amendment",
      meaning:
        "Ratified after the Civil War. It requires states to give due process and equal protection. Most school and state cases reach the Bill of Rights through this amendment.",
      simple:
        "Added after the Civil War. It makes states give due process and equal protection. Many school cases use this amendment."
    },
    {
      term: "Fourth Amendment",
      meaning:
        "The part of the Bill of Rights that protects people from unreasonable searches and seizures. It usually requires a warrant based on probable cause — the fight is what “unreasonable” means at school or in a home.",
      simple:
        "Protects people from unreasonable searches. Police usually need a warrant and probable cause. The fight is what “unreasonable” means at school or in a home."
    },
    {
      term: "Tenth Amendment",
      meaning:
        "Powers not given to the United States, nor banned to the states, are reserved to the states or the people. Arizona uses this to argue local police power; the United States answers with the Supremacy Clause.",
      simple:
        "Powers not given to the national government stay with the states or the people. Arizona uses this. The United States answers with the Supremacy Clause."
    },
    {
      term: "First Amendment",
      meaning:
        "The part of the Bill of Rights that protects speech, press, religion, assembly, and petition. Public schools and police are government, so these limits apply to them — the fight is how far they go.",
      simple:
        "Protects speech, press, religion, assembly, and petition. Public schools and police are government, so it applies to them. The fight is how far it goes."
    },
    {
      term: "Bill of Rights",
      meaning:
        "The first ten amendments to the Constitution. They list limits on government power, including speech, religion, and searches. Public schools and police count as government.",
      simple:
        "The first ten amendments. They limit government power — speech, religion, searches. Public schools and police count as government."
    },
    {
      term: "public school",
      meaning:
        "A government-run school. Teachers, principals, and coaches are state actors, so the Constitution applies to what they do — unlike a purely private school in many situations.",
      simple:
        "A government-run school. Staff are the government, so the Constitution applies to what they do."
    },
    {
      term: "preemption",
      meaning:
        "When federal law occupies a field (or conflicts with a state rule), the state rule is blocked. Arizona asks whether S.B. 1070 is preempted by federal immigration law.",
      simple:
        "Federal law can block a state law if Congress already filled that subject, or if the state rule gets in the way."
    },
    {
      term: "federalism",
      meaning:
        "The split of power between the national government and the states. Immigration is mostly a federal subject; states still run local police. Arizona is a border-line case in that split.",
      simple:
        "Power is split between the national government and the states. Immigration is mostly federal. States still run local police."
    },
    {
      term: "warrant",
      meaning:
        "A judge’s written permission to search a place or arrest someone, usually based on probable cause. Payton asks whether police need one to enter a home for a routine arrest.",
      simple:
        "A judge’s written OK to search or arrest, usually based on probable cause. Payton asks if police need one to enter a home."
    },
    {
      term: "precedent",
      meaning:
        "An earlier court decision that later courts are supposed to follow in similar cases. Parties cite precedent (like Tinker or Plessy) to argue what this Court should do.",
      simple:
        "An earlier court decision later courts are supposed to follow. Parties use cases like Tinker or Plessy to argue what this Court should do."
    },
    {
      term: "petitioner",
      meaning:
        "The side that asked the Supreme Court to take the case (they lost below, or they want the lower ruling reviewed). It is a role, not “the good guys.”",
      simple:
        "The side that asked the Supreme Court to take the case. It is a role, not “the good guys.”"
    },
    {
      term: "respondent",
      meaning:
        "The side defending the lower court’s result. They argue this Court should leave that outcome in place. It is a role, not “the villains.”",
      simple:
        "The side defending the lower court’s result. It is a role, not “the villains.”"
    },
    {
      term: "Constitution",
      meaning:
        "The supreme law of the United States. It sets up the federal government and lists rights the government may not violate. State and school rules lose if they clash with it.",
      simple:
        "The highest law in the United States. It sets up the federal government and lists rights government may not violate."
    },
    {
      term: "amendment",
      meaning:
        "A change added to the Constitution. The Bill of Rights is the first ten amendments. Later ones, like the Fourteenth, also matter in these cases.",
      simple:
        "A change added to the Constitution. The first ten are the Bill of Rights. Later ones, like the Fourteenth, also matter here."
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
    if (el.closest && el.closest(".legal-tip, .law-box, .no-legal-tips, code, pre, .q-opt, .q-card, .nav-dropdown, .header-nav, .site-header, .content-block.hidden, .two-sides-summary.hidden")) {
      return true;
    }
    return false;
  }

  function popInnerHtml(t) {
    var simple = t.simple || t.meaning;
    return (
      '<span class="content-block standard">' +
      escapeHtml(t.meaning) +
      '</span><span class="content-block simplified">' +
      escapeHtml(simple) +
      "</span>"
    );
  }

  function wrapFirstInTextNode(node, t) {
    var text = node.nodeValue;
    if (!text) return false;
    var re = new RegExp("\\b" + t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+") + "\\b", "i");
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
      popInnerHtml(t) +
      "</span>";
    var parent = node.parentNode;
    if (before) parent.insertBefore(document.createTextNode(before), node);
    parent.insertBefore(tip, node);
    if (after) parent.insertBefore(document.createTextNode(after), node);
    parent.removeChild(node);
    return true;
  }

  function walk(root, t, used) {
    if (used[t.term]) return;
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
      if (wrapFirstInTextNode(node, t)) {
        used[t.term] = true;
        return;
      }
    }
  }

  function enhance(root) {
    if (!root || root.getAttribute("data-legal-enhanced") === "1") return;
    var used = {};
    TERMS.forEach(function (t) {
      walk(root, t, used);
    });
    root.setAttribute("data-legal-enhanced", "1");
  }

  function enhanceAll() {
    ["background", "speak", "activity", "today", "speak-recap", "law-words"].forEach(function (id) {
      var n = document.getElementById(id);
      if (n) enhance(n);
    });
  }

  function resetPopStyle(pop) {
    if (!pop) return;
    pop.style.left = "";
    pop.style.right = "";
    pop.style.top = "";
    pop.style.bottom = "";
    pop.style.maxHeight = "";
    pop.style.overflowY = "";
    pop.style.visibility = "";
    pop.style.transform = "";
    pop.classList.remove("scotus-pop--above");
    pop.style.removeProperty("--arrow-left");
  }

  function closeAll(except) {
    document.querySelectorAll(".legal-tip").forEach(function (btn) {
      if (btn === except) return;
      btn.setAttribute("aria-expanded", "false");
      var pop = btn.querySelector(".legal-tip-pop");
      if (pop) {
        pop.hidden = true;
        resetPopStyle(pop);
      }
    });
  }

  /**
   * Pin a popover to the viewport so overflow:hidden ancestors (vault cards,
   * collapsed panels, nav) cannot clip it. Prefer below the trigger; flip
   * above or scroll inside the pop if there is not enough room.
   */
  function placePopover(anchor, pop) {
    if (!anchor || !pop) return;
    pop.style.position = "fixed";
    pop.style.right = "auto";
    pop.style.bottom = "auto";
    pop.style.transform = "none";
    pop.style.left = "0px";
    pop.style.top = "0px";
    pop.style.maxHeight = "";
    pop.style.overflowY = "";
    pop.style.visibility = "hidden";
    pop.classList.remove("scotus-pop--above");

    var pad = 8;
    var gap = 8;
    var ar = anchor.getBoundingClientRect();
    var pr = pop.getBoundingClientRect();
    var width = pr.width || Math.min(352, window.innerWidth - pad * 2);
    var height = pr.height || 0;

    var left = ar.left;
    if (left + width > window.innerWidth - pad) {
      left = window.innerWidth - pad - width;
    }
    if (left < pad) left = pad;

    var belowTop = ar.bottom + gap;
    var roomBelow = window.innerHeight - pad - belowTop;
    var roomAbove = ar.top - gap - pad;
    var above = false;
    var top;

    if (height <= roomBelow || roomBelow >= roomAbove) {
      top = belowTop;
      if (height > roomBelow) {
        pop.style.maxHeight = Math.max(96, roomBelow) + "px";
        pop.style.overflowY = "auto";
      }
    } else {
      above = true;
      if (height > roomAbove) {
        pop.style.maxHeight = Math.max(96, roomAbove) + "px";
        pop.style.overflowY = "auto";
        top = pad;
      } else {
        top = ar.top - gap - height;
      }
    }

    pop.style.left = Math.round(left) + "px";
    pop.style.top = Math.round(top) + "px";
    if (above) pop.classList.add("scotus-pop--above");
    var arrow = ar.left + ar.width / 2 - left;
    pop.style.setProperty("--arrow-left", Math.round(Math.max(12, Math.min(width - 12, arrow))) + "px");
    pop.style.visibility = "";
  }

  function showTip(tip) {
    tip.setAttribute("aria-expanded", "true");
    var pop = tip.querySelector(".legal-tip-pop");
    if (!pop) return;
    pop.hidden = false;
    pop.style.visibility = "hidden";
    requestAnimationFrame(function () {
      placePopover(tip, pop);
    });
  }

  function onDocClick(e) {
    if (e.target.closest && e.target.closest(".legal-tip-pop")) {
      e.stopPropagation();
      return;
    }
    var tip = e.target.closest && e.target.closest(".legal-tip");
    if (!tip) {
      closeAll(null);
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    var open = tip.getAttribute("aria-expanded") === "true";
    closeAll(null);
    if (!open) showTip(tip);
  }

  function onScrollOrResize(e) {
    var open = document.querySelector('.legal-tip[aria-expanded="true"]');
    var openAmend = document.querySelector(".amend-tooltip.is-open");
    if (e.type === "scroll") {
      var t = e.target;
      if (t && t.closest && t.closest(".legal-tip-pop, .amend-tooltip")) return;
      closeAll(null);
      document.querySelectorAll(".amend-tooltip.is-open").forEach(function (tip) {
        tip.classList.remove("is-open");
        tip.hidden = true;
      });
      return;
    }
    if (open) {
      var pop = open.querySelector(".legal-tip-pop");
      if (pop && !pop.hidden) placePopover(open, pop);
    }
    if (openAmend && openAmend.parentElement && typeof placePopover === "function") {
      placePopover(openAmend.parentElement, openAmend);
    }
  }

  window.scotusPlacePopover = placePopover;

  function renderResourcesLaw() {
    var list = document.getElementById("law-glossary-list");
    if (list) {
      var sorted = TERMS.slice().sort(function (a, b) {
        return a.term.toLowerCase().localeCompare(b.term.toLowerCase());
      });
      list.classList.add("no-legal-tips");
      list.innerHTML = sorted
        .map(function (t) {
          return (
            "<dt>" +
            escapeHtml(t.term) +
            '</dt><dd>' +
            '<span class="content-block standard">' +
            escapeHtml(t.meaning) +
            '</span><span class="content-block simplified">' +
            escapeHtml(t.simple || t.meaning) +
            "</span></dd>"
          );
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
    syncReadingLevel();
  };

  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAll(null);
      document.querySelectorAll(".amend-tooltip.is-open").forEach(function (tip) {
        tip.classList.remove("is-open");
        tip.hidden = true;
      });
    }
  });
  window.addEventListener("scroll", onScrollOrResize, true);
  window.addEventListener("resize", onScrollOrResize);
  document.addEventListener("scotus:reading-level", function () {
    ["background", "speak", "activity", "today", "speak-recap", "law-words"].forEach(function (id) {
      var n = document.getElementById(id);
      if (!n) return;
      n.removeAttribute("data-legal-enhanced");
      enhance(n);
    });
    var open = document.querySelector('.legal-tip[aria-expanded="true"]');
    if (open) {
      var pop = open.querySelector(".legal-tip-pop");
      if (pop && !pop.hidden) {
        requestAnimationFrame(function () {
          placePopover(open, pop);
        });
      }
    }
  });

  function syncReadingLevel() {
    if (typeof window.applyReadingLevel === "function") {
      var level = typeof window.getReadingLevel === "function" ? window.getReadingLevel() : "standard";
      window.applyReadingLevel(level, false);
    }
  }

  function boot() {
    renderResourcesLaw();
    setTimeout(function () {
      enhanceAll();
      syncReadingLevel();
    }, 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
