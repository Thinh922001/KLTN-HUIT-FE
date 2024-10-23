import styled from 'styled-components';

import img2x from './icon_comment_2x.png';

interface IconProps {
  position?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

export const Icon = styled.div<IconProps>`
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};
  background-position: ${({ position }) => position || '0 0'};
  background-image: url(${img2x});
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 30px;
  vertical-align: middle;
  background-size: 200px 150px;
  ${({ style }) => style && { ...style }};
`;
