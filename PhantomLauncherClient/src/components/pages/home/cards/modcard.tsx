import React from 'react';
import styles from './css/modcard.module.css';

interface ModCardProps {
  image: string;         // URL of the image
  title: string;         // Title of the mod
  description: string;   // Description of the mod
  url: string;           // URL of the mod
}

const ModCard: React.FC<ModCardProps> = ({ image, title, description, url }) => (
  <a className={styles.mod_card} href={url} target='_blank'>
    <div className={styles.mod_card_content}>
      <img className={styles.mod_card_image} src={image} alt={title} />
      <h1 className={styles.mod_card_title}>{title}</h1>
      <p className={styles.mod_card_description}>{description}</p>
    </div>
  </a>
);

export default ModCard;
