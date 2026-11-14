import type { IconName } from "@/components/ui/Icon";

type Feature = { icon: IconName; title: string; text: string };

export const philosophy = {
  vision: "To be the go-to growth partner for ambitious brands, in India and around the world.",
};

export const story = {
  paragraphs: [
    "At MP Tecc, we're passionate about helping businesses thrive online through innovative strategies, creative solutions and measurable results.",
    "As a content-first agency, we deliver on both strategy and execution. We take a scientific approach to inbound and outbound marketing — researching, testing and refining — to create digital campaigns that draw in your target audience and move them through your sales funnel.",
    "From a neighbourhood café to a growing B2B brand, every client gets the same thing: a team that cares about their goals and is honest about what's working.",
  ],
};

export const values: Feature[] = [
  {
    icon: "sparkle",
    title: "Content first",
    text: "Great marketing starts with something worth saying. We lead with useful, creative content.",
  },
  {
    icon: "chart",
    title: "Data driven",
    text: "Decisions are backed by research and results, not guesswork. We test, measure and improve.",
  },
  {
    icon: "shield",
    title: "Transparent",
    text: "Clear plans, honest timelines and plain-language reports — no jargon, no surprises.",
  },
  {
    icon: "users",
    title: "True partners",
    text: "We work as an extension of your team and care about your growth as much as you do.",
  },
];

export const processSteps: Feature[] = [
  {
    icon: "compass",
    title: "Strategy",
    text: "We study your market, audience and competitors, then build a plan with clear goals and measurable outcomes.",
  },
  {
    icon: "rocket",
    title: "Launch",
    text: "Campaigns, content and websites go live — designed to reach the right people and pull them into your funnel.",
  },
  {
    icon: "bolt",
    title: "Automate",
    text: "Tailor-made workflows and integrations remove manual busywork so your team can focus on growth.",
  },
  {
    icon: "chart",
    title: "Grow",
    text: "We read the data, test new ideas and double down on what works. Every month, a little sharper.",
  },
];

export const reasons: Feature[] = [
  {
    icon: "wallet",
    title: "Cost-effective",
    text: "Spend where it counts. Targeted channels and clear ROI tracking stretch your budget further than traditional media.",
  },
  {
    icon: "target",
    title: "Targeted",
    text: "Reach people by location, interest and intent — not everyone, just the customers most likely to buy.",
  },
  {
    icon: "chart",
    title: "Measurable",
    text: "Every campaign is tracked and reported in plain language, so you always know what's working and why.",
  },
  {
    icon: "sliders",
    title: "Flexible",
    text: "Plans that fit your budget and adapt fast. When results shift, we shift spend and strategy with them.",
  },
  {
    icon: "globe",
    title: "Global reach",
    text: "Based in Indore, built for anywhere. Digital channels put your brand in front of customers worldwide.",
  },
  {
    icon: "heart",
    title: "Real engagement",
    text: "Content and conversations that build a community around your brand — not just empty impressions.",
  },
];
