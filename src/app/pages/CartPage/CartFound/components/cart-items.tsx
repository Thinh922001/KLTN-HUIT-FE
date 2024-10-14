import styled from 'styled-components';
import Img1 from './assets/1.jpg';
import { ProductExpand } from './product-expand';
import { ExpandContent } from './expand-content';
import React, { ChangeEvent, useState } from 'react';
import { currencyVND } from 'utils/string';
import { ICart } from '../../slice/type';
import { CartActions, useCartSlice } from '../../slice';
import { useDispatch } from 'react-redux';

interface Props {
  quantity?: number;
}

interface PropsCart {
  data: ICart;
}

export const CardItem: React.FC<PropsCart> = ({ data }) => {
  useCartSlice();
  const [activeExpand, setActiveExpand] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleCardOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!/^\d*$/.test(inputValue)) {
      return;
    }

    if (inputValue !== '' && parseInt(inputValue, 10) < 1) {
      return;
    }

    const value = Number(inputValue) === 0 ? 1 : Number(inputValue);
  };

  const increaseQuantity = () => {
    dispatch(CartActions.increaseQuantity(data.productDetailId));
  };

  const decreaseQuantity = () => {
    dispatch(CartActions.decreaseQuantity(data.productDetailId));
  };

  const handleActiveExpand = () => {
    setActiveExpand(!activeExpand);
  };
  return (
    <Wrapper className="wrapper">
      <Price>
        <WrapperPrice>
          <Price>{currencyVND(data.price)}</Price>
          {data.oldPrice ? (
            <OldPrice>{currencyVND(data.oldPrice)}</OldPrice>
          ) : null}
        </WrapperPrice>
      </Price>
      <ImgWrapper className="img">
        <ImgCard src={data.img} />
        <Div>
          <BtnRemoveCard
            onClick={() =>
              dispatch(CartActions.removeFromCart(data.productDetailId))
            }
          >
            <Span /> Xóa
          </BtnRemoveCard>
        </Div>
      </ImgWrapper>
      <DescWrapper>
        <CartTitle>{data.productName}</CartTitle>
        <CartNoteWrapper>
          <CartNote>Online giá rẻ quá</CartNote>
          <ProductExpand
            isActive={activeExpand}
            handleActiveExpand={handleActiveExpand}
          />
          <ExpandContent isActive={activeExpand} />
        </CartNoteWrapper>
        <DiscountPromotion>
          <DiscountText>Giảm</DiscountText>
          <DisCountPrice>{currencyVND(400000)} </DisCountPrice>
          <DiscountText>Còn</DiscountText>
          <DisCountPrice>{currencyVND(9390000)}</DisCountPrice>
        </DiscountPromotion>

        <FooterCard>
          {data.color ? (
            <Color>
              <ColorTex>Màu: {data.color}</ColorTex>
            </Color>
          ) : null}

          <ChosenNumber>
            <Minus quantity={data.quantity} onClick={decreaseQuantity}>
              <IConMinus />
            </Minus>
            <QuantityWrapper>
              <Quantity
                onChange={handleCardOnchange}
                type="text"
                maxLength={3}
                value={data.quantity}
              />
            </QuantityWrapper>

            <Plus onClick={increaseQuantity}>
              <IConMinus />
              <IConMinus />
            </Plus>
          </ChosenNumber>
        </FooterCard>
      </DescWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 18px 30px;
  display: flex;
  gap: 10px;
  position: relative;

  & + & {
    border-top: 1px solid #ccc;
  }
`;

const WrapperPrice = styled.div`
  position: absolute;
  right: 33px;
  top: 17px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Price = styled.span`
  color: #f30c28;
  font-size: 1.3rem;
  font-weight: 700;
`;

const OldPrice = styled.span`
  color: #666;
  text-decoration: line-through;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DescWrapper = styled.div`
  width: 100%;
`;

const ImgCard = styled.img`
  width: 75px;
  height: 75px;
  object-fit: contain;
  display: inline;
`;

const Span = styled.span`
  display: inline-block;
  position: relative;
  background: #ccc;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 2px;
    height: 8px;
    background: #fff;
    position: absolute;
    transform: rotate(45deg);
    top: 2px;
    left: 5px;
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnRemoveCard = styled.button`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
`;

const CartTitle = styled.h3`
  width: 70%;
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 19px;
`;

const CartNoteWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const CartNote = styled.span`
  color: #666;
  font-size: 1.2rem;
`;

const DiscountPromotion = styled.div`
  margin: 10px 0 5px 0;
  background: #fff3c2;
  padding: 8px 10px;
`;

const DiscountText = styled.span`
  font-size: 1.2rem;
  margin-right: 5px;
`;

const DisCountPrice = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  color: #c10017;
  margin-right: 5px;
`;

const FooterCard = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Color = styled.div``;

const ColorTex = styled.span`
  font-size: 1.3rem;
`;

const ChosenNumber = styled.div`
  margin-left: auto;
  display: flex;
  height: 34px;
`;

const IConMinus = styled.i`
  width: 12px;
  height: 2px;
  background: #ccc;
  display: block;
  margin: 14px auto;
  background: #288ad6;
`;

const Minus = styled.div<Props>`
  border-right: 1px solid #dfdfdf;
  background: #fff;
  width: 33px;
  height: 33px;
  position: relative;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ quantity }) =>
    quantity &&
    quantity <= 1 &&
    `pointer-events: none;
     cursor: none;`}

  ${IConMinus} {
    ${({ quantity }) => quantity && quantity <= 1 && `background: #ccc;`}
  }
`;

const Plus = styled(Minus)`
  ${IConMinus}:nth-child(2) {
    width: 2px;
    height: 12px;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  border: 1px solid #dfdfdf;
  height: 33px;
  text-align: center;
`;

const Quantity = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;

  &:focus-visible {
    border: 3px solid #fc9639;
    box-sizing: border-box;
    height: 30px;
  }
`;
