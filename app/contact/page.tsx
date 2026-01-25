import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Hunehar",
  description:
    "Get in touch with Hunehar, a non-profit charity organisation working to provide education and welfare support for underprivileged children in Pakistan.",
};

export default function ContactPage() {
  return <ContactClient />;
}
