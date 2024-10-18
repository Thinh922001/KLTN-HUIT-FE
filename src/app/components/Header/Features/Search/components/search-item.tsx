import { useCartSlice } from 'app/pages/CartPage/slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { currencyVND } from 'utils/string';
import { SearchActions } from '../slice';
import { ISearchItem as Items } from '../slice/type';

interface Props {
  data: Items;
}

export const SearchItem: React.FC<Props> = ({ data }) => {
  useCartSlice();

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(SearchActions.setKeyWord(''));
  };
  return (
    <A to={`/chi-tiet-san-pham/${data.id}`}>
      <Wrapper onClick={handleClick}>
        <SearchImg src={data.img} />
        <SearchContent>
          <Title>{data.productName}</Title>
          <PriceWrapper>
            <Price>{currencyVND(data.price)}</Price>
            {Number(data.oldPrice) ? (
              <OldPrice>{currencyVND(data.oldPrice)}</OldPrice>
            ) : null}
            {Number(data.discountPercent) ? (
              <DiscountPercent>-{data.discountPercent}%</DiscountPercent>
            ) : null}
          </PriceWrapper>
        </SearchContent>
      </Wrapper>
    </A>
  );
};

const A = styled(Link)``;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0;

  & + & {
    border-top: 1px solid #eee;
  }
`;

const SearchImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h6`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #333;
  font-size: 1.4rem;
  overflow: hidden;
  font-weight: 500;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Price = styled.span`
  font-size: 14px;
  color: #e83a45;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
`;

const OldPrice = styled.span`
  display: inline-block;
  text-decoration: line-through;
  color: #333;
`;

const DiscountPercent = styled.span`
  color: #333;
`;
