import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../lib/posts-util";

function HomePage({ posts }) {
  // const posts = [
  //   {
  //     slug: "react-js-blog",
  //     title: "getting started with react",
  //     image: "react.jpg",
  //     excerpt: "React and next js are used for the frontend side development",
  //     date: "2022-08-03",
  //   },
  //   {
  //     slug: "react-js-blog2",
  //     title: "getting started with react",
  //     image: "react.jpg",
  //     excerpt: "React and next js are used for the frontend side development",
  //     date: "2022-08-03",
  //   },
  //   {
  //     slug: "react-js-blog3",
  //     title: "getting started with react",
  //     image: "react.jpg",
  //     excerpt: "React and next js are used for the frontend side development",
  //     date: "2022-08-03",
  //   },
  //   {
  //     slug: "react-js-blog4",
  //     title: "getting started with react",
  //     image: "react.jpg",
  //     excerpt: "React and next js are used for the frontend side development",
  //     date: "2022-08-03",
  //   },
  //   {
  //     slug: "react-js-blog5",
  //     title: "getting started with react",
  //     image: "react.jpg",
  //     excerpt: "React and next js are used for the frontend side development",
  //     date: "2022-08-03",
  //   },
  // ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPost();
  return {
    props: {
      posts: featuredPost,
    },
    revalidate: 60,
  };
}

export default HomePage;
