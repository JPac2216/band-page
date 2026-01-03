import type { Metadata } from "next";
import About from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Midnight Drive",
  description:
    "Learn more about Midnight Drive and our history.",
};

export default function Page() {
  return <About />;
}
