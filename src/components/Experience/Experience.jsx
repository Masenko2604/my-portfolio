import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import services from '../../data/services.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Skills &amp; Services</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} loading="lazy" decoding="async" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {services.map((service, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(service.imageSrc)} alt="" loading="lazy" decoding="async" />
                <div className={styles.historyItemDetails}>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item, id) => {
                      return <li key={id}>{item}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
