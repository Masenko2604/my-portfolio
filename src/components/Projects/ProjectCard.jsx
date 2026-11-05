import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    github,
    source,
    extraLabel,
    extraSource,
  },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Screenshot of ${title}`}
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
        {github && (
          <a
            href={github}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        )}
        {extraSource && (
          <a
            href={extraSource}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {extraLabel || 'Live 2'}
          </a>
        )}
      </div>
    </div>
  );
};
