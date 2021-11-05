import Link from '../Link';

export default function Footer() {
  return (
    <footer className='bg-gray-800 py-8'>
      <div className='flex justify-center mb-8'>
        {['Imprint', 'Privacy'].map((item, index) => (
          <Link href={'/' + item.toLowerCase()} key={index} className='mx-2'>
            {item}
          </Link>
        ))}
      </div>
      <p className='text-center text-beigewhite'>&copy; 2021 Copyright cuvar</p>
    </footer>
  );
}
