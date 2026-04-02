export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface Service {
  slug: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroTagline: string;
  heroImage: string;
  intro: string;
  includes: string[];
  process: { step: string; title: string; description: string }[];
  costFactors: { factor: string; detail: string }[];
  faqs: ServiceFAQ[];
  gallery: GalleryImage[];
  relatedSlugs: string[];
}

const services: Service[] = [
  {
    slug: "kitchen-renovation-calgary",
    shortTitle: "Kitchen Renovation",
    title: "Kitchen Renovation Calgary",
    metaTitle: "Kitchen Renovation Calgary | Licensed Contractor | Statera",
    metaDescription:
      "Expert kitchen renovations in Calgary by Statera Contracting. Custom cabinetry, countertops & full gut renovations. 20+ yrs experience. Licensed & insured. Free quote.",
    heroHeadline: "Kitchen Renovation Calgary",
    heroTagline:
      "Transform the heart of your home with Calgary's trusted renovation experts. Custom cabinetry, premium countertops, and complete kitchen transformations — built to last a lifetime.",
    heroImage: "/images/kitchens/DSC_9938 (1).jpg",
    intro:
      "A kitchen renovation is one of the highest-return investments you can make in a Calgary home. Whether you're looking for a cosmetic refresh, a functional layout overhaul, or a complete gut renovation, Statera Contracting brings 20+ years of expertise to every project. We manage everything from design and permits through to the final coat of paint — so you don't have to coordinate a dozen different trades.",
    includes: [
      "Custom and semi-custom cabinetry installation",
      "Countertop supply and installation (quartz, granite, butcher block)",
      "Kitchen island design and build",
      "Backsplash tile supply and installation",
      "Appliance hookup and coordination",
      "Under-cabinet and pot lighting",
      "Plumbing rough-in and finish (sink, dishwasher, fridge water line)",
      "Electrical upgrades and panel coordination",
      "Flooring installation (hardwood, tile, LVP)",
      "Drywall, painting, and trim",
      "Design, drawings, and permit application",
      "Project management start to finish",
    ],
    process: [
      {
        step: "01",
        title: "Free Consultation",
        description:
          "We visit your home, assess the space, discuss your vision and budget, and answer every question you have. No obligation.",
      },
      {
        step: "02",
        title: "Design & Quote",
        description:
          "We produce detailed drawings, a material specification list, and a transparent fixed-price quote — no hidden costs.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Our skilled tradespeople execute the project on schedule, with daily communication and zero surprises.",
      },
      {
        step: "04",
        title: "Final Walkthrough",
        description:
          "We do a detailed walkthrough with you, address any punch-list items, and hand over a clean, stunning kitchen.",
      },
    ],
    costFactors: [
      {
        factor: "Kitchen size",
        detail:
          "A galley kitchen and a large open-concept kitchen have very different material and labour requirements.",
      },
      {
        factor: "Cabinet quality",
        detail:
          "Stock, semi-custom, and fully custom cabinetry span a wide price range — we help you find the right balance.",
      },
      {
        factor: "Countertop material",
        detail:
          "Laminate is the most affordable; quartz and granite are mid-range; waterfall marble edges are premium.",
      },
      {
        factor: "Structural changes",
        detail:
          "Moving walls, relocating plumbing, or upgrading your electrical panel adds cost but can dramatically improve the space.",
      },
      {
        factor: "Appliances",
        detail:
          "We can coordinate appliance supply or work with what you select — either way, we handle all hookups.",
      },
    ],
    faqs: [
      {
        q: "How much does a kitchen renovation cost in Calgary?",
        a: "Most kitchen renovations in Calgary range from $20,000 to $80,000+, depending on size, finishes, and structural changes. A basic cosmetic refresh starts around $15,000–$20,000, a mid-range renovation is typically $30,000–$50,000, and a full custom renovation can exceed $80,000. We provide a detailed fixed-price quote after your free consultation.",
      },
      {
        q: "How long does a kitchen renovation take?",
        a: "A typical Calgary kitchen renovation takes 4–10 weeks from demolition to completion. Smaller cosmetic updates (cabinets, countertops, backsplash) can be done in 3–4 weeks. Full gut renovations involving structural changes and custom cabinetry take 8–12 weeks. We provide a firm timeline in your quote.",
      },
      {
        q: "Do I need a permit for a kitchen renovation in Calgary?",
        a: "Permits are required in Calgary when you move walls, relocate plumbing, or make electrical upgrades. Cosmetic changes (new cabinets over existing layout, countertops, tile) typically don't require a permit. Statera handles all permit applications as part of our project management — you don't need to deal with the City.",
      },
      {
        q: "Can I live in my home during the kitchen renovation?",
        a: "Yes, most clients stay in their home during a kitchen renovation. We set up a temporary kitchen area (microwave, coffee maker, mini fridge), keep the construction zone contained, and clean up each day. For large gut renovations, some clients choose to stay with family for the heaviest demo week.",
      },
      {
        q: "Do you handle the full project or just certain trades?",
        a: "Statera manages the complete renovation — we are a single point of contact for design, permits, demo, framing, electrical, plumbing, cabinetry, tile, flooring, painting, and final trim. You don't need to hire or coordinate any other trades.",
      },
    ],
    gallery: [
      { src: "/images/kitchens/12_140_Cannington_Pl_SW_12_mls.jpg", alt: "Kitchen renovation Calgary — Cannington Place", label: "Cannington Place — Kitchen Transformation" },
      { src: "/images/kitchens/14-web-or-mls-_MG_0029_1.jpg", alt: "Modern kitchen renovation Calgary", label: "Modern Kitchen — Full Renovation" },
      { src: "/images/kitchens/Copy of 03_127_Hidden_Spring_Mews_NW3.jpg", alt: "Kitchen renovation Hidden Spring Mews Calgary", label: "Hidden Spring Mews — Kitchen Remodel" },
      { src: "/images/kitchens/Copy of 13_63_Brantford_Cres_13_mls (1).jpg", alt: "Kitchen renovation Brantford Crescent Calgary", label: "Brantford Crescent — Custom Kitchen" },
      { src: "/images/kitchens/DSC_1497.jpg", alt: "Calgary kitchen renovation with custom cabinetry", label: "Custom Cabinetry & Countertops" },
      { src: "/images/kitchens/DSC_9938 (1).jpg", alt: "Contemporary kitchen renovation Calgary", label: "Contemporary Kitchen — Complete Build" },
      { src: "/images/kitchens/IMG_1867.jpg", alt: "Kitchen renovation Calgary — modern finishes", label: "Modern Finishes — Kitchen Renovation" },
      { src: "/images/kitchens/c1-2.JPG", alt: "Calgary kitchen renovation project", label: "Full Kitchen Renovation" },
    ],
    relatedSlugs: [
      "bathroom-renovation-calgary",
      "basement-living-spaces-calgary",
      "commercial-renovation-calgary",
    ],
  },
  {
    slug: "bathroom-renovation-calgary",
    shortTitle: "Bathroom Renovation",
    title: "Bathroom Renovation Calgary",
    metaTitle: "Bathroom Renovation Calgary | Licensed Contractor | Statera",
    metaDescription:
      "Transform your Calgary bathroom with Statera Contracting. Spa-inspired designs, expert tile work, plumbing & electrical. 20+ yrs experience. Free consultation.",
    heroHeadline: "Bathroom Renovation Calgary",
    heroTagline:
      "From powder room refreshes to full spa-inspired master ensuites, Statera Contracting delivers bathroom renovations that combine beautiful design with lasting quality.",
    heroImage: "/images/bathrooms/DSC_6625.jpg",
    intro:
      "A well-executed bathroom renovation adds immediate value to your Calgary home and transforms one of the most-used rooms in your house. Statera Contracting handles every element of your bathroom project — from demolition and waterproofing through to the final fixture installation. We specialize in both functional refreshes and complete spa-style transformations, always with the attention to detail that your space deserves.",
    includes: [
      "Full demolition and waste removal",
      "Waterproofing and moisture barrier installation",
      "Custom tile shower and tub surrounds",
      "Vanity supply and installation (single and double)",
      "Custom built-in storage and shelving",
      "Freestanding and built-in tub installation",
      "Shower glass and frameless door installation",
      "Plumbing rough-in and finish (toilet, sink, shower, tub)",
      "In-floor heating installation",
      "Exhaust fan installation and venting",
      "Lighting design and installation",
      "Flooring (tile, heated tile, luxury vinyl)",
      "Drywall, painting, and trim",
      "Design, drawings, and permit application",
    ],
    process: [
      {
        step: "01",
        title: "Free Consultation",
        description:
          "We assess your bathroom, discuss your style, functionality goals, and budget — and walk you through realistic options.",
      },
      {
        step: "02",
        title: "Design & Quote",
        description:
          "We produce a detailed design with material selections, fixture choices, and a transparent fixed-price quote.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Demolition to tile work to plumbing finish — our skilled team executes your renovation efficiently and cleanly.",
      },
      {
        step: "04",
        title: "Final Reveal",
        description:
          "We walk through every detail with you, confirm everything meets the standard we promised, and leave you with a spotless new bathroom.",
      },
    ],
    costFactors: [
      {
        factor: "Bathroom size",
        detail:
          "Powder rooms, standard bathrooms, and master ensuites have different material volumes and labour hours.",
      },
      {
        factor: "Tile selection",
        detail:
          "Large-format porcelain, natural stone, and handmade tiles vary significantly in cost and installation complexity.",
      },
      {
        factor: "Fixture quality",
        detail:
          "Entry-level, mid-range, and luxury plumbing fixtures from brands like Kohler, Moen, or Hansgrohe span a wide range.",
      },
      {
        factor: "Custom features",
        detail:
          "Steam showers, in-floor heating, freestanding tubs, and custom built-ins add cost but dramatically elevate the space.",
      },
      {
        factor: "Plumbing relocation",
        detail:
          "Moving the toilet, shower, or tub adds plumbing cost but may be essential for the layout you want.",
      },
    ],
    faqs: [
      {
        q: "How much does a bathroom renovation cost in Calgary?",
        a: "Bathroom renovation costs in Calgary range from $8,000 for a basic powder room update to $50,000+ for a full luxury master ensuite. A standard 5-piece bathroom renovation typically costs $15,000–$30,000. We provide a detailed fixed-price quote after a free in-home consultation.",
      },
      {
        q: "How long will my bathroom renovation take?",
        a: "Most bathroom renovations in Calgary take 2–5 weeks from demolition to completion. A powder room can be done in 1–2 weeks. A full master ensuite with custom tile and specialty fixtures typically takes 4–6 weeks. We provide a firm timeline in your quote.",
      },
      {
        q: "Do you handle waterproofing in wet areas?",
        a: "Yes — proper waterproofing is one of the most important (and most overlooked) parts of a bathroom renovation. Statera applies a full waterproofing membrane in all shower and tub surround areas before any tile is installed. This prevents water damage and mould behind your walls.",
      },
      {
        q: "Can you handle both the plumbing and tile work?",
        a: "Yes. Statera is a full-service renovation contractor — we handle plumbing, electrical, tile, carpentry, and painting in-house. You deal with one team and one point of contact from start to finish.",
      },
      {
        q: "Do I need a permit for a bathroom renovation in Calgary?",
        a: "Permits are required in Calgary for plumbing rough-in work, electrical changes, and structural alterations. If you're keeping your fixtures in the same locations and only updating finishes, a permit may not be required. Statera handles all permit applications as part of the project.",
      },
    ],
    gallery: [
      { src: "/images/bathrooms/23_127_Hidden_Spring_Mews_NW23.jpg", alt: "Bathroom renovation Hidden Spring Mews Calgary", label: "Hidden Spring Mews — Bathroom Remodel" },
      { src: "/images/bathrooms/23_63_Brantford_Cres_23_mls (1).jpg", alt: "Bathroom renovation Brantford Crescent Calgary", label: "Brantford Crescent — Bathroom Renovation" },
      { src: "/images/bathrooms/31_140_Cannington_Pl_SW_31_mls (1) (1).jpg", alt: "Bathroom renovation Cannington Place Calgary", label: "Cannington Place — Full Bathroom Build" },
      { src: "/images/bathrooms/DSC_6625.jpg", alt: "Modern bathroom renovation Calgary", label: "Modern Bathroom — Complete Renovation" },
      { src: "/images/bathrooms/DSC_6629.jpg", alt: "Calgary bathroom renovation with custom tile", label: "Custom Tile & Fixtures" },
      { src: "/images/bathrooms/DSC_9962.jpg", alt: "Contemporary bathroom renovation Calgary", label: "Contemporary Bathroom Design" },
      { src: "/images/bathrooms/c2-15 (1).JPG", alt: "Calgary bathroom renovation project", label: "Full Bathroom Transformation" },
      { src: "/images/bathrooms/mm15.JPG", alt: "Bathroom renovation Calgary — modern finishes", label: "Modern Finishes — Bathroom Renovation" },
    ],
    relatedSlugs: [
      "kitchen-renovation-calgary",
      "basement-living-spaces-calgary",
      "commercial-renovation-calgary",
    ],
  },
  {
    slug: "basement-living-spaces-calgary",
    shortTitle: "Basement & Living Spaces",
    title: "Basement & Living Spaces Calgary",
    metaTitle: "Basement & Living Spaces Calgary | Legal Suites & Finishing | Statera",
    metaDescription:
      "Calgary basement development & finishing by Statera Contracting. Legal suites, home theatres, rec rooms. Permits handled. 20+ yrs experience. Free quote.",
    heroHeadline: "Basement & Living Spaces Calgary",
    heroTagline:
      "Unlock the potential beneath your home. Statera Contracting transforms unfinished Calgary basements into legal suites, home offices, recreation rooms, and income-generating spaces.",
    heroImage: "/images/living-spaces/DSC_5276 - Copy.jpg",
    intro:
      "Finishing your basement is one of the highest-value renovation investments in Calgary. A well-built legal basement suite can generate $1,500–$2,500/month in rental income, while a developed recreation or media room dramatically expands your family's living space. Statera Contracting manages every aspect of basement development — from structural framing and egress window installation through to the final coat of paint — including all City of Calgary permits.",
    includes: [
      "Framing (walls, bulkheads, ceiling soffits)",
      "Egress window installation for legal suites",
      "Insulation (batt and spray foam)",
      "Electrical rough-in, panel upgrade, and finish",
      "Plumbing rough-in and finish (bathroom, wet bar, laundry)",
      "In-floor heating (optional)",
      "Drywall, taping, and texture",
      "Bathroom installation (3-piece, 4-piece, or 5-piece)",
      "Kitchen or wet bar installation (for legal suites)",
      "Flooring (LVP, carpet, tile)",
      "Painting, trim, and doors",
      "Fire separation for legal suites (smoke detectors, CO detectors, fire-rated assemblies)",
      "Design, drawings, and City of Calgary permit application",
      "Final inspection coordination",
    ],
    process: [
      {
        step: "01",
        title: "Site Assessment",
        description:
          "We assess your basement dimensions, ceiling height, existing mechanical systems, and your goals to determine what's possible.",
      },
      {
        step: "02",
        title: "Design & Permits",
        description:
          "We produce detailed drawings and handle the City of Calgary permit application — a critical step that many contractors skip.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Framing, mechanical, drywall, flooring, finishes — our team builds to Alberta Building Code and City of Calgary standards.",
      },
      {
        step: "04",
        title: "Inspections & Handover",
        description:
          "We coordinate all City inspections, ensure the project passes first time, and hand over a fully legal, finished space.",
      },
    ],
    costFactors: [
      {
        factor: "Basement size",
        detail:
          "Calgary basements range from 600 sq ft to 1,500+ sq ft. Labour and materials scale with size.",
      },
      {
        factor: "Legal suite vs. recreational",
        detail:
          "Legal suites require egress windows, fire separation, a full kitchen, and separate entrance — adding cost but enabling rental income.",
      },
      {
        factor: "Bathroom inclusion",
        detail:
          "A bathroom adds $10,000–$20,000 depending on size and finishes, but dramatically increases the space's value and functionality.",
      },
      {
        factor: "Ceiling height",
        detail:
          "Low ceilings (under 7 ft) may require underpinning to meet City requirements for a legal suite.",
      },
      {
        factor: "Existing mechanical",
        detail:
          "Furnace room location, existing plumbing stack placement, and electrical panel capacity all affect planning and cost.",
      },
    ],
    faqs: [
      {
        q: "How much does basement development cost in Calgary?",
        a: "Basement finishing in Calgary typically costs $45–$75 per square foot for a standard recreational development, or $65–$100+ per square foot for a legal suite with a full bathroom and kitchen. A 1,000 sq ft basement recreational development typically runs $45,000–$75,000. A legal suite runs $65,000–$100,000+. We provide a detailed fixed-price quote after a free consultation.",
      },
      {
        q: "What is required for a legal basement suite in Calgary?",
        a: "The City of Calgary requires legal suites to have: a separate entrance, minimum ceiling height (6'11\" or 7' depending on zone), egress windows in all bedrooms, a full kitchen with stove and refrigerator hookups, a bathroom, smoke and CO detectors, and fire separation between the suite and the rest of the home. A permit is required. Statera handles all of this.",
      },
      {
        q: "Do I need a permit to finish my basement in Calgary?",
        a: "Yes — a development permit and building permit are required for basement finishing in Calgary, including all electrical, plumbing, and structural work. Unpermitted basement developments can cause major issues when you sell or make an insurance claim. Statera obtains all required permits as part of our project management.",
      },
      {
        q: "How long does basement development take?",
        a: "A standard recreational basement development in Calgary takes 8–14 weeks from permit approval to completion. A legal suite takes 12–18 weeks due to additional inspection stages. We provide a firm timeline in your quote.",
      },
      {
        q: "Can Statera build a basement suite that generates rental income?",
        a: "Yes — building legal basement suites that meet all City of Calgary requirements is one of our specialties. A properly permitted and constructed suite can generate $1,500–$2,500/month in rental income in Calgary's current market, making it one of the highest-ROI home investments available.",
      },
    ],
    gallery: [
      { src: "/images/living-spaces/04_127_Hidden_Spring_Mews_NW4 - Copy.jpg", alt: "Basement living space Hidden Spring Mews Calgary", label: "Hidden Spring Mews — Living Space" },
      { src: "/images/living-spaces/53_140_Cannington_Pl_SW_25 (1)_mls.jpg", alt: "Basement development Cannington Place Calgary", label: "Cannington Place — Basement Development" },
      { src: "/images/living-spaces/Copy of 05_63_Brantford_Cres_5_mls.jpg", alt: "Living space renovation Brantford Crescent Calgary", label: "Brantford Crescent — Living Space" },
      { src: "/images/living-spaces/Copy of 07_63_Brantford_Cres_7_mls.jpg", alt: "Basement renovation Brantford Crescent Calgary", label: "Brantford Crescent — Basement Finish" },
      { src: "/images/living-spaces/Copy of 16_63_Brantford_Cres_16_mls.jpg", alt: "Basement living area Calgary renovation", label: "Brantford Crescent — Recreation Room" },
      { src: "/images/living-spaces/Copy of 18_63_Brantford_Cres_18_mls.jpg", alt: "Calgary basement living space renovation", label: "Brantford Crescent — Complete Finish" },
      { src: "/images/living-spaces/DSC_5276 - Copy.jpg", alt: "Basement development Calgary — modern finish", label: "Modern Basement — Full Development" },
      { src: "/images/living-spaces/c1-1.JPG", alt: "Calgary basement and living space project", label: "Full Basement & Living Space Build" },
    ],
    relatedSlugs: [
      "kitchen-renovation-calgary",
      "bathroom-renovation-calgary",
      "commercial-renovation-calgary",
    ],
  },
  {
    slug: "commercial-renovation-calgary",
    shortTitle: "Commercial Renovation",
    title: "Commercial Renovation Calgary",
    metaTitle: "Commercial Renovation Calgary | Offices, Retail & Restaurants | Statera",
    metaDescription:
      "Commercial renovation in Calgary. Offices, restaurants, retail & tenant improvements. WCB insured, on-time delivery. 20+ yrs experience. Free consultation.",
    heroHeadline: "Commercial Renovation Calgary",
    heroTagline:
      "From downtown office build-outs to restaurant fit-ups and retail renovations, Statera Contracting delivers commercial spaces that impress clients and support your business.",
    heroImage: "/images/commercial/TheStill_Mar8_MichaelTrudeauPhotography_-1.jpg",
    intro:
      "Your commercial space sends a powerful message to every client, customer, and employee who walks through the door. Statera Contracting brings 20+ years of commercial renovation experience to Calgary businesses — from single-tenant office improvements to multi-unit restaurant fit-ups. We understand commercial timelines, occupancy deadlines, and the importance of minimizing business disruption during construction.",
    includes: [
      "Office renovation and build-out",
      "Restaurant and café fit-ups",
      "Retail storefront renovation",
      "Tenant improvements (TI) coordination",
      "Franchise build-outs to brand standards",
      "Partitioning and glass demising walls",
      "Suspended ceiling and grid systems",
      "Commercial electrical and data rough-in",
      "Plumbing for washrooms, kitchens, and bars",
      "HVAC coordination",
      "Commercial flooring (LVT, carpet tile, polished concrete)",
      "Accessible washroom design and construction",
      "Storefront glazing and entry upgrades",
      "Design, drawings, and permit application",
      "Project management and trade coordination",
    ],
    process: [
      {
        step: "01",
        title: "Discovery Meeting",
        description:
          "We review your lease drawings, discuss brand standards, business requirements, and occupancy deadlines.",
      },
      {
        step: "02",
        title: "Design & Permits",
        description:
          "We produce permit-ready drawings, handle all City of Calgary commercial permit applications, and confirm the fixed-price budget.",
      },
      {
        step: "03",
        title: "Construction",
        description:
          "We execute the project efficiently, coordinating all trades in sequence to meet your occupancy deadline.",
      },
      {
        step: "04",
        title: "Occupancy Ready",
        description:
          "We obtain all required occupancy certificates, complete a full deficiency walk, and hand over a move-in ready space.",
      },
    ],
    costFactors: [
      {
        factor: "Space size",
        detail:
          "Commercial renovations are commonly priced per square foot. 1,000 sq ft and 10,000 sq ft projects have very different economics.",
      },
      {
        factor: "Finish level",
        detail:
          "Basic office TIs, mid-range retail fit-ups, and high-end restaurant builds have very different material and labour requirements.",
      },
      {
        factor: "Existing conditions",
        detail:
          "Shell space, second-generation space, and existing build-outs require different amounts of demolition and new construction.",
      },
      {
        factor: "Commercial kitchen",
        detail:
          "Restaurant and café projects involving commercial kitchens, ventilation hoods, and grease traps are among the most complex.",
      },
      {
        factor: "Timeline pressure",
        detail:
          "Accelerated timelines (e.g., tied to lease start dates) may require additional crew or extended hours.",
      },
    ],
    faqs: [
      {
        q: "Do you handle commercial permit applications in Calgary?",
        a: "Yes. Statera manages all commercial permit applications with the City of Calgary, including development permits, building permits, and occupancy certificates. This is especially important for restaurant fit-ups, which require additional fire and health authority approvals.",
      },
      {
        q: "Can you work on an occupied commercial building?",
        a: "Yes — we regularly perform tenant improvements and renovations in occupied buildings. We establish clear hoarding and access protocols, work in phases to minimize disruption, and schedule noisy or dusty work outside of business hours when required.",
      },
      {
        q: "Do you do restaurant renovations in Calgary?",
        a: "Yes. Restaurant fit-ups are one of our specialties. We handle commercial kitchen design coordination, ventilation hood installation, plumbing for multiple service points, accessible washroom construction, and all front-of-house finishing work. We're familiar with Alberta Health Services (AHS) inspection requirements.",
      },
      {
        q: "How long does a commercial renovation take in Calgary?",
        a: "Timeline depends heavily on the scope and size. A small office tenant improvement (2,000 sq ft) typically takes 6–10 weeks. A restaurant fit-up or large retail renovation takes 10–20 weeks. We provide a detailed schedule with milestones tied to your occupancy deadline.",
      },
      {
        q: "Are you WCB insured for commercial work?",
        a: "Yes. Statera Contracting is WCB (Workers' Compensation Board) insured, fully licensed, and carries comprehensive general liability insurance. We provide certificates of insurance for all commercial projects as required by property managers and landlords.",
      },
    ],
    gallery: [
      { src: "/images/commercial/SPDD-2748-2.jpg", alt: "Commercial renovation Calgary — modern interior", label: "Commercial Interior — Modern Build-Out" },
      { src: "/images/commercial/SPDD-2856-2.jpg", alt: "Commercial space renovation Calgary", label: "Commercial Space — Full Renovation" },
      { src: "/images/commercial/TheStill_Mar8_MichaelTrudeauPhotography_-1.jpg", alt: "The Still Calgary — restaurant renovation", label: "The Still — Restaurant Build-Out" },
      { src: "/images/commercial/TheStill_Mar8_MichaelTrudeauPhotography_-2.jpg", alt: "The Still Calgary — commercial interior", label: "The Still — Interior Design" },
      { src: "/images/commercial/TheStill_Mar8_MichaelTrudeauPhotography_-6.jpg", alt: "The Still Calgary — bar and dining area", label: "The Still — Bar & Dining Area" },
      { src: "/images/commercial/Untitled design.png", alt: "Commercial renovation Calgary project", label: "Commercial Renovation Project" },
      { src: "/images/commercial/facebook_1669405734404_7001995149437663920.jpg", alt: "Calgary commercial renovation — completed project", label: "Commercial Project — Completed Build" },
      { src: "/images/commercial/office.png", alt: "Office renovation Calgary", label: "Office Renovation — Modern Workspace" },
    ],
    relatedSlugs: [
      "kitchen-renovation-calgary",
      "bathroom-renovation-calgary",
      "basement-living-spaces-calgary",
    ],
  },
];

export default services;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);
}
