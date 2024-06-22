import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Tetyana</h1>
        <p className={styles.description}>
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Roboto&size=36&pause=1000&color=189CF7&random=false&width=500&height=100&lines=I'm+a+junior+Frontend+developer."
              alt="Typing SVG"
            />
          </a>
          Development, practice, and work <br />
          for the result are important for me. Reach out if you&apos;d like to
          learn more!
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
