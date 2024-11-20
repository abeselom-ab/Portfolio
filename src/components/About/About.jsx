import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils';
export const About = () => { 
  return (
    <section className={styles.container} id="about"> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/about.jpg")} 
            alt='about myself' 
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I am Frontend Developer | Vue.js | React | Laravel
                          Skilled frontend developer with expertise in Vue.js, React.js, and Laravel.</p>
                    </div> 
                </li>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/serverIcon.png")} alt='cserver icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I am a backend developer. I have experience developing fast and optimized backend systems. </p>
                    </div> 
                </li>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("about/uiIcon.png")} alt='cursor icon' />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have systems as well.</p>
                    </div> 
                </li>
                
            </ul>
        </div>
    </section>

);
}
