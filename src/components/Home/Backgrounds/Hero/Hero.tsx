import { memo } from 'react';
import type { FC } from 'react';


import classes from './Hero.module.css';
import { HeroBakcgroundIcon } from './HeroBakcgroundIcon.js';

interface Props {
  className?: string;
}

/* @figmaId 26:323 */
export const HeroBackground: FC<Props> = memo(function HeroBackground(props = {}) {

  return (
    <div className={classes.heroBakcground}>
      <HeroBakcgroundIcon className={classes.icon6} />
    </div>
  )
})