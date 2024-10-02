import styled from 'styled-components';
import iconSprite from '../Components/assets/commit.png';

interface IconProps {
  position?: string;
  width?: string;
  height?: string;
}

const IconCommit = styled.div<IconProps>`
  width: ${({ width }) => width || '30px'};
  height: ${({ height }) => height || '30px'};
  background-image: url(${iconSprite});
  background-position: ${({ position }) => position || '0 0'};
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 30px;
  vertical-align: middle;
  background-size: 300px 180px;
  cursor: pointer;
`;

export default IconCommit;
