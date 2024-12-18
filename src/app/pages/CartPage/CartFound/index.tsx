import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from './components/cart-items';
import { currencyVND } from 'utils/string';
import { CartInfo } from './components/CartInfo';
import { CartDisCount } from './components/CartDiscount';
import CustomCheckbox from 'app/components/CustomCheckBox';
import { useEffect, useState } from 'react';
import { CartActions, useCartSlice } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCouponResult,
  selectIsExistHasNoStock,
  selectLengthCart,
  selectOrderDone,
  selectOrderLoading,
  selectTotalPrice,
} from '../slice/selector';
import { CenteredLoading } from 'app/components/LoadingCenter';
import { useAddToCartToast } from 'app/components/Toast';

export function CartFound() {
  useCartSlice();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartLength = useSelector(selectLengthCart);
  const totalAmount = useSelector(selectTotalPrice);
  const hasNoStock = useSelector(selectIsExistHasNoStock);
  const couponResult = useSelector(selectCouponResult);
  const totalPrice = couponResult.totalAmount
    ? couponResult.totalAmount
    : totalAmount;
  const isLoading = useSelector(selectOrderLoading);
  const isOrderDone = useSelector(selectOrderDone);
  const [isDegree, setIsDegree] = useState<boolean>(false);

  const showAddToCartToast = useAddToCartToast();

  useEffect(() => {
    if (isOrderDone) {
      showAddToCartToast();
      const timer = setTimeout(() => {
        dispatch(CartActions.resetCart());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOrderDone, dispatch]);

  return (
    <Wrapper>
      <CartContainer>
        <CartHeader>
          <BuyMore to="/">Mua Thêm sản phẩm khác</BuyMore>
          <YourCard>Giỏ hàng của anh</YourCard>
        </CartHeader>
        <CartBody>
          {cartItems.length > 0 &&
            cartItems.map((e, index) => <CardItem key={index} data={e} />)}

          <Total>
            <TotalWrapper>
              <TotalText>Tạm tính ({cartLength} sản phẩm): </TotalText>
              <TotalText>{currencyVND(totalAmount)} </TotalText>
            </TotalWrapper>
          </Total>
          <CartInfo />
          <CartDisCount />
          <Total>
            <TotalPriceWrapper>
              <TotalPrice>TổngTiền: </TotalPrice>
              <PriceWrapper>
                {couponResult.totalAmount ? (
                  <OldPrice>{currencyVND(totalAmount)}</OldPrice>
                ) : null}
                {couponResult.totalAmount ? (
                  <DisCount>
                    {couponResult.disCountType === 'percentage'
                      ? `-${couponResult.disCountValue}%`
                      : `-${currencyVND(couponResult.disCountValue)}`}
                  </DisCount>
                ) : null}
                <Price>{currencyVND(totalPrice)}</Price>
              </PriceWrapper>
            </TotalPriceWrapper>
          </Total>

          <CheckBoxWrapper>
            <CustomCheckbox
              id="degree"
              isChecked={isDegree}
              onChange={checked => setIsDegree(checked)}
            />
            <LabelPolicy htmlFor="degree">
              Tôi đồng ý với{' '}
              <LinkPolicy href="#!">
                Chính sách xử lý dữ liệu cá nhân
              </LinkPolicy>
              của chúng tôi
            </LabelPolicy>
          </CheckBoxWrapper>
          <WrapperSubmit>
            <SubmitOrder
              hasNoStock={hasNoStock}
              onClick={() => dispatch(CartActions.loadingOrder())}
            >
              {isLoading ? (
                <CenteredLoading tiny minHeight="100%" />
              ) : (
                ' Đặt Hàng'
              )}
            </SubmitOrder>
          </WrapperSubmit>
        </CartBody>
      </CartContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 83px);
`;

const CartContainer = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const BuyMore = styled(Link)`
  font-size: 1.4rem;
  color: #288ad6;
  line-height: 16px;
  padding: 10px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    border-top: 1px solid #288ad6;
    border-left: 1px solid #288ad6;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px 2px 0;
    transform: rotate(-45deg);
    left: -3px;
    top: 39%;
  }
`;

const YourCard = styled.a`
  font-size: 1.4rem;
`;

const CartBody = styled.div`
  width: 100%;
  display: block;
  background: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  position: relative;
`;

const Total = styled.div`
  padding: 0 20px;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 1.4rem;
`;

const TotalText = styled.span``;

const Price = styled.span`
  color: #f30c28;
  font-size: 1.3rem;
  font-weight: 700;
  right: 33px;
  top: 17px;
`;

const TotalPrice = styled(TotalText)`
  font-weight: 700;
`;

const TotalPriceWrapper = styled(TotalWrapper)`
  border-bottom: 1.2px solid #ccc;
  padding: 10px 1px;
`;

const CheckBoxWrapper = styled.div`
  padding: 30px 20px 0px 20px;
  display: flex;
  align-items: center;
`;

const LabelPolicy = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;

const LinkPolicy = styled.a`
  color: #288ad6;
`;

const SubmitOrder = styled.button<{ hasNoStock: boolean }>`
  display: block;
  overflow: hidden;
  color: #fff;
  text-align: center;
  height: 50px;
  margin: 10px auto;
  width: 100%;
  border-radius: 4px;
  border: 0;
  font-weight: 700;
  font-size: 1.9rem;
  cursor: pointer;
  background: linear-gradient(180deg, #f79429, #f7712e);

  ${({ hasNoStock }) =>
    hasNoStock &&
    ` opacity: 0.5;
      pointer-events: none;`}
`;

const WrapperSubmit = styled.div`
  padding: 10px 20px;
`;

const OldPrice = styled.span`
  color: #666;
  text-decoration: line-through;
`;

const DisCount = styled.span`
  color: #333;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
