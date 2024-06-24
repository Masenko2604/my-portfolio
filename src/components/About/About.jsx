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
              <h3>Frontend Developer</h3>
              <p>
                I focus on HTML5, CSS3, JS, React.js. In my projects I use
                adaptive design, transformation effects, and modal windows.
                Development, practice and work for the result are important for
                me.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/1about.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/1about.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Soft Skills</h3>
              <p>
                Always ready to learn and gain new experiences, responsible,
                punctual, and goal - oriented person.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
