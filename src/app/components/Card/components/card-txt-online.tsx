import { FC } from 'react';
import styled from 'styled-components';
import { ETxtOnline } from 'types/Card';

interface Props {
  type: ETxtOnline;
}

export const CardTxtOnline = styled.p<Props>`
  font-weight: 700;
  margin-bottom: 10px;

  ${({ type }) => {
    if (type === ETxtOnline.PRIMARY)
      return `
             color: #fd853a;
              font-size: 1.2rem; `;
    return `
          color: #666;
          font-size: 1.4rem;
            `;
  }}
`;
