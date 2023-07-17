import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Buttun from '@/components/Buttun/Button';

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
      <div className={styles.content}>
      
      <div className={styles.imgContainer}>
        <Image src='/333.png' alt='' fill={true} className={styles.image} />
      </div>
      <form className={styles.form}>
        <input type='text' placeholder='name' className={styles.input}/>
        <input type='text' placeholder='email' className={styles.input}/>
        <textarea className={styles.textArea} placeholder='message' cols={30} rows={10}/>
        <Buttun url='#' text='Send' />
      </form>
      </div>
      </div>
      
  )
}

export default contact;