// Article content and dialog behavior for Matt Dzielski's blog.
// No dependencies; plain vanilla JS.

var SIGNOFF = '<p class="signoff">&mdash; Matt<br>(219) 356-6565 &middot; matt@bangarealty.com</p>';

var ARTICLES = {
  "article-1": {
    tag: "Buying",
    color: "#E07A2E",
    title: "Before we tour homes, here\u2019s the conversation I want us to have",
    body: [
      "<p>Before we commit to weekends of showings, I like to spend twenty minutes together that can save us months of wandering. This is that conversation.</p>",
      "<h3>Decide what \u2018home\u2019 has to do</h3>",
      "<p>Ask what a day in the new place needs to include \u2014 work, school runs, the people you help care for. Once we know what your routine requires, the search gets narrower and smarter.</p>",
      "<h3>Know your buying range, not just a wish</h3>",
      "<p>Talk with a lender about what you can borrow and what payment feels comfortable, then keep the two apart. I\u2019d rather tour homes that fit your life than homes that stretch it.</p>",
      "<h3>Pick your must-haves and your nice-to-haves</h3>",
      "<p>Write the short list separately. When a house checks every must-have and a few nice-to-haves, we can move quickly \u2014 and I\u2019ll remind you which is which when the excitement kicks in.</p>",
      "<h3>Set your communication ground rules</h3>",
      "<p>Tell me how you want updates \u2014 text, call, email \u2014 and how quickly you\u2019ll reply when a showing window opens. In a moving market, the best home often goes to the clearest communicator.</p>",
      "<h3>Agree on how we\u2019ll decide together</h3>",
      "<p>We can use a simple scorecard or a yes/no list after each tour. It keeps decisions about your home from turning into decisions about my opinion.</p>",
      "<h3>Talk through money beyond the price</h3>",
      "<p>The offer is only the first number. We should cover earnest money, closing costs, taxes, insurance, and what inspections typically cost here before anything is signed.</p>",
      "<h3>Decide what to do when a house is almost right</h3>",
      "<p>Almost-right houses are where buyers get stuck. If we agree in advance on what we\u2019ll do \u2014 move on, offer with a condition, or sleep on it \u2014 the weekend tours stay fun.</p>",
      "<h3>Put it in writing together</h3>",
      "<p>Once we\u2019ve talked it through, I\u2019ll send a short recap so we both remember what we decided. It takes two minutes to write and saves hours of second-guessing.</p>",
      "<p>If you\u2019re planning to buy in Northwest Indiana in the next year, this is the best first step we can take.</p>",
      SIGNOFF
    ]
  },
  "article-2": {
    tag: "Home inspection",
    color: "#2A9DB8",
    title: "What an inspection report is really telling you",
    body: [
      "<p>Inspection reports read like bad news. Every house has one, and most of the news in yours will be ordinary.</p>",
      "<h3>An inspection is a snapshot, not a verdict</h3>",
      "<p>The report lists everything the inspector could see on one day. Some notes are about safety today; most are about maintenance over time. I read it that way with you.</p>",
      "<h3>What actually needs fixing</h3>",
      "<p>We separate the handful of items that affect safety, structure, or water from everything else. Those are the ones I take to the other side.</p>",
      "<h3>What to ask the seller to address</h3>",
      "<p>Not every item belongs in a request. I help you pick the few that are reasonable and defensible, and we leave the cosmetic list for your weekend plans.</p>",
      "<h3>When to bring in a specialist</h3>",
      "<p>If the generalist flags the roof, the electrical panel, or the foundation, we call the right expert before we negotiate. An estimate beats a guess every time.</p>",
      "<h3>What to plan for as a homeowner</h3>",
      "<p>The rest of the report becomes your first maintenance list. Filters, caulk, grading, gutters \u2014 small jobs that keep a good house good.</p>",
      "<h3>When the right move is to walk away</h3>",
      "<p>Sometimes the report tells us the house needs more than you should take on. I\u2019ll tell you when I think that\u2019s the case, even if it costs us the deal.</p>",
      "<p>An inspection should make you more confident about a house, not more afraid of it.</p>",
      SIGNOFF
    ]
  },
  "article-3": {
    tag: "Choosing a town",
    color: "#5AAF6B",
    title: "How I\u2019d help you compare NWI towns without chasing a \u201cbest\u201d one",
    body: [
      "<p>I don\u2019t think there\u2019s one \u2018best\u2019 place to live in Northwest Indiana. Highland, Munster, Hammond, Griffith, Dyer, Schererville, Merrillville, and Crown Point each fit a daily routine differently. I\u2019d rather help you find the place that works for yours.</p>",
      "<h3>Show me your real weekday</h3>",
      "<p>Where do you work? Who do you help care for? Which trips happen every week? We can map those drives and test the route when you\u2019d actually use it \u2014 not just when traffic is light.</p>",
      "<h3>Drive it before you decide</h3>",
      "<p>If I-94, Cline Avenue, or US-30 will be part of your routine, try that trip at the right hour. A route that looks easy on a map may feel different on a Monday morning.</p>",
      "<h3>Compare the whole monthly cost</h3>",
      "<p>The list price is only one line. Put property taxes, insurance, utilities, possible association fees, and expected maintenance next to it. I want you comparing homes on the same honest basis.</p>",
      "<h3>Come back at another time</h3>",
      "<p>A quiet Sunday afternoon won\u2019t show you a weekday evening. Visit again. Notice the traffic, lighting, noise, sidewalks, parking, and how you feel on the route in and out.</p>",
      "<h3>Verify the details that matter</h3>",
      "<p>Check school boundaries with the district, property taxes with the county, flood information with official maps, and development plans with the town or city. I won\u2019t ask you to make an important decision on hearsay.</p>",
      "<h3>Score the same five priorities</h3>",
      "<p>Pick five things that matter to you and rate every area against the same list. It keeps one beautiful kitchen from quietly changing the location decision we worked out together.</p>",
      "<p class=\"fine-print\">Neighborhood information changes. Verify details that matter to your decision with the responsible official source.</p>",
      SIGNOFF
    ]
  },
  "article-4": {
    tag: "Market update",
    color: "#8E5AA8",
    title: "What I\u2019d tell my neighbor about buying in Northwest Indiana with rates back over 7%",
    body: [
      "<p>Indiana\u2019s 30-year mortgage rate is back over 7.3%. It was about 7.3% on October 1st, up about two-tenths of a point in a single week. Back in July, the Indiana Association of Realtors was talking about rates around 6.25%.</p>",
      "<p>So yes \u2014 rates moved. And yes, that changes your monthly payment. On a $277,000 home, which is right around Northwest Indiana\u2019s median price, the difference between 6.25% and 7.3% is roughly $190 a month. That\u2019s real money.</p>",
      "<p>Here\u2019s what I tell people anyway: don\u2019t let the rate talk you out of buying.</p>",
      "<p>Every year I watch buyers sit on the sidelines waiting for some magic number, and every year the houses they liked get bought by somebody who ran the math and decided it worked. The Indiana Association of Realtors found that most of this year\u2019s buyers were already homeowners \u2014 people who sold one place and bought the next, rolling their equity into the move. That\u2019s 3,797 closed sales in Northwest Indiana in the first half of this year, up 2% from last year. The market didn\u2019t stop. It never does here.</p>",
      "<p>The rate isn\u2019t permanent. You can refinance when \u2014 if \u2014 rates come down. But the price you paid is forever, and so is the equity you build while everyone else is waiting.</p>",
      "<p>My one piece of real advice: get pre-approved before you browse a single listing. In a 7.3% market, the difference between \u201cI\u2019m thinking about it\u201d and \u201cI\u2019m pre-approved at X\u201d is the difference between getting the house in Highland or Munster and watching it go pending on Sunday night. Sellers and their agents take pre-approved offers seriously. Casual browsers get passed over.</p>",
      "<p>If you\u2019re selling, the message is different but just as simple: price it right the first time. Buyers today know exactly what your asking price costs them per month. Overprice it and you\u2019ll watch it sit while the well-priced homes \u2014 the ones in that $250k to $750k range \u2014 get snapped up three times faster.</p>",
      "<p>October isn\u2019t a bad time to be in this market. It\u2019s just an honest one.</p>",
      SIGNOFF
    ]
  }
};

(function () {
  var backdrop = document.getElementById("dialog-backdrop");
  var dialogTag = document.getElementById("dialog-tag");
  var dialogTitle = document.getElementById("dialog-title");
  var dialogBody = document.getElementById("dialog-body");
  var closeBtn = document.getElementById("dialog-close");
  var lastFocused = null;

  function openArticle(id) {
    var a = ARTICLES[id];
    if (!a) return;
    lastFocused = document.activeElement;
    dialogTag.textContent = a.tag;
    dialogTag.style.color = a.color;
    dialogTitle.textContent = a.title;
    dialogBody.innerHTML = a.body.join("\n");
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeDialog() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.querySelectorAll(".read-link").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openArticle(btn.getAttribute("data-article"));
    });
  });

  closeBtn.addEventListener("click", closeDialog);

  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) closeDialog();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !backdrop.hidden) closeDialog();
  });

  // Smooth scrolling for anchor links.
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", a.getAttribute("href"));
      }
    });
  });

  // Active nav highlighting on scroll.
  var sections = ["home", "blog", "about", "follow", "contact"];
  var navLinks = document.querySelectorAll(".nav-link");
  function highlight() {
    var current = "home";
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    });
    navLinks.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  }
  document.addEventListener("scroll", highlight, { passive: true });
  highlight();
})();
