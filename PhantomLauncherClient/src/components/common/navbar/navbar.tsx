import React from 'react';
import styles from './css/navbar.module.css';

import HomeBTN from './buttons/homebtn';
import InstancesBTN from './buttons/instancesbtn';
import ProfilesBTN from './buttons/profilesbtn';
import SocialBTN from './buttons/socialbtn';
import SettingsBTN from './buttons/settingbtn';
import CloseBTN from './buttons/closebtn';

interface NavbarProps {
    avatar: string;
}

const Navbar: React.FC<NavbarProps> = ({ avatar }) => (
    <div className={styles.navbar}>
        <div className={styles.navbar_options}>
            <button className={styles.navbar_options_logo_btn}>
            <img className={styles.navbar_options_logo} src={avatar} alt="Avatar" />
            </button>
            <HomeBTN />
            <InstancesBTN />
            <ProfilesBTN />
            <SocialBTN />
        </div>

        <div className={styles.navbar_controls}>
            <SettingsBTN />
            <CloseBTN />
        </div>
    </div>
);

export default Navbar;
