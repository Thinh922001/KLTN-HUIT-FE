import styled from 'styled-components';
import { LoadingIndicator } from '../LoadingIndicator';
import React from 'react';

interface Props {
  minHeight?: string;
}

export const CenteredLoading: React.FC<Props> = ({ minHeight }) => {
  return (
    <CenteredWrapper minHeight={minHeight}>
      <LoadingIndicator />
    </CenteredWrapper>
  );
};

const CenteredWrapper = styled.div<{ minHeight?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '200px')};
`;
