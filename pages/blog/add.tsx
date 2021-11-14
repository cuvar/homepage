import React from 'react';
import type { NextPage } from 'next';
import toast, { Toaster } from 'react-hot-toast';
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
    if (res.status === 200) {
      toast.success('Successfully created new post', {
        duration: 1500,
      });
    } else {
      toast.error('An error occurred', {
        duration: 1500,
      });
    }
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
        <div className='flex flex-row justify-between items-start mt-2'>
          <OutlineButton type='submit'>Post</OutlineButton>
          <div>
            <OutlineButton type='button' onClick={() => generateTemplate()}>
              Generate template
            </OutlineButton>
            <OutlineButton
              type='button'
              className='ml-4'
              onClick={() => clearInput()}>
              Clear
            </OutlineButton>
          </div>
        </div>
      </form>
      <Toaster />
    </SiteWrapper>
  );
};

export default AddBlogForm;

function clearInput() {
  const textarea = document.querySelector('textarea');
  textarea.value = '';
}

function generateTemplate() {
  const content = `---
title: Hello World
date: '2021-11-05'
---

# h1 header

Paragraph. _Italic_, **bold**, and \`monospace\`. Itemized lists look like:

- bullet point

Note that --- not considering the asterisk --- the actual text content starts at 4-columns in.

> Block quotes`;

  const textarea = document.querySelector('textarea');
  textarea.value = content;

  textarea.select();
  textarea.setSelectionRange(0, content.length); /* For mobile devices */
  textarea.select;

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(textarea.value);

  toast.success('Successfully copied to clipboard', {
    duration: 1500,
  });
}
