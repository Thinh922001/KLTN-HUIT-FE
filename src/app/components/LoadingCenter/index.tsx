import styled from 'styled-components';
import { LoadingIndicator } from '../LoadingIndicator';
import React from 'react';

interface Props {
  minHeight?: string;
  tiny?: boolean;
}

export const CenteredLoading: React.FC<Props> = ({ minHeight, tiny }) => {
  return (
    <CenteredWrapper minHeight={minHeight}>
      <LoadingIndicator tiny={tiny} />
    </CenteredWrapper>
  );
};

const CenteredWrapper = styled.div<{ minHeight?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '200px')};
`;
