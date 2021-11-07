import type { NextPage } from 'next';
import Head from 'next/head';
import { getSortedPostsData } from '../../util/posts';
import Link from '../../components/Link';
import SiteWrapper from '../../components/SiteWrapper';
import Title from '../../components/Title/h2';

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

const AllBlogPosts: NextPage<IPageProps> = (props: IPageProps) => {
  const head = (
    <Head>
      <title>cuvar | Blog</title>
      <meta name='description' content={"cuvar's blog"} />
    </Head>
  );
  return (
    <SiteWrapper head={head}>
      <Title>All posts</Title>
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
    </SiteWrapper>
  );
};

export default AllBlogPosts;
