import { FC, SVGProps } from 'react';

export interface IconComponentProps {
  width?: string | number;
  height?: string | number;
}

export type IconComponent = FC<IconComponentProps>;

export type SvgComponent = FC<
  SVGProps<HTMLOrSVGElement> & { title?: string | undefined }
>;
