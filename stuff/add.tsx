import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
// import { createNewBlog } from '../util/posts';
import SiteWrapper from '../components/SiteWrapper';
import Button from '../components/Button/outline';
import Title from '../components/Title/h2';

const AddBlogForm: NextPage = () => {
  const head = (
    <Head>
      <title>cuvar | Blog</title>
      <meta name='description' content={"cuvar's blog"} />
    </Head>
  );
  function handleChange(event) {
    setBlogContent(event.target.value);
  }

  const [blogContent, setBlogContent] = React.useState('');
  return (
    <SiteWrapper head={head} className='h-screen'>
      <Title>Adding a new post</Title>
      {/* <label htmlFor='' className='mr-2'>
        File name
      </label>
      <input
        type='text'
        id='blog-add-name'
        className='w-full mb-4 p-2 text-black rounded-md focus:outline-none focus:ring focus:border-crayola-100'
      /> */}
      <label htmlFor='' className='mr-2 truncate'>
        Blog content
      </label>
      <textarea
        name='hello'
        id='blog-add-content'
        onChange={handleChange}
        value={blogContent}
        className='resize-none mb-4 w-full h-48 p-2 text-black rounded-md focus:outline-none focus:ring focus:border-crayola-100'></textarea>
      <Button
        onClick={() => addBlogPost(blogContent)}
        children={'Send'}></Button>
    </SiteWrapper>
  );
};

function addBlogPost(content: string) {
  // createNewBlog(content);
  console.log('Needs to be implemented');
}

export default AddBlogForm;
