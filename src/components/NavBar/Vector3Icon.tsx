import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 148 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.02968 28.5672L8.15637 7.62247C9.25171 3.14752 13.2626 0 17.8696 0H129.446C133.999 0 137.978 3.07617 139.124 7.48303L144.571 28.4278C146.219 34.7619 141.438 40.9448 134.893 40.9448H12.7429C6.25754 40.9448 1.48775 34.8666 3.02968 28.5672Z'
      fill='#5061A4'
      stroke='#43518A'
      strokeWidth={5}
    />
  </svg>
);

const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
