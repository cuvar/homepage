import Link from 'next/link';

interface IProps {
  className?: string;
  elements: { name: string; href: string }[];
}

export default function BreadCrumbs(props: IProps) {
  const allWithoutLast = props.elements.slice(0, props.elements.length - 1);

  return (
    <div>
      {allWithoutLast.map((element, index) => (
        <Link href={element.href} key={index}>
          <div>
            <a
              className={
                'text-beigewhite-500 hover:underline hover:text-crayola-100 text-lg active:text-byzantium-500' +
                ' ' +
                props.className
              }>
              {element.name}
            </a>
            <span> / </span>
          </div>
        </Link>
      ))}
      <Link href={props.elements[props.elements.length - 1].href}>
        <a
          className={
            'text-beigewhite-500 hover:underline hover:text-crayola-100 text-lg active:text-byzantium-500' +
            ' ' +
            props.className
          }>
          {props.elements[props.elements.length - 1]}
        </a>
      </Link>
    </div>
  );
}
