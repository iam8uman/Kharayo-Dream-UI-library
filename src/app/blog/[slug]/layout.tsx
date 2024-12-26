import type { Metadata } from "next";
import { getPost } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Kharayo",
    };
  }

  const ogImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "https://Kharayo.whysumancode.com/default-og-image.jpg";

  return {
    title: `${post.title} | Kharayo Blog`,
    description: post.excerpt || `Read ${post.title} on Kharayo Blog.`,
    keywords: post.categories
      .map((category: { title: any }) => category.title)
      .join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Kharayo Blog.`,
      type: "article",
      url: `https://Kharayo.whysumancode.com/post/${post.slug.current}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.categories.map((category: any) => category.title),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Kharayo Blog.`,
      images: [ogImageUrl],
    },
    robots: "index, follow",
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
