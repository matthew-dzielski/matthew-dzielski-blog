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
  },
  "article-5": {
    tag: "Market update",
    color: "#8E5AA8",
    title: "Homes Are Sitting Longer in NWI \u2014 And That\u2019s Not the Bad News You Think",
    body: [
      "<p>I keep hearing the same worry from people thinking about buying: \u201cShould I just wait?\u201d</p>",
      "<p>Fair question. Let me give you the September numbers and you tell me.</p>",
      "<p>Porter County just closed September with a median sold price of $364,953. That\u2019s up 5.8% from last year. Listing prices are at $413,030. In Valparaiso, sold homes hit a median of $415,500 \u2014 up 28.6% from this time last year. And here\u2019s the number I actually want you to pay attention to: homes sat an average of 53 days on the market. That\u2019s 18% longer than a year ago.</p>",
      "<p>Meanwhile, mortgage rates crossed 7% in September. So money\u2019s expensive, prices are up, and homes are sitting. Sounds terrible, right?</p>",
      "<h3>We\u2019re not in a falling market. We\u2019re in a thinking market.</h3>",
      "<p>Sellers who price at the number they saw in spring headlines are watching their listing collect days on market. Sellers who price to the last 90 days of actual sold comps are moving homes. The difference between a 53-day sale and a 15-day sale around Highland, Munster, and Hammond right now is almost never the house \u2014 it\u2019s the price tag.</p>",
      "<h3>For buyers, 53 days is a gift</h3>",
      "<p>This is the part nobody says out loud. You get a second showing without losing the house. You can negotiate repairs. You can ask for seller concessions \u2014 closing cost credits that were fantasy during the bidding-war years. The Indiana Association of Realtors\u2019 midyear report showed NWI moving 3,797 homes in the first half of the year, up 2% from last year. The buyers are still buying. They\u2019re just buying smarter.</p>",
      "<h3>My honest takeaway</h3>",
      "<p>If you\u2019re buying in Northwest Indiana this fall: get pre-approved now, while competition is thin, and don\u2019t be shy about making the offer. A reasonable offer on a home that\u2019s been sitting 50 days is not an insult \u2014 it\u2019s a conversation. And if you\u2019re selling: price to where homes are actually closing today, not where your neighbor\u2019s house sold in May. The first 14 days determine everything.</p>",
      "<p>The fall market has always been the grown-up\u2019s market around here. Fewer lookers, more serious movers. Nothing about these numbers tells me to panic \u2014 and nothing tells me to sit out, either.</p>",
      SIGNOFF
    ]
  },
  "article-6": {
    tag: "Buying",
    color: "#E07A2E",
    title: "Indiana Will Help Pay Your Down Payment. Most First-Time Buyers Have No Idea.",
    body: [
      "<p>Ask a renter in Northwest Indiana what\u2019s stopping them from buying, and you won\u2019t hear about interest rates first. You\u2019ll hear about the down payment.</p>",
      "<p>The math is honest. Around here the median home runs about $277,000. A 3.5% FHA down payment on that is roughly $9,700 \u2014 and that\u2019s before closing costs. Saving that while paying rent is brutal. I get why people assume ownership is years away.</p>",
      "<p>But Indiana has programs built exactly for this, and most first-time buyers I talk to have never heard of them. So here\u2019s the plain-English version.</p>",
      "<h3>Up to 6% of the purchase price \u2014 with no monthly payment</h3>",
      "<p>The Indiana Housing and Community Development Authority \u2014 IHCDA, the state\u2019s housing agency \u2014 offers down payment assistance in all 92 counties, including ours. The main program, First Step, covers up to 6% of the purchase price. It\u2019s structured as a second mortgage with zero interest and no monthly payments, and it\u2019s forgiven over time if you stay in the home. On that $277,000 house, 6% is over $16,000 \u2014 more than the entire FHA down payment.</p>",
      "<h3>Buying again? There\u2019s a program for that too</h3>",
      "<p>Next Home offers 2.5% to 3.5% in assistance and is open to people who\u2019ve owned before, with forgiveness after just a few years. There\u2019s also a Mortgage Credit Certificate that shaves up to $2,000 a year off your federal taxes for the life of the loan. And if you\u2019re a first-generation homebuyer, the HomeBoost program offers up to $25,000 as an outright grant \u2014 not a loan, nothing to pay back.</p>",
      "<h3>The fine print</h3>",
      "<p>You have to work with an IHCDA-approved lender \u2014 not every lender qualifies. Income limits run roughly $88,000 to $141,000 depending on your household size and county. You\u2019ll need about a 640 credit score, and you\u2019ll take a homebuyer education course (a few hours, usually online). Programs like these change \u2014 funding rounds open and close, rules get tweaked. A good lender who does these regularly will know what\u2019s live right now. If you want a name, I know people. That\u2019s part of the job.</p>",
      "<p>Here\u2019s the part that bothers me: the Indiana Association of Realtors found that only about one in five renter households statewide earns enough to comfortably buy at $250,000 or more. Some of those households are closer than they think \u2014 they\u2019re just missing the down payment piece, and the state literally has money set aside to fill it.</p>",
      "<p>If you\u2019ve been renting in Highland, Munster, Hammond, Schererville, or anywhere around here and assumed the down payment puts buying five years out \u2014 it might not. Run your numbers against these programs before you decide.</p>",
      "<p>Questions about any of this? Call or text me. This is the stuff I actually like talking about.</p>",
      SIGNOFF
    ]
  },
  "article-7": {
    tag: "Homeowner tips",
    color: "#3E8E5A",
    title: "Someone Could Sell Your House Without You Knowing. Here\u2019s How to Stop It.",
    body: [
      "<p>Let me start with the part that got my attention.</p>",
      "<p>A survey of 245 title professionals, released last month, found that 59% of title companies saw at least one seller impersonation fraud attempt last year. Two years earlier, that number was 28%. It\u2019s more than doubled. And the FBI issued a public warning about it in September.</p>",
      "<h3>Here\u2019s how the scam works</h3>",
      "<p>Criminals search public property records \u2014 which anyone can look at \u2014 and find homes owned free and clear. No mortgage means no lender involved in a sale, which means nobody to flag anything suspicious. Then they forge the documents, invent the identity, and try to sell YOUR house to a buyer who has no idea the seller is fake.</p>",
      "<p>The favorite targets tell you exactly who\u2019s at risk: vacant land first, then properties owned free and clear (the survey said 68% of title firms named those), rental properties, and even primary residences. Sometimes the real owner doesn\u2019t find out for months. Or years. And once it happens, getting your ownership back can take serious time and serious money \u2014 half of the firms that paid a claim on this reported costs over $100,000.</p>",
      "<h3>Why I\u2019m writing about this on a realtor\u2019s blog</h3>",
      "<p>Around here in Northwest Indiana, a lot of people fit the target profile. Retirees in Highland and Munster who paid their house off years ago. Investors holding rental properties in Hammond and Gary. Anyone sitting on vacant land in Hebron or Cedar Lake. The scam doesn\u2019t care what your house is worth. It cares that there\u2019s no lender standing between a forger and your deed.</p>",
      "<h3>Four things you can actually do</h3>",
      "<p>First, if you own vacant land or a property you don\u2019t visit often, drive by it now and then. Some of these scams get caught because a neighbor notices a stranger selling a house they know is occupied or owned by someone else.</p>",
      "<p>Second, check whether your county offers a property fraud alert \u2014 a free notification if anything gets recorded against your property. Lake and Porter counties both have recording offices where you can check what free alert options exist.</p>",
      "<p>Third, look yourself up on the public records once in a while. Verify your name is the one on the deed and nothing\u2019s been recorded that you didn\u2019t sign.</p>",
      "<p>Fourth, if you bought your home without owner\u2019s title insurance \u2014 or you\u2019re not sure \u2014 ask about it. New policy endorsements announced last year specifically cover forgery of a deed or mortgage even after your policy was issued. It used to be something most buyers treated as optional. I\u2019d look at it differently now.</p>",
      "<p>I\u2019ll be honest with you: I\u2019m a Realtor, not a security expert. But I deal with property every day, and protecting your ownership is the same conversation as buying and selling it. If you\u2019re not sure what\u2019s recorded against your place, or you inherited a property and have no idea what\u2019s on the paperwork, that\u2019s worth 20 minutes of your time.</p>",
      "<p>You worked too hard for your equity to lose it to a forged signature.</p>",
      SIGNOFF
    ]
  },
  "article-8": {
    tag: "Market update",
    color: "#8E5AA8",
    title: "500 Jobs Are Coming to Crown Point \u2014 Here\u2019s What That Means for Northwest Indiana Housing",
    body: [
      "<p>Amazon signed a lease a couple of weeks ago for a 1.2 million square foot fulfillment center at Venture Park 65 in Crown Point. It\u2019s right off I-65 with easy access to US 30. The headline number is about 500 jobs.</p>",
      "<p>I get asked all the time whether news like this actually affects home prices. My answer is yes \u2014 but not the way most people think.</p>",
      "<p>It doesn\u2019t make every house in Crown Point worth $20,000 more overnight. What it does is tighten everything underneath the market. Five hundred workers need a place to live. Some will rent. Some will buy. A bunch will bring families, which means more demand for three-bedroom homes in Crown Point, Winfield, Schererville, Merrillville, and Cedar Lake \u2014 the whole ring around that I-65 corridor.</p>",
      "<h3>Here\u2019s what that looks like on the ground</h3>",
      "<p>Rental listings get a little scarcer. Landlords get a little pickier. Starter homes that sat for 45 days start going pending in two weeks. I\u2019ve watched it happen with every big employer move in this area, and it\u2019s boring and predictable: demand goes up, supply doesn\u2019t, and the buyers who were \u201cthinking about it\u201d end up paying more than the ones who moved early.</p>",
      "<p>Amazon\u2019s also building a $100 million robotics manufacturing hub down in Greenwood, with 300 jobs expected to average close to $100,000 a year. Different side of the state, but it tells you something about how Amazon sees Indiana: over $40 billion invested here since 2008, more than 27,000 people employed. This isn\u2019t a one-off. Companies keep betting on this state, and Northwest Indiana keeps catching the spillover.</p>",
      "<h3>So what do you actually do with this information?</h3>",
      "<p>If you\u2019re a buyer: if you\u2019ve been circling Crown Point or anywhere within 15 minutes of Venture Park 65, this is the kind of news that raises the cost of waiting. Get pre-approved, know your number, and be ready to move on a house you like instead of \u201csleeping on it\u201d for a week. The sleeping-on-it window is about to get shorter.</p>",
      "<p>If you\u2019re a seller near that corridor: your buyer pool just grew. That doesn\u2019t mean you can name your price \u2014 overpriced homes still sit, even in a hot spot. But a well-priced, move-in-ready home near new employer demand is about as safe a bet as this market gets.</p>",
      "<p>If you\u2019re a landlord: vacancy risk near Crown Point just went down. You might not need to rush a rent increase, but you can afford to be more selective about tenants, because demand is coming.</p>",
      "<p>My take: Northwest Indiana\u2019s biggest housing advantage has always been that you can still afford a good life here. Every round of job news like this protects that advantage a little less. If you\u2019re on the fence about getting into this market, the fence is getting more expensive to sit on.</p>",
      SIGNOFF
    ]
  },
  "article-9": {
    tag: "Market update",
    color: "#8E5AA8",
    title: "Indiana Is the #1 Housing Market in America. Here\u2019s What That Means in Northwest Indiana.",
    body: [
      "<p>Let me share some news I\u2019m genuinely proud of.</p>",
      "<p>Earlier this year, Realtor.com released its 2026 state report cards on housing \u2014 grading every state on two things: keeping homes within reach of everyday earners, and building enough new homes to meet demand. Indiana went from No. 4 to No. 1 in the country. Top of the class.</p>",
      "<p>And this week, Builder Magazine published its October outlook on our state, and the long-term picture keeps getting stronger. Indiana has attracted roughly $380 billion in manufacturing-related investment \u2014 among the top states nationally. The piece also made a point I\u2019ve been making for a while: compared to most major U.S. metros, Indiana is still genuinely attainable.</p>",
      "<p>Now here\u2019s where it gets local. I don\u2019t need a national report to tell me builders believe in Northwest Indiana \u2014 I can watch it happen at the plan commission.</p>",
      "<p>At the end of September, Crown Point approved PreservePoint phase one: about 214 new single-family homes on 127 acres, with park land, trails, and ponds built in. Same round of approvals included new townhomes on South Main Street, replats in Beacon Hill, and a Fairfield Inn going up at Delaware Parkway. And Lennar \u2014 one of the biggest builders in the country \u2014 is working through annexation of 112 acres in Crown Point for another single-family subdivision, with construction potentially starting soon.</p>",
      "<p>Builders don\u2019t do that on a hunch. They do it because the jobs, the population, and the math all point the same direction.</p>",
      "<p>So what does the #1 ranking actually mean for you, sitting in Highland or Munster or Hammond?</p>",
      "<p>If you\u2019re buying: this is one of the few markets in America where a regular income still buys a real house. New construction coming online in Crown Point also means something we haven\u2019t had much of lately \u2014 options. When there are more homes to choose from, buyers get negotiating room back. That\u2019s a good time to be shopping.</p>",
      "<p>If you\u2019re selling: the #1 ranking is a tailwind \u2014 demand for Indiana is real and growing. But here\u2019s the honest part: new construction near your neighborhood is competition. A well-priced, move-in-ready resale can absolutely beat a new build on value. An overpriced one can\u2019t. The sellers who win in a building boom are the ones who price to where homes are actually closing, not where they wish they were.</p>",
      "<p>One more thing worth saying. The national conversation about housing is mostly doom and gloom \u2014 prices too high, supply too short, young buyers locked out. Indiana is the counterexample. We kept building. We stayed affordable. And Northwest Indiana \u2014 with the lake, the mills, the I-65 corridor, and towns people actually want to live in \u2014 is the best version of that story.</p>",
      "<p>That\u2019s not hype. That\u2019s the data. And I plan to keep saying it.</p>",
      SIGNOFF
    ]
  },
  "article-10": {
    tag: "Market update",
    color: "#8E5AA8",
    title: "First-Time Buyers Aren\u2019t Gone. They Just Got Smarter.",
    body: [
      "<p>The headlines want you to believe first-time buyers are finished. Down to 21% of the market \u2014 the lowest ever recorded, says the National Association of Realtors.</p>",
      "<p>Here\u2019s what the headlines skip: the 21% who are buying figured out a better playbook.</p>",
      "<p>They stopped fighting bidding wars in the obvious towns. They started looking one exit over. They talked to a lender before they fell in love with a house. They shopped the monthly payment instead of panicking over the sticker price. None of it is glamorous. All of it works.</p>",
      "<p>And here\u2019s the part that matters if you live here: Northwest Indiana is one of the last places where that playbook still wins big.</p>",
      "<p>Our median is $277,000. The state association had us as Indiana\u2019s second-busiest market \u2014 3,797 closings, up 2% last year. In one recent week, 210 NWI homes went under contract. Median 24 days on market. Things move here.</p>",
      "<p>The money towns for first-timers: Hobart, Portage, Griffith, Hammond, Highland. That\u2019s where $250K\u2013$300K buys a real house in a real neighborhood \u2014 not a teardown, not a money pit. A house.</p>",
      "<p>I\u2019ll be straight about the squeeze. Most buyers this year were existing homeowners rolling equity. Only one in five Indiana renter households earns enough to buy at $250K with 10% down. And rates just hit 7.49% \u2014 the highest in nearly three years.</p>",
      "<p>But here\u2019s the thing nobody says: people buy in every rate environment. Marriages, babies, job changes, rent hikes \u2014 life doesn\u2019t wait for 5%.</p>",
      "<p>So if you\u2019re renting in NWI and thinking about 2027, here\u2019s the unglamorous move that actually works: call a lender this week. Not when you find the house \u2014 now. Get your real monthly number. Then go look at the towns one exit over from where you started.</p>",
      "<p>The buyers winning right now aren\u2019t waiting for perfect. They\u2019re showing up with a plan.</p>",
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
