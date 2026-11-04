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
              <h3>What I do</h3>
              <p>
                Hello! I&apos;m Taťjana, a freelance web developer from the
                Czech Republic. I build modern, responsive websites for small
                businesses — landing pages, business sites, online ordering
                and booking — in one or several languages. I take care of the
                whole process: design, clean code, SEO basics, hosting and
                domain setup. With over 20 years of experience in business and
                accounting, I understand what a website has to do for your
                business.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/1about.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>How I work</h3>
              <p>
                Clear written communication and regular progress updates.
                A fixed scope and deadline agreed before we start, revisions
                included. Your site goes live on your own domain, and I stay
                available for support after launch.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
