import React, { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/dark-mode";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogIn, LogInIcon } from "lucide-react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex items-end justify-end">
      <div className="container flex  border-none justify-center z-20 fixed top-2  ">
        <nav className="shadow-lg flex items-center justify-between gap-20 lg:gap-3 px-3 py-1 lg:py-1 bg-slate-200 dark:bg-slate-950 border border-slate-500 font-semibold text-sky-500 rounded-full">
          <div className=" logo px-2 cursor-pointer ">
            <Image
              height={400}
              width={400}
              src="/SUI.png"
              className="rounded-3xl border w-10 h-10 border-none  shadow-lg"
              alt="Company Logo"
            />
            <span className="sr-only">Company Logo</span>
          </div>
          <ul className="lg:flex flex-row items-center gap-2 p-1 hidden ">
            <li>
              <a
                href=""
                className="px-2 backdrop:blur-md  hover:transparent  hover:bg-slate-200 dark:hover:bg-slate-600 ease-in-out rounded-full transition-all cursor-pointer"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href=""
                className="px-2 backdrop:blur-md  hover:transparent  hover:bg-slate-200 dark:hover:bg-slate-600 ease-in-out rounded-full transition-all cursor-pointer"
              >
                Activity
              </a>
            </li>
            <li>
              <a
                href=""
                className="px-3 backdrop:blur-md  hover:text-slate-600 ease-in-out rounded-full transition-all cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <div>
              <ModeToggle />
            </div>
            <div className="flex items-center">
              {user ? (
                <LoginLink className="flex  flex-row gap-2 items-center">
                  <button className="p-2 rounded-full bg-sky-500 text-slate-950 dark:text-slate-100  hover:bg-sky-600 transition flex flex-row gap-2">
                    <LogIn className="h-4 w-4" />
                  </button>
                </LoginLink>
              ) : (
                <RegisterLink className="flex flex-row gap-2 items-center">
                  <button className="p-2 rounded-full bg-sky-500 text-slate-950 dark:text-slate-100 hover:bg-sky-600 transition flex flex-row gap-2">
                    <LogInIcon className="h-4 w-4" />
                  </button>
                </RegisterLink>
              )}
            </div>
          </ul>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide-react AlignJustify 24 block lg:hidden cursor-pointer"
            >
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Mobile Menubar Icon</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
