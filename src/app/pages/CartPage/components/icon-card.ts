import styled from 'styled-components';
import iconSprite from '../assets/cart-mobile-1.png';

interface IconProps {
  position?: string;
  width?: string;
  height?: string;
}

const Icon = styled.div<IconProps>`
  width: ${({ width }) => width || '30px'};
  height: ${({ height }) => height || '30px'};
  background-image: url(${iconSprite});
  background-position: ${({ position }) => position || '0 0'};
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 30px;
  vertical-align: middle;
  background-size: 133px 305px;
  cursor: pointer;
`;

export default Icon;
