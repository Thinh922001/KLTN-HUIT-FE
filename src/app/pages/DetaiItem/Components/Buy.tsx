import styled from 'styled-components';
import IconCommit from './IconCommit';
import { useAddToCartToast } from 'app/components/Toast';
import { useProductDetailSlice } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsDisableProduct,
  selectProductDetail,
  selectProductDetailId,
} from '../slice/selector';
import { CartActions, useCartSlice } from 'app/pages/CartPage/slice';
import { selectIsCartLoadDone } from 'app/pages/CartPage/slice/selector';
import { useEffect } from 'react';

export const Buy = () => {
  useProductDetailSlice();
  useCartSlice();

  const dispatch = useDispatch();
  const productDetailId = useSelector(selectProductDetailId);

  const isCartLoadDone = useSelector(selectIsCartLoadDone);

  const isDisableProduct = useSelector(selectIsDisableProduct);

  const showAddToCartToast = useAddToCartToast();

  useEffect(() => {
    if (isCartLoadDone) {
      showAddToCartToast();
      dispatch(CartActions.resetCartLoadDone());
    }
  }, [isCartLoadDone]);

  const handleClick = () => {
    if (isDisableProduct) return;
    dispatch(CartActions.setProductIdChosen(String(productDetailId)));
    dispatch(CartActions.loadAddToCart());
  };
  return (
    <Wrapper>
      <BuyBtn onClick={handleClick} isDisable={isDisableProduct}>
        <IconBuy position="-200px -164px" width="18px" height="18px" />
        Thêm vào giỏ
      </BuyBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BuyBtn = styled.button<{ isDisable: boolean }>`
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')};
  border-color: ${({ isDisable }) => (isDisable ? '#ccc' : '#2a83e9')};
  background-color: ${({ isDisable }) => (isDisable ? '#f5f5f5' : '#fff')};
  color: ${({ isDisable }) => (isDisable ? '#999' : '#2a83e9')};
  padding: 7px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  width: 100%;
  height: 53px;
  border-radius: 8px;
  border: 1px solid
    ${({ isDisable }) => (isDisable ? '#ccc' : 'rgb(42, 131, 233)')};

  &:disabled {
    pointer-events: none;
  }
`;

const IconBuy = styled(IconCommit)`
  flex-shrink: 0;
`;
