import Image from "next/image";
import BlogSidebarAuthor from "./(ui)/BlogSidebarAuthor";
import SidebarAuthor from "./(ui)/BlogSidebarAuthor";
import { ScrollArea } from "@/components/ui/scroll-area";

const socialLinks = [
  {
    href: "#",
    label: "Discord",
    icon: (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
      </svg>
    ),
  },
  {
    href: "#",
    label: "Discord",
    icon: (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
      </svg>
    ),
  },
  {
    href: "#",
    label: "Discord",
    icon: (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
      </svg>
    ),
  },
  // Add other social links here (Twitter, Telegram, YouTube)
];

export default function Page({ params }: { params: { navslug: string } }) {
  return (
    <>
      <section className="py-12 bg-slate-200 dark:bg-slate-800 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-6 lg:gap-x-12 xl:gap-x-20">
            <div className="bg-gray-100 dark:bg-slate-600 lg:col-span-4 rounded-xl">
              <ScrollArea className="h-full w-full rounded-xl">
                <main className="lg:w-2/3 lg:pr-8">
                  <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
                  <p className="mb-4">
                    This is where your main blog content would go. You can add
                    paragraphs, images, and other elements here. My Post:{" "}
                    {params.navslug}
                  </p>
                  {/* Add more blog content here */}
                </main>
              </ScrollArea>
            </div>

            <SidebarAuthor
              imageUrl="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-author/4/author-4.png"
              name="Marriot Jennifer"
              description="Lorem ipsum dolor sit amet, cons tetur adipiscing elit. Orci coodo, act mollis blandit enim mole aana."
              socialLinks={socialLinks}
            />
          </div>
        </div>
      </section>
    </>
  );
}
