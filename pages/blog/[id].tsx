import { getPostById, doesPostExist } from '../../util/posts';
import Head from 'next/head';
import SiteWrapper from '../../components/SiteWrapper';
import Title from '../../components/Title/h2';
import Link from '../../components/Link/outline-icon';
import BreadCrumbs from '../../components/BreadCrumbs';
import React from 'react';

export async function getServerSideProps({ params }) {
  const id: string = params.id;
  const postData = await getPostById(id);
  let hasPrevPost = doesPostExist((Number(id) - 1).toString());
  let hasNextPost = doesPostExist((Number(id) + 1).toString());

  return {
    props: {
      postData,
      hasPrevPost,
      hasNextPost,
    },
  };
}

const rightIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 5l7 7-7 7'
    />
  </svg>
);

const leftIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 19l-7-7 7-7'
    />
  </svg>
);

interface IProps {
  postData: any;
  hasNextPost: boolean;
  hasPrevPost: boolean;
}

export default function Post(props: IProps) {
  const head = (
    <Head>
      <title>cuvar | Blog</title>
      <meta name='description' content={"cuvar's blog"} />
    </Head>
  );

  interface IBreadCrumbs {
    name: string;
    href: string;
  }

  let elements: IBreadCrumbs[] = [
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Current Post',
      href: '#',
    },
  ];
  return (
    <SiteWrapper head={head} className='h-screen'>
      <BreadCrumbs elements={elements} />

      <Title>{props.postData.title}</Title>
      <div className='text-center italic'>{props.postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: props.postData.html }} />
      <div className='flex justify-between mt-8 space-x-8'>
        <Link
          icon={leftIcon}
          children={'Previous post'}
          className='flex-auto flex justify-start py-4'
          inactive={!props.hasPrevPost}
          href={'/blog/' + Number(props.postData.id - 1)}
        />
        <Link
          icon={rightIcon}
          children={'Next post'}
          className='flex-auto flex flex-row-reverse justify-start py-4'
          inactive={!props.hasNextPost}
          href={'/blog/' + (Number(props.postData.id) + 1)}
        />
      </div>
    </SiteWrapper>
  );
}
