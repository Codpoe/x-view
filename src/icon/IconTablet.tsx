import React from 'react';

export interface IconTabletProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconTablet: React.SFC<IconTabletProps> = (
  props: IconTabletProps
): React.ReactElement => {
  const { color, size, style, ...restProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className="feather feather-tablet"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', ...style }}
      {...restProps}
    >
      <rect
        x="4"
        y="2"
        width="16"
        height="20"
        rx="2"
        ry="2"
        transform="rotate(180 12 12)"
      />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
};

IconTablet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default IconTablet;
