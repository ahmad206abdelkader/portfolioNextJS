import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 ahmadZzeus. All right reserved.</div>
      <div>
        <div className={styles.social}>
        <Image src='/facebook.png' width={15} height={15} className={styles.icon} alt='facebook'/>
        <Image src='/instagram.png' width={15} height={15} className={styles.icon} alt='instigram'/>
        <Image src='/github.png' width={15} height={15} className={styles.icon} alt='github'/>
        <Image src='/telegram.png' width={15} height={15} className={styles.icon} alt='telegram'/>
        </div>
      </div>
    </div>
  )
}

export default Footer;