import type { NextPage } from 'next';
import Head from 'next/head';
import SiteWrapper from '../components/SiteWrapper';
import Title from '../components/Title/h2';

const Projects: NextPage = () => {
  const head = (
    <Head>
      <title>cuvar | Projects</title>
      <meta name='description' content={"cuvar's projects"} />
    </Head>
  );
  return (
    <SiteWrapper head={head}>
      <Title>This part of the website is currently under construction.</Title>
    </SiteWrapper>
  );
};

export default Projects;
