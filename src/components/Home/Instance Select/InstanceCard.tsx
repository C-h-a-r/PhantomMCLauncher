import { memo } from 'react';
import type { FC } from 'react';
import classes from './Instances.module.css';

interface Props {
    backgroundImage: string;
    instanceImage?: string;
}

export const InstanceCard: FC<Props> = memo(function InstanceCard({ backgroundImage, instanceImage }) {
    return (
        <div className={classes.instance_card} style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className={classes.instance_card_picture}>
            <img src="/assets/phantomLauncher1.png"/>
            </div>

            <div className={classes.instance_card_info}>
                <h1>Minecraft Version</h1>
                <p>Mod loader</p>
            </div>

            <div className={classes.instance_card_config}>
                <h1>Online/Off Icon Here</h1>
                <p>Last Used Date Here</p>
            </div>


        </div>
    );
});
