import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getdata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Faield to fetch data ");
  }

  return res.json();
}

const blogPost = async () => {
  const data = await getdata();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/14045195/pexels-photo-14045195.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default blogPost;
