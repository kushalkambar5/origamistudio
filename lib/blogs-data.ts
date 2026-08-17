export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  coverGradient: string;
  tags: string[];
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      keyTakeaway?: string;
      codeOrList?: {
        title?: string;
        items: string[];
      };
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "changepay-app-founders-colleges-user-reviews",
    title: "ChangePay App Breakdown: Founders, Supported Colleges & Honest Student Feedback",
    excerpt:
      "A complete breakdown of ChangePay: what the campus commerce app does, founders Dhyvik GJ, Jeevan M & Chetan Jaydeep, supported colleges like NITK and MIT Manipal, and honest Reddit user reviews.",
    category: "Campus Tech & Startups",
    readTime: "9 min read",
    date: "Aug 17, 2026",
    featured: true,
    coverGradient: "from-orange-600/20 via-[#ff5e00]/10 to-slate-900",
    tags: [
      "ChangePay",
      "Campus Commerce",
      "NITK Surathkal",
      "MIT Manipal",
      "JSSTU Mysuru",
      "SmartBox IoT",
      "Dhyvik GJ",
      "Student Feedback",
      "Hyperlocal Logistics",
    ],
    content: {
      intro:
        "ChangePay is a hyperlocal campus commerce platform built to solve the gate-to-hand delivery bottleneck in Indian universities. Founded out of NITK Surathkal by Dhyvik GJ, Jeevan M, and R Chetan Jaydeep, ChangePay combines a mobile ordering app with SmartBox IoT contactless lockers installed directly outside hostel blocks. Operating across top campuses including NITK Surathkal, MIT Manipal, and JSSTU Mysuru, ChangePay connects students with on-campus canteens, stationery shops, and laundromats. This deep dive examines how ChangePay works, its founding history, supported colleges, open network technology, and raw student feedback from Reddit.",
      sections: [
        {
          heading: "1. What Does ChangePay Do? Hyperlocal Campus Commerce Explained",
          subheading: "Connecting Students, Campus Canteens, and IoT Lockboxes",
          body: [
            "University campuses in India function as self-contained micro-economies with 3,000 to 15,000+ residential students. However, traditional food and delivery ecosystems hit severe operational friction inside hostelled campuses: third-party delivery apps like Swiggy and Zomato are typically barred by security administration from entering hostel gates, forcing students to walk up to 1.5 kilometers to main entrance gates to collect orders.",
            "ChangePay solves this hyper-local logistical friction by creating a closed-loop commerce network tailored specifically for college ecosystems.",
            "Through the ChangePay Android and iOS apps, students can browse menus from registered on-campus eateries, order stationery, book laundry services, and purchase daily FMCG essentials directly from local vendors.",
            "Instead of waiting outside hostel gates, orders are dropped off into ChangePay SmartBoxes—contactless, IoT-connected delivery lockers stationed directly outside hostel residential blocks. Once a parcel is deposited, students receive a push notification containing a secure OTP or digital key to unlock the locker and retrieve their order 24/7.",
          ],
          keyTakeaway:
            "ChangePay eliminates the gate-to-hand delivery gap by deploying SmartBox IoT lockboxes at hostel blocks, letting students pick up meals and essentials without waiting for delivery drivers.",
          codeOrList: {
            title: "Core Features of ChangePay Platform",
            items: [
              "SmartBox IoT Lockers: Contactless, secure hardware lockboxes placed at hostel blocks",
              "In-Campus Eatery Ordering: Instant digital menus for campus canteens and mess stalls",
              "Hyperlocal Service Integration: On-demand booking for campus laundry and stationery stores",
              "Open Network Architecture: Powered by eSamudaay and ONDC open commerce protocols",
              "CampusVerse & Clubs: Student-led sandboxes to build and monetize campus projects",
            ],
          },
        },
        {
          heading: "2. The Founding Story: From NITK Hostel Rooms to Tumkur & Bangalore",
          subheading: "How Demonetisation Inspired a Campus Digital Commerce Platform",
          body: [
            "ChangePay originated inside the student hostel rooms of the National Institute of Technology Karnataka (NITK Surathkal) during the 2016-2017 demonetisation period. As cash shortages swept across India, engineering undergraduates at NITK observed student canteens struggling with small change shortages and fragmented ordering processes.",
            "Founder Dhyvik GJ, along with co-founders Jeevan M (CTO, Network Management) and R Chetan Jaydeep (CTO, Software Infrastructure), set out to build a unified digital payment and transaction system designed specifically for campus merchants.",
            "What began as a localized digital wallet and food ordering pilot quickly expanded into an integrated campus logistics system featuring proprietary IoT locker hardware.",
            "Backed by early coverage in national outlets like Deccan Herald, Bangalore Mirror, and Times of India, as well as incubators like Axilor Ventures, the team scaled ChangePay beyond NITK Surathkal and established operational headquarters spanning Tumkur and Bangalore.",
          ],
          keyTakeaway:
            "ChangePay was built by NITK engineering undergraduates to eliminate cash friction and campus canteen delivery bottlenecks, growing from a hostel hackathon into an Axilor-backed startup.",
          codeOrList: {
            title: "ChangePay Leadership & Milestones",
            items: [
              "Dhyvik GJ: Founder — Campus Commerce Vision & Strategic Partnerships",
              "Jeevan M: CTO, Network Management — IoT Lockbox Infrastructure & Field Logistics",
              "R Chetan Jaydeep: CTO, Software Infrastructure — Mobile App Engine & ONDC Protocols",
              "Founding Year: 2016-2020 Incubated at NITK Surathkal STEP Incubator",
              "HQ Relocation: Extended core operations to Tumkur and Bangalore",
            ],
          },
        },
        {
          heading: "3. Which Colleges & Campuses Support ChangePay?",
          subheading: "Evaluating ChangePay's Institutional Footprint Across India",
          body: [
            "ChangePay targets residential campuses with a minimum population of 3,000+ students, where internal commercial transactions can support a self-sustaining hyperlocal economy.",
            "Currently, ChangePay operates active campus commerce networks and SmartBox installations across major engineering and multidisciplinary institutions in South India:",
            "1. NITK Surathkal (National Institute of Technology Karnataka): The birthplace of ChangePay, featuring campus-wide canteen integration and hostel lockboxes.",
            "2. MIT Manipal (Manipal Institute of Technology / MAHE): One of ChangePay's largest active user bases, serving students across massive hostel clusters like Block 19, Block 16, and campus cafeterias.",
            "3. JSSTU Mysuru (JSS Science and Technology University): Deployed for student food delivery and campus service ordering.",
            "The company is actively expanding its ChangePay Clubs program, partnering with student bodies across autonomous colleges to launch campus commerce sandboxes where undergrads can build, launch, and operate local micro-businesses.",
          ],
          codeOrList: {
            title: "ChangePay Active Campuses & Ecosystem Criteria",
            items: [
              "NITK Surathkal: Full canteen coverage, hostel SmartBoxes & alumni network integration",
              "MIT Manipal: High-density delivery network across MIT hostel blocks and food courts",
              "JSSTU Mysuru: Digitized canteen ordering and contactless hostel locker drop-offs",
              "Target Criteria: Residential institutes with 3,000+ students and closed hostel security rules",
            ],
          },
        },
        {
          heading: "4. Honest User Feedback: Reddit r/manipal & App Store Breakdown",
          subheading: "What Students Really Think About Delivery Fees, Direct Calling, and SmartBoxes",
          body: [
            "To understand ChangePay's real-world impact, we analyzed authentic student sentiment from a dedicated community discussion on Reddit (r/manipal) and app store feedback.",
            "Students praise the SmartBox IoT lockbox concept for eliminating the need to rush downstairs to meet delivery drivers during late-night study sessions or while taking online lectures. It also resolves busy canteen phone lines during peak dinner hours.",
            "However, students raised sharp constructive feedback regarding operational tradeoffs:",
            "First, delivery pricing vs. direct calling. Several students noted that calling campus canteens directly can be Rs. 15 to Rs. 30 cheaper per order by avoiding platform convenience fees, while also allowing Pay-on-Delivery via UPI.",
            "Second, external delivery locker integration. Students expressed strong demand for ChangePay SmartBoxes to accept third-party deliveries from Swiggy, Zomato, and Amazon at campus main gates (such as Gate 2 at MIT Manipal), saving students long walks from distant hostel blocks.",
            "Third, feature requests. Frequent feedback points include adding Cash on Delivery (COD), introducing multi-item order discounts from single restaurants, expanding late-night vendor tracking past 2 AM, and bringing authentic regional food stalls (like North Indian chaap and rolls) onto the platform.",
          ],
          keyTakeaway:
            "While students love the SmartBox lockbox convenience, their main critiques focus on per-item platform fees compared to direct calling and a strong desire to use SmartBoxes for Swiggy/Amazon drop-offs.",
          codeOrList: {
            title: "Student Perception Matrix: Pros vs. Areas for Improvement",
            items: [
              "PRO: Contactless SmartBox locker pick-up avoids missing delivery drivers during classes",
              "PRO: Bypasses busy phone lines of campus canteens during peak lunch/dinner rush",
              "CON: Small per-item delivery fee compared to calling eateries directly",
              "DEMAND: Allow Swiggy/Zomato/Amazon parcel drop-offs inside SmartBoxes at campus gates",
              "DEMAND: Add Pay-on-Delivery options and tiered loyalty discounts for frequent hostel orderers",
            ],
          },
        },
        {
          heading: "5. Open Network Tech, ONDC & The Future of Campus Commerce",
          subheading: "How ChangePay Integrates eSamudaay & Student Entrepreneurship",
          body: [
            "Rather than operating as a closed proprietary monopoly, ChangePay has aligned its software architecture with open commerce protocols through partnerships with eSamudaay and the Open Network for Digital Commerce (ONDC) ecosystem.",
            "This open architecture allows local town vendors and small micro-merchants outside campus gates to list products transparently on the ONDC network, giving students access to broader retail catalogs without high platform take rates.",
            "Additionally, the platform's 'ChangePay Clubs' initiative empowers students to operate real commercial nodes on campus—handling vendor onboarding, marketing, and logistics while gaining hands-on entrepreneurship experience before graduation.",
          ],
        },
      ],
      conclusion:
        "ChangePay represents a bold, hardware-integrated approach to solving hyperlocal campus commerce in India. By combining IoT SmartBoxes with open network protocols and student-led campus sandboxes, founders Dhyvik GJ, Jeevan M, and Chetan Jaydeep have built a platform tailored to the realities of university hostel life. As ChangePay continues to address student feedback around pricing, payment flexibility, and external locker integrations, it stands out as one of the most innovative campus-born ventures originating from NITK Surathkal.",
    },
  },
  {
    slug: "nitk-student-and-alumni-startups",
    title: "NITK Student & Alumni Startups: Campus Ideas to Unicorns",
    excerpt:
      "Explore the thriving startup ecosystem at NITK Surathkal. Discover active student-run agencies like Origami Studio, Wash Express, and Helixar alongside alumni unicorns like Practo and Delhivery.",
    category: "Startups & Innovation",
    readTime: "7 min read",
    date: "Aug 17, 2026",
    featured: true,
    coverGradient: "from-[#ff5e00]/20 via-orange-500/10 to-slate-900",
    tags: [
      "NITK Surathkal",
      "Student Startups",
      "Alumni Unicorns",
      "Origami Studio",
      "Wash Express",
      "Helixar",
      "Practo",
      "Delhivery",
      "Entrepreneurship",
    ],
    content: {
      intro:
        "National Institute of Technology Karnataka (NITK Surathkal, formerly KREC) stands out as one of India's premier engineering institutions for breeding high-impact tech ventures and disruptive agencies. From active campus founders running operating businesses directly out of hostel rooms to alumni leaders building multi-billion-dollar market champions like Practo and Delhivery, the NITK entrepreneurial engine combines technical rigor, seaside resilience, and strong peer mentorship. This playbook explores the top student-led startups currently active on campus alongside the iconic alumni ventures that started on the Surathkal coast.",
      sections: [
        {
          heading: "1. Active Student-Led Startups Operating from Campus",
          subheading: "Current NITK Undergraduates & Graduates Running High-Growth Businesses",
          body: [
            "Building a profitable business while navigating rigorous engineering coursework requires extraordinary discipline. At NITK Surathkal, several student-led teams are currently running live commercial businesses and agencies directly from campus.",
            "Origami Studio (origamistudio.in): Founded by NITK student entrepreneurs (Rudra, Shrujan, Kushal), Origami Studio is a full-service digital marketing, engineering, and artificial intelligence agency. The team builds high-converting Next.js web applications, dominates local search with Google Business Profile ranking, produces cinematic short-form video content, and deploys custom AI lead-capture agents integrated with WhatsApp automation.",
            "Wash Express (washexpress.in): Engineered by NITK student founders to solve daily campus logistics, Wash Express provides tech-enabled laundry and garment care services tailored for students and residents in and around Surathkal and Mangalore.",
            "Helixar (helixar.pro): Built by NITK student developers, Helixar is an automated social distribution engine for LinkedIn and X. It enables growth teams, agencies, and founders to coordinate reposting networks, engagement campaigns, and viral growth loops directly through Slack, Telegram, and WhatsApp.",
            "Savemonk: Conceived by undergraduate NITK students on campus, Savemonk gained national attention after securing backing from Facebook's FBStart program for its cashback and coupon aggregation platform.",
          ],
          keyTakeaway:
            "Campus-born ventures like Origami Studio, Wash Express, and Helixar demonstrate that NITK students aren't waiting for graduation—they are deploying commercial software and running profitable agency operations in real-time.",
          codeOrList: {
            title: "Active Student-Run Ventures at NITK",
            items: [
              "Origami Studio (origamistudio.in): Fullstack Web Engineering, Local SEO, Video Production & Custom AI Agents",
              "Wash Express (washexpress.in): Smart Laundry & Campus Care Service Logistics",
              "Helixar (helixar.pro): AI Social Distribution & Engagement Workflows for LinkedIn & X",
              "Savemonk: FBStart-backed Cashback & Deal Discovery Platform",
            ],
          },
        },
        {
          heading: "2. The NITK Startup Engine & Campus Ecosystem",
          subheading: "How Student Execution Translates into Market Leadership",
          body: [
            "The journey from a hostel hackathon project to a market-leading enterprise follows a distinct trajectory at NITK Surathkal. Supported by the STEP (Science & Technology Entrepreneurs Park) incubator and the student-run E-Cell, early-stage student ventures gain access to seed funding, technical mentorship, and peer feedback.",
            "Living together in hostel blocks like Everest, Himalaya, and Kailash creates an ideal environment for rapid product iteration. Ideas discussed during late-night canteen sessions turn into deployed code and live client campaigns before morning lectures.",
          ],
          keyTakeaway:
            "The NITK ecosystem provides an ideal testing ground where student-led initiatives validate product-market fit with 6,000+ campus users before scaling nationally.",
          codeOrList: {
            title: "NITK Innovation Pillars",
            items: [
              "STEP NITK: On-campus incubator offering prototyping infrastructure & seed grants",
              "E-Cell NITK: Student-led entrepreneurship hub organizing pitch competitions and summits",
              "Alumni Mentor Network: Direct guidance from unicorn founders and venture investors",
              "Rapid Peer Feedback: Immediate product testing across campus engineering cohorts",
            ],
          },
        },
        {
          heading: "3. Alumni-Founded Tech Giants & Market Leaders",
          subheading: "Multi-Billion-Dollar Companies Built by NITK (KREC) Graduates",
          body: [
            "NITK alumni have founded some of India's most recognized technology platforms, transforming healthcare, supply chain logistics, urban mobility, and digital finance.",
            "Practo: Co-founded by Shashank ND and Abhinav Lal (Batch of 2009). Conceived inside their NITK hostel room during their final year, Practo grew into India's leading healthtech platform, connecting over 30 million patients with 100,000+ doctors globally with over $200M+ in funding.",
            "Delhivery: Co-founded by Sahil Barua (Batch of 2006). Delhivery revolutionized Indian e-commerce logistics, scaling into a publicly traded unicorn listed on the NSE and BSE handling millions of parcels daily.",
            "TaxiForSure: Co-founded by Aprameya Radhakrishna and Raghunandan G (Batch of 2003). TaxiForSure transformed urban ride-hailing across India before being acquired by Ola for $200 Million in 2015.",
            "KreditBee: Co-founded by Madhusudhan Ekambaram (Batch of 2004). KreditBee emerged as a leading digital credit platform, raising over $300M+ to deliver instant personal finance across India.",
            "Signzy: Co-founded by Ankit Ratan and Ankur Pandey (NITK Alumni). Signzy provides AI-powered digital onboarding and identity verification for major banks and financial institutions worldwide.",
            "Simplilearn: Co-founded by Krishna Kumar (Batch of 1999). A pioneer in global edtech and digital upskilling, later acquired by private equity firm Blackstone.",
            "NestAway: Co-founded by Smruti Ranjan Parida, Amarendra Sahu, and Jitendra Jagadev (NITK Alumni). Standardized rental housing for young professionals across major metropolitan cities.",
          ],
        },
        {
          heading: "4. NITK Venture Matrix: Student Startups vs. Alumni Giants",
          subheading: "Tracking Innovation Across Generations of NITK Entrepreneurs",
          body: [
            "Comparing active campus ventures with established alumni scaleups highlights the continuous flow of technological innovation coming out of NITK Surathkal.",
          ],
          codeOrList: {
            title: "NITK Founder & Venture Directory",
            items: [
              "Origami Studio | Student-Led (Rudra, Shrujan, Kushal) | Digital Marketing, Next.js Apps, Local SEO, AI Agents",
              "Wash Express | Student-Led | Tech-Enabled Campus Laundry & Garment Care",
              "Helixar | Student-Led | Social Distribution & Engagement Workflows (Slack/Telegram/WhatsApp)",
              "Practo | Alumni (Shashank ND & Abhinav Lal, 2009) | Healthtech & Telemedicine ($200M+ raised)",
              "Delhivery | Alumni (Sahil Barua, 2006) | Public E-Commerce Supply Chain Unicorn (NSE/BSE Listed)",
              "TaxiForSure | Alumni (Aprameya R. & Raghunandan G., 2003) | Ride-Hailing Pioneer (Acquired for $200M)",
              "KreditBee | Alumni (Madhusudhan Ekambaram, 2004) | Instant Digital Credit Platform ($300M+ raised)",
              "Signzy | Alumni (Ankit Ratan & Ankur Pandey) | AI Digital Onboarding & KYC Verification",
              "Simplilearn | Alumni (Krishna Kumar, 1999) | Global Upskilling Edtech (Acquired by Blackstone)",
            ],
          },
        },
        {
          heading: "5. Why NITK Surathkal Consistently Produces Successful Founders",
          subheading: "The Core Blueprint Behind the Surathkal Entrepreneurial DNA",
          body: [
            "Several core factors make NITK Surathkal a fertile ground for tech entrepreneurs:",
            "First, hands-on engineering rigor. Students engage with complex fullstack web architectures, machine learning models, cloud systems, and mobile APIs early in their academic journey.",
            "Second, high-density peer collaboration. Hostel culture allows cross-functional teams of coders, designers, and marketers to form naturally around shared problems.",
            "Third, an active alumni pay-it-forward culture. Founders of multi-million dollar enterprises regularly return to campus for NITKonnect panels, offering direct mentorship and early angel capital to promising student teams.",
          ],
        },
      ],
      conclusion:
        "Whether it is student entrepreneurs building active businesses like Origami Studio, Wash Express, and Helixar from their hostel rooms, or alumni building public unicorns like Delhivery and Practo, NITK Surathkal remains one of India's most powerful engines of innovation. The culture of shipping code, solving real-world problems, and scaling ventures continues to thrive on the Surathkal coast.",
    },
  },
];

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedBlogs(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getRelatedBlogs(currentSlug: string, limit: number = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug.toLowerCase() !== currentSlug.toLowerCase()).slice(
    0,
    limit
  );
}

export function getAllCategories(): string[] {
  const categories = new Set(BLOG_POSTS.map((b) => b.category));
  return ["All", ...Array.from(categories)];
}
