"use client";

import { useState } from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { toast } from "sonner";
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { RowSpacingIcon, EnterIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 lg:px-10 py-4 bg-white shadow-lg sticky top-0 z-50">
      <a href="#" className="text-[20px] lg:text-[32px] font-semibold">
        Moovitz
      </a>
      <button
        className="block lg:hidden text-xl px-4 py-2 hover:outline-none"
        onClick={toggleMenu}>
        ☰
      </button>
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto ${
          menuOpen ? "block" : "hidden"
        } mt-6 lg:mt-0`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-14 space-y-4 lg:space-y-0 text-[18px] lg:items-center">
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="#aboutUs" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>
          <li className="hover:text-blue-500 hover:font-semibold">
            <a href="#howItWorks" onClick={closeMenu}>
              How it works
            </a>
          </li>
        </ul>
      </div>
      <ShimmerButton className="mt-4 lg:mt-0 lg:ml-4 hidden lg:block z-30">
          <a href="/transport" className="flex">
            <p>Home</p>
          </a>
      </ShimmerButton>
    </nav>
  );
}
