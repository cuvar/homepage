import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import SiteWrapper from '../../components/SiteWrapper';
import OutlineButton from '../../components/Button/outline';
import Title from '../../components/Title/h2';

const AddBlogForm: NextPage = () => {
  const head = (
    <Head>
      <title>cuvar | Blog</title>
      <meta name='description' content={"cuvar's blog"} />
    </Head>
  );

  const addPost = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/add', {
      body: JSON.stringify({
        content: event.target.content.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <SiteWrapper head={head} className='h-screen'>
      <Title>Adding a new post</Title>
      <form onSubmit={addPost}>
        <label htmlFor='content' className='mr-2 truncate'>
          Blog content
        </label>
        <textarea
          id='content'
          name='content'
          className='resize-none mb-4 w-full h-48 p-2 text-black rounded-md focus:outline-none focus:ring focus:border-crayola-100'></textarea>
        <OutlineButton type='submit' className='mt-5'>
          Post
        </OutlineButton>
      </form>
    </SiteWrapper>
  );
};

export default AddBlogForm;
