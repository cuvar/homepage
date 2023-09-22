import { useState } from "react";
import NavbarLink from "./NavbarLink";
import type { NavItem } from "~/utils/types";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [activeLink, setActiveLink] = useState(pathname ?? "/");

  const links: NavItem[] = [
    {
      text: "About",
      href: "/",
    },
    {
      text: "Projects",
      href: "/projects",
    },
  ];

  function handleClick(item: NavItem) {
    setActiveLink(item.href);
  }

  return (
    <nav className="flex w-full items-center justify-center bg-slate-900 py-6 text-neutral-200">
      <ul className="flex rounded-full bg-white px-1 py-2 text-black">
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
    </nav>
  );
}
