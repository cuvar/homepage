import Navbar from '../Navbar';
import Footer from '../Footer';

interface IProps {
  children?: any;
  head?: any;
  className?: string;
}

export default function SiteWrapper(props: IProps) {
  return (
    <div className='bg-oxford-500 min-h-screen flex flex-col justify-between'>
      {props.head}
      <Navbar className='flex-initial' />
      <main className='text-beigewhite-500 flex-auto flex flex-col justify-start items-center'>
        <div
          className={'my-16 w-1/2 md:w-8/12 lg:w-8/12' + ' ' + props.className}>
          {props.children}
        </div>
      </main>
      <Footer className='flex-initial' />
    </div>
  );
}
