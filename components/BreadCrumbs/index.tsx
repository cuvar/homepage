import Link from 'next/link';

interface IProps {
  className?: string;
  elements: { name: string; href: string }[];
}

export default function BreadCrumbs(props: IProps) {
  const allWithoutLast = props.elements.slice(0, props.elements.length - 1);
  console.log(allWithoutLast);
  return (
    <div className={'flex flex-row'}>
      {allWithoutLast.map((element, index) => (
        <Link href={element.href} key={index}>
          <div>
            <a
              className={
                'text-beigewhite-500 hover:underline hover:text-crayola-100 text-lg active:text-byzantium-500 cursor-pointer' +
                ' ' +
                props.className
              }>
              {element.name}
            </a>
            <span className='mx-2'>/</span>
          </div>
        </Link>
      ))}
      <div
        className={
          'text-byzantium-500 font-bold text-lg' + ' ' + props.className
        }>
        {props.elements[props.elements.length - 1].name}
      </div>
    </div>
  );
}
