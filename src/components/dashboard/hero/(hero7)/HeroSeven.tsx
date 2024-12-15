import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
// Hero.tsx
import { Sparkles } from "./Sparkles";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Input } from "@/components/ui/input";

export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Example = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <main className=" h-screen  w-full  overflow-hidden bg-black text-white ">
        <section className="container mx-auto relative h-[90vh] mt-4 w-full overflow-hidden">
          <article className="grid gap-4 text-center relative z-10 pt-28 justify-center">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Early Access Offer - 50% Off on All Events
            </span>
            <h1 className="2xl:text-6xl  xl:text-6xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              Discover & Participate in Events <br /> That Spark Your Passion!
            </h1>
            <div className=" text-center">
              Explore a world of events tailored to your interests. From
              workshops and competitions to meetups and webinars, <br /> find
              opportunities that align with your passion and boost your skills.
            </div>
            <div className="flex flex-row items-center justify-center mb-6 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search Events"
                  className="w-full pl-10 h-12 text-base text-white placeholder-white/80 bg-black/30 backdrop-blur-xl border-primary focus:border-primary/80 focus:ring-white/30 rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/browse-events">
                <div className="group relative cursor-pointer p-2 w-44 border bg-red-500 rounded-sm overflow-hidden text-white text-center font-semibold">
                  <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Events <Star size={20} />
                  </span>
                  <div className="flex gap-2 text-white bg-black z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 group-hover:rounded-none ">
                    <span className="flex items-center justify-center gap-2">
                      Explore Events <Star size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Example;

export const actualCodeString = `
/ Hero.tsx
import { Sparkles } from "./Sparkles";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Input } from "@/components/ui/input";

export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Example = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <main className=" h-screen  w-full  overflow-hidden bg-black text-white ">
        <section className="container mx-auto relative h-[90vh] mt-4 w-full overflow-hidden">
          <article className="grid gap-4 text-center relative z-10 pt-28 justify-center">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Early Access Offer - 50% Off on All Events
            </span>
            <h1 className="2xl:text-6xl  xl:text-6xl text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
              Discover & Participate in Events <br /> That Spark Your Passion!
            </h1>
            <div className=" text-center">
              Explore a world of events tailored to your interests. From
              workshops and competitions to meetups and webinars, <br /> find
              opportunities that align with your passion and boost your skills.
            </div>
            <div className="flex flex-row items-center justify-center mb-6 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex w-full items-center space-x-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 z-10 ml-2" />
                <Input
                  type="search"
                  placeholder="Search Events"
                  className="w-full pl-10 h-12 text-base text-white placeholder-white/80 bg-black/30 backdrop-blur-xl border-primary focus:border-primary/80 focus:ring-white/30 rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/browse-events">
                <div className="group relative cursor-pointer p-2 w-44 border bg-primary/90 rounded-sm overflow-hidden text-white text-center font-semibold">
                  <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Events <Star size={20} />
                  </span>
                  <div className="flex gap-2 text-white bg-black z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 group-hover:rounded-none ">
                    <span className="flex items-center justify-center gap-2">
                      Explore Events <Star size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </article>

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Sparkles
              density={1800}
              speed={1.2}
              color="#48b6ff"
              direction="top"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Example;
`;

const InstallationStep: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

interface InstallationPageProps {
  steps: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function InstallationPage({ steps }: InstallationPageProps) {
  return (
    <div className="min-h-screen pt-6  mt-16">
      <h1 className="text-3xl font-bold mb-6">Installation</h1>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          <p>CLI Installation Comming Soon!!!</p>
        </TabsContent>

        <TabsContent value="manual">
          <Card className="bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              {steps.map((step, index) => (
                <InstallationStep key={index} title={step.title}>
                  {step.content}
                </InstallationStep>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
