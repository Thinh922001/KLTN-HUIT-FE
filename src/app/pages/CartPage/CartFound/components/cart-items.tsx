import styled from 'styled-components';
import Img1 from './assets/1.jpg';
import { ProductExpand } from './product-expand';
import { ExpandContent } from './expand-content';
import { useState } from 'react';

export function CardItem() {
  const [activeExpand, setActiveExpand] = useState<boolean>(false);

  const handleActiveExpand = () => {
    setActiveExpand(!activeExpand);
  };
  return (
    <Wrapper>
      <ImgWrapper>
        <ImgCard src={Img1} />
        <Div>
          {' '}
          <BtnRemoveCard>
            {' '}
            <Span /> Xóa
          </BtnRemoveCard>
        </Div>
      </ImgWrapper>
      <DescWrapper>
        <CartTitle>
          {' '}
          Máy giặt Electrolux UltimateCare 500 Inverter 10 kg EWF1024P5WB{' '}
        </CartTitle>
        <CartNoteWrapper>
          {' '}
          <CartNote>Online giá rẻ quá</CartNote>
          <ProductExpand
            isActive={activeExpand}
            handleActiveExpand={handleActiveExpand}
          />
          <ExpandContent isActive={activeExpand} />
        </CartNoteWrapper>
      </DescWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DescWrapper = styled.div``;

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
