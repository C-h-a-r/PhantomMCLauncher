import React from 'react';
import styles from './css/profilesbtn.module.css';

const ProfilesBTN: React.FC = () => (
    <a className={styles.profiles_btn} href="/profiles">
        PROFILES
    </a>
);

export default ProfilesBTN;
