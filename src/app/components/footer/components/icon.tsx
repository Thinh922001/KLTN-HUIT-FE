import styled from 'styled-components';
import iconSprite from '../assets/Logo-webmoi-min.png';
import socialSprite from '../assets/icon-socal.webp';

interface Props {
  position: string;
  width?: string;
  height?: string;
}

export const IconFooter = styled.div<Props>`
  background-repeat: no-repeat;
  background-image: url(${iconSprite});
  background-position: ${({ position }) => position || '0 0'};
  display: inline-block;
  height: ${({ height }) => height || '24px'};
  width: ${({ width }) => width || '80px'};
  line-height: 30px;
  vertical-align: middle;
  background-size: 250px 200px;
`;

export const IconSocial = styled(IconFooter)`
  background-size: 300px 280px;
  background-image: url(${socialSprite});
  height: ${({ height }) => height || '18px'};
  width: ${({ width }) => width || '18px'};
`;
