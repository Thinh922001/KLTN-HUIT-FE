import { Card } from 'app/components/Card';
import styled from 'styled-components';
import { data } from 'app/components/Card/data/card-data';

export const Suggest = () => {
  return (
    <SuggestWrapper>
      <SuggestTitle>Gợi ý cho bạn</SuggestTitle>
      <SuggestItems>
        {data.length && data.map((e, index) => <Card data={e} key={index} />)}
      </SuggestItems>
      <LoadMoreWrapper>
        <LoadMore>Xem thêm sản phẩm</LoadMore>
      </LoadMoreWrapper>
    </SuggestWrapper>
  );
};

const SuggestWrapper = styled.section`
  width: 100%;
  padding: 20px 10px;
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

const SuggestItems = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const LoadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LoadMore = styled.a`
  border: 0;
  color: #2a83e9;
  font-size: 1.6rem;
  font-weight: 700;
  height: 36px;
  padding: 0 12px;
  line-height: 36px;
  position: relative;
  cursor: pointer;

  &::before {
    border-top: 2px solid #2a83e9;
    border-left: 2px solid #2a83e9;
    content: '';
    position: absolute;
    height: 5px;
    width: 5px;
    right: 0;
    top: 44%;
    transform: translateY(-50%);
    transform: rotate(135deg);
  }
`;
