import React from 'react';
import Icons from './Icons';

const PinIcon = ({ color, size }) => (
  <Icons size={size} color={color}>
    <path d="M0,192v-192h192v192z" fill="none" />
    <g>
      <g id="surface1">
        <path d="M96,3.84c-33.87,0 -61.44,27.57 -61.44,61.44c0,54.195 56.175,118.83 58.56,121.56c0.735,0.84 1.77,1.32 2.88,1.32c1.185,-0.075 2.145,-0.48 2.88,-1.32c2.385,-2.775 58.56,-68.52 58.56,-121.56c0,-33.87 -27.57,-61.44 -61.44,-61.44zM96,46.08c12.72,0 23.04,10.32 23.04,23.04c0,12.72 -10.32,23.04 -23.04,23.04c-12.72,0 -23.04,-10.32 -23.04,-23.04c0,-12.72 10.32,-23.04 23.04,-23.04z" />
      </g>
    </g>
  </Icons>
);

export default PinIcon;
