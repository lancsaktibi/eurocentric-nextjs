import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }: {
  postData: {
    title: string 
    date: string 
    contentHtml: string 
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className='text-xl'>{postData.title}</div>
        <div className='text-lg'>
          <Date dateString={postData.date} />
        </div>
        <div className='p-6 m-6 rounded-lg shadow-lg bg-gray-100' 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps =async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}