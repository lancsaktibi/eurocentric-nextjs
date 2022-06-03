import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';
import Card from '../components/card';

// get sorted posts from the posts.js script in the lib folder
import { getSortedPostsData } from '../lib/posts';

// create the props object with post data
export const getStaticProps: GetStaticProps =async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

// append post data to the Home component as it gets exported
// display title and ID on the page <-- in a separate section
export default function Home({allPostsData}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <div id='welcome' className='text-xl p-6 m-6 rounded-lg shadow-lg bg-gray-100 '>
          <p className='flex justify-center'>Welcome to the Home Page!</p>
          <p className='flex justify-center'>More information is coming soon...</p>
          <br />
          <p className='flex justify-center text-lg'>Have a look to the lastest posts:</p>
      </div>
      <section id='lastPosts' className="grid lg:grid-cols-3">
        {allPostsData.map(({ id, date, title }) => (
          <Card  link = {id} date = {date} longText = {title} />
        ))}
      </section>
    </Layout>
  );
}