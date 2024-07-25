import React from 'react';
import styles from './css/home.module.css';


import HillBackground from './backgrounds/hills';
import PlayBTN from './buttons/playbtn';
import ModCard from './cards/modcard';
const Home: React.FC = () => (
  <>
    <HillBackground />

    <div className={styles.home_hero}>
      <PlayBTN />
    </div>


<div className={styles.home_featured}>
  <ModCard image='/icons/logo.png' title='Mod Name' description='Mod Description' url='https://example.com'/>
  <ModCard image='/icons/logo.png' title='Mod Name' description='Mod Description' url='https://example.com'/>
  <ModCard image='/icons/logo.png' title='Mod Name' description='Mod Description' url='https://example.com'/>
  <ModCard image='/icons/logo.png' title='Mod Name' description='Mod Description' url='https://example.com'/>
  <ModCard image='/icons/logo.png' title='Mod Name' description='Mod Description' url='https://example.com'/>

</div>



  </>
);

export default Home;
