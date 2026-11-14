import { siteConfig } from "@/config/site";

export type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  /** ISO date the document last changed. */
  updated: string;
  sections: LegalSection[];
};

const { email, phone } = siteConfig.contact;

/*
 * Note: these documents were rewritten from the previous mptecc.com policies.
 * Have them reviewed by a legal professional before relying on them.
 */

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "This policy explains what information MP Tecc collects when you use our website and services, why we collect it, and the choices you have.",
  updated: "2026-11-14",
  sections: [
    {
      heading: "Information we collect",
      body: ["We collect only the information we need to provide better digital marketing services. This may include:"],
      list: [
        "Contact details you share with us, such as your name, email address and phone number",
        "Website activity and device information, such as pages visited and browser type",
        "Cookies and similar technologies",
        "Interactions with our campaigns and emails",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "We use this information to respond to enquiries, deliver our services, improve our website and user experience, run relevant marketing campaigns, and analyse performance.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Our website uses cookies to improve your experience and measure website traffic. You can control or delete cookies at any time through your browser settings.",
      ],
    },
    {
      heading: "Sharing your information",
      body: [
        "We do not sell your personal data. We may share it with trusted partners only where needed to run campaigns, provide analytics, or comply with the law — and always under strict confidentiality.",
      ],
    },
    {
      heading: "Data security",
      body: [
        "We follow industry-standard security practices to protect your data from unauthorised access, loss or misuse. While we take every reasonable measure, no method of transmission or storage is completely secure, and we cannot be responsible for breaches caused by third parties beyond our control.",
      ],
    },
    {
      heading: "Your rights",
      body: ["You can ask us at any time to:"],
      list: [
        "Access the personal data we hold about you",
        "Correct data that is inaccurate",
        "Delete your data",
        "Stop sending you marketing communications",
      ],
    },
    {
      heading: "Legal compliance",
      body: [
        "We handle personal data in line with applicable laws, including India's Information Technology Act and data protection regulations, and the GDPR where it applies.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy from time to time. Any changes will be posted on this page with a new “last updated” date.",
      ],
    },
    {
      heading: "Contact us",
      body: [`For any questions about this policy or your data, email us at ${email}.`],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms & Conditions",
  intro:
    "These terms apply to your use of the MP Tecc website, services and content. By using our website or services, you agree to them.",
  updated: "2026-11-14",
  sections: [
    {
      heading: "Content ownership",
      body: [
        "All content on this website — including text, graphics, images and other material — is owned by or licensed to MP Tecc. You may not use, reproduce or distribute it without our prior written consent.",
      ],
    },
    {
      heading: "Permitted use",
      body: [
        "You may view and use our content for personal and informational purposes only. Commercial use, modification or resale requires our written permission.",
      ],
    },
    {
      heading: "Trademarks",
      body: [
        "Trademarks and logos shown on this website belong to their respective owners. Nothing on this site grants a licence to use any trademark without the owner's consent.",
      ],
    },
    {
      heading: "Accuracy of information",
      body: [
        "We work hard to keep information accurate and up to date, but we do not guarantee that it is complete, reliable or error-free. Please verify information independently before making decisions based on it.",
      ],
    },
    {
      heading: "No guarantee of results",
      body: [
        "Digital marketing results depend on many factors outside our control, such as competition, market conditions and platform algorithm changes. We therefore cannot guarantee specific outcomes.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the fullest extent permitted by law, MP Tecc is not liable for any direct, indirect, incidental or consequential damages arising from the use of, or inability to use, our website, content or services.",
      ],
    },
    {
      heading: "Third-party links",
      body: [
        "Our website may link to third-party websites for your convenience. We are not responsible for their content, accuracy or practices.",
      ],
    },
    {
      heading: "Privacy",
      body: ["Please read our Privacy Policy to understand how we collect, use and protect your personal data."],
    },
    {
      heading: "Changes to these terms",
      body: ["We may update these terms at any time. Changes take effect as soon as they are posted on this page."],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.",
      ],
    },
    {
      heading: "Contact us",
      body: [`If you have any questions about these terms, email us at ${email}.`],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  title: "Refund & Cancellation Policy",
  intro:
    "This policy applies to all services provided by MP Tecc, whether purchased through this website or any other channel.",
  updated: "2026-11-14",
  sections: [
    {
      heading: "Nature of our services",
      body: [
        "All our services are customised and require dedicated resources, strategy and time from our team. For this reason, payments for our services are non-refundable, except as described below.",
      ],
    },
    {
      heading: "Cancellations",
      body: [
        `To cancel a service, notify us in writing at ${email} within 24 hours of purchase. Cancellation requests received after 24 hours cannot be accepted.`,
      ],
    },
    {
      heading: "When a refund may be considered",
      body: [
        "Refunds are not provided for completed or in-progress work. A refund may be considered only in these exceptional cases:",
      ],
      list: [
        "The service was not delivered at all",
        "You were charged twice for the same service",
        "An incorrect amount was charged due to a technical error",
      ],
    },
    {
      heading: "Refund processing",
      body: ["Approved refunds are processed within 7–10 working days to the original payment method."],
    },
    {
      heading: "No guarantee of results",
      body: [
        "Digital marketing results depend on factors beyond our control, such as competition, market behaviour and algorithm changes. Not achieving a specific result is not grounds for a refund.",
      ],
    },
    {
      heading: "Disputes",
      body: [
        "If you disagree with a decision, contact us and we will review the details of your case. Our decision after this review is final.",
      ],
    },
    {
      heading: "Contact us",
      body: [`For refund or cancellation questions, email ${email} or call ${phone}.`],
    },
  ],
};
