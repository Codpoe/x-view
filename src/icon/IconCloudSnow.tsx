import React from 'react';

export interface IconCloudSnowProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconCloudSnow: React.SFC<IconCloudSnowProps> = (
  props: IconCloudSnowProps
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
      className="feather feather-cloud-snow"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', ...style }}
      {...restProps}
    >
      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="8" y1="20" x2="8" y2="20" />
      <line x1="12" y1="18" x2="12" y2="18" />
      <line x1="12" y1="22" x2="12" y2="22" />
      <line x1="16" y1="16" x2="16" y2="16" />
      <line x1="16" y1="20" x2="16" y2="20" />
    </svg>
  );
};

IconCloudSnow.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default IconCloudSnow;
