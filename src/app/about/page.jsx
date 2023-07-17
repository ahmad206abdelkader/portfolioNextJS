import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Buttun from "@/components/Buttun/Button";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/4553371/pexels-photo-4553371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
        />
        <div className={styles.imgText}>
        <h1 className={styles.imgTilte}>Digital storytellers</h1>
        <h2 className={styles.imgDesc}>Lorem ipsum dolor sit.</h2>
      </div>
      </div>
      
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui illo
            iusto sit molestias enim tempora perspiciatis a saepe, ipsa aut at
            voluptas, minus nihil dicta quaerat eius dolorem facilis. Aliquid,
            quisquam.
            <br /> Dignissimos, quos blanditiis harum odio quasi nostrum esse
            repudiandae nam excepturi in ab illum reiciendis facere debitis quae
            quidem non, incidunt asperiores at sint unde! Ratione, laborum
            obcaecati! Nulla.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem ipsum,
            <br /> Dignissimos, quos blanditiis harum odio quasi nostrum esse
            repudiandae nam excepturi in ab illum reiciendis facere debitis quae
            quidem non
          </p>
          <Buttun url="/contact" text="Contact"/>

        </div>
        
      </div>
    </div>
  );
};

export default about;
