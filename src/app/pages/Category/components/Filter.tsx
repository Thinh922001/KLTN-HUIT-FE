import styled from 'styled-components';

export const Filter = () => {
  return (
    <Wrapper>
      <Brand>
        <BtnFilterAll>Lọc</BtnFilterAll>
      </Brand>
      <SortBy></SortBy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  background: rgba(255, 255, 255, 1);
`;

const Brand = styled.div``;

const SortBy = styled.div``;

const BtnFilterAll = styled.button`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 12px;
  background: #fff;
`;
