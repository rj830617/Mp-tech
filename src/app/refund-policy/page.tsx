import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { refundPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: refundPolicy.title,
  description: refundPolicy.intro,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <LegalPage document={refundPolicy} path="/refund-policy" />;
}
