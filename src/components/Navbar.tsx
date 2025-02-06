"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const navItems = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Other Interests", link: "#other-interests" },
  { title: "Contact", link: "#contact" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navBackground text-gray-200 fixed top-0 left-0 right-0 w-full z-50">
      <div className="flex justify-end items-center px-6 py-3">
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>
                <div className="hover:bg-navHover px-4 py-2 rounded-md">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Cross1Icon className="w-6 h-6" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navBackground fixed top-12 right-0 z-40">
          <ul className="flex flex-col gap-4 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.link} onClick={() => setMenuOpen(false)}>
                  <div className="hover:bg-navHover px-4 py-2 rounded-md">
                    {item.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
