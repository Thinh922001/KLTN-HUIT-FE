import styled from 'styled-components';

export const Suggest = () => {
  return (
    <SuggestWrapper>
      <SuggestTitle>Gợi ý cho bạn</SuggestTitle>
    </SuggestWrapper>
  );
};

const SuggestWrapper = styled.section`
  width: 100%;
  padding: 20px 0px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
`;

const SuggestTitle = styled.h3`
  color: #1d2939;
  font-size: 24px;
  padding: 0 0 20px 20px;
  font-weight: bold;
`;
