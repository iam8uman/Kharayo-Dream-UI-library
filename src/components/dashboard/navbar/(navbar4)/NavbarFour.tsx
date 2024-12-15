"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Cross, Menu, Pause, Play, Plus } from "lucide-react";
import whysumancode from "@/../public/SUI.png";

const Example = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <header
        className="py-2 bg-slate-950 text-slate-100 sm:py-3 sticky top-0 border-b border-slate-900 "
        x-data="{expanded: false}"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  height={500}
                  width={500}
                  className="w-16 h-10 aspect-square object-contain  "
                  src={whysumancode}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="transition-transform duration-300 ease-in-out"
              >
                {!expanded ? (
                  <>
                    <Menu className="w-7 h-7" />
                  </>
                ) : (
                  <>
                    <Plus className="w-7 h-7 rotate-45" />
                  </>
                )}
              </button>
            </div>
            <div className="hidden md:items-center md:justify-start md:ml-6 md:mr-auto md:space-x-10 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-slate-950 scale-110 text-slate-200">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-4">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Corporate Landing Page
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Create a professional online presence for your
                                business.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="#services" title="Web & Mobile App">
                          Develop responsive web and mobile applications.
                        </ListItem>
                        <ListItem href="#services" title="SEO">
                          Optimize your website for search engines and increase
                          visibility.
                        </ListItem>
                        <ListItem href="#services" title="Custom Service">
                          Tailored solutions like e-commerce and CRM systems.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()}, bg-slate-950 scale-110 mx-4 text-slate-200`}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()}, bg-slate-950 scale-110 mx-4 text-slate-200`}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="relative overflow-hidden group items-center rounded-sm ">
              <a
                href="https://cal.com/sumansharma"
                target="_blank"
                className="relative px-2 z-10 flex flex-row items-center p-2 text-bg-gradient-to-r from-sky-400 to-purple-500"
              >
                <Play className="w-5 h-5 mx-1" />
                Book a Call
              </a>

              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 animate-gradient-x drop-shadow-lg"></span>
              <span className="absolute inset-[3px] bg-slate-950 rounded-sm "></span>
            </div>
          </nav>
          {expanded && (
            <nav className="lg:hidden">
              <div className="px-1 pt-8 pb-4 bg-slate-950 text-slate-100 ">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem >
                      <NavigationMenuTrigger className="bg-slate-950 scale-150 text-slate-200">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-950 text-slate-100">
                          <li className="row-span-4">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Corporate Landing Page
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Create a professional online presence for your
                                  business.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="#services" title="Web & Mobile App">
                            Develop responsive web and mobile applications.
                          </ListItem>
                          <ListItem href="#services" title="SEO">
                            Optimize your website for search engines and
                            increase visibility.
                          </ListItem>
                          <ListItem href="#services" title="Custom Service">
                            Tailored solutions like e-commerce and CRM systems.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#about" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "bg-slate-950 text-slate-200")}
                            >
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#about" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "bg-slate-950 text-slate-200")}
                          >
                          Contact
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Example;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";



export const actualCodeString = `

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Cross, Menu, Pause, Play, Plus } from "lucide-react";
import whysumancode from "@/../public/Kharayo.png";

const Example = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <header
        className="py-2 bg-slate-950 text-slate-100 sm:py-3 sticky top-0 border-b border-slate-900 "
        x-data="{expanded: false}"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  height={500}
                  width={500}
                  className="w-16 h-10 aspect-square object-contain  "
                  src={whysumancode}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="transition-transform duration-300 ease-in-out"
              >
                {!expanded ? (
                  <>
                    <Menu className="w-7 h-7" />
                  </>
                ) : (
                  <>
                    <Plus className="w-7 h-7 rotate-45" />
                  </>
                )}
              </button>
            </div>
            <div className="hidden md:items-center md:justify-start md:ml-6 md:mr-auto md:space-x-10 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-slate-950 scale-110 text-slate-200">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-4">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Corporate Landing Page
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Create a professional online presence for your
                                business.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="#services" title="Web & Mobile App">
                          Develop responsive web and mobile applications.
                        </ListItem>
                        <ListItem href="#services" title="SEO">
                          Optimize your website for search engines and increase
                          visibility.
                        </ListItem>
                        <ListItem href="#services" title="Custom Service">
                          Tailored solutions like e-commerce and CRM systems.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "bg-slate-950 scale-110 mx-4 text-slate-200")}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "bg-slate-950 scale-110 mx-4 text-slate-200")}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="relative overflow-hidden group items-center rounded-sm ">
              <a
                href="https://cal.com/sumansharma"
                target="_blank"
                className="relative px-2 z-10 flex flex-row items-center p-2 text-bg-gradient-to-r from-sky-400 to-purple-500"
              >
                <Play className="w-5 h-5 mx-1" />
                Book a Call
              </a>

              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 animate-gradient-x drop-shadow-lg"></span>
              <span className="absolute inset-[3px] bg-slate-950 rounded-sm "></span>
            </div>
          </nav>
          {expanded && (
            <nav className="lg:hidden">
              <div className="px-1 pt-8 pb-4 bg-slate-950 text-slate-100 ">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-slate-950 scale-110 text-slate-200">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-950 text-slate-100">
                          <li className="row-span-4">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Corporate Landing Page
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Create a professional online presence for your
                                  business.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="#services" title="Web & Mobile App">
                            Develop responsive web and mobile applications.
                          </ListItem>
                          <ListItem href="#services" title="SEO">
                            Optimize your website for search engines and
                            increase visibility.
                          </ListItem>
                          <ListItem href="#services" title="Custom Service">
                            Tailored solutions like e-commerce and CRM systems.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#about" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "bg-slate-950 text-slate-200")}
                        >
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#about" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "bg-slate-950 text-slate-200")}
                          >
                          Contact
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Example;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
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
    <div className="min-h-screen pt-6 mt-16">
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
