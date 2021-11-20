import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import SiteWrapper from '../../components/SiteWrapper';
import OutlineButton from '../../components/Button/outline';
import Title from '../../components/Title/h2';
import * as cookie from '../../util/cookie';
import * as auth from '../../util/auth';

interface IProps {
  isLoggedIn: boolean;
}
const AddBlogForm: NextPage<IProps> = (props) => {
  const head = (
    <Head>
      <title>cuvar | Blog</title>
      <meta name='description' content={"cuvar's blog"} />
    </Head>
  );
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const jwtCookie = cookie.getCookie(document.cookie, 'jwt-cuvar');
  useEffect(() => {
    const checkingLogin = async () => {
      const { loggedIn, newToken }: ICheckLogin = await checkLogin();
      setIsLoggedIn(loggedIn);
      if (isLoggedIn) {
        cookie.deleteCookie('jwt-cuvar');
        cookie.setCookie('jwt-cuvar', newToken, 1);
      }
    };

    checkingLogin();
  }, []);

  async function addPost(event) {
    event.preventDefault();

    if (isLoggedIn) {
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
        toast.error('An error occurred during login', {
          duration: 1500,
        });
      }
    } else {
      toast.error("You're not signed in", {
        duration: 1500,
      });
    }
  }

  async function checkAuth(event: any) {
    event.preventDefault();

    const res = await fetch('/api/auth', {
      body: JSON.stringify({
        // Todo: encrypt password and username

        username: event.target.username.value,
        password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const body = JSON.parse(await res.text());
    if (res.status === 200) {
      setIsLoggedIn(true);
      toast.success('Successfully logged in', {
        duration: 1500,
      });
    } else {
      setIsLoggedIn(false);
      toast.error('An error occurred during login', {
        duration: 1500,
      });
    }
    cookie.deleteCookie('jwt-cuvar');
    cookie.setCookie('jwt-cuvar', body.token, 1);
  }

  return (
    <SiteWrapper head={head} className='h-screen'>
      <Title>Adding a new post</Title>
      {isLoggedIn && (
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
      )}
      {!isLoggedIn && (
        <form onSubmit={checkAuth} className='flex flex-col items-center mt-10'>
          <div className=' flex flex-col'>
            <div className='flex flex-row mb-4'>
              <div className='flex flex-col justify-around'>
                <label htmlFor='username' className='mr-2 mb-4 truncate'>
                  Username
                </label>
                <label htmlFor='password' className='mr-2 truncate'>
                  Password
                </label>
              </div>
              <div className='flex flex-col justify-between'>
                <input
                  id='username'
                  name='username'
                  type='text'
                  className='w-full mb-4 p-2 text-black rounded-md focus:outline-none focus:ring focus:border-crayola-100'
                />
                <input
                  id='password'
                  name='password'
                  type='password'
                  className='w-full p-2 text-black rounded-md focus:outline-none focus:ring focus:border-crayola-100'
                />
              </div>
            </div>
            <OutlineButton type='submit'>Sign in</OutlineButton>
          </div>
        </form>
      )}
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

interface ICheckLogin {
  loggedIn: boolean;
  newToken: string;
}

async function checkLogin(): Promise<ICheckLogin> {
  const res = await fetch('/api/token', {
    body: JSON.stringify({
      token: cookie.getCookie(document.cookie, 'jwt-cuvar'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const body = JSON.parse(await res.text());

  // error handling done in api handler
  return { loggedIn: body.loggedIn, newToken: body.token };
}
