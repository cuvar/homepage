import Link from '../Link';

interface IProps {
  className?: string;
}

export default function Footer(props: IProps) {
  return (
    <footer className={'bg-gray-800 py-8' + ' ' + props.className}>
      <div className='flex justify-center mb-8'>
        {['Imprint', 'Privacy'].map((item, index) => (
          <Link href={'/' + item.toLowerCase()} key={index} className='mx-2'>
            {item}
          </Link>
        ))}
      </div>
      <p className='text-center text-beigewhite-500'>
        &copy; 2021 Copyright cuvar
      </p>
    </footer>
  );
}
