import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Tetyana</h1>

        <h2>I&apos;m a junior Full-stack developer.</h2>
        <p className={styles.description}>
          Development, practice, and work <br />
          for the result are important for me.
          <br /> Reach out if you&apos;d like
          <br /> to learn more!
        </p>

        {/* <a href="mailto:masyenko@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl('hero/tat.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
