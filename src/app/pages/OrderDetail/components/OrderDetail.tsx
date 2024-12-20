import IconLogin from 'app/components/IconLogin';
import { CenteredLoading } from 'app/components/LoadingCenter';
import ShowModal from 'app/components/ModolOverlay';
import {
  QuantitySelector,
  ReturnReasonSelector,
} from 'app/components/SelectionOption';
import showErrorToast from 'app/components/Toast/components/Toast-error';
import { selectBalance } from 'app/pages/OrderHistory/slice/selector';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { OrderDetailActions } from '../slice';
import {
  selectItemSelected,
  selectOrderDetail,
  selectPaymentLoading,
  selectReturnOrderLoading,
} from '../slice/selector';
import { ProductDetailItem } from './ProductDettailItem';
import { ReturnOrderImg } from './ReturnOrderImg';

export const OrderDetailProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderDetail = useSelector(selectOrderDetail);
  const isLoading = useSelector(selectPaymentLoading);
  const balance = useSelector(selectBalance);
  const isReturnOrderLoading = useSelector(selectReturnOrderLoading);

  const hanldePayment = () => {
    if (balance < Number(orderDetail?.finalAmount)) {
      showErrorToast(
        'Tài khoản của bạn không đủ vui lòng nạp thêm tiền vào ví',
      );
      return;
    }
    dispatch(OrderDetailActions.loadingPayment());
  };

  const hanldeReturnOrder = () => {
    dispatch(OrderDetailActions.loadingReturnOrder());
  };



  const [isModalVisible, setIsModalVisible] = useState(false);

  const item = useSelector(selectItemSelected);

  const handleVisibleModal = () => {
    setIsModalVisible(true);
  };

  const handleQuantityChange = event => {
    dispatch(OrderDetailActions.setQuantityReturn(event.target.value));
  };

  const returnReasons = [
    'Sản phẩm bị lỗi',
    'Không đúng sản phẩm đặt hàng',
    'Sản phẩm bị hỏng trong quá trình vận chuyển',
    'Không còn nhu cầu sử dụng',
    'Thời gian giao hàng quá lâu',
    'Sản phẩm không giống mô tả',
    'Không phù hợp với nhu cầu',
    'Đã mua nhầm sản phẩm',
    'Sản phẩm bị thiếu phụ kiện',
    'Nhận được hàng không đúng màu sắc',
    'Sản phẩm đã qua sử dụng',
    'Chất lượng không đạt yêu cầu',
    'Giá sản phẩm quá cao so với chất lượng',
    'Nhận sai kích thước hoặc thông số kỹ thuật',
  ];
  return (
    <Wrapper>
      <OrderDetailHeader>
        <IconLogin position="-221px -20px" width="17px" height="20px" />
        Thông tin sản phẩm
      </OrderDetailHeader>
      {orderDetail?.items.map((e, index) => (
        <ProductDetailItem
          visibleModal={handleVisibleModal}
          data={e}
          key={index}
        />
      ))}

      <OrderPrice>
        <PriceItem>
          <PriceLable>Tạm tính</PriceLable>
          <PriceValue>
            {Number(orderDetail?.totalAmount).toLocaleString()}đ
          </PriceValue>
        </PriceItem>
        <PriceItem>
          <PriceLable>Tổng tiền</PriceLable>
          <PriceValue>
            {Number(orderDetail?.finalAmount).toLocaleString()}đ
          </PriceValue>
        </PriceItem>
        {orderDetail?.isPaid ? (
          <PriceItem>
            <FinalLabel>Tổng tiền đã thanh toán</FinalLabel>
            <FinalValue>{orderDetail.paidAmount.toLocaleString()}đ</FinalValue>
          </PriceItem>
        ) : null}

        {!orderDetail?.isPaid && orderDetail?.status !== 'Canceled' ? (
          <PaymentButton onClick={hanldePayment}>
            {isLoading ? (
              <CenteredLoading tiny minHeight="100%" />
            ) : (
              'Thanh toán'
            )}
          </PaymentButton>
        ) : null}
      </OrderPrice>
      <PaymentActionsWrapper>
        <ActionLink onClick={() => navigate('/user/lich-su-mua-hang')}>
          Về trang chủ
        </ActionLink>
      </PaymentActionsWrapper>

      <ShowModal
        show={isModalVisible}
        onClose={() => {
          dispatch(OrderDetailActions.resetReturnOrderState());
          setIsModalVisible(false);
        }}
        minWidth="70%"
      >
        <h2 style={{ marginBottom: '10px' }}>Đổi trả sản phẩm</h2>
        <ProductInforWrapper>
          <p>Sản phẩm: {item?.name}</p>
          <ImgModal src={item?.img} />
          <QuantitySelector
            minWidth="50px"
            maxQuantity={item?.quantity || 0}
            onChange={handleQuantityChange}
          />
          <ReturnReasonSelector reasons={returnReasons} />
          <ReturnOrderImg />
        </ProductInforWrapper>

        {isReturnOrderLoading ? <CenteredLoading minHeight="20px" /> : null}
        <TopUpButton onClick={hanldeReturnOrder}>Đổi trả</TopUpButton>
      </ShowModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px 4px 0 0;
  margin: 20px 0 0 0;
  padding: 15px;
  display: grid;
  gap: 10px;
`;

const OrderDetailHeader = styled.h2`
  color: #222;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 5px;
  height: fit-content;
`;

const PaymentActionsWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-flow: column;
  padding-bottom: 20px;
`;

const ActionLink = styled.a`
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 13px 31px;
  color: #4a90e2;
  border: 1px solid #4a90e2;
  cursor: pointer;

  &:hover {
    background: #4a90e2;
    color: #fff;
  }
`;

const OrderPrice = styled.div`
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  background: #fff;
  padding: 15px;
`;

const PriceItem = styled.div`
  margin-bottom: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceLable = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #222;
`;

const PriceValue = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #222;
`;

const FinalLabel = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #222;
`;

const FinalValue = styled.span`
  color: #d0021b;
`;

const PaymentButton = styled.button`
  min-width: 100px;
  min-height: 50px;
  cursor: pointer;
  background-color: #fc7600;
  border-radius: 8px;
  padding: 15px 10px;
  border: 1px solid #fc7600;
`;

const TopUpButton = styled.button`
  padding: 10px 20px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 20px;
`;

const ImgModal = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 20px;
  margin: 0 auto;
  display: inline-block;
`;

const ProductInforWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
