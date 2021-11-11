import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { AllPostData } from "../types/posts";
import { GetStaticProps } from "next";

import utilStyles from "../styles/utils.module.css";
import aboutStyles from "../styles/about.module.scss";

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
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I&apos;m Jennifer.<span>👋</span> I&#39;m a UI/UX Engineer
          specializing in React, design systems, and designer-developer
          collaboration. I am having the most fun at work when collaborating
          with my team. I love bringing our combined knowledge together to build
          something more remarkable than we could achieve alone. I value people
          more than ideas and believe that the best ideas come when people feel
          safe and valued enough to be vulnerable.
        </p>
        <p className={aboutStyles.aboutMe}>
          You will find a lot of content here about what I do professionally,
          but I am at my best when I treat all parts of my life with equal
          respect. Here are my other loves:
          <ul className={aboutStyles.otherLoves}>
            <li>
              <span>Home. </span>
              My soon-to-be wife Tracy, our two cats, Sissy and Nola Martha
              &quot;Slanky Danky&quot; Lisa, and the life we are building
              together. I could not have designed a better partner for me and am
              so grateful that I get to love and be loved by her. She is
              hilarious, thoughtful, observant, curious, determined, and highly
              creative. She inspires me every day and has managed to unlock
              parts of me that I did not know were there.
            </li>
            <li>
              <span>Creative endeavors. </span>
              Often these take place in the kitchen, scheming up ways to use up
              what has been neglected in my fridge or pantry, figuring out how
              to pack my meals with as much nutritional goodness as possible, or
              baking sweets for special occassions (or Mondays). I also like to
              write cheesy poems for my friends and family, sketch and paint,
              and find clever ways to organize things. Also, dare I say, I am
              working on writing a fantasy novel. Hold me accountable to do
              that, okay?
            </li>
            <li>
              <span>Dance. </span>
              I&apos;ve been busting moves uncontrollably in public since my
              time as a flower girl (which was short-lived for that reason). I
              was really into classical ballet from age 3 to 16, and then
              branched out into jazz and hip hop and whatever else comes out
              when the music takes control. Whether at a concert, in a studio,
              or in a grocery store aisle, I just can&apos;t help myself.
            </li>
            <li>
              <span>Group exercise. </span>
              Because I have a long attention span and can get sucked into a
              book or project for hours, I appreciate accountability when it
              comes to exercise. One of my absolute favorite things to do is
              teach and take group exercise classes. I especially love the
              classes from{" "}
              <a href="https://www.lesmills.com/us/" target="blank">
                Les Mills
              </a>
              . They are really well-researched, offer tons of variety, and hit
              that sweet spot of fun, motivating, and challenging. I have been
              teaching since 2012 and am certified in BodyJam, BodyAttack,
              BodyPump, Grit, and Core. My favorite classes to take that I
              don&apos;t teach are BodyFlow and BodyCombat.
            </li>
            <li>
              <span>Being outside. </span>I love exploring both new and familiar
              places. Nature is absolutely incredible--&apos;nough said.
            </li>
            <li>
              <span>Stories. </span>
              Real ones, made up ones, epic adventures, and every day anecdotes.
              I learn so much from other people&apos;s experiences and
              perspectives. I always have a few books (one of which will be
              fantasy), podcasts, and movie-quality television series going. I
              have been part of a leadership reading group over the past year,
              and those monthly conversations have been instrumental for me.
            </li>
            <li>
              <span>People and building community. </span>
              Connecting with others is healing. I will never be the life of the
              party (I leave that to Tracy), but I am quick to smile, laugh,
              help out, and get into deep conversations.
            </li>
          </ul>
        </p>
      </section>
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
