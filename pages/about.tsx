import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>
      <header>
        <>
            <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
            />
            <h2 className={utilStyles.headingLg}>
                <p>Tibor Lancsak</p>
            </h2>
          </>
      </header>
      <section className={utilStyles.headingMd}>
        <p>A Javascript / Next.js programmer</p>
        <p>
          This is a sample website - built as per the 
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}