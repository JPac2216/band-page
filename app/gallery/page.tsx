import type { Metadata } from "next";
import Gallery from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Midnight Drive",
  description:
    "Check out our best pictures and videos from our latest shows!",
};

export default function Page() {
  return <Gallery />;
}
