import { memo, SVGProps } from 'react';

const Vector14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 113 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M93.1269 0.759349L11.254 7.125C5.27109 7.59017 1.04232 13.1832 2.2254 19.0664L16.6087 90.591C17.5851 95.4465 21.9685 98.8558 26.9149 98.6069L101.708 94.8438C107.412 94.5568 111.717 89.5594 111.157 83.8759L103.854 9.74879C103.32 4.33248 98.5531 0.337464 93.1269 0.759349Z'
      fill='#5061A4'
      stroke='#43518A'
      strokeWidth={5}
    />
  </svg>
);

const Memo = memo(Vector14Icon);
export { Memo as Vector14Icon };
