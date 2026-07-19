import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the ZAPP team with questions, feedback, support requests or partnership enquiries.",
};

export default function Contact() {
  return <ContactPage />;
}
