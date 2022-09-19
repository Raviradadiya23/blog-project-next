import PostContent from "../../components/posts/post-detail/post-content";
import { getFileNames, getPostData } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticPaths() {
  const fileNames = getFileNames();
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export default PostDetailPage;
