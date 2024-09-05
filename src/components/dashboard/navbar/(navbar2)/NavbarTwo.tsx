import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  AlignJustify,
  AlignLeft,
  Bell,
  BellIcon,
  BracesIcon,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";

export default function Example() {
  return (
    <>
      <nav className="bg-white dark:bg-black border border-white">
        <section className="bg-gradient-to-r from-black via-rose-800 to-rose-400 w-full h-10 text-white text-sm px-5 lg:px-10 hidden md:flex items-center justify-center lg:justify-between">
          <div className="flex items-center justify-start gap-5">
            <div className="flex items-center justify-between gap-3 cursor-pointer">
              <Send size={16} />
              <span className="sr-only">City Name</span>Sydny
            </div>
            <div className="flex items-center justify-between gap-3 cursor-pointer">
              <Send size={18} />
              <span className="sr-only">Location</span>Merlin square
            </div>
            <p>+32- 4444-5555</p>
          </div>
          <div className="hidden lg:flex items-center justify-between lg:gap-16">
            <ul className="flex items-center justify-start gap-5">
              <li className="uppercase hover:opacity-75">
                <a className=" " href="#">
                  credit and installments
                </a>
              </li>
              <li className="uppercase hover:opacity-75">
                <a className=" " href="#">
                  Business
                </a>
              </li>
              <li className="uppercase hover:opacity-75">
                <a className=" " href="#">
                  M.service
                </a>
              </li>
              <li className="uppercase hover:opacity-75">
                <a className=" " href="#">
                  M.mug
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex items-center justify-between gap-2 lg:gap-5 h-16 px-5 lg:px-10">
          <div className="flex items-center lg:gap-10">
            <Image
              height={32}
              width={32}
              src="/SUI.png"
              alt="Company Logo"
              className="w-auto h-auto object-contain"
            />
            <span className="sr-only">Company Logo</span>
            <button className="bg-rose-500 rounded-md cursor-pointer w-24 h-8 text-xs hidden lg:flex items-center justify-between px-2 text-white">
              <AlignLeft size={16} />
              CATALOG
            </button>
          </div>
          <div className="flex-1 flex items-center justify-end gap-2 lg:gap-5">
            <label htmlFor="search-icon-3" className="sr-only">
              Search Here
            </label>
            <input
              id="search-icon-3"
              className="h-8 rounded-md hidden lg:block border focus:outline-none flex-1 px-2"
              placeholder="Search"
              type="text"
              name=""
            />
            <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
              <BracesIcon size={16} className="16 text-black " />
              <span className="sr-only"> Icon</span>
            </div>
            <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
              <BellIcon size={16} className="16 text-black" />
              <span className="sr-only"> Icon</span>
            </div>
            <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
              <Bell size={16} className=" text-black" />
              <span className="sr-only"> Icon</span>
            </div>
            <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
              <AlignJustify size={16} className=" text-black" />
              <span className="sr-only"> Icon</span>
            </div>
            <AlignJustify size={24} className=" text-black " />
            <span className="sr-only">Mobile Menubar</span>
          </div>
        </section>
        <section className="w-full hidden lg:flex justify-around relative h-14 items-center border-b lg:px-10 ">
          <a className="text-rose-500 uppercase text-sm" href="#">
            All Promotions
          </a>
          <div className="bg-black rounded-md cursor-pointer w-auto gap-4 h-8 text-xs flex items-center justify-between px-2 text-white">
            <AlignLeft size={16} />
            Black Friday
          </div>
          <a className=" uppercase text-sm hover:opacity-70" href="#">
            Smart phones
          </a>
          <a className=" uppercase text-sm hover:opacity-70" href="#">
            Laptop
          </a>
          <a className=" uppercase text-sm hover:opacity-70" href="#">
            Refregator
          </a>
          <a className=" uppercase text-sm hover:opacity-70" href="#">
            Lcd TV
          </a>
          <a className=" uppercase text-sm hover:opacity-70" href="#">
            Air conditioner
          </a>
        </section>
      </nav>
    </>
  );
}

export const actualCodeString = `
 <nav className="bg-white dark:bg-black border border-white">
  <section className="bg-gradient-to-r from-black via-rose-800 to-rose-400 w-full h-10 text-white text-sm px-5 lg:px-10 hidden md:flex items-center justify-center lg:justify-between">
    <div className="flex items-center justify-start gap-5">
      <div className="flex items-center justify-between gap-3 cursor-pointer">
        <Send size={16} />
        <span className="sr-only">City Name</span>Sydny
      </div>
      <div className="flex items-center justify-between gap-3 cursor-pointer">
        <Send size={18} />
        <span className="sr-only">Location</span>Merlin square
      </div>
      <p>+32- 4444-5555</p>
    </div>
    <div className="hidden lg:flex items-center justify-between lg:gap-16">
      <ul className="flex items-center justify-start gap-5">
        <li className="uppercase hover:opacity-75">
          <a className=" " href="#">
            credit and installments
          </a>
        </li>
        <li className="uppercase hover:opacity-75">
          <a className=" " href="#">
            Business
          </a>
        </li>
        <li className="uppercase hover:opacity-75">
          <a className=" " href="#">
            M.service
          </a>
        </li>
        <li className="uppercase hover:opacity-75">
          <a className=" " href="#">
            M.mug
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section className="flex items-center justify-between gap-2 lg:gap-5 h-16 px-5 lg:px-10">
    <div className="flex items-center lg:gap-10">
      <Image
        height={32}
        width={32}
        src="/SUI.png"
        alt="Company Logo"
        className="w-auto h-auto object-contain"
      />
      <span className="sr-only">Company Logo</span>
      <button className="bg-rose-500 rounded-md cursor-pointer w-24 h-8 text-xs hidden lg:flex items-center justify-between px-2 text-white">
        <AlignLeft size={16} />
        CATALOG
      </button>
    </div>
    <div className="flex-1 flex items-center justify-end gap-2 lg:gap-5">
      <label htmlFor="search-icon-3" className="sr-only">
        Search Here
      </label>
      <input
        id="search-icon-3"
        className="h-8 rounded-md hidden lg:block border focus:outline-none flex-1 px-2"
        placeholder="Search"
        type="text"
        name=""
      />
      <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
        <BracesIcon size={16} className="16 text-black " />
        <span className="sr-only"> Icon</span>
      </div>
      <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
        <BellIcon size={16} className="16 text-black" />
        <span className="sr-only"> Icon</span>
      </div>
      <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
        <Bell size={16} className=" text-black" />
        <span className="sr-only"> Icon</span>
      </div>
      <div className="h-8 w-8 rounded-full border flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-80 hover:scale-x-105 transition-all">
        <AlignJustify size={16} className=" text-black" />
        <span className="sr-only"> Icon</span>
      </div>
      <AlignJustify size={24} className=" text-black " />
      <span className="sr-only">Mobile Menubar</span>
    </div>
  </section>
  <section className="w-full hidden lg:flex justify-around relative h-14 items-center border-b lg:px-10 ">
    <a className="text-rose-500 uppercase text-sm" href="#">
      All Promotions
    </a>
    <div className="bg-black rounded-md cursor-pointer w-auto gap-4 h-8 text-xs flex items-center justify-between px-2 text-white">
      <AlignLeft size={16} />
      Black Friday
    </div>
    <a className=" uppercase text-sm hover:opacity-70" href="#">
      Smart phones
    </a>
    <a className=" uppercase text-sm hover:opacity-70" href="#">
      Laptop
    </a>
    <a className=" uppercase text-sm hover:opacity-70" href="#">
      Refregator
    </a>
    <a className=" uppercase text-sm hover:opacity-70" href="#">
      Lcd TV
    </a>
    <a className=" uppercase text-sm hover:opacity-70" href="#">
      Air conditioner
    </a>
  </section>
</nav>
`;
