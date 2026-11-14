/**
 * Global site configuration: brand, contact details and social profiles.
 * Change a phone number or email here and it updates everywhere.
 */
export const siteConfig = {
  name: "MP Tecc",
  url: "https://mptecc.com",
  title: "MP Tecc — Digital Marketing Agency in Indore, India",
  description:
    "MP Tecc is a digital marketing agency in Indore, India. We run SEO, paid ads, social and content campaigns, build high-converting websites, and turn your data into decisions.",
  locale: "en_IN",
  twitterHandle: "@mp_tecc",
  contact: {
    email: "info@mptecc.com",
    phone: "+91 93033 22263",
    phoneHref: "tel:+919303322263",
    whatsapp: "https://wa.me/919303322263",
    location: "Indore, Madhya Pradesh, India",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/mp_tecc/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mp-tecc-b2908b365/", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575728087904", icon: "facebook" },
    { label: "X", href: "https://x.com/mp_tecc", icon: "x" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
