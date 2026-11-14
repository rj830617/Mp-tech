export type Project = {
  name: string;
  category: string;
  industry: "Food & Beverage" | "Education" | "Media" | "Lifestyle";
  /** Base hue (0–360) for the project card's gradient. */
  hue: number;
};

export const projects: Project[] = [
  { name: "Raghvam", category: "Café & Restaurant", industry: "Food & Beverage", hue: 18 },
  { name: "Mumbasa Café", category: "Café & Restaurant", industry: "Food & Beverage", hue: 152 },
  { name: "FC4U", category: "Flying Colors 4 U", industry: "Lifestyle", hue: 262 },
  { name: "Banger", category: "Continental, Asian & Bar Food", industry: "Food & Beverage", hue: 340 },
  { name: "English-Samjho", category: "Redefining English", industry: "Education", hue: 205 },
  { name: "Magician Film", category: "Film Production", industry: "Media", hue: 45 },
  { name: "Collector Ki Chai", category: "Shape your dream with a cup of tea", industry: "Food & Beverage", hue: 95 },
];

/** "English-Samjho" → "ES", "Raghvam" → "R" */
export function projectMonogram(name: string): string {
  return name
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
