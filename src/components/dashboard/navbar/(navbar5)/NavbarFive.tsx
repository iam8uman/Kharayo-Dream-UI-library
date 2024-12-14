import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const NavbarFive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc =
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg";
  const darkLogoSrc =
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg";

  const menuItems = [
    { href: "/", label: "Home", title: "Home" },
    { href: "/best-sellers", label: "Best Sellers", title: "Best Sellers" },
    { href: "/gift-ideas", label: "Gift Ideas", title: "Gift Ideas" },
    { href: "/deals", label: "Today's Deals", title: "Today's Deals" },
    { href: "/sell", label: "Sell", title: "Sell" },
  ];

  const cartItems = [
    { href: "#", name: "Apple iPhone 15", price: 599, quantity: 1 },
    { href: "#", name: "Apple iPad Air", price: 499, quantity: 1 },
    { href: "#", name: "Apple Watch SE", price: 299, quantity: 2 },
    { href: "#", name: "Sony Playstation 5", price: 799, quantity: 1 },
    { href: "#", name: "Apple iMac 2022", price: 2999, quantity: 3 },
  ];

  const userMenuItems = [
    { href: "/account", label: "My Account", title: "My Account" },
    { href: "/orders", label: "My Orders", title: "My Orders" },
    { href: "/settings", label: "Settings", title: "Settings" },
    { href: "/favorites", label: "Favorites", title: "Favorites" },
    {
      href: "/addresses",
      label: "Delivery Addresses",
      title: "Delivery Addresses",
    },
    { href: "/billing", label: "Billing Data", title: "Billing Data" },
  ];

  return (
    <div className=" bg-slate-950 dark:bg-white text-slate-100 sticky top-0 border-b border-slate-900 p-6 ">
      <nav className="bg-white dark:bg-gray-800 antialiased ">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <Link href="/" title="Home" className="">
                  <Image
                    height={400}
                    width={400}
                    className="block w-auto h-8 dark:hidden"
                    src={logoSrc}
                    alt="Logo"
                  />
                  <Image
                    height={400}
                    width={400}
                    className="hidden w-auto h-8 dark:block"
                    src={darkLogoSrc}
                    alt="Dark Logo"
                  />
                </Link>
              </div>

              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      title={item.title}
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton"
                data-dropdown-toggle="myCartDropdown"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="myCartDropdown"
                className="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
              >
                {cartItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-2">
                    <div>
                      <Link
                        href={item.href}
                        className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-6">
                      <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                        Qty: {item.quantity}
                      </p>

                      <button
                        data-tooltip-target={`tooltipRemoveItem${index}`}
                        type="button"
                        className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                      >
                        <span className="sr-only">Remove</span>
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id={`tooltipRemoveItem${index}`}
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Remove item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                ))}

                <Link
                  href="/checkout"
                  title="Proceed to Checkout"
                  className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Proceed to Checkout
                </Link>
              </div>

              <button
                id="userDropdownButton"
                data-dropdown-toggle="userDropdown"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Account
                <svg
                  className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="userDropdown"
                className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  {userMenuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        title={item.title}
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Link
                    href="/signout"
                    title="Sign Out"
                    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="ecommerce-navbar-menu"
                aria-expanded={isMenuOpen}
                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              id="ecommerce-navbar-menu"
              className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4"
            >
              <ul className="text-gray-900 text-sm font-medium dark:text-white space-y-3">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-primary-700 dark:hover:text-primary-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarFive;

export const actualCodeString = `
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const NavbarFive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc =
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg";
  const darkLogoSrc =
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg";

  const menuItems = [
    { href: "/", label: "Home", title: "Home" },
    { href: "/best-sellers", label: "Best Sellers", title: "Best Sellers" },
    { href: "/gift-ideas", label: "Gift Ideas", title: "Gift Ideas" },
    { href: "/deals", label: "Today's Deals", title: "Today's Deals" },
    { href: "/sell", label: "Sell", title: "Sell" },
  ];

  const cartItems = [
    { href: "#", name: "Apple iPhone 15", price: 599, quantity: 1 },
    { href: "#", name: "Apple iPad Air", price: 499, quantity: 1 },
    { href: "#", name: "Apple Watch SE", price: 299, quantity: 2 },
    { href: "#", name: "Sony Playstation 5", price: 799, quantity: 1 },
    { href: "#", name: "Apple iMac 2022", price: 2999, quantity: 3 },
  ];

  const userMenuItems = [
    { href: "/account", label: "My Account", title: "My Account" },
    { href: "/orders", label: "My Orders", title: "My Orders" },
    { href: "/settings", label: "Settings", title: "Settings" },
    { href: "/favorites", label: "Favorites", title: "Favorites" },
    {
      href: "/addresses",
      label: "Delivery Addresses",
      title: "Delivery Addresses",
    },
    { href: "/billing", label: "Billing Data", title: "Billing Data" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased ">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <Link href="/" title="Home" className="">
                  <Image
                    height={400}
                    width={400}
                    className="block w-auto h-8 dark:hidden"
                    src={logoSrc}
                    alt="Logo"
                  />
                  <Image
                    height={400}
                    width={400}
                    className="hidden w-auto h-8 dark:block"
                    src={darkLogoSrc}
                    alt="Dark Logo"
                  />
                </Link>
              </div>

              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      title={item.title}
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartDropdownButton"
                data-dropdown-toggle="myCartDropdown"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="myCartDropdown"
                className="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
              >
                {cartItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-2">
                    <div>
                      <Link
                        href={item.href}
                        className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-6">
                      <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                        Qty: {item.quantity}
                      </p>

                      <button
                        data-tooltip-target={tooltipRemoveItem{index}} // use backtick inside {} and $ before index
                        type="button"
                        className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                      >
                        <span className="sr-only">Remove</span>
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id={tooltipRemoveItem{index}} // use backticks inside {} and $ before index
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                      >
                        Remove item
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                ))}

                <Link
                  href="/checkout"
                  title="Proceed to Checkout"
                  className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Proceed to Checkout
                </Link>
              </div>

              <button
                id="userDropdownButton"
                data-dropdown-toggle="userDropdown"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Account
                <svg
                  className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="userDropdown"
                className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  {userMenuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        title={item.title}
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Link
                    href="/signout"
                    title="Sign Out"
                    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="ecommerce-navbar-menu"
                aria-expanded={isMenuOpen}
                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              id="ecommerce-navbar-menu"
              className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4"
            >
              <ul className="text-gray-900 text-sm font-medium dark:text-white space-y-3">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-primary-700 dark:hover:text-primary-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
  );
};

export default NavbarFive;
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
