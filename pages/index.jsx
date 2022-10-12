import Head from "next/head";
import Image from "next/image";
import { PostWidget, PostCard, Categories } from "../components";
import { getPosts } from "../services/index";

// const posts = [
//   { title: "React Testing", excerpt: "Learn React Testing" },
//   { title: "React Tailwind", excerpt: "Learn React with Tailwind" },
// ];

const Home = ({ posts }) => {
  return (
    <div className="">
      <Head>
        <title>CMS Blog site</title>
      </Head>
      <div>
        {posts.map((post, index) => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
      <div>
        <div>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || []; //if we don't get our data, return empty array

  return {
    props: { posts },
  };
}

export default Home;
