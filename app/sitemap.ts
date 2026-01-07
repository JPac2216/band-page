import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://midnightdrivenj.com",
      lastModified: new Date(),
    },
    {
      url: "https://midnightdrivenj.com/releases",
      lastModified: new Date(),
    },
    {
      url: "https://midnightdrivenj.com/shows",
      lastModified: new Date(),
    },
    {
      url: "https://midnightdrivenj.com/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://midnightdrivenj.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://midnightdrivenj.com/booking",
      lastModified: new Date(),
    },
  ];
}
