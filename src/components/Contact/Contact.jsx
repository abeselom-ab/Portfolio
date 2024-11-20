import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'
export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email icon'/>
                <a href='mailto:abeselomtesfay@gmail.com'>abeselomtesfay@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='Linkedin icon'/>
                <a href='https://www.linkedin.com/in/abeselom-tesfay/'>linkedin.com/abeselom-tesfay</a>
            </li>
            <li className={styles.link}> 
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github icon'/>
                <a href='https://www.github.com/abeselom-ab'>github.com/abeselom-ab</a>
            </li>
        </ul>
    </footer>
  )
}
