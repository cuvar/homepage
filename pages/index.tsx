import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='bg-oxford h-screen'>
      <Head>
        <title>cuvar's Homepage</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className='h-screen flex justify-center align-items-center'>
        <h1 className='my-auto text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientred to-gradientblue'>
          This website is currently under construction.
        </h1>
      </main>
    </div>
  );
};

export default Home;
