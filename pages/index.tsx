import Head from "next/head";
import Layout, { siteTitle } from "components/layout/layout";
import { getSortedPostsData } from "lib/posts";
import Link from "next/link";
import Date from "components/date";
import { AllPostData } from "types/posts";
import { GetStaticProps } from "next";

import utilStyles from "styles/utils.module.css";
import aboutStyles from "styles/about.module.scss";

//gets data at build time
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

// to pre-render a page whose data must be fetched at request time
// context contains request specific parameters
// slower than static rendering; results cannot be cached by a CDN
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

interface HomeProps {
  allPostsData: AllPostData;
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>
        <Link href={`/about`}>
          <a>About</a>
        </Link>
      </h2>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
