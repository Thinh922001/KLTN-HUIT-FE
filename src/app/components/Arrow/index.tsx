import styled from 'styled-components';

export interface Props {
  direction: 'left' | 'right';
}

export const Arrow = styled.div<Props>`
  transform: rotate(-45deg);
  width: 10px;
  height: 10px;

  ${({ direction }) => {
    switch (direction) {
      case 'right':
        return `
           border-right: 3px solid black;
	        border-bottom: 3px solid black;
        `;
      case 'left':
      default:
        return `
          border-left: 3px solid black;
          border-top: 3px solid black;
        `;
    }
  }}
`;
