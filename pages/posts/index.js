import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage({ posts }) {
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
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostsPage;
