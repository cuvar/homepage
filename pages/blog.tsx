import type { NextPage } from 'next';
import Head from 'next/head';
import { getSortedPostsData } from '../util/posts';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData: any[] = getSortedPostsData();
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

      <main className='h-screen flex justify-center align-items-center'>
        <h1 className='my-auto text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientred to-gradientblue'>
          This is the blog section for my homepage
        </h1>
        {/* <BlogContent allPostsData={props.allPostsData} /> */}
        {/* // <Layout> */}
        <div>
          <ul>
            {props.allPostsData.map(({ id, date, title }, index) => (
              <li key={index}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <span>{date}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* // </Layout> */}
      </main>
    </div>
  );
};

export default Blog;
