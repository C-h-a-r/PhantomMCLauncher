import { memo } from 'react';
import type { FC } from 'react';

import { Vector7Icon } from './Vector7Icon.js';

import classes from './Play.module.css';

interface Props {
    version: string;
    loader: string;
}


export const PlayBTN: FC<Props> = memo(function PlayBTN(props) {
    const { version, loader } = props;

    return (
        <button className='btn' id="play-btn">
            <div className={classes.vector7}>
                <Vector7Icon className={classes.icon7} />
            </div>
            <div className={classes.pLAY}>PLAY</div>
            <div className={classes._121FABRIC}>{version} - {loader}</div>
        </button>
    );
});
