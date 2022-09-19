import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ravi.jpg"
          alt="user image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Ravi</h1>
      <p>
        I write blog about the web developent for the frameworks like React,
        Next and Node.
      </p>
    </section>
  );
}

export default Hero;
