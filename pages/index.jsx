import Head from "next/head";
import Image from "next/image";
import { PostWidget, PostCard, Categories } from "../components";

const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React Tailwind", excerpt: "Learn React with Tailwind" },
];

const Home = () => {
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

export default Home;
