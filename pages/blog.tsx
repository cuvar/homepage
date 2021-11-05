import type { NextPage } from 'next';
import Head from 'next/head';
import { getRecentPostsData } from '../util/posts';
// import Link from 'next/link';
import Link from '../components/Link';

export async function getStaticProps() {
  const allPostsData: any[] = getRecentPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface IPageProps {
  allPostsData: any[];
}

const Blog: NextPage<IPageProps> = (props: IPageProps) => {
  return (
    <div className='bg-oxford h-screen'>
      <Head>
        <title>cuvar | Blog</title>
        <meta name='description' content='My blog' />
      </Head>

      <main className='h-screen flex flex-col justify-center align-items-center'>
        <h1 className='my-auto text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gradientred to-gradientblue'>
          This is the blog section for my homepage
        </h1>
        <div className='text-beigewhite mb-32'>
          <h2 className='text-2xl text-center font-bold text-glaucous'>
            Recent posts
          </h2>
          <div className='flex flex-col items-center'>
            {props.allPostsData.map(({ id, date, title, firstline }, index) => (
              <Link
                href={`/blog/${id}`}
                key={index}
                className='hover:no-underline hover:bg-gray-700 active:bg-gray-800 my-5 bg-gray-800 w-1/2 text-center rounded-lg py-6 flex flex-col'>
                <h4 className='font-bold text-xl'>{title}</h4>
                <p className='italic text-sm my-2'>{date}</p>
                <hr className='mb-2 w-2/6 mx-auto' />
                <p>{firstline}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
