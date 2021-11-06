import { getAllPostIds, getPostData, setPostStyling } from '../../util/posts';

export async function getStaticProps({ params }) {
  const posts = await getPostData(params.id);
  const postData = setPostStyling(posts);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className='bg-oxford-500 h-screen text-beigewhite-500'>
      <main>
        <h1 className='text-xl font-bold text-center pt-2'>{postData.title}</h1>
        <div className='text-center italic'>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    </div>
  );
}
