export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

/**
 * TODO(content): confirm names and titles with MP Tecc.
 * The old site listed "Hiten Dube" / "Hitesh Dube" and "Rupesh Pandagre" / "Rupesh Singh" on different pages.
 * These follow the old About page.
 */
export const team: TeamMember[] = [
  {
    name: "Rupesh Pandagre",
    role: "Managing Director",
    bio: "Drives operational excellence across our digital marketing and IT services.",
  },
  {
    name: "Hiten Dube",
    role: "Managing Director",
    bio: "Leads client partnerships and keeps every project focused on measurable growth.",
  },
  {
    name: "Lalit Singh Thakur",
    role: "Digital & IT Expert",
    bio: "Specialist in digital marketing, tech solutions and online strategy.",
  },
];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
