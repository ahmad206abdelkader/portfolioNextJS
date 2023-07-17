"use client"

import React, { useContext } from 'react'
import styles from './DarkModeToogle.module.css'
import {MdDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs'
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeToogle = () => {
const {toogle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toogle}>
        <div className={styles.icons}><MdDarkMode /> </div>
        <div className={styles.icons}><BsSun /> </div>
        <div className={styles.ball} style={mode ==="light" ? {left: "2px"} : {right:"2px"}}/>
    </div>
  )
}

export default DarkModeToogle;