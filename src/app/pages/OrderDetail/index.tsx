import IconLogin from 'app/components/IconLogin';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { OrderDetailProduct } from './components/OrderDetail';
import { OrderDetailActions, useOrderDetailSlice } from './slice';
import { selectIsLoading, selectOrderDetail } from './slice/selector';
import { CenteredLoading } from 'app/components/LoadingCenter';
import { getNameStatusOrder } from 'utils/string';
import { OrderStatusStyled } from '../OrderHistory/components/OrderItem';
import { OrderStatus } from 'auth/type';

export function OrderDetail() {
  useOrderDetailSlice();
  const { id } = useParams<{ id: string }>();
  const dispath = useDispatch();

  const orderDetail = useSelector(selectOrderDetail);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispath(OrderDetailActions.setOrderId(Number(id)));
    dispath(OrderDetailActions.loadingOrderDetail());
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Chi tiết đơn hàng</title>
        <meta name="description" content="order detail" />
      </Helmet>
      {isLoading ? (
        <CenteredLoading minHeight="550px" />
      ) : (
        <Wrapper>
          <HeaderWrapper>
            <Header>
              Chi Tiết đơn hàng -{' '}
              <OrderStatusStyled status={orderDetail?.status as OrderStatus}>
                {getNameStatusOrder(orderDetail?.status)}
              </OrderStatusStyled>
              <StatusOrder>
                -{' '}
                {orderDetail?.paymentMethod
                  ? 'Đã thanh toán'
                  : 'Chưa thanh toán'}
              </StatusOrder>
            </Header>
            <OrderDate>Đặt lúc {orderDetail?.receiveDate}</OrderDate>
          </HeaderWrapper>
          <HeaderWrapper>
            <OrderInfoUser>
              <H2>
                <IconLogin position="-167px -21px" width="17px" height="16px" />
                Thông tin nhận hàng
              </H2>
              <WrapperInfoUser>
                <LalbelInfoUser>Người nhận</LalbelInfoUser>
                <InfoUser>{orderDetail?.name}</InfoUser>
              </WrapperInfoUser>
              <WrapperInfoUser>
                <LalbelInfoUser>Nhận tại</LalbelInfoUser>
                <InfoUser>{orderDetail?.addressRecieve}</InfoUser>
              </WrapperInfoUser>
              <WrapperInfoUser>
                <LalbelInfoUser>Nhận lúc</LalbelInfoUser>
                <InfoUser>{orderDetail?.receiveDate}</InfoUser>
              </WrapperInfoUser>
            </OrderInfoUser>
            <OrderInfoPayMent>
              <PaymentHeader>
                <IconLogin position="-194px -23px" width="17px" height="14px" />
                Hình thức thanh toán
              </PaymentHeader>
              <OrderPaymentMethod>
                {orderDetail?.paymentMethod
                  ? 'Thanh toán qua ví'
                  : 'Chưa thanh toán'}
              </OrderPaymentMethod>
            </OrderInfoPayMent>
          </HeaderWrapper>
          <OrderDetailProduct />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div``;

const WrapperInfoUser = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const LalbelInfoUser = styled.div`
  color: #666;
`;

const InfoUser = styled.div`
  color: #333;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 63% auto;
  gap: 20px;

  & + & {
    margin-top: 20px;
  }
`;

const Header = styled.p`
  font-size: 2rem;
`;

const StatusOrder = styled.span`
  color: #1cac53; ;
`;

const OrderDate = styled.p``;

const OrderInfoUser = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  display: grid;
  gap: 10px;
  grid-template-rows: 20px auto;
`;

const H2 = styled.h2``;

const OrderInfoPayMent = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  display: grid;
  gap: 10px;
  grid-template-rows: 20px auto;
`;

const PaymentHeader = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const OrderPaymentMethod = styled.p`
  font-size: 1.4rem;
`;
