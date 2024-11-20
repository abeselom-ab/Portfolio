import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Abeselom</h1>
            <p className={styles.description}>
            Full-Stack Developer | Vue.js | React.js | Laravel
            Skilled frontend developer with expertise in Vue.js, React.js, and Laravel. 
            </p>
            <a className={styles.contactBtn} href='#contact'>Contact Me</a> 
        </div>
            <img className={styles.heroImg} src={getImageUrl("hero/abi.jpg")} alt='me' />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

    </section>
  )
}
