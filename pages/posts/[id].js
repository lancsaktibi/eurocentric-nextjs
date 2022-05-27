// a dynamic post page for all possible [id]s

import Layout from '../../components/layout';
import { Head } from 'next/document';

// activate funtions from the library
import { getAllPostIds, getPostData } from '../../lib/posts';

// return the IDs as props for the Post function
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// return the post data as props for the Post function
// turned to async due to remark being async in getPostData
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// use postData in the page display
// display post content with Html renderer
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}