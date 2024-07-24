// Home.tsx
import React, { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Home.module.css';

import { Navbar } from '../NavBar/NavBar.js';
import { HeroBackground } from './Backgrounds/Hero/Hero.js';
import { PlayBTN } from './Buttons/Play/Play.js';
import { InstanceBTN } from './Buttons/Instance/Instance.js';
import { InstanceSelector } from './Instance Select/instances.js';

interface Props {
  className?: string;
}

export const Home: FC<Props> = memo(function Home(props = {}) {
    const [instanceState, setInstanceState] = useState(false);  // State to control visibility

    const handleInstanceClick = () => {
        setInstanceState(true);  // Show the InstanceSelector when the button is clicked
    };

    const handleCloseSelector = () => {
        setInstanceState(false);  // Hide the InstanceSelector
    };

    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            {/* Conditionally render InstanceSelector */}
            <InstanceSelector isVisible={instanceState} onClose={handleCloseSelector} />

            {/* NavBar */}
            <Navbar />

            {/* Hero background section */}
            <HeroBackground />

            {/* Play Button */}
            <PlayBTN version='1.21' loader='Fabric' />

            {/* Instance Button */}
            <InstanceBTN 
                version='1.21' 
                instance_img='/assets/image_2024722_2114485341.png' 
                onClick={handleInstanceClick}  // Pass handler here
            />

        </div>
    );
});
