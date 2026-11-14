import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.intro,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage document={termsOfService} path="/terms" />;
}
