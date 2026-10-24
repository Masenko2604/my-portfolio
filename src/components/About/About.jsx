import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/about_cursor.png')}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                Hello! My name is Taťjana. I am a Fullstack Developer
                (GoIT, 2024) and I work as a freelancer. I build responsive
                websites and web applications with HTML, CSS, JavaScript, React
                and Node.js — from landing pages to multilingual business
                sites. I take care of the whole process: layout, clean code,
                SEO basics, deployment and domain setup. My background in
                accounting and business management helps me understand what
                clients really need.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/1about.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Working with clients</h3>
              <p>
                Responsible, punctual and goal-oriented. I communicate in
                Czech, Ukrainian and Russian, and create sites in several
                languages (CZ, EN, DE, UA, RU).
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
