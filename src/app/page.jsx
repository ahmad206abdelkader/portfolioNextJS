import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import he from '../../public/222.png';
import Buttun from "@/components/Buttun/Button";

export default function Home() {
  return (
    <div className={styles.container}> 
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed
          suscipit molestias exercitationem, nisi mollitia, molestiae quisquam,
          porro labore reiciendis et amet qui veritatis delectus?
        </p>
        <Buttun url="/portfolio" text="See out works"/>
        
      </div>
      <div className={styles.item}>
        <Image
          src={he}
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
}
