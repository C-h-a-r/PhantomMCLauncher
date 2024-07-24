import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 150 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.52998 33.3549L3.64206 12.7472C1.81687 6.35905 6.6135 0 13.2573 0H137.086C143.625 0 148.404 6.17215 146.768 12.5028L141.441 33.1105C140.3 37.5243 136.318 40.6077 131.759 40.6077H19.1452C14.6804 40.6077 10.7566 37.648 9.52998 33.3549Z'
      fill='#5061A4'
      stroke='#43518A'
      strokeWidth={5}
    />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
