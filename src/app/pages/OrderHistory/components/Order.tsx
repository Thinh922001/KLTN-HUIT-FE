import IconLogin from 'app/components/IconLogin';
import styled from 'styled-components';
import { MenuTop } from './MenuTop';
import { Filter } from './Filter';
import { OrderItem } from './OrderItem';
import OrderItemSkeleton from './OrderItemSkeleton';

export const Order = () => {
  return (
    <Wrapper>
      <MenuTop />
      <Filter />
      <WrapperOrder>
        <OrderItem />
        <OrderItemSkeleton />
      </WrapperOrder>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const WrapperOrder = styled.div``;
