import type { Metadata } from "next";
import Shows from "./ShowsClient";

export const metadata: Metadata = {
  title: "Shows | Midnight Drive",
  description:
    "Find our upcoming shows!",
};

export default function Page() {
  return <Shows />;
}
