import Link from 'next/link';

interface ILinkProps {
  href: string;
  className?: string;
  children?: any;
}

export default function CustomLink(props: ILinkProps) {
  return (
    <Link href={props.href}>
      <a
        className={
          'text-beigewhite hover:underline text-lg active:text-byzantium' +
          ' ' +
          props.className
        }>
        {props.children}
      </a>
    </Link>
  );
}
