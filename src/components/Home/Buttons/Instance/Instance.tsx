// InstanceBTN.tsx
import React, { memo } from 'react';
import type { FC, MouseEventHandler } from 'react';
import classes from './Instance.module.css';
import { Vector14Icon } from './Vector14Icon.js';

interface Props {
    version: string;
    instance_img: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;  // Add onClick prop
}

export const InstanceBTN: FC<Props> = memo(function InstanceBTN(props) {
    const { version, instance_img, onClick } = props;

    return (
        <button className='btn' id="instance-selector" onClick={onClick}>
            <div className={classes.vector14}>
                <Vector14Icon className={classes.icon8} />
            </div>
            <img src={instance_img} className={classes.image_2024722_2114485341} alt="Instance" />
            <div className={classes._121}>{version}</div>
        </button>
    );
});
