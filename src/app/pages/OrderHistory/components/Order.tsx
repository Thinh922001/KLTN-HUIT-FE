import IconLogin from 'app/components/IconLogin';
import styled from 'styled-components';
import { MenuTop } from './MenuTop';
import { Filter } from './Filter';
import { OrderItem } from './OrderItem';
import OrderItemSkeleton from './OrderItemSkeleton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderHistoryActions, useOrderHistorySlice } from '../slice';
import {
  selectIsLoading,
  selectOrder,
  selectSkip,
  selectTake,
  selectTotal,
} from '../slice/selector';
import { SeeMore } from 'app/components/SeeMore';

export const Order = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OrderHistoryActions.loadOrder());
  }, []);

  const isLoading = useSelector(selectIsLoading);
  const order = useSelector(selectOrder);
  const total = useSelector(selectTotal);
  const skip = useSelector(selectSkip);
  const take = useSelector(selectTake);

  const handleLoadMore = () => {
    dispatch(OrderHistoryActions.loadMoreOrder());
  };

  return (
    <Wrapper>
      <MenuTop />
      <Filter />
      <WrapperOrder>
        {isLoading && !order.length ? (
          <OrderItemSkeleton />
        ) : (
          order.map(e => <OrderItem key={e.id} data={e} />)
        )}
        {isLoading && order.length ? (
          <OrderItemSkeleton />
        ) : skip + take < total ? (
          <SeeMore
            onClick={handleLoadMore}
            text={`Xem Thêm ${total - (skip + take)} đơn hàng`}
          />
        ) : null}
      </WrapperOrder>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const WrapperOrder = styled.div``;
