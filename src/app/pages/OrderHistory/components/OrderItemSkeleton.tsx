import Skeleton from 'app/components/Skeleton';
import React from 'react';
import styled from 'styled-components';

const OrderItemSkeleton = () => {
  return (
    <Wrapper>
      <Head>
        <OrderId>
          <Skeleton width="290px" height="20px" />
        </OrderId>
        <OrderStatus>
          <Skeleton width="60px" height="20px" />
        </OrderStatus>
      </Head>
      <ItemWrapper>
        <Item>
          <ItemImg>
            <Skeleton width="60px" height="60px" />
          </ItemImg>
          <ItemName>
            <Skeleton width="315px" height="40px" />
            <Skeleton width="315px" height="14px" />
            <Skeleton width="315px" height="14px" />
          </ItemName>
        </Item>
        <TotalPriceWrapper>
          <Skeleton width="112px" height="14px" />
          <Skeleton width="125px" height="14px" />
        </TotalPriceWrapper>
      </ItemWrapper>
      <BtnDetailItem>
        <Skeleton width="100%" height="100%" />
      </BtnDetailItem>
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

const OrderStatus = styled.div``;

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

const ItemName = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;

const BtnDetailItem = styled.div`
  width: 150px;
  height: 38px;
  border-radius: 4px;
  text-align: center;
  margin-left: auto;
  cursor: pointer;
`;

export default OrderItemSkeleton;
