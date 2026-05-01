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
