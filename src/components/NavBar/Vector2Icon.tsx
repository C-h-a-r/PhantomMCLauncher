import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 170 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.328 7.19521L3.81275 29.4919C1.9212 35.9652 6.84862 42.4166 13.5915 42.2951L149.328 39.8493C153.541 39.7734 157.254 37.0648 158.613 33.0763L165.377 13.2254C167.588 6.73804 162.765 0 155.912 0H19.9266C15.484 0 11.5741 2.93094 10.328 7.19521Z'
      fill='#5061A4'
      stroke='#43518A'
      strokeWidth={5}
    />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
