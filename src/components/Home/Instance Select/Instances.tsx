// Instances.tsx
import React, { memo } from 'react';
import type { FC } from 'react';
import classes from './Instances.module.css';
import Frame from 'react-frame-component';
import { InstanceCard } from './InstanceCard';

interface Props {
    className?: string;
    isVisible: boolean;
    onClose: () => void;  // Function to handle closing
}

const images = [
    '/vector23.png',
    '/vector24.png',
    '/vector25.png',
];

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

export const InstanceSelector: FC<Props> = memo(function InstanceSelector({ isVisible, onClose }) {
    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className={classes.instances_cover} onClick={onClose} />

            <div className={classes.instances_selector_div}>
                <h1>INSTANCES</h1>

                <Frame className={classes.instances_list} head={
                    <>
                        <style>
                            {`
                                /* Chrome, Edge, and Safari */
                                ::-webkit-scrollbar {
                                    width: 12px;
                                    background: transparent; /* Remove background */
                                }

                                ::-webkit-scrollbar-track {
                                    background: transparent; /* Remove background */
                                }

                                ::-webkit-scrollbar-thumb {
                                    background: #1D2745; /* Set thumb color */
                                    border-radius: 6px;
                                }

                                ::-webkit-scrollbar-thumb:hover {
                                    background: #1D2745; /* Set thumb color on hover */
                                }

                                ::-webkit-scrollbar-button {
                                    display: none; /* Remove arrows */
                                }

                                /* Firefox */
                                * {
                                    scrollbar-width: thin;
                                    scrollbar-color: #1D2745 transparent; /* Set thumb and track color */
                                }
                            `}
                        </style>
                        <style>{`
                            .${classes.instance_card} {
                                background-size: 100% 100%; /* Ensure image covers the div */
                                background-repeat: no-repeat; /* Prevent image repetition */
                                background-position: center; /* Center the image */
                                padding: 10px;
                                margin: 10px;
                                height: 150px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                font-family: "Lalezar", system-ui;
                                color: #FFFF;
                            }

                            .${classes.instance_card} img {
                                max-width: 100px;
                                border: 5px solid #43518A;
                                margin-left: 40px;
                                border-radius: 20px;
                            }
                        `}</style>
                    </>
                }>
                    <InstanceCard backgroundImage={getRandomImage()} />
                    <InstanceCard backgroundImage={getRandomImage()} />
                    <InstanceCard backgroundImage={getRandomImage()} />
                    <InstanceCard backgroundImage={getRandomImage()} />
                    <InstanceCard backgroundImage={getRandomImage()} />
                    <br />
                </Frame>
            </div>
        </>
    );
});
