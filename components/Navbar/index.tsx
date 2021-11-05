import { useState } from 'react';
import Link from '../Link';

export default function Navbar() {
  let navbarContent: string[] = ['About', 'Blog', 'Projects', 'GitHub'];

  let [showLinks, setShowLinks] = useState(false);

  let hamburger = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-8 w-8'
      viewBox='0 0 20 20'
      fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
        clipRule='evenodd'
      />
    </svg>
  );

  let cross = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-8 w-8'
      viewBox='0 0 20 20'
      fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
        clipRule='evenodd'
      />
    </svg>
  );
  return (
    <div className='bg-gray-800 text-beigewhite flex flex-col sm:flex-row justify-between py-8 px-5'>
      <div className='flex flex-row justify-between'>
        <Link href='/' className='hover:no-underline hover:text-customgreen'>
          <p className='text-3xl font-bold'>cuvar</p>
        </Link>
        <button
          className='text-2xl inline sm:hidden'
          onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? cross : hamburger}
        </button>
      </div>
      <nav
        className={
          'text-2xl sm:block mt-5 sm:mt-auto' + (!showLinks ? ' hidden' : '')
        }>
        {navbarContent.map((item: string, index: number) => {
          return (
            <Link
              href={'/' + item.toLowerCase()}
              key={index}
              className='block sm:inline-block my-4 sm:my-auto sm:mx-2 text-xl sm:text-xl'>
              {item}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
