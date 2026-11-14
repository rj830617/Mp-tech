import type { IconName } from "@/components/ui/Icon";

export type ServiceFeature = { title: string; text: string };

export type Service = {
  slug: string;
  title: string;
  /** One line, used on cards and menus. */
  blurb: string;
  /** Two or three sentences, used at the top of the service page. */
  intro: string;
  /** Four headline capabilities. */
  features: ServiceFeature[];
  /** Concrete deliverables, shown as a checklist. */
  includes: string[];
};

export type ServiceGroup = {
  id: "growth" | "web" | "data";
  title: string;
  summary: string;
  icon: IconName;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "growth",
    title: "Growth Marketing",
    summary: "Get found, get clicked, get chosen — across search, social and paid media.",
    icon: "growth",
    services: [
      {
        slug: "seo",
        title: "SEO Services",
        blurb: "Audits, keywords, on-page, technical and local SEO.",
        intro:
          "Rank higher for the searches that matter to your business. We combine technical fixes, a smart keyword strategy and quality content to grow organic traffic that actually converts.",
        features: [
          {
            title: "SEO audits",
            text: "A full review of your site's structure, content and performance, with a clear action plan.",
          },
          {
            title: "Keyword strategy",
            text: "We find the terms your customers search for and map them to the right pages.",
          },
          {
            title: "On-page & technical SEO",
            text: "Meta tags, headings, internal links, site speed, schema and mobile-friendliness.",
          },
          {
            title: "Local SEO & link building",
            text: "Google Business Profile, local citations and high-quality backlinks that build authority.",
          },
        ],
        includes: [
          "Full site audit and prioritised fixes",
          "Keyword map for your key pages",
          "On-page optimisation of meta tags and headings",
          "Technical fixes for speed, schema and HTTPS",
          "Google Business Profile optimisation",
          "Monthly ranking and traffic report",
        ],
      },
      {
        slug: "search-engine-marketing",
        title: "Search Engine Marketing",
        blurb: "Paid search on Google and Bing that captures intent.",
        intro:
          "Appear at the exact moment people search for what you sell. We build and manage paid search campaigns on Google and Bing that turn high-intent searches into enquiries and sales.",
        features: [
          {
            title: "Google & Bing Ads",
            text: "Search campaigns set up and structured for clear reporting and easy scaling.",
          },
          {
            title: "Intent-based keywords",
            text: "Targeting buyers who are ready to act — and excluding searches that waste budget.",
          },
          {
            title: "Ad copy that converts",
            text: "Tested headlines, descriptions and extensions that earn the click.",
          },
          {
            title: "Bid & budget management",
            text: "Daily checks so your money goes to the keywords and times that perform.",
          },
        ],
        includes: [
          "Account setup or audit",
          "Keyword and negative keyword lists",
          "Multiple ad variations for testing",
          "Conversion tracking setup",
          "Landing page recommendations",
          "Ongoing optimisation and monthly reporting",
        ],
      },
      {
        slug: "pay-per-click",
        title: "Pay-Per-Click Ads",
        blurb: "Campaigns where you only pay for real interest.",
        intro:
          "With pay-per-click advertising you pay only when someone clicks your ad. Our PPC specialists plan, launch and refine campaigns tailored to your goals, audience and budget to maximise your return.",
        features: [
          {
            title: "Tailored strategy",
            text: "Every plan starts with your goals, audience and budget — never a template.",
          },
          {
            title: "Multi-platform campaigns",
            text: "Google, Meta, LinkedIn and more, chosen for where your customers are.",
          },
          {
            title: "Precise targeting",
            text: "Location, demographic, interest and retargeting audiences that cut waste.",
          },
          {
            title: "Continuous testing",
            text: "We test ads, audiences and landing pages to keep lowering your cost per lead.",
          },
        ],
        includes: [
          "Market and competitor research",
          "Campaign structure and setup",
          "Ad creatives and copy",
          "Audience and retargeting lists",
          "Conversion tracking",
          "Monthly performance report",
        ],
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        blurb: "Content and community that keeps your brand visible.",
        intro:
          "Your audience is on social media — your brand should be too. We create content, manage your community and run campaigns that build awareness, engagement and loyal customers.",
        features: [
          {
            title: "Content & creatives",
            text: "Scroll-stopping posts, reels and stories planned in a monthly calendar.",
          },
          {
            title: "Community management",
            text: "Timely replies to comments and messages that build a real community.",
          },
          { title: "Paid social", text: "Cost-effective ads on Instagram, Facebook and LinkedIn to reach new people." },
          { title: "Insights & reporting", text: "Clear numbers on reach, engagement and what's driving results." },
        ],
        includes: [
          "Social media strategy",
          "Monthly content calendar",
          "Post and reel design",
          "Caption writing and hashtags",
          "Comment and message handling",
          "Monthly analytics report",
        ],
      },
      {
        slug: "influencer-marketing",
        title: "Influencer Marketing",
        blurb: "Partnerships with creators your audience trusts.",
        intro:
          "Partner with creators who already have your audience's attention and trust. We find the right influencers, shape the campaign and manage every detail so your brand reaches new people authentically.",
        features: [
          {
            title: "Creator discovery",
            text: "We find and vet influencers whose audience genuinely matches your customers.",
          },
          {
            title: "Campaign concepts",
            text: "Creative briefs that feel natural to the creator and on-message for you.",
          },
          {
            title: "End-to-end coordination",
            text: "Outreach, negotiation, timelines and content approvals handled for you.",
          },
          { title: "Performance tracking", text: "Reach, engagement and conversions measured with links and codes." },
        ],
        includes: [
          "Influencer shortlist and vetting",
          "Campaign brief and concept",
          "Outreach and negotiation",
          "Content review and approvals",
          "Tracking links and promo codes",
          "Campaign results report",
        ],
      },
      {
        slug: "affiliate-marketing",
        title: "Affiliate Marketing",
        blurb: "Performance-based programs that scale sales.",
        intro:
          "Grow sales through partners who promote your products and earn a commission only when they deliver results. We set up and manage affiliate programs that benefit both you and your affiliates.",
        features: [
          { title: "Low-risk growth", text: "Performance-based rewards mean you pay for sales, not just exposure." },
          {
            title: "Program setup",
            text: "Commission structure, terms and tracking set up the right way from day one.",
          },
          { title: "Partner recruitment", text: "We find bloggers, creators and websites that fit your brand." },
          { title: "Management & reporting", text: "Ongoing partner support, payouts and transparent reports." },
        ],
        includes: [
          "Affiliate program strategy",
          "Tracking and platform setup",
          "Commission structure",
          "Partner recruitment",
          "Creative assets for affiliates",
          "Monthly program report",
        ],
      },
      {
        slug: "content-marketing",
        title: "Content Marketing",
        blurb: "Blogs, e-books, newsletters and video that convert.",
        intro:
          "Attract and convert customers by sharing genuinely useful content. Our specialists craft strategies tailored to your goals and create website, blog, social, video and email content that generates leads and revenue.",
        features: [
          {
            title: "Blogs & articles",
            text: "SEO-friendly posts that answer your customers' questions and rank in search.",
          },
          {
            title: "E-books & whitepapers",
            text: "In-depth guides that position you as the expert and capture leads.",
          },
          { title: "Newsletters", text: "Regular emails that keep your brand front of mind and drive repeat sales." },
          {
            title: "Video & infographics",
            text: "Visual content that explains complex ideas quickly and gets shared.",
          },
        ],
        includes: [
          "Content strategy and topic plan",
          "Blog and website copywriting",
          "Lead-magnet e-books and guides",
          "Email newsletters",
          "Infographics and video scripts",
          "Content performance report",
        ],
      },
      {
        slug: "online-advertising",
        title: "Online Advertising",
        blurb: "Display, video and retargeting across the web.",
        intro:
          "Reach your audience wherever they spend time online. We plan and run targeted advertising across search, social, display and video — with flexible budgets and results you can track in real time.",
        features: [
          {
            title: "Search advertising",
            text: "Google and Bing Ads that put you in front of people searching right now.",
          },
          {
            title: "Social advertising",
            text: "Facebook, Instagram and LinkedIn ads targeted by interest and profession.",
          },
          { title: "Display & video", text: "Eye-catching banners and YouTube video ads that build awareness." },
          { title: "Retargeting", text: "Remarketing and dynamic ads that bring past visitors back to convert." },
        ],
        includes: [
          "Channel and budget plan",
          "Ad creatives for each platform",
          "Audience targeting setup",
          "Retargeting campaigns",
          "Real-time performance tracking",
          "Monthly results report",
        ],
      },
      {
        slug: "marketing-communication",
        title: "Marketing Communication",
        blurb: "PR, promotions and direct campaigns, on message.",
        intro:
          "Every message your brand sends should work together. We plan and deliver integrated communication — advertising, PR, promotions and direct marketing — so customers hear one clear, consistent story.",
        features: [
          {
            title: "Advertising",
            text: "Paid promotion across online, print, radio and outdoor, planned as one campaign.",
          },
          {
            title: "Public relations",
            text: "Press releases, media relations and events that shape your brand image.",
          },
          { title: "Sales promotion", text: "Discounts, offers and contests that create urgency and lift sales." },
          {
            title: "Direct marketing",
            text: "Email, SMS and direct mail campaigns that speak to customers personally.",
          },
        ],
        includes: [
          "Communication strategy and key messages",
          "Campaign calendar",
          "Press releases and media outreach",
          "Promotional offers and contests",
          "Email and SMS campaigns",
          "Campaign review and report",
        ],
      },
      {
        slug: "lead-generation",
        title: "Lead Generation",
        blurb: "Multi-channel funnels that fill your pipeline.",
        intro:
          "Turn interest into a steady flow of qualified leads. We build tailored strategies that attract, engage and convert prospects into customers — driving sustainable growth for your business.",
        features: [
          {
            title: "Multi-channel campaigns",
            text: "Social, email and search working together to reach a wider audience.",
          },
          { title: "Audience segmentation", text: "Data-led segments with personalised messages and offers for each." },
          {
            title: "Landing page optimisation",
            text: "High-converting pages with clear calls to action and A/B testing.",
          },
          { title: "Lead nurturing", text: "Blogs, webinars and email sequences that move leads toward a sale." },
        ],
        includes: [
          "Lead generation strategy",
          "Audience and segment definitions",
          "Landing page design and testing",
          "Lead capture forms and tracking",
          "Email nurture sequences",
          "Monthly pipeline report",
        ],
      },
    ],
  },
  {
    id: "web",
    title: "Web & Experience",
    summary: "Websites and stores that look sharp, load fast and turn visitors into customers.",
    icon: "layout",
    services: [
      {
        slug: "website-design",
        title: "Website Design",
        blurb: "Responsive, mobile-first sites built to convert.",
        intro:
          "Your website is your digital storefront. We design sites that look great and turn visitors into customers — from wireframes to launch, with a seamless experience on every device.",
        features: [
          { title: "Responsive design", text: "Mobile-first layouts that look and work perfectly on any screen." },
          { title: "Landing pages", text: "Focused pages built around a single goal, ready for your campaigns." },
          {
            title: "Corporate & portfolio sites",
            text: "Professional websites that reflect your brand and build trust.",
          },
          { title: "Redesigns & WordPress", text: "Fresh redesigns and easy-to-edit custom WordPress builds." },
        ],
        includes: [
          "Sitemap and wireframes",
          "Custom visual design",
          "Responsive development",
          "Fast load times and on-page SEO",
          "Contact forms and analytics",
          "Training to update your content",
        ],
      },
      {
        slug: "ecommerce",
        title: "E-Commerce",
        blurb: "Stores with secure payments and SEO-ready products.",
        intro:
          "Build, launch and scale an online store that sells. From user-friendly design to secure payment gateways and SEO-friendly product pages, we deliver a seamless shopping experience.",
        features: [
          {
            title: "Custom store development",
            text: "A store built around your products, brand and the way you sell.",
          },
          {
            title: "Product page optimisation",
            text: "Clear photos, descriptions and calls to action that lift conversions.",
          },
          { title: "Secure payments", text: "Trusted payment gateways integrated and tested end to end." },
          { title: "Orders & inventory", text: "Simple tools to manage stock, orders and customers in one place." },
        ],
        includes: [
          "Store design and development",
          "Mobile-responsive checkout",
          "Payment gateway integration",
          "Inventory and order management",
          "E-commerce SEO setup",
          "Sales analytics and tracking",
        ],
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        blurb: "Research, wireframes, prototypes and design systems.",
        intro:
          "Elevate your digital experience with intuitive design and user-first thinking. We create interfaces for websites and apps that are easy to use, accessible and as good to use as they look.",
        features: [
          {
            title: "UX research & wireframes",
            text: "We understand your users first, then map clear, simple journeys.",
          },
          { title: "UI design", text: "Polished, on-brand interfaces for web and mobile apps." },
          { title: "Prototyping & testing", text: "Clickable prototypes tested with real users before development." },
          { title: "Design systems", text: "Reusable components that keep your product consistent as it grows." },
        ],
        includes: [
          "User research and journey maps",
          "Wireframes for key screens",
          "High-fidelity UI design",
          "Interactive prototype",
          "Usability testing",
          "Developer handoff and design system",
        ],
      },
      {
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization",
        blurb: "Heatmaps, funnels and tests that lift results.",
        intro:
          "Get more customers from the traffic you already have. CRO is a systematic process of understanding how visitors use your site, what stops them, and testing changes that increase sign-ups and sales.",
        features: [
          {
            title: "UX & data analysis",
            text: "We study bounce rate, exit pages and click-through to find what's holding you back.",
          },
          { title: "Heatmaps & surveys", text: "See where users click and scroll, and hear directly why they leave." },
          { title: "Funnel analysis", text: "Pinpoint exactly where visitors drop off on the way to converting." },
          {
            title: "A/B testing & personalisation",
            text: "Test improvements and tailor content to different visitors.",
          },
        ],
        includes: [
          "Analytics and funnel audit",
          "Heatmap and session analysis",
          "On-site user surveys",
          "Prioritised list of test ideas",
          "A/B test setup and analysis",
          "Results report with next steps",
        ],
      },
    ],
  },
  {
    id: "data",
    title: "Data & Automation",
    summary: "Dashboards, workflows and AI that save time and sharpen every decision.",
    icon: "data",
    services: [
      {
        slug: "power-bi",
        title: "Power BI",
        blurb: "Interactive dashboards and data modelling.",
        intro:
          "Turn your data into smart decisions. From interactive dashboards to advanced data modelling, we help you track performance and gain insights with Microsoft Power BI.",
        features: [
          { title: "Custom dashboards", text: "Reports designed around your goals, KPIs and the people who use them." },
          { title: "Real-time reporting", text: "Live data refreshes so you always see what's happening now." },
          {
            title: "Data integration & modelling",
            text: "We connect your sources and model the data so numbers add up.",
          },
          {
            title: "Full lifecycle support",
            text: "From setup to maintenance, we support every stage of your BI journey.",
          },
        ],
        includes: [
          "Requirements and KPI workshop",
          "Data source connections",
          "Data model and measures",
          "Interactive dashboards",
          "Scheduled refresh and sharing",
          "Team training and support",
        ],
      },
      {
        slug: "smartsheet",
        title: "Smartsheet",
        blurb: "Project tracking and automated workflows.",
        intro:
          "Collaborate, automate and accelerate. We design, implement and optimise Smartsheet solutions that keep your projects on track and your business agile and efficient.",
        features: [
          { title: "Project & task tracking", text: "Clear plans, owners and deadlines your whole team can see." },
          {
            title: "Automated workflows",
            text: "Smart automations for approvals, reminders and updates that cut manual work.",
          },
          {
            title: "Seamless integrations",
            text: "Connect Smartsheet with tools like Slack, Gmail and Microsoft Teams.",
          },
          { title: "Dashboards & reports", text: "Real-time views of progress, workload and status." },
        ],
        includes: [
          "Process review and workspace design",
          "Sheets, forms and templates",
          "Workflow automations",
          "Tool integrations",
          "Dashboards and reports",
          "Team onboarding",
        ],
      },
      {
        slug: "analytics-reporting",
        title: "Analytics & Reporting",
        blurb: "Real-time data and reports tied to your KPIs.",
        intro:
          "Know exactly what's working. We set up accurate tracking and build clear reports and dashboards, so you get instant insight into traffic, user behaviour and performance.",
        features: [
          { title: "Tracking setup", text: "Google Analytics 4, Tag Manager and conversion tracking done properly." },
          { title: "Real-time data", text: "Instant insight into website traffic, user behaviour and campaigns." },
          { title: "Custom reports", text: "Reports built around your business goals and key performance indicators." },
          { title: "Visual dashboards", text: "Interactive charts that make your data easy to understand." },
        ],
        includes: [
          "Analytics audit",
          "GA4 and Tag Manager setup",
          "Goal and conversion tracking",
          "Custom KPI dashboard",
          "Monthly insight report",
          "Recommendations for next steps",
        ],
      },
      {
        slug: "data-governance",
        title: "Data Governance",
        blurb: "Quality, privacy and access you can trust.",
        intro:
          "Make sure your data is accurate, secure and trusted. We help you put a modern data governance strategy in place that improves data quality, supports compliance and builds confidence across your organisation.",
        features: [
          {
            title: "Privacy & compliance",
            text: "Policies and controls that help you meet data protection requirements.",
          },
          { title: "Data quality", text: "Processes to keep your data accurate, complete and consistent." },
          { title: "Role-based access", text: "The right people see the right data — and nothing more." },
          { title: "Framework & training", text: "Clear roles, rules and training so your team owns its data." },
        ],
        includes: [
          "Current-state assessment",
          "Governance roadmap",
          "Data policies and standards",
          "Access control design",
          "Metadata and data catalogue",
          "Team enablement and training",
        ],
      },
      {
        slug: "ai-solutions",
        title: "AI Solutions",
        blurb: "Practical AI tools that automate busywork.",
        intro:
          "Put AI to work on the tasks that slow your team down. We identify practical, low-risk opportunities and build AI tools that save time, improve customer experience and unlock insight from your data.",
        features: [
          { title: "AI assistants", text: "Website and WhatsApp assistants that answer common customer questions." },
          {
            title: "Workflow automation",
            text: "AI that sorts enquiries, drafts replies and moves data between tools.",
          },
          {
            title: "AI-assisted content",
            text: "Faster first drafts for posts, ads and product descriptions — reviewed by humans.",
          },
          { title: "Insights from data", text: "Summaries and trends pulled from reports, reviews and feedback." },
        ],
        includes: [
          "AI opportunity workshop",
          "Use-case prioritisation",
          "Prototype and testing",
          "Integration with your tools",
          "Privacy and data safeguards",
          "Team training",
        ],
      },
    ],
  },
];

export const allServices: Service[] = serviceGroups.flatMap((group) => group.services);

export const serviceHref = (slug: string) => `/services/${slug}`;

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug);
}

export function getGroupForService(slug: string): ServiceGroup | undefined {
  return serviceGroups.find((group) => group.services.some((service) => service.slug === slug));
}
