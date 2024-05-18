import Link from "next/link";
import type { NavItem } from "~/utils/types";

type Props = {
  active: boolean;
  text: string;
  href: string;
  onclick?: (text: NavItem) => void;
};

export default function NavbarLink(props: Props) {
  const activeClass = "bg-cgreen-500 text-white font-bold";

  function handleClick() {
    if (props.onclick) {
      props.onclick(props);
    }
  }

  return (
    <Link
      href={props.href}
      className={`rounded-md px-4 py-2 ${
        props.active == true ? activeClass : ""
      }`}
      onClick={handleClick}
    >
      {props.text}
    </Link>
  );
}
