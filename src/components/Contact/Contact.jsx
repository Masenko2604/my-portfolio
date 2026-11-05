import styles from './Contact.module.css';

// Link to your Upwork profile. Paste it between the quotes when your profile is ready.
const UPWORK_URL = 'https://www.upwork.com/freelancers/~0101d66379d9a89eda';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.name}>Contact</h2>
        <p>Let&apos;s discuss your project on Upwork!</p>
      </div>
      <div className={styles.upwork}>
        {UPWORK_URL ? (
          <a
            href={UPWORK_URL}
            className={styles.upworkBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Write me on Upwork
          </a>
        ) : (
          <span className={styles.upworkBtn}>Write me on Upwork</span>
        )}
      </div>
    </footer>
  );
};
