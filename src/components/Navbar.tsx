import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { hamburgerIcon, xIcon } from "~/utils/icons";
import type { NavItem } from "~/utils/types";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [activeLink, setActiveLink] = useState(pathname ?? "/");
  const [showMenu, setShowMenu] = useState(false);

  const links: NavItem[] = [
    {
      text: "About",
      href: "/",
    },
    {
      text: "Projects",
      href: "https://github.com/cuvar",
    },
    {
      text: "CV",
      href: "https://cv.cuvar.dev",
    },
  ];

  function handleClick(item: NavItem) {
    setActiveLink(item.href);
    if (showMenu) setShowMenu(false);
  }

  return (
    <nav className="flex w-full items-center justify-center bg-gray-900 py-6 text-neutral-200">
      <ul className="hidden rounded-md bg-gray-800 px-1 py-2.5 text-white shadow-xl shadow-gray-900 sm:flex">
        {links.map((link) => (
          <li key={link.text}>
            <NavbarLink
              active={link.href == activeLink}
              text={link.text}
              href={link.href}
              onclick={handleClick}
            />
          </li>
        ))}
      </ul>
      <div className="flex w-full flex-col items-end sm:hidden">
        {!showMenu && (
          <button onClick={() => setShowMenu(true)} className="mx-4">
            {hamburgerIcon}
          </button>
        )}
        {showMenu && (
          <button
            onClick={() => setShowMenu(false)}
            className="fixed z-20 mx-4"
          >
            {xIcon}
          </button>
        )}
        {showMenu && (
          <ul className="fixed top-0 z-10 flex h-[100dvh] w-screen flex-col items-center justify-center space-y-8 bg-gray-900 text-xl text-white">
            {links.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  onClick={() =>
                    handleClick({ text: link.text, href: link.href })
                  }
                  className={
                    activeLink == link.href ? "font-bold text-cgreen-500" : ""
                  }
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
