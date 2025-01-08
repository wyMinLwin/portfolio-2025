import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://waiyanminlwin.vercel.app/",
            lastModified: new Date(1736267737215),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
