import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductCateActions, useProductCateSlice } from '../slice';
import { useDispatch } from 'react-redux';

export const SortByLabel = () => {
  useProductCateSlice();
  const dispatch = useDispatch();

  const [activeLabel, setActiveLabel] = useState<string>('NOI_BAT');
  const [isActiveToggle, setIsActiveToggle] = useState<boolean>(false);

  const handleTextLabel = (activeLabel: string) => {
    if (activeLabel === 'PRICE_DESC') {
      return 'Giá cao - thấp';
    }
    if (activeLabel === 'PRICE_ASC') {
      return 'Giá thấp - cao';
    }
    return 'Giá';
  };

  const dispatchOrder = (activeLabelName: string) => {
    switch (activeLabelName) {
      case 'NOI_BAT':
        dispatch(ProductCateActions.setOrderBy({ trend: 'ASC' }));
        break;
      case 'BAN_CHAY':
        dispatch(ProductCateActions.setOrderBy({ 'well-sell': 'DESC' }));
        break;
      case 'DISCOUNT':
        dispatch(ProductCateActions.setOrderBy({ discount: 'DESC' }));
        break;
      case 'NEW':
        dispatch(ProductCateActions.setOrderBy({ new: 'ASC' }));
        break;
      case 'PRICE_DESC':
        dispatch(ProductCateActions.setOrderBy({ price: 'DESC' }));
        break;
      case 'PRICE_ASC':
        dispatch(ProductCateActions.setOrderBy({ price: 'ASC' }));
        break;
      default:
        dispatch(ProductCateActions.setOrderBy({ trend: 'ASC' }));
        break;
    }
  };

  const handleLabelClick = (label: string) => {
    if (label === activeLabel) return;
    setActiveLabel(label);
    dispatchOrder(label);
    dispatch(ProductCateActions.loadingPage());
  };

  const SetActiveToggle = (toggleName: string) => {
    setActiveLabel(toggleName);
    dispatchOrder(toggleName);
    dispatch(ProductCateActions.loadingPage());
  };

  return (
    <Wrapper>
      <Span>Sắp xếp theo</Span>
      <Label
        isActive={activeLabel === 'NOI_BAT'}
        onClick={() => handleLabelClick('NOI_BAT')}
      >
        Nổi bật
      </Label>
      <Ellipse />
      <Label
        isActive={activeLabel === 'BAN_CHAY'}
        onClick={() => handleLabelClick('BAN_CHAY')}
      >
        Bán chạy
      </Label>
      <Ellipse />
      <Label
        isActive={activeLabel === 'DISCOUNT'}
        onClick={() => handleLabelClick('DISCOUNT')}
      >
        Giảm giá
      </Label>
      <Ellipse />
      <Label
        isActive={activeLabel === 'NEW'}
        onClick={() => handleLabelClick('NEW')}
      >
        Mới
      </Label>
      <Ellipse />
      <LabelToggle
        isActive={activeLabel === 'PRICE_DESC' || activeLabel === 'PRICE_ASC'}
        onClick={() => setIsActiveToggle(e => !e)}
      >
        {handleTextLabel(activeLabel)}
        <ToggleWrapper isActive={isActiveToggle}>
          <Label isActive={false} onClick={() => SetActiveToggle('PRICE_DESC')}>
            Giá cao - thấp
          </Label>
          <Label isActive={false} onClick={() => SetActiveToggle('PRICE_ASC')}>
            Giá thấp - cao
          </Label>
        </ToggleWrapper>
      </LabelToggle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Ellipse = styled.i`
  content: '';
  width: 4px;
  height: 4px;
  background: rgba(234, 236, 240, 1);
  border-radius: 2px;
`;

const Span = styled.div``;

const Label = styled.span<{ isActive: boolean }>`
  display: inline-block;
  color: ${({ isActive }) =>
    isActive ? `rgba(42, 131, 233, 1);` : `rgba(102, 112, 133, 1)`};
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
  user-select: none;
`;

const LabelToggle = styled(Label)`
  position: relative;

  &::before {
    border-top: 1.5px solid rgba(102, 112, 133, 1);
    border-left: 1.5px solid rgba(102, 112, 133, 1);
    height: 3px;
    width: 3px;
    transform: rotate(-135deg);
    content: '';
    position: absolute;
    display: inline-block;
    vertical-align: top;
    margin: 4px 0 0 6px;
    top: 3px;
    right: -12px;
  }
`;

const ToggleWrapper = styled.div<{ isActive: boolean }>`
  position: absolute;
  min-width: 130px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 2;
  top: 190%;
  left: -87px;
  padding: 20px 10px;
  border-radius: 8px;

  ${({ isActive }) =>
    isActive
      ? `
        opacity: 1;
        visibility: visible;
      `
      : `
        opacity: 0;
        visibility: hidden;
      `}

  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: opacity, visibility, 0.3s ease-in-out;
`;
