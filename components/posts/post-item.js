import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";

function PostItem({ post }) {
  const { title, slug, excerpt, image, date } = post;

  const formattedDate = new Date(date).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;
  const postPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={postPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
