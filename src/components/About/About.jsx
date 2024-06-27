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
                Hello! My name is Tatyana. I&apos;m a beginner web developer. I
                have successfully finished a course at GoIT Academy. During my
                studies, I actively participated in team projects, which allowed
                me to develop skills in communication, mutual assistance,
                discipline, and collaborative programming and enjoy success. I
                gained experience creating responsive interactive web pages and
                developing dynamic applications in React and Redux. I am always
                looking for new opportunities for professional growth and am
                ready for cooperation. It&apos;s important to me to create
                products that benefit the user.
                {/* I focus on HTML5, CSS3, JS, React.js. In my projects I use
                adaptive design, transformation effects, and modal windows.
                Development, practice and work for the result are important for
                me. */}
              </p>
            </div>
          </li>

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
