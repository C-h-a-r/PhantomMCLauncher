import React from 'react';
import styles from './css/home.module.css';


import HillBackground from './backgrounds/hills';
import PlayBTN from './buttons/playbtn';
const Home: React.FC = () => (
  <>
    <HillBackground />
    
    <div className={styles.home_hero}>
      <PlayBTN />
    </div>




  </>
);

export default Home;
