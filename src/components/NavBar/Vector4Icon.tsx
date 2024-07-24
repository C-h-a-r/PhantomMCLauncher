import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29.3052 0.683359L10.1066 1.9163C4.54568 2.27342 0.349438 7.10697 0.776917 12.6629L2.16573 30.7132C2.56659 35.9231 6.91097 39.9461 12.1363 39.9461H29.9461C35.4689 39.9461 39.9461 35.4689 39.9461 29.9461V10.6628C39.9461 4.88781 35.0684 0.31325 29.3052 0.683359Z'
      fill='#5061A4'
      stroke='#43518A'
      strokeWidth={5}
    />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
