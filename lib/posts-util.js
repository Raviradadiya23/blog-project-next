import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getFileNames() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(fileIdentifier) {
  const fileNameWithoutExt = fileIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${fileNameWithoutExt}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: fileNameWithoutExt,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const fileNames = getFileNames();
  const allPostsData = fileNames.map((fileName) => {
    return getPostData(fileName);
  });

  const sortedPostData = allPostsData.sort((a, b) => {
    a.date > b.date ? -1 : 1;
  });

  return sortedPostData;
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
