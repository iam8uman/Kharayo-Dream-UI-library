import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/dark-mode";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex items-center justify-center z-50 sticky top-24">
      <div className="container flex  border-none justify-center z-20 fixed top-2  ">
        <nav className="shadow-lg flex items-center justify-between gap-20 lg:gap-3 px-3 lg:py-0 bg-slate-200 dark:bg-slate-950 border border-slate-500 font-semibold text-sky-500 rounded-full">
          <div className=" logo px-2 cursor-pointer bg-transparent ">
            <Image
              height={400}
              width={400}
              src="/SUI.png"
              className="rounded-3xl border w-10 h-10 border-none "
              alt="Company Logo"
            />
            <span className="sr-only">Company Logo</span>
          </div>
          <ul className="lg:flex flex-row items-center gap-2 p-1 hidden ">
            <li>
              {/* {user ? ( */}
              <Link
                href={"/dashboard"}
                className="flex flex-row gap-2 items-center"
              >
                <button className="p-2 rounded-full text-sky-500  hover:text-black hover:dark:text-white transition flex flex-row gap-2">
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
            <Link
                href="/blog"
                className="px-2 backdrop:blur-md  text-sky-500  hover:text-black hover:dark:text-white ease-in-out rounded-full transition-all cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="#pricing"
                className="px-3 backdrop:blur-md  text-sky-500  hover:text-black hover:dark:text-white ease-in-out rounded-full transition-all cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <div className=" rounded-full">
              <ModeToggle />
            </div>
          </ul>
          <div className="lg:hidden">
            <ModeToggle />
            <span className="sr-only">Mobile Menubar Icon</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
