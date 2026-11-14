export type Testimonial = {
  quote: string;
  name: string;
  source: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Excellent service and timely delivery. The team was supportive throughout the project.",
    name: "Priya Desai",
    source: "Google Review",
    rating: 5,
  },
  {
    quote: "Absolutely amazing experience! They delivered ahead of schedule and exceeded expectations.",
    name: "creative_minds",
    source: "Google Review",
    rating: 5,
  },
];
