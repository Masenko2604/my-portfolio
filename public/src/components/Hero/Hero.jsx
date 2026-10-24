import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Taťjana</h1>

        <h2>Fullstack Developer · Freelance</h2>
        <p className={styles.description}>
          I create websites and web applications <br />
          for small businesses and individual clients:
          <br /> landing pages, business sites and React apps.
          <br /> Let&apos;s build your project together!
        </p>

        <a href="mailto:masyenko@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/photo_2025-01-16_13-22-31.jpg')}
        alt="Taťjana Masenko"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
