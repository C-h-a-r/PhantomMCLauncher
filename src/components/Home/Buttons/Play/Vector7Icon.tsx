import { memo, SVGProps } from 'react';

const Vector7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 400 89' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.6623 76.6045L11.5508 8.56181C12.2652 3.64614 16.4796 -7.62939e-06 21.4469 -7.62939e-06H377.177C382.08 -7.62939e-06 386.26 3.5551 387.047 8.39477L398.113 76.4374C399.102 82.521 394.406 88.0426 388.242 88.0426H11.5583C5.46309 88.0426 0.78569 82.6363 1.6623 76.6045Z'
      fill='#5061A4'
      stroke='#43518A'
      strokeWidth={5}
    />
  </svg>
);

const Memo = memo(Vector7Icon);
export { Memo as Vector7Icon };
