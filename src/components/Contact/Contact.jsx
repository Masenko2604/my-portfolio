import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.name}>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/icon-resume.png')}
            className={styles.img}
            alt="Resume icon"
          />
          <a href="https://resume-flax-tau.vercel.app/">Resume</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/email.png')}
            className={styles.img}
            alt="Email icon"
          />
          <a href="mailto:masyenko@gmail.com">masyenko@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedin.png')}
            className={styles.img}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/tetyana-masyenko-3533942a5/">
            Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/git.png')}
            className={styles.img}
            alt="Github icon"
          />
          <a href="https://github.com/Masenko2604">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};
