import { CardLabel, mapCardLabel } from 'app/components/CardLabel';
import {
  LocationBoxActions,
  useLocationBoxSlice,
} from 'app/components/Header/Features/LocationBox/slice';
import { selectProvinceName } from 'app/components/Header/Features/LocationBox/slice/selectors';
import { OverlayActions } from 'app/components/Overlay/slice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { currencyVND } from 'utils/string';
import { Promotion } from './Promotion';
import { useProductDetailSlice } from '../slice';
import { selectProductDetail } from '../slice/selector';

export const Price = () => {
  useLocationBoxSlice();

  useProductDetailSlice();

  const dispatch = useDispatch();

  const productDetail = useSelector(selectProductDetail);

  const handleShowLocationBox = () => {
    dispatch(OverlayActions.showOverlay());
    dispatch(LocationBoxActions.showLocationBox());
  };

  const provinceName = useSelector(selectProvinceName);

  return (
    <Wrapper>
      <PriceText>
        Giá tại{' '}
        <LocationName onClick={handleShowLocationBox}>
          {provinceName || 'Hồ Chí Minh'}
        </LocationName>
        <PriceWrapper>
          {productDetail.price && (
            <PricePresent>{currencyVND(productDetail.price)}</PricePresent>
          )}
          {productDetail.discount?.OldPrice && (
            <OldPrice>{currencyVND(productDetail.discount.OldPrice)}</OldPrice>
          )}
          {productDetail.discount?.discountPercent && (
            <Discount>{productDetail.discount?.discountPercent}%</Discount>
          )}
          {productDetail.labels &&
            productDetail.labels.length > 0 &&
            mapCardLabel(productDetail.labels)}
        </PriceWrapper>
        <Promotion />
      </PriceText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
`;

const PriceText = styled.span``;

const LocationName = styled.span`
  color: #2f80ed;
  position: relative;
  padding-right: 20px;
  cursor: pointer;

  &::after {
    border-bottom: 1px solid #2f80ed;
    border-right: 1px solid #2f80ed;
    content: '';
    height: 7px;
    position: absolute;
    transform: rotate(45deg);
    top: 2px;
    right: 5px;
    width: 7px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  gap: 5px;
`;

const PricePresent = styled.p`
  font-size: 1.6rem;
  color: #d92d20;
  font-weight: bold;
`;

const OldPrice = styled.span`
  color: #98a2b3;
  font-size: 1.6rem;
  text-decoration-line: line-through;
`;

const Discount = styled.span`
  font-size: 16px;
  color: #d92d20;
`;
