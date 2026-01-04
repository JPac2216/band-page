import type { Metadata } from "next";
import City_Lights from "./CityLightsClient";

export const metadata: Metadata = {
  title: "Releases | Midnight Drive",
  description:
    "Discover the origins of City Lights, Midnight Drive's first written song.",
};

export default function Page() {
  return <City_Lights />;
}
