import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, github, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <button className={styles.button}>
          <a href={github} className={styles.link}>
            GitHub
          </a>
        </button>
        <button className={styles.button}>
          <a href={source} className={styles.link}>
            Source
          </a>
        </button>
      </div>
    </div>
  );
};
