// Blog post data source.
//
// Each post is a typed object with structured content blocks. The blog index
// page and the dynamic [slug] page both read from the `posts` array below.
// Add new posts by appending to the array.

export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; style: "bullet" | "number"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "cta"; heading: string; body: string; href: string; label: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  coverImage: string;
  coverAlt: string;
  category: string;
  readingTime: string;
  metaTitle?: string;
  metaDescription: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "home-renovations-calgary-2026-roadmap",
    title: "Planning Home Renovations in Calgary: A 2026 Owner’s Roadmap",
    excerpt:
      "How to plan home renovations in Calgary in 2026: real budgets, permits, trade sequencing, and how to avoid the mistakes that blow up timelines.",
    date: "2026-05-18",
    author: "Patrick Ballard",
    coverImage: "/images/living-spaces/04_127_Hidden_Spring_Mews_NW4 - Copy.jpg",
    coverAlt:
      "Renovated Calgary living room at Hidden Spring Mews with double-height windows, vaulted ceiling, wide-plank wood floors, and a bright open-concept layout.",
    category: "Home Renovations",
    readingTime: "5 min read",
    metaTitle: "Home Renovations Calgary 2026 Owner’s Roadmap | Statera",
    metaDescription:
      "How to plan home renovations in Calgary in 2026: budgets, permits, trade sequencing, and avoiding the common mistakes. Statera Contracting.",
    content: [
      { type: "heading", level: 2, text: "Start With the House You Have, Not the One You Want" },
      {
        type: "paragraph",
        text:
          "Calgary housing stock is a mix of postwar bungalows, eighties walkout splits, nineties suburban two-storeys, and the newer infills going up in Bridgeland, Killarney, and Marda Loop. Each one comes with its own set of bones and its own set of constraints. Before you sketch the dream layout, walk the home with a clear eye for what is fixed. Load-bearing walls, foundation lines, the location of the main electrical panel, and the way the gas line enters the house all have a vote in what the renovation can become and how much it will cost.",
      },
      {
        type: "paragraph",
        text:
          "We start every renovation conversation with a measure-up and a structural review, even if the project is just one room. A new kitchen that opens to the living room sounds simple until the wall in the middle is carrying the second floor. A basement suite plan looks great on paper until the soffit hides a rerouted heating duct and the ceiling drops to six and a half feet. None of these are deal breakers, but they belong in the conversation on day one, not week three.",
      },
      { type: "heading", level: 2, text: "Set a Real Budget Before You Pick Finishes" },
      {
        type: "paragraph",
        text:
          "The single biggest mistake we see Calgary homeowners make is choosing finishes before locking down a budget. Tile selections lead to vanity selections lead to lighting selections, and a month later the spreadsheet is forty percent over what you set out to spend. The cleaner approach is to define a target spend and a hard ceiling, then work the design and the finish package backward into those numbers.",
      },
      {
        type: "paragraph",
        text:
          "A useful rule of thumb for Calgary homes in 2026 is roughly two hundred and fifty to four hundred and fifty dollars per square foot for a full main floor renovation, depending on whether the kitchen and bathrooms are touched. Whole-home renos that include a primary bath, a kitchen, flooring, and paint typically run between one hundred and seventy and two hundred and fifty thousand for an average detached home. These ranges are a starting point, not a quote. A real number comes from a measured drawing and a written scope, which is something we provide before any deposit changes hands.",
      },
      {
        type: "paragraph",
        text:
          "Build a contingency line of ten to fifteen percent into the budget and protect it. Hidden conditions in older Calgary homes show up most often in three places. Knob-and-tube or aluminum wiring in homes built before 1975. Drain lines that have settled or developed bellies, common in 1960s and 1970s builds. Mould or asbestos in finishes from before 1990. Each one is solvable but each one needs a real solution rather than a band-aid.",
      },
      { type: "heading", level: 2, text: "Permits, Trades, and the Order of Operations" },
      {
        type: "paragraph",
        text:
          "Most meaningful Calgary renovations need at least one City permit. Building, electrical, plumbing, and gas are the four categories you will run into. Statera handles the application, the drawings, and the inspections as part of every project so you are not chasing paperwork. The City has improved turnaround times in the last few years, but a complex project should still build a four to six week permit window into the front of the schedule.",
      },
      {
        type: "paragraph",
        text:
          "Trade sequencing matters more than most homeowners realize. Demo first. Framing changes second. Rough-in plumbing and electrical third, in that order so the plumber owns the wall first. Insulation and drywall close out the rough-in stage. Then trim, cabinets, tile, paint, flooring, and final fixtures, roughly in that sequence with overlap. A renovation that flips the order, say tile before plumbing rough-in, is a renovation that either fails inspection or needs to be ripped out and redone.",
      },
      {
        type: "paragraph",
        text:
          "Pick a contractor who runs the schedule and owns the trade list. A general contractor is not just a person with a pickup truck. The job is logistics, communication, payment timing, and quality control across six to ten different trades, plus the homeowner. We run a tight schedule so the kitchen does not sit empty for two weeks waiting on a counter template, and we communicate every change in writing so there is no debate at the end about what was agreed.",
      },
      {
        type: "paragraph",
        text:
          "Home renovations in Calgary are one of the more meaningful investments you will make in your house, and they deserve a clear plan, an honest budget, and a contractor who treats the project like the home you live in.",
      },
      {
        type: "cta",
        heading: "Planning a home renovation this year?",
        body: "Book a no-charge consultation. We'll sit down at your kitchen table and map out what your project actually needs.",
        href: "/contact",
        label: "Get a Free Quote",
      },
    ],
  },
  {
    slug: "bathroom-renovation-calgary-cost-2026",
    title: "What a Bathroom Renovation in Calgary Actually Costs in 2026",
    excerpt:
      "Real Calgary bathroom renovation pricing for 2026, from refresh to full gut, plus what drives the number up or down and where to spend or save.",
    date: "2026-05-11",
    author: "Patrick Ballard",
    coverImage: "/images/bathrooms/31_140_Cannington_Pl_SW_31_mls (1) (1).jpg",
    coverAlt:
      "Calgary bathroom renovation in Cannington Place with white subway tile shower, black-framed glass enclosure, hexagonal mosaic floor, navy vanity, brass fixtures, and wood floating shelves.",
    category: "Bathroom Renovation",
    readingTime: "5 min read",
    metaTitle: "Bathroom Renovation Calgary 2026 Cost Guide | Statera",
    metaDescription:
      "What a bathroom renovation in Calgary really costs in 2026, from refresh to full gut, with timelines and where to spend or save. Statera Contracting.",
    content: [
      { type: "heading", level: 2, text: "Where Calgary Bathroom Costs Land Today" },
      {
        type: "paragraph",
        text:
          "A bathroom renovation in Calgary in 2026 sits in three rough tiers. A refresh, meaning new vanity, tile, paint, and fixtures with the existing layout left alone, runs around twelve to twenty thousand dollars for an average main bathroom. A mid-range remodel that replaces the tub or shower, swaps the tile, and updates plumbing fixtures usually lands between twenty-two and thirty-five thousand. A full gut where walls move, plumbing reroutes, and a custom shower goes in often crosses forty thousand and can climb past sixty for an ensuite with a freestanding tub and double vanity.",
      },
      {
        type: "paragraph",
        text:
          "Those numbers shift based on three things. The first is the building. A 1970s house in Lake Bonavista has different plumbing realities than a six-year-old build in Mahogany. The second is finish level. A heated tile floor with a curbless shower is a different scope than a builder-grade vanity swap. The third is permits. Any time you move plumbing or a wall, the City of Calgary wants drawings and an inspection, and that adds time and a small line on the budget. None of these are reasons to skip the renovation, they are reasons to plan it properly.",
      },
      { type: "heading", level: 2, text: "What Drives the Number Up or Down" },
      {
        type: "paragraph",
        text:
          "Tile is usually the biggest single line on a Calgary bathroom budget after labour. Standard porcelain runs about four to eight dollars a square foot at most local suppliers. Imported large-format tile or natural stone can triple that quickly, and the install labour rises with it because the cuts are slower and the layout has to be precise. If your goal is a calm spa look without the spa price, mid-priced porcelain with a good grout match looks excellent and survives a long Calgary winter of boots and snow.",
      },
      {
        type: "paragraph",
        text:
          "Plumbing relocations are the next big swing. Moving a toilet six feet across the room sounds small but means cutting concrete in a basement bathroom or pulling subfloor and joists upstairs. That work is real and worth doing if the layout is wrong, but it is the kind of decision that should be made on day one of design, not three weeks into demo. We sit down with our clients before any walls open and walk through which moves are worth the cost and which are not.",
      },
      {
        type: "paragraph",
        text:
          "Fixtures are the area where most homeowners can save without losing quality. A reliable toilet from Toto or American Standard runs four to six hundred dollars and lasts decades. A shower system from Riobel or Moen in the mid range performs as well as a higher-end import for daily use. The places to spend a little more are the items you touch every day, the faucets and the shower handle, where the difference in build quality is felt every morning.",
      },
      { type: "heading", level: 2, text: "Timeline From First Call to Final Caulk" },
      {
        type: "paragraph",
        text:
          "A typical Statera bathroom renovation runs three to six weeks on site once we start demo. Before that there is usually two to four weeks of design, ordering, and permitting. Tile and vanities sometimes have a longer lead time, especially anything semi-custom, so we order early and stage the materials in our shop before the crew shows up at your house. That keeps the project moving and avoids the dead week where everyone is waiting on a backordered shower base.",
      },
      {
        type: "paragraph",
        text:
          "Calgary inspections add a known step but rarely a long one. A rough-in plumbing inspection happens after the new lines are in and before the wall closes up. An electrical inspection follows the wiring rough-in. A final inspection wraps the project. We book those windows ahead and sequence the trades around them so nothing sits idle. Communication is daily. You get a short check-in by message most evenings during demo and rough-in so the project never feels like it is happening behind a curtain.",
      },
      {
        type: "paragraph",
        text:
          "If you are weighing whether to tackle a bathroom this summer or wait until fall, summer is typically the better window. Trades have steadier weather for moving materials in and out, and the bathroom is one of the rooms you can leave for a long weekend without disrupting the family if a critical step needs uninterrupted time. Most of our June and July bookings fill by mid-May, which is one more reason to start the conversation now.",
      },
      {
        type: "cta",
        heading: "Ready to plan your bathroom renovation?",
        body: "Book a free in-home walkthrough and we'll give you a clear scope, a real price, and a timeline that fits your summer.",
        href: "/contact",
        label: "Get a Free Quote",
      },
    ],
  },
  {
    slug: "planning-kitchen-renovation-calgary",
    title: "Planning a Kitchen Renovation in Calgary",
    excerpt:
      "How a Calgary kitchen reno really starts: layout before finishes, realistic budget ranges, and walking into construction with zero surprises.",
    date: "2026-05-01",
    author: "Patrick Ballard",
    coverImage: "/images/kitchens/14-web-or-mls-_MG_0029_1.jpg",
    coverAlt:
      "Bright white Calgary kitchen renovation with herringbone backsplash, calacatta quartz countertops, brushed brass hardware, double wall oven, and floating wood shelves.",
    category: "Kitchen Renovation",
    readingTime: "3 min read",
    metaTitle: "Planning a Kitchen Renovation in Calgary | Statera Tips",
    metaDescription:
      "How to plan a kitchen renovation in Calgary: layout decisions, realistic budget ranges, and what to know before you sign anything. By Patrick Ballard.",
    content: [
      {
        type: "paragraph",
        text:
          "A kitchen renovation in Calgary usually starts the same way: you get tired of the layout, the cabinets feel dated, or the appliances finally give out. From there, the first real step is not picking finishes. It is figuring out how your family actually uses the room.",
      },
      {
        type: "heading",
        level: 2,
        text: "Start With How You Use the Room",
      },
      {
        type: "paragraph",
        text:
          "Before Statera touches a single cabinet door, we spend time with clients in their existing kitchen, talking through the pinch points. Maybe the fridge blocks the pantry, or the island cuts off traffic between the back door and the dining room. In a lot of Calgary homes built before 2005, the kitchen was boxed off from the living space, and opening that up is often the single change that makes the whole home feel bigger.",
      },
      {
        type: "heading",
        level: 2,
        text: "What a Kitchen Renovation Costs in Calgary",
      },
      {
        type: "paragraph",
        text:
          "Once the layout is clear, we price it. A straightforward refresh with new cabinets, counters, and appliances in a standard galley kitchen can start around the mid twenties. A full gut renovation with a new island, wall removal, custom cabinetry, and upgraded electrical often lands in the sixty to ninety thousand range, and higher end builds in neighbourhoods like Britannia, Elbow Park, or Aspen can go well past that.",
      },
      {
        type: "heading",
        level: 2,
        text: "No Surprises Before You Sign",
      },
      {
        type: "paragraph",
        text:
          "The point of the planning phase is that you walk into construction with no surprises. A good Calgary contractor will have every allowance and line item written down before you sign anything.",
      },
      {
        type: "cta",
        heading: "Thinking about a kitchen renovation?",
        body: "Book a free, no-obligation consultation with Patrick and the Statera team to walk through your space and budget.",
        href: "/contact",
        label: "Get a Free Quote",
      },
    ],
  },
  {
    slug: "many-ways-to-skin-a-reno",
    title: "The Many Ways to \u201cSkin a Reno\u201d",
    excerpt:
      "Budget versus vision, smart trade-offs, and a homeowner prep checklist. Patrick Ballard on how to get the renovation you want at any budget.",
    date: "2026-04-20",
    author: "Patrick Ballard",
    coverImage: "/images/kitchens/Copy of 13_63_Brantford_Cres_13_mls (1).jpg",
    coverAlt:
      "Bright white Calgary kitchen renovation with navy island, quartz countertops, glass pendant lights, and stainless appliances.",
    category: "Renovation Planning",
    readingTime: "5 min read",
    metaTitle: "The Many Ways to Skin a Reno | Calgary Renovation Tips",
    metaDescription:
      "Patrick Ballard on budget vs. vision, smart trade-offs, and a homeowner prep checklist for getting the renovation you want at any budget in Calgary.",
    content: [
      {
        type: "paragraph",
        text:
          "I just can\u2019t say cat, it just sounds wrong. We\u2019ve all heard the renovation horror stories: budgets that double overnight, projects that stall for months, and homeowners left with a result they didn\u2019t actually want. But after years of flipping houses and managing complex renovations, I\u2019ve realized it doesn\u2019t have to be that way. There truly are \u201cmany ways to skin a reno.\u201d Whether you have a $15,000 budget or $500,000, you can get the renovation of your dreams. The secret isn\u2019t just the money you spend; it\u2019s the clarity you bring to the table and the creative solutions you\u2019re willing to explore.",
      },
      { type: "heading", level: 2, text: "The Budget vs. The Vision" },
      {
        type: "paragraph",
        text:
          "In this industry, you can have anything you want if you\u2019re willing to put out the money to get it exactly right every single time. That is a great way to do a reno. But the real \u201ctrick\u201d isn\u2019t just having money. It\u2019s knowing your numbers and your goals before the first hammer swings.",
      },
      {
        type: "paragraph",
        text:
          "If you have a clear vision and a firm grasp on your budget, you will get what you want. The friction usually happens when those two things don\u2019t align. We are here to help guide you through the process, but there is some stuff you can do on your own.",
      },
      { type: "heading", level: 2, text: "Flexibility is Your Greatest Asset" },
      {
        type: "paragraph",
        text:
          "Let\u2019s say you\u2019re dying to redo your kitchen but your budget is capped at $20,000. In the old days, you\u2019d just guess what that buys you. Today, you have an edge. I tell people to jump on AI or design software to see what a $20k kitchen actually looks like. Find the materials, the layouts, and the \u201chacks\u201d that fit that price point first.",
      },
      {
        type: "paragraph",
        text: "Once you have that data, take it to us to review.",
      },
      {
        type: "heading",
        level: 2,
        text: "Creative Solutions: High Impact, Smart Spending",
      },
      {
        type: "paragraph",
        text:
          "When budget is tight, \u201cskinning the reno\u201d means prioritizing high-impact visual changes over structural ones:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Cabinet Refresh: Instead of a full replacement, try painting existing cabinets and adding modern hardware like matte black or brushed brass pulls.",
          "Alternative Surfaces: Use high-quality laminate or quartz that mimics natural stone for countertops.",
          "Lighting Magic: Swapping outdated fixtures for LED pendants or under-cabinet strips can instantly make a space feel larger and more modern.",
          "Focal Point Strategy: Spend on one \u201csplurge\u201d item, like a stunning backsplash or a high-end faucet, while saving on simpler tiles elsewhere.",
          "Paint: one of the lowest cost, highest impact parts of a reno.",
        ],
      },
      { type: "heading", level: 2, text: "Homeowner Preparation Checklist" },
      {
        type: "paragraph",
        text:
          "Before you engage a contractor, use this checklist to ensure you\u2019re ready to \u201cskin\u201d your reno effectively:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Identify \u201cMust-Haves\u201d vs. \u201cWants\u201d: What are the non-negotiables you won\u2019t compromise on?",
          "Set a Hard Budget (with a Buffer): Determine your max spend and set aside a 10 to 20% contingency for unexpected issues.",
          "Define Your Intent: Are you renovating for personal comfort, or to increase resale value?",
          "Gather Visual Evidence: Save photos or AI-generated designs that reflect your style and fit your price range.",
          "Check the \u201cBones\u201d: Know the age of your home and identify potential issues like old plumbing or electrical before you start the cosmetic work.",
        ],
      },
      { type: "heading", level: 2, text: "Engaging Your Contractor" },
      {
        type: "paragraph",
        text:
          "We are far more flexible than people give credit for, if you\u2019re transparent. If you come to me and say, \u201cHere is my budget, and here is my intent,\u201d we can make magic happen.",
      },
      {
        type: "paragraph",
        text:
          "We can do almost anything on any budget, but it requires a \u201cslightly different solution\u201d than what you might have originally imagined. Maybe it\u2019s refinishing a tub instead of replacing it, or keeping the existing plumbing footprint to save thousands in labor.",
      },
      { type: "heading", level: 2, text: "Conclusion" },
      {
        type: "paragraph",
        text:
          "At the end of the day, a successful renovation is a partnership between your vision and your contractor\u2019s expertise. By staying flexible, being transparent, and focusing on your core intentions, you can overcome almost any budget hurdle. Remember: there isn\u2019t just one way to build a beautiful home. If you\u2019re willing to be creative, you\u2019ll find there are many ways to skin a reno, and you might just find that the \u201calternative\u201d solution is the one you end up loving the most.",
      },
      {
        type: "cta",
        heading: "Ready to plan your renovation?",
        body: "Book a free, no-obligation consultation with Patrick and the Statera team.",
        href: "/contact",
        label: "Get a Free Quote",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
