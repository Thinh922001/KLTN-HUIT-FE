import React from 'react';
import styled from 'styled-components';
import { IOrderHistory } from 'types/OrderHistory';
import { currencyVND } from 'utils/string';

interface Props {
  data: IOrderHistory;
}

export const OrderItem: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Head>
        <OrderId>
          <B>Đơn hàng</B> <Span>{data.id}</Span>
        </OrderId>
        <OrderStatus>{data.status}</OrderStatus>
      </Head>
      <ItemWrapper>
        <Item>
          <ItemImg>
            <Img src={data.images[0]} />
          </ItemImg>
          <ItemName>
            {data.name}
            {data.totalItems > 1 ? `và còn ${data.totalItems}` : null}
          </ItemName>
        </Item>
        <TotalPriceWrapper>
          <TotalPrice>Tổng tiền: {currencyVND(data.totalAmount)}</TotalPrice>
        </TotalPriceWrapper>
      </ItemWrapper>
      <BtnDetailItem>Chi Tiết</BtnDetailItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 12px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;

const Head = styled.div`
  display: grid;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e3e3;
  grid-template-columns: 1fr max-content;
  gap: 5px;
  align-items: end;
`;

const OrderId = styled.div``;

const B = styled.b``;

const Span = styled.span``;

const OrderStatus = styled(B)`
  color: #1cac53;
`;

const ItemWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
`;

const ItemImg = styled.div``;

const Img = styled.img`
  display: block;
  max-height: 60px;
  width: 60px;
`;

const ItemName = styled.h5``;

const TotalPriceWrapper = styled.div``;

const TotalPrice = styled.span``;

const BtnDetailItem = styled.button`
  width: 150px;
  display: block;
  border: 1px solid #4a90e2;
  border-radius: 4px;
  line-height: 16px;
  color: #4a90e2;
  padding: 10px 15px;
  text-align: center;
  margin-left: 8px;
  margin-left: auto;
  cursor: pointer;
`;
