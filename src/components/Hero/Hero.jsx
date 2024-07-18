import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <hi className={styles.title}>Hi, I am Sobia</hi>
            <p className={styles.description}>
                I am a full-stack developer with experience using React and NodeJs. Reach out if you'd like to learn more
            </p>
            <a href='mailto:sobia@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt='hero-image' className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
      </section>
  )
}

export default Hero