import React from 'react'
import Styles from './Button.module.css';
import Link from 'next/link';
const Buttun = ({text,url}) => {
  return (
    <Link href={url}>
    <button className={Styles.container}>{text}</button>
    </ Link>
  )
}

export default Buttun