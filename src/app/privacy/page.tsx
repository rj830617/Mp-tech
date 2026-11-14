import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.intro,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} path="/privacy" />;
}
