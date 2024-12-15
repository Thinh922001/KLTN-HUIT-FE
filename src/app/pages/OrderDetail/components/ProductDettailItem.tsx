import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { OrderDetailActions } from '../slice';
import { selectItemSelected } from '../slice/selector';

interface IDetailItem {
  id: number;
  name: string;
  img: string;
  quantity: number;
  totalAmount: number;
  price: number;
  oldPrice: number;
}

interface Props {
  data: IDetailItem;
  visibleModal: () => void;
}

export const ProductDetailItem: React.FC<Props> = ({ data, visibleModal }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => setShowMenu(false)}
    >
      <Img src={data.img} />
      <Info>
        <Name>{data.name}</Name>
        <Quantity>Số lượng: {data.quantity}</Quantity>
      </Info>
      <RightSection>
        <PriceWrapper>
          <Price>{Number(data.price).toLocaleString()}đ</Price>
          {!!Number(data.oldPrice) && (
            <OldPrice>{Number(data.oldPrice).toLocaleString()}đ</OldPrice>
          )}
        </PriceWrapper>
        <MoreOptions>
          {showMenu && (
            <Dots
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              ...
            </Dots>
          )}
          {showDropDown && (
            <DropdownMenu
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              <MenuItem
                onClick={() => {
                  visibleModal();
                  dispatch(OrderDetailActions.setItemSelected(data.id));
                }}
              >
                Đổi trả
              </MenuItem>
            </DropdownMenu>
          )}
        </MoreOptions>
      </RightSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto 15%;
  grid-gap: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const Name = styled.p`
  font-size: 14px;
  line-height: 140%;
  color: #222;
  word-break: break-word;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Quantity = styled.p`
  margin-bottom: 0;
  font-size: 12px;
  line-height: 120%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 5px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 2px;
`;

const Price = styled.p`
  font-size: 14px;
  line-height: 120%;
  color: #222;
`;

const OldPrice = styled.p`
  text-decoration-line: line-through;
  color: #555;
  font-size: 12px;
  line-height: 120%;
`;

const MoreOptions = styled.div`
  position: relative;
  cursor: pointer;
`;

const Dots = styled.div`
  font-size: 20px;
  color: #888;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  min-width: 120px;
  z-index: 100;
`;

const MenuItem = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`;
