import { memo } from 'react';
import type { FC } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

import classes from './Navbar.module.css';

import { SettingsBtnIcon } from './SettingsBtnIcon.js';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector2Icon } from './Vector2Icon.js';
import { Vector3Icon } from './Vector3Icon.js';
import { Vector4Icon } from './Vector4Icon.js';


interface Props {
    className?: string;
  }


  const handleCloseWindow = async () => {
    try {
      await invoke('close_window');
    } catch (error) {
      console.error('Error closing the window:', error);
    }
  };



export const Navbar: FC<Props> = memo(function Navbar(props = {}) {

return (
    <>
          <div className={classes.navBar}>
        <div className={classes.phantomLauncher1}></div>


        <a href='/'>
        <div className={classes.vector1}>
          <Vector1Icon className={classes.icon} />
        </div>
        <div className={classes.hOME}>HOME</div>
        </a>

        <a href="/instances">
        <div className={classes.vector2}>
          <Vector2Icon className={classes.icon2} />
        </div>
        <div className={classes.iNSTANCES}>INSTANCES</div>
        </a>

        <a href="/profiles">
        <div className={classes.vector3}>
          <Vector3Icon className={classes.icon3} />
        </div>
        <div className={classes.pROFILES}>PROFILES</div>
        </a>


        <button id='close-btn' onClick={handleCloseWindow}>
        <div className={classes.vector4}>
          <Vector4Icon className={classes.icon4} />
        </div>
        <div className={classes.x}>X</div>
        </button>


        <button id='settings-btn'>
        <div className={classes.phantomLauncher2}></div>
        <div className={classes.settingsBtn}>
          <SettingsBtnIcon className={classes.icon5} />
        </div>
        </button>


      </div>
    </>
)
})