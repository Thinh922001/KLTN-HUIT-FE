import styled from 'styled-components';
import { LoadingIndicator } from '../LoadingIndicator';

export const CenteredLoading = () => {
  return (
    <CenteredWrapper>
      <LoadingIndicator />
    </CenteredWrapper>
  );
};

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
