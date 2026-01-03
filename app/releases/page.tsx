import type { Metadata } from "next";
import Releases from "./ReleasesClient";

export const metadata: Metadata = {
  title: "Releases | Midnight Drive",
  description:
    "Find our latest songs, and the stories behind them!",
};

export default function Page() {
  return <Releases />;
}
