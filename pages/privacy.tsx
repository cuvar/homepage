import type { NextPage } from 'next';
import Head from 'next/head';
import SiteWrapper from '../components/SiteWrapper';
import Title from '../components/Title/h2';

const Privacy: NextPage = () => {
  const head = (
    <Head>
      <title>cuvar | Privacy</title>
      <meta
        name='description'
        content={"Privacy statement for cuvar's homepage"}
      />
    </Head>
  );
  return (
    <SiteWrapper head={head}>
      <Title>This part of the website is currently under construction.</Title>
    </SiteWrapper>
  );
};

export default Privacy;
