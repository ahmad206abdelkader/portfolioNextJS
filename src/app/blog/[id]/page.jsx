import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {notFound} from "next/navigation"

async function getdata(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const postBlog = async ({ params }) => {
  const data = await getdata(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            sapiente obcaecati quod facere a, sed mollitia quam ad deleniti
            pariatur quo magnam accusamus repudiandae accusantium. Nam deleniti
            explicabo voluptate aliquam provident pariatur, maiores maxime
            itaque similique fuga, quod nemo omnis tempora rem consequuntur hic.
            Quod harum ipsam nemo minus consequuntur.
          </p>
          <div className={styles.anuther}>
            <Image
              src="https://images.pexels.com/photos/4644811/pexels-photo-4644811.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={40}
              height={40}
              className="styles.avatar"
            />
            <span className={styles.username}>ahmad abdelkader</span>
          </div>
          <div className={styles.imagesContainer}>
            <Image
              src="https://images.pexels.com/photos/4644811/pexels-photo-4644811.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={400}
              height={500}
              className="styles.image"
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            temporibus saepe itaque iste earum exercitationem quae eveniet,
            consequatur minus quisquam ut corrupti ea rerum. Atque velit nam
            vero commodi soluta.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default postBlog;
