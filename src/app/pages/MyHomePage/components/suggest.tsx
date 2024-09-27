import { Card } from 'app/components/Card';
import styled from 'styled-components';
import { data } from 'app/components/Card/data/card-data';
import { SeeMore } from 'app/components/SeeMore';

export const Suggest = () => {
  return (
    <SuggestWrapper>
      <SuggestTitle>Gợi ý cho bạn</SuggestTitle>
      <SuggestItems>
        {data.length && data.map((e, index) => <Card data={e} key={index} />)}
      </SuggestItems>
      <SeeMore text="Xem thêm sản phẩm" />
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
