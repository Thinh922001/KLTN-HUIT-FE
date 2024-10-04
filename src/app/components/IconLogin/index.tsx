import styled from 'styled-components';
import iconSprite from './icon.png';

interface IconProps {
  position?: string;
  width?: string;
  height?: string;
}

const Icon = styled.div<IconProps>`
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};
  background-image: url(${iconSprite});
  background-position: ${({ position }) => position || '0 0'};
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 30px;
  vertical-align: middle;
  background-size: 490px 224px;
  cursor: pointer;
`;

export default Icon;
