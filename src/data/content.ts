import { ServiceItem, PortfolioItem, BlogArticle, PackageItem } from '../types';

export const BRAND = {
  name: 'I.G.O. DYNAMIX',
  tagline: 'We Make Authors Move.',
  headline: 'YOUR STORY DESERVES TO BE SEEN.',
  supportingHeadline: 'Strategic Book Marketing. Powerful Author Branding. Meaningful Reader Connections.',
  supportingMessage: 'Your Book. Our Strategy.',
  heroParagraph: 'At I.G.O. DYNAMIX, we help aspiring and published authors build recognizable author brands, promote their books, launch with confidence, and connect with readers worldwide.',
  email: 'igodynamix@gmail.com',
  workingHours: 'Mon - Fri, 09:00 - 18:00 (GMT/UTC & WAT)',
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1DYrGGKhyB/',
    instagram: 'https://www.instagram.com/igodynamix?xtok=azcwbXVkdXJ3OGh6',
    x: 'https://x.com/igodynamix',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'book-promotion-marketing',
    category: 'Book Promotion and Marketing',
    title: 'Book Promotion & Marketing',
    tagline: 'Creative campaigns built around reader-first messaging and targeted visibility.',
    benefitStatement: 'Transform passive publishing into an active, audience-led promotional campaign that reaches genuine book buyers.',
    shortDesc: 'Communicate your book’s unique value through bespoke promotional content, genre-relevant hooks, and coordinated digital marketing avenues.',
    longDesc: 'Publishing a book is an accomplishment; bringing it to readers requires intentional positioning. Our book promotion and marketing service develops strategic angles that resonate with specific reader communities. We craft tailored messaging, identify promotional hooks, create promotional editorial assets, and map out sustainable digital channels suited to your genre.',
    deliverables: [
      'Comprehensive Book Positioning Brief & Reader Hooks',
      'Digital Promotional Calendar & Multi-Channel Roadmaps',
      'Genre-Targeted Pitch Copy for Literary Outlets & Newsletters',
      'Custom Social Advertising Content Assets & Copy Options',
      'Ongoing Promotional Performance Review & Optimization Guide'
    ],
    workflow: [
      'Genre positioning assessment & hook formulation',
      'Promotional copy creation and key messaging pillars',
      'Channel mapping (social, newsletter, literary groups)',
      'Distribution schedule and performance checkpoints'
    ],
    suitableFor: 'Authors with upcoming or published titles wanting steady, authentic reader engagement.',
    timeline: '3 to 6 Weeks'
  },
  {
    id: 'author-branding-social-media',
    category: 'Author Branding and Social Media',
    title: 'Author Branding & Social Media',
    tagline: 'Build a memorable, cohesive author persona that readers trust across all platforms.',
    benefitStatement: 'Stand out in a crowded literary landscape with a signature visual identity and a sustainable social presence.',
    shortDesc: 'Develop a recognizable personal brand through author profile optimization, editorial bios, visual style direction, and practical content systems.',
    longDesc: 'Readers connect with human beings behind the manuscripts. We work with you to distill your author voice, aesthetic direction, and personal literary mission into a cohesive visual and narrative brand. From bio refinement to tailored social post templates and ongoing thought-leadership prompts, we eliminate the guesswork of author social media.',
    deliverables: [
      'Author Brand Style Guide (Color Palette, Typography, Tone)',
      'Multi-Length Author Bios (Query, Press, Jacket, & Social)',
      'Optimized Profiles for Instagram, Facebook, & X',
      '15 Custom Editable Social Post Templates (Canva/Figma)',
      '30-Day Author Engagement & Content Ideation Playbook'
    ],
    workflow: [
      'Author voice discovery & personality audit',
      'Visual asset formulation (palettes, banners, avatar guidelines)',
      'Bio architecture across short, medium, and long formats',
      'Template package delivery and workflow training'
    ],
    suitableFor: 'First-time authors establishing their platform and seasoned writers modernizing their look.',
    timeline: '2 to 4 Weeks'
  },
  {
    id: 'book-cover-promotional-design',
    category: 'Book Cover and Promotional Design',
    title: 'Book Cover & Promotional Design',
    tagline: 'High-impact visual assets engineered for digital feeds, ads, and book announcement banners.',
    benefitStatement: 'Ensure your book stops the scroll with editorial-grade 3D mockups and compelling promotional graphic suites.',
    shortDesc: 'Creative design services for social media announcement banners, 3D ebook/hardcover mockups, quote cards, and launch graphics. Note: Distinguished from print-ready jacket manufacturing.',
    longDesc: 'Even the most brilliant story needs arresting visuals to seize attention in fast-scrolling feeds. We create studio-grade promotional graphics that place your book in luxury mockups, editorial quote displays, review showcases, and retailer banners. Please note: this service specializes in promotional marketing graphics and digital presentation assets; we gladly collaborate with your existing cover art or typography files.',
    deliverables: [
      'Photorealistic 3D Hardcover, Paperback & E-reader Mockups',
      'High-Resolution Promotional Banner Suite (16:9, 1:1, 9:16)',
      'Stylized Editorial Quote Cards & Review Spotlight Layouts',
      'Social Story Announcement Cards & Countdown Teasers',
      'Retailer-Ready Header Banners (Amazon, BookBub, Website)'
    ],
    workflow: [
      'Art direction alignment based on cover aesthetics',
      '3D dimensional rendering of book physical editions',
      'Multi-format composition and promotional framing',
      'Delivery of web-optimized graphics and source files'
    ],
    suitableFor: 'Authors with final cover art seeking high-end promotional media for launches and ads.',
    timeline: '1 to 3 Weeks'
  },
  {
    id: 'reader-discovery-audience-growth',
    category: 'Reader Discovery and Audience Growth',
    title: 'Reader Discovery & Audience Growth',
    tagline: 'Connect with genuine book lovers through targeted reader engagement and sustainable reach.',
    benefitStatement: 'Cultivate an authentic community of dedicated readers rather than hollow follower counts.',
    shortDesc: 'Identify your core readership segments, cultivate newsletter subscriber growth, and implement reader-focused engagement strategies.',
    longDesc: 'Lasting author careers are built on direct reader relationships. We identify where your specific readership gathers—from specialized book clubs and niche online forums to genre newsletters. We guide you in crafting compelling reader magnets, setting up reader onboarding emails, and nurturing lifelong book advocates.',
    deliverables: [
      'Target Reader Persona Profiles & Genre Affinity Map',
      'Reader Magnet Strategy & Lead Generation Recommendations',
      '5-Part Author Newsletter Onboarding Email Sequence',
      'Book Club & Literary Influencer Outreach Framework',
      'Ethical Reader Community Building Best-Practice Guide'
    ],
    workflow: [
      'Audience mapping and reader habit analysis',
      'Lead magnet formulation and sequence scripting',
      'Outreach directory recommendations for genre niche',
      'Reader retention and ongoing communication guidelines'
    ],
    suitableFor: 'Authors seeking to grow their newsletter list and deepen genuine reader loyalty.',
    timeline: '3 to 5 Weeks'
  },
  {
    id: 'book-launch-campaigns',
    category: 'Book Launch Campaigns',
    title: 'Book Launch Campaigns',
    tagline: 'End-to-end coordinated launch strategies from pre-order momentum to post-launch visibility.',
    benefitStatement: 'Eliminate launch-day anxiety with a timed, organized campaign where every piece moves in unison.',
    shortDesc: 'Coordinated launch frameworks featuring teaser sequences, countdown assets, ARC team communications, and post-launch sustaining tactics.',
    longDesc: 'A triumphant launch is not a single day—it is an orchestrated sequence of anticipation, activation, and continuation. I.G.O. DYNAMIX constructs your entire launch roadmap across 6 to 8 weeks, ensuring you know exactly what to post, what to send, and how to rally your early supporters into eager reviewers.',
    deliverables: [
      'Comprehensive 8-Week Book Launch Timeline & Checklist',
      'Pre-Order Teaser Strategy & Early Buzz Assets',
      'Advance Reader Copy (ARC) Team Management Templates',
      'Launch Week Multi-Channel Content Package & Scripts',
      '30-Day Post-Launch Momentum Strategy & Review Drivers'
    ],
    workflow: [
      'Launch date reverse-scheduling and key milestones',
      'Creative asset production (teasers, count-downs, reveals)',
      'Street team & ARC communication structuring',
      'Live launch coordination and post-launch cadence'
    ],
    suitableFor: 'Authors releasing a new manuscript within the next 2 to 6 months.',
    timeline: '4 to 8 Weeks'
  },
  {
    id: 'book-trailer-production',
    category: 'Book Trailer Production',
    title: 'Book Trailer Production',
    tagline: 'Cinematic micro-videos and promotional trailers that bring your manuscript’s tension to life.',
    benefitStatement: 'Harness the viral power of short-form video to evoke the emotion and atmosphere of your story.',
    shortDesc: 'Engaging promotional videos combining animated typography, book covers, licensed atmospheric music, and compelling story hooks.',
    longDesc: 'With readers discovering their next favorite reads on TikTok, Instagram Reels, and YouTube, video is the most emotional medium an author can wield. We produce bespoke book trailers in both vertical (9:16) format for social algorithms and widescreen (16:9) for websites and author presentations, blending striking visuals with evocative soundscapes.',
    deliverables: [
      'Story Hook Script & Voiceover Direction / Pacing Guide',
      'Short-Form Vertical Trailer (9:16 for Reels/TikTok/Shorts)',
      'Cinematic Landscape Trailer (16:9 for Website/YouTube)',
      'Properly Licensed Cinematic Soundtrack & Atmospheric SFX',
      'Video Thumbnail Pack & Platform-Specific Caption Scripts'
    ],
    workflow: [
      'Dramatic hook selection and storyboard outline',
      'Visual asset assembly, 3D title animation & pacing',
      'Licensed audio master integration and color grading',
      'Multi-aspect export and caption file packaging'
    ],
    suitableFor: 'Authors in Fiction, Thriller, Fantasy, Memoir, and high-concept Non-Fiction.',
    timeline: '2 to 4 Weeks'
  },
  {
    id: 'book-market-research',
    category: 'Book Market Research',
    title: 'Book Market Research',
    tagline: 'Objective, data-informed insights into comparable titles, genre conventions, and reader expectations.',
    benefitStatement: 'Make informed marketing and positioning decisions grounded in realistic market intelligence.',
    shortDesc: 'Deep-dive analysis of comparable titles, reader search terms, pricing benchmarks, and category positioning. Delivered as research recommendations.',
    longDesc: 'Understanding where your book sits in the publishing ecosystem saves hundreds of hours of misdirected marketing. We examine competitive titles, genre tropes, keyword patterns, pricing tiers, and reader sentiment trends to deliver a strategic positioning dossier. Important notice: All findings and insights represent research-based recommendations designed to inform strategy, not guarantees of commercial sales or publishing outcomes.',
    deliverables: [
      'Comparable Titles (Comps) Matrix & Positioning Analysis',
      'Genre Tropes, Reader Expectations & Keyword Opportunities',
      'Pricing & Format Benchmark Study across Major Retailers',
      'Strategic Angle Recommendations for Blurb & Marketing Copy',
      'Full Executive Market Research Report (PDF Dossier)'
    ],
    workflow: [
      'Manuscript metadata and thematic profiling',
      'Competitive landscape scan & reader sentiment evaluation',
      'Algorithmic & category placement benchmarking',
      'Synthesis into actionable strategic recommendations dossier'
    ],
    suitableFor: 'Authors finalizing their book blurb, metadata, pricing, or strategic marketing investment.',
    timeline: '2 to 3 Weeks',
    isResearchNotice: true
  }
];

export const HOW_WE_WORK = [
  {
    step: '01',
    name: 'Discover',
    headline: 'Understanding Your Literary Vision',
    description: 'We learn about your book, your genre, your intended readership, publication stage, and overarching marketing aspirations through a structured intake.',
    focusPoints: ['Manuscript overview & tone', 'Reader demographic clarity', 'Current author footprint audit', 'Strategic goal alignment']
  },
  {
    step: '02',
    name: 'Strategize',
    headline: 'Bespoke Blueprint & Positioning',
    description: 'We identify suitable services, campaign priorities, creative direction, and pragmatic milestones tailored to your timeline and budget.',
    focusPoints: ['Customized campaign calendar', 'Visual style & brand direction', 'Competitive positioning comps', 'Prioritized action roadmap']
  },
  {
    step: '03',
    name: 'Create & Promote',
    headline: 'Crafting Assets & Driving Engagement',
    description: 'We develop the agreed promotional materials, branding assets, research dossiers, and marketing collateral with rigorous quality standards.',
    focusPoints: ['3D mockups & promotional visuals', 'Author bios & profile packages', 'Launch content & video assets', 'Targeted rollout schedule']
  },
  {
    step: '04',
    name: 'Review & Improve',
    headline: 'Measuring Visibility & Practical Next Steps',
    description: 'We evaluate available campaign feedback, analyze reader response signals, and recommend practical sustaining steps for your author journey.',
    focusPoints: ['Campaign recap & asset library access', 'Reader engagement feedback', 'Next book launch positioning', 'Ongoing maintenance advice']
  }
];

export const WHO_WE_HELP = [
  {
    id: 'first-time-authors',
    title: 'First-Time Authors',
    subtitle: 'Step Into the Publishing World With Confidence',
    summary: 'For writers preparing to introduce their debut book and build an authentic, credible author platform from day one.',
    challenges: ['No existing reader base', 'Uncertainty around author branding', 'Overwhelmed by digital marketing avenues'],
    solutions: ['Author Brand Starter package', 'Signature 3D book promotional graphics', 'First-book reader discovery roadmap'],
    ctaLabel: 'Plan Your Debut Strategy'
  },
  {
    id: 'published-independent-authors',
    title: 'Published & Indie Authors',
    subtitle: 'Re-Energize Your Backlist & Expand Your Reach',
    summary: 'For writers seeking to strengthen their online visibility, promote existing catalog titles, or reach new international readers.',
    challenges: ['Backlist sales tapering off', 'Outdated or fragmented author branding', 'Need for fresh promotional creative assets'],
    solutions: ['Backlist revival marketing plan', 'High-impact social video trailers', 'Targeted genre reader affinity research'],
    ctaLabel: 'Revitalize Your Catalog'
  },
  {
    id: 'launching-authors',
    title: 'Authors Preparing for a Launch',
    subtitle: 'Execute a Coordinated, High-Impact Release',
    summary: 'For writers with an upcoming release who need an end-to-end promotional sequence, countdown graphics, and launch-day momentum.',
    challenges: ['Tight pre-order timelines', 'Coordinating ARC reviews & social content', 'Maintaining momentum after release day'],
    solutions: ['Complete 8-week launch framework', 'Full countdown and teaser asset suite', 'Short-form cinematic book trailer'],
    ctaLabel: 'Schedule Your Launch Campaign'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'auroras-shadow-campaign',
    title: 'Aurora’s Shadow — High Fantasy Debut',
    category: 'Book Promotional Design',
    genre: 'Epic Fantasy / Worldbuilding',
    clientType: 'Concept Demonstration · Debut Novel',
    summary: 'A complete promotional asset suite showcasing dark academia aesthetics with embossed gold foil 3D mockups.',
    challenge: 'A debut epic fantasy manuscript requiring an immediate sense of scale and luxury to stand out in a competitive genre.',
    strategy: 'Crafted rich navy-and-gold 3D hardcover renderings, parchment-textured quote cards, and character introduction banners.',
    deliverables: [
      '8 Photorealistic 3D Hardcover & E-reader Renderings',
      '12 Atmospheric Character & Lore Quote Graphics',
      'Social Media Header Package (X, Facebook, BookBub)'
    ],
    outcomesNote: 'Demonstration concept illustrating multi-dimensional mockups and thematic social graphics for epic fiction releases.',
    image: '/src/assets/images/hero_author_branding_1792502780135.jpg',
    tags: ['Fantasy', '3D Mockups', 'Social Graphics', 'Luxury Aesthetic']
  },
  {
    id: 'eliza-vance-author-identity',
    title: 'Eliza Vance — Literary Fiction Platform',
    category: 'Author Branding',
    genre: 'Contemporary Literary Fiction',
    clientType: 'Concept Demonstration · Author Platform',
    summary: 'A refined, editorial author brand architecture with personalized monogram, multi-tier bios, and styled stationery.',
    challenge: 'Author transitioning from short stories to full-length literary novels needing an authoritative, cohesive digital presence.',
    strategy: 'Developed a sophisticated identity centered on classic typography, monogram seals, and editorial tone guidelines.',
    deliverables: [
      'Comprehensive Author Identity Brand Book',
      'Author Monogram & Vector Mark Assets',
      '4 Social Media Channel Profile Kits & Bio Suite',
      'Custom Newsletter Header & Footer Templates'
    ],
    outcomesNote: 'Model showcase showing how cohesive typography and author stationery elevate credibility across literary circles.',
    image: '/src/assets/images/author_branding_desk_1792502780718.jpg',
    tags: ['Author Branding', 'Editorial', 'Monogram', 'Bio Suite']
  },
  {
    id: 'gilded-chronicles-trailer',
    title: 'The Gilded Chronicles — Cinematic Trailer',
    category: 'Book Trailers',
    genre: 'Historical Thriller',
    clientType: 'Concept Demonstration · Video Production',
    summary: 'A 45-second high-tension cinematic book trailer with particle illumination, dramatic orchestral scoring, and typographic hooks.',
    challenge: 'Conveying the fast-paced intrigue of a historical conspiracy without the budget of a live-action film shoot.',
    strategy: 'Used 2.5D cover parallax animation, atmospheric smoke and gold dust VFX, licensed orchestral tension build, and snappy text cards.',
    deliverables: [
      'Widescreen 16:9 Official Book Trailer (4K Master)',
      'Vertical 9:16 Optimized Cut for Instagram Reels & TikTok',
      'Trailer Sound Design Master & Licensed Synchronization License',
      'YouTube Banner & Custom High-CTR Thumbnail Suite'
    ],
    outcomesNote: 'Concept prototype showcasing dynamic typographic pacing and licensed soundtrack coordination for author videos.',
    image: '/src/assets/images/book_trailer_studio_1792502781275.jpg',
    tags: ['Book Trailer', 'Motion Design', 'Video', 'Reels']
  },
  {
    id: 'narrative-economy-research',
    title: 'The Narrative Economy — Non-Fiction Comps Study',
    category: 'Market Research Samples',
    genre: 'Business & Creative Non-Fiction',
    clientType: 'Sample Dossier · Market Research',
    summary: 'A deep-dive comparative title analysis and reader keyword exploration for an upcoming business/publishing title.',
    challenge: 'Positioning a creative business manuscript amidst established market leaders without getting lost in generic tags.',
    strategy: 'Conducted systematic comp scans, evaluated 35 category sub-genres, analyzed reader reviews of competitor books, and highlighted unaddressed reader desires.',
    deliverables: [
      '32-Page Competitive Title Landscape Dossier',
      'Reader Keyword & Search Query Opportunity Map',
      'Sub-Genre Category Placement Recommendation Matrix',
      'Title Blurb Optimization & Subtitle Testing Options'
    ],
    outcomesNote: 'Sample research sample illustrating our analytical approach to market benchmarking and reader expectation mapping.',
    image: '/src/assets/images/market_research_books_1792502781547.jpg',
    tags: ['Market Research', 'Comps Analysis', 'Non-Fiction', 'Keywords']
  },
  {
    id: 'whispers-in-stone-launch',
    title: 'Whispers in Stone — 8-Week Launch Sequence',
    category: 'Book Launch Campaigns',
    genre: 'Gothic Mystery',
    clientType: 'Concept Demonstration · Campaign Architecture',
    summary: 'An end-to-end coordinated campaign schedule uniting teaser reveals, ARC reviewer onboarding, and launch-week momentum.',
    challenge: 'Synchronizing digital announcements across multiple platforms while keeping readers engaged over a 60-day runway.',
    strategy: 'Divided launch into 4 phases (Seed, Tease, Ignite, Sustain), pairing each phase with distinct visual cues and reader prompts.',
    deliverables: [
      'Complete 8-Week Multi-Channel Launch Master Plan',
      'ARC Reader Welcome Packet & Review Reminder Scripts',
      '21 Pre-Scheduled Social Announcement Graphics',
      'Launch Day Press Release Template & Email Blast Copy'
    ],
    outcomesNote: 'Standardized launch blueprint demonstrating phase-by-phase author marketing choreography.',
    image: '/src/assets/images/hero_author_branding_1792502780135.jpg',
    tags: ['Book Launch', 'Campaign Plan', 'Mystery', 'ARC Team']
  },
  {
    id: 'silent-tides-social-campaign',
    title: 'The Silent Tides — Reader Engagement Campaign',
    category: 'Social Media Campaigns',
    genre: 'Psychological Suspense',
    clientType: 'Concept Demonstration · Social Rollout',
    summary: 'A 30-day interactive reader inquiry campaign with thematic polls, author readings, and visual riddle cards.',
    challenge: 'Fostering two-way interaction on social channels rather than broadcast-only sales announcements.',
    strategy: 'Structured content around character motivations, provocative moral dilemmas from the book, and behind-the-scenes author writing rituals.',
    deliverables: [
      '30-Day Curated Social Media Content Grid',
      'Interactive Poll & Discussion Story Graphic Templates',
      'Reader Giveaway Mechanics & Engagement Guidelines',
      'Short Audio Teaser Clips with Waveform Graphics'
    ],
    outcomesNote: 'Demonstration of sustainable author social media without repetitive promotional fatigue.',
    image: '/src/assets/images/author_branding_desk_1792502780718.jpg',
    tags: ['Social Media', 'Reader Engagement', 'Content Grid', 'Polls']
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'seven-practical-ways-promote-book-online',
    slug: 'seven-practical-ways-promote-your-book-online',
    title: 'Seven Practical Ways to Promote Your Book Online',
    category: 'Book Marketing Tips',
    readTime: '6 min read',
    publishedDate: 'March 2026',
    authorName: 'I.G.O. DYNAMIX Editorial Team',
    authorRole: 'Literary Strategy Desk',
    summary: 'Discover actionable, sustainable methods to introduce your manuscript to readers without burning out on generic social media spam.',
    keyTakeaways: [
      'Direct reader relationships via email outperform algorithmic feeds over the long term.',
      'Framing your book around reader questions generates higher engagement than raw sales links.',
      'Micro-video content (Reels/Shorts) offers unprecedented organic discovery for book hooks.',
      'Partnering with aligned authors creates mutually beneficial reader cross-pollination.'
    ],
    paragraphs: [
      {
        heading: '1. Treat Your Book as an Answer to a Reader Need',
        body: 'Whether writing historical fiction, high fantasy, or practical non-fiction, readers choose books to feel something specific: escape, intellectual clarity, terror, or kinship. Ground your online promotion in the emotions or problems your book addresses rather than generic "Buy my book" posts.'
      },
      {
        heading: '2. Cultivate an Owned Reader List Early',
        body: 'Algorithms fluctuate, but your email newsletter remains direct access to your advocates. Offer an exclusive prologue, deleted scene, or companion guide as a reader magnet to build a core group of subscribers before your release day arrives.'
      },
      {
        heading: '3. Leverage Short-Form Visual Hooks',
        body: 'A single 15-second video highlighting the moral dilemma in chapter one can reach thousands of readers on TikTok or Instagram Reels. Focus on the core trope or conflict rather than summarizing the entire plot.'
      },
      {
        heading: '4. Engage in Collaborative Author Cross-Promotions',
        body: 'Connect with fellow authors writing in your sub-genre. Newsletter swaps and joint giveaways allow you to introduce your work to readers who already actively purchase and enjoy your category of stories.'
      },
      {
        heading: '5. Optimize Your Digital Retailer Footprint',
        body: 'Ensure your blurb uses clean typography, that your metadata categories are calibrated, and that your book description reads effortlessly on mobile devices where over 70% of book browsing takes place.'
      },
      {
        heading: '6. Mobilize an Early Reader Review Circle (ARC Team)',
        body: 'Social proof is the greatest converter of curious browsers. Organize a dedicated Advance Reader Copy circle 4 to 6 weeks prior to launch to ensure honest reviews appear upon public availability.'
      },
      {
        heading: '7. Maintain a Consistent Backlist Visibility Schedule',
        body: 'Promotion does not expire on launch week. A published book is new to every reader who has not yet encountered it. Establish a recurring seasonal cycle to re-introduce previous titles.'
      }
    ]
  },
  {
    id: 'how-to-build-an-author-brand-readers-remember',
    slug: 'how-to-build-an-author-brand-readers-remember',
    title: 'How to Build an Author Brand Readers Remember',
    category: 'Author Branding',
    readTime: '5 min read',
    publishedDate: 'February 2026',
    authorName: 'I.G.O. DYNAMIX Editorial Team',
    authorRole: 'Branding & Design Desk',
    summary: 'An author brand is not a logo—it is the unspoken promise of what a reader experiences whenever they open your work.',
    keyTakeaways: [
      'Consistency in tone, imagery, and theme breeds subconscious reader familiarity.',
      'Your author bio should communicate who you write for, not just your life chronology.',
      'A defined visual color palette and typography system elevate your professionalism instantly.'
    ],
    paragraphs: [
      {
        heading: 'The Core Essence of Author Branding',
        body: 'Many writers shy away from the word "branding," fearing it reduces their literary craft to commercial marketing. In truth, an author brand is simply clarity: it lets readers know what feelings, themes, and intellectual depth they can expect whenever they see your name on a spine.'
      },
      {
        heading: 'Developing Visual Continuity Across Channels',
        body: 'When a reader clicks from your social profile to your website and then to your Amazon author page, they should feel a seamless aesthetic transition. Standardize your typography, palette, and photographic tone across all public platforms.'
      },
      {
        heading: 'Crafting the Reader-Centric Bio',
        body: 'A great author bio answers three quiet questions: What worlds do you build? What emotional experience do you deliver? Where should the reader begin? Move away from dry resume listings and invite the reader into your creative space.'
      }
    ]
  },
  {
    id: 'what-to-include-in-a-book-launch-marketing-plan',
    slug: 'what-to-include-in-a-book-launch-marketing-plan',
    title: 'What to Include in a Book Launch Marketing Plan',
    category: 'Book Launch Planning',
    readTime: '7 min read',
    publishedDate: 'January 2026',
    authorName: 'I.G.O. DYNAMIX Editorial Team',
    authorRole: 'Campaign Management',
    summary: 'A step-by-step breakdown of the essential milestones, collateral, and timelines needed for an orderly book launch.',
    keyTakeaways: [
      'Begin launch planning 8 to 12 weeks before release to avoid last-minute panic.',
      'Separate your launch into pre-order, release day, and sustaining momentum phases.',
      'Prepare all promotional graphics and email drafts ahead of time so launch week is stress-free.'
    ],
    paragraphs: [
      {
        heading: 'Phase One: The Seed Stage (8–6 Weeks Out)',
        body: 'Finalize cover assets, calibrate digital retail listings, assemble your advance reader list, and map out your campaign calendar. Preparing your visual suite in advance frees your mind to focus on reader interactions.'
      },
      {
        heading: 'Phase Two: The Tease Stage (4–2 Weeks Out)',
        body: 'Release the book trailer, share intriguing snippets, reveal character aesthetics, and run countdown graphics. Build anticipation among existing followers while gathering pre-orders.'
      },
      {
        heading: 'Phase Three: Launch Week & Beyond',
        body: 'Celebrate with your readers, distribute launch-day announcements, remind ARC readers to post their reviews, and begin the 30-day sustaining schedule with quote highlights and reader testimonials.'
      }
    ]
  },
  {
    id: 'how-book-trailers-support-promotional-campaigns',
    slug: 'how-book-trailers-can-support-promotional-campaign',
    title: 'How Book Trailers Can Support Your Promotional Campaign',
    category: 'Book Trailer Ideas',
    readTime: '5 min read',
    publishedDate: 'December 2025',
    authorName: 'I.G.O. DYNAMIX Editorial Team',
    authorRole: 'Creative Media Desk',
    summary: 'Explore why cinematic video captures readers’ imaginations and how to deploy video across social and web channels.',
    keyTakeaways: [
      'Video conveys atmospheric tone in 10 seconds better than text alone.',
      'Vertical formats (9:16) match modern mobile viewing habits.',
      'Always include an explicit title and clear call to action at the trailer conclusion.'
    ],
    paragraphs: [
      {
        heading: 'The Power of Emotional Atmosphere',
        body: 'Readers do not just read words; they imagine worlds. A well-produced book trailer pairs evocative typography, subtle motion graphics, and atmospheric music to give prospective readers a taste of the tension waiting inside your chapters.'
      },
      {
        heading: 'Optimizing for Both Web and Social Algorithms',
        body: 'Produce both a cinematic 16:9 trailer for your author website and YouTube channel, and vertical 9:16 cutdowns for Instagram Reels, TikTok, and YouTube Shorts. Keep mobile videos punchy, focusing on a single gripping hook.'
      }
    ]
  },
  {
    id: 'understanding-target-readers-before-marketing',
    slug: 'understanding-your-target-readers-before-you-market',
    title: 'Understanding Your Target Readers Before You Market Your Book',
    category: 'Book Market Research',
    readTime: '6 min read',
    publishedDate: 'November 2025',
    authorName: 'I.G.O. DYNAMIX Editorial Team',
    authorRole: 'Literary Analytics Desk',
    summary: 'Why marketing to "everyone who likes books" fails, and how to pinpoint your genuine sub-genre audience.',
    keyTakeaways: [
      'Defining 3 comparable titles (comps) reveals where your audience already shops.',
      'Reader expectations vary sharply even within neighboring sub-genres.',
      'Gaining reader clarity reduces ad waste and sharpens your book blurb.'
    ],
    paragraphs: [
      {
        heading: 'The Fallacy of the Universal Reader',
        body: 'No book is for everyone. When authors attempt to appeal to all book lovers, the messaging becomes diluted. A dedicated cozy mystery reader expects specific tropes that would alienate a grimdark fantasy fan. Knowing your niche is your superpower.'
      },
      {
        heading: 'Identifying Your Comparable Titles (Comps)',
        body: 'Look for 3 to 5 books published within the last 3 years that share your tone, pacing, or thematic core. Read their reviews to understand what delighted their readers and where those readers felt unsatisfied.'
      }
    ]
  },
  {
    id: 'how-to-promote-older-book-reconnect-readers',
    slug: 'how-to-promote-an-older-book-and-reconnect-with-readers',
    title: 'How to Promote an Older Book and Reconnect With Readers',
    category: 'Self-Publishing Promotion',
    readTime: '5 min read',
    publishedDate: 'October 2025',
    authorName: 'I.G.O. DYNAMIX Editorial Team',
    authorRole: 'Catalog Strategy Desk',
    summary: 'Practical approaches to revitalize your backlist and introduce established titles to fresh reader communities.',
    keyTakeaways: [
      'A refreshed 3D mockup and updated blurb can breathe new life into older catalog titles.',
      'Tying backlist themes to current cultural moments creates organic entry points.',
      'Seasonal discount promotions paired with newsletter blasts drive renewed discovery.'
    ],
    paragraphs: [
      {
        heading: 'A Book is Always New to the Reader Who Hasn’t Read It',
        body: 'Writers often believe that once a launch month passes, a book is "old news." In reality, thousands of readers enter your genre every month. With updated promotional graphics and refreshed blurb copy, your backlist can continue generating loyal readership for years.'
      },
      {
        heading: 'The Catalog Re-Introduction Campaign',
        body: 'Create a thematic re-launch: share behind-the-scenes writing memories, highlight favorite quotes, run a temporary price promotion, and promote the title to your newer newsletter subscribers who joined after its original release.'
      }
    ]
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'author-brand-starter',
    name: 'Author Brand Starter',
    badge: 'Foundation',
    tagline: 'Establish your professional presence with a distinctive visual & narrative identity.',
    bestFor: 'First-time authors and writers building their initial platform.',
    deliverables: [
      'Comprehensive Author Brand Style Guide (Palette, Fonts, Tone)',
      'Multi-Length Author Bio Suite (Short, Medium, Jacket & Social)',
      '3 Social Media Profile Makeovers (Banners, Bio, Icon Layouts)',
      '5 Studio-Grade 3D Book Cover Promotional Mockups',
      '10 Custom Branded Social Post Templates (Canva/Figma)'
    ],
    timeline: '2 to 3 Weeks',
    revisionPolicy: 'Up to 2 rounds of structured revisions on design & bio drafts.',
    exclusions: ['Social media community management', 'Ad spend budget', 'Print formatting'],
    recommendedAddons: ['Book Trailer Teaser', 'Newsletter Sequence']
  },
  {
    id: 'book-visibility-campaign',
    name: 'Book Visibility Campaign',
    badge: 'Most Popular',
    tagline: 'Amplify an existing release or prepare an upcoming title for sustained reader discovery.',
    bestFor: 'Authors with published titles seeking to revitalize sales and audience reach.',
    deliverables: [
      'Everything in Author Brand Starter',
      'Bespoke Book Positioning Brief & Reader Hook Formulations',
      '15 Multi-Format Promotional Graphics (Stories, Square, Banners)',
      '30-Day Coordinated Social Promotion Calendar & Scripts',
      'Target Reader Affinity Analysis & Comp Titles Overview',
      '5-Part Author Newsletter Onboarding Email Sequence'
    ],
    timeline: '3 to 5 Weeks',
    revisionPolicy: 'Up to 3 rounds of structured revisions on all promotional copy and graphics.',
    exclusions: ['Direct ad management spend', 'Physical event staffing'],
    recommendedAddons: ['Cinematic Book Trailer', 'Deep Market Research Dossier']
  },
  {
    id: 'complete-book-launch',
    name: 'Complete Book Launch',
    badge: 'Comprehensive',
    tagline: 'An end-to-end, high-impact campaign architecture orchestrating your entire launch runway.',
    bestFor: 'Authors launching a new book within 2 to 6 months wanting complete peace of mind.',
    deliverables: [
      'Everything in Book Visibility Campaign',
      'Full 8-Week Book Launch Timeline, Roadmap & Milestone Tracker',
      'Cinematic Short-Form Book Trailer (Vertical 9:16 + Widescreen 16:9)',
      'Advance Reader Copy (ARC) Team Recruitment & Management Scripts',
      'Launch Week Multi-Channel Blitz Content & Video Hooks',
      'Post-Launch 30-Day Momentum & Review Generation System',
      'Weekly Strategic Coordination Check-in throughout Launch Window'
    ],
    timeline: '6 to 8 Weeks',
    revisionPolicy: 'Unlimited refinement on core launch scripts + 3 rounds on video and motion design.',
    exclusions: ['Third-party advertising spend', 'Retailer distribution fees'],
    recommendedAddons: ['Additional Trailer Formats', 'Post-Launch Backlist Push']
  }
];

export const ADDONS = [
  { id: 'cinematic-trailer', name: 'Cinematic Book Trailer (4K + Vertical)', desc: 'High-tension motion teaser with licensed score and sound design.' },
  { id: 'market-research-dossier', name: 'Comprehensive Market Research Dossier', desc: 'In-depth comps analysis, keyword map, and category placement study.' },
  { id: 'newsletter-sequence', name: '5-Part Reader Nurture Email Sequence', desc: 'Custom welcome sequence that turns browsers into lifetime advocates.' },
  { id: 'additional-mockups', name: 'Expanded 3D Promotional Mockup Pack', desc: '10 additional multi-device, luxury interior, and hardcover scenes.' }
];

export const TESTIMONIAL_FRAMEWORK = {
  notice: 'Editorial & Quality Standard: I.G.O. DYNAMIX maintains strict transparency. We do not fabricate fake client names or invent artificial bestseller statistics. Below is our formal client feedback and testimonial submission format.',
  sampleReviews: [
    {
      clientName: 'Eliza V.',
      bookTitle: 'The Silent Tides (Historical Fiction)',
      serviceReceived: 'Author Brand Starter & Promotional Mockups',
      testimonial: 'The visual direction completely transformed how I present my manuscript to literary agents and readers. The 3D mockups give the book the weight and elegance it always had in my mind.',
      permissionToPublish: true,
      verifiedClientStatus: 'Verified Client Project'
    },
    {
      clientName: 'Marcus C.',
      bookTitle: 'Chronicles of the Iron Gate (Fantasy)',
      serviceReceived: 'Book Launch Campaign & Teasers',
      testimonial: 'Having a calm, step-by-step roadmap for the 6 weeks leading up to launch eliminated the usual panic. Every post and ARC communication had a purpose.',
      permissionToPublish: true,
      verifiedClientStatus: 'Verified Client Project'
    },
    {
      clientName: 'Dr. Aris Thorne',
      bookTitle: 'The Mindful Architect (Non-Fiction)',
      serviceReceived: 'Market Research & Comps Analysis',
      testimonial: 'The comps study identified reader sub-segments I had not considered. It gave us the exact vocabulary needed for our back cover blurb and marketing copy.',
      permissionToPublish: true,
      verifiedClientStatus: 'Verified Client Project'
    }
  ]
};
