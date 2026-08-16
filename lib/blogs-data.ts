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
