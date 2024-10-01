import styled from 'styled-components';
import { BtnChosenLocation } from './BtnChosenLocation';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDistrictId,
  selectDistrictName,
  selectDistricts,
  selectProvince,
  selectProVinceId,
  selectProvinceName,
  selectWardId,
  selectWardName,
  selectWards,
} from 'app/components/Header/Features/LocationBox/slice/selectors';
import {
  LocationBoxActions,
  useLocationBoxSlice,
} from 'app/components/Header/Features/LocationBox/slice';
import { ChangeEvent, useEffect } from 'react';
import { FloatingInput } from 'app/components/FloatingInput';

export const CartLocation = () => {
  useLocationBoxSlice();

  const dispatch = useDispatch();

  const provinces = useSelector(selectProvince);
  const provinceId = useSelector(selectProVinceId);
  const districtId = useSelector(selectDistrictId);
  const provinceName = useSelector(selectProvinceName);
  const districtName = useSelector(selectDistrictName);
  const wardName = useSelector(selectWardName);
  const wards = useSelector(selectWards);
  const wardId = useSelector(selectWardId);
  const districts = useSelector(selectDistricts);

  const handleSetProvinceId = num => {
    dispatch(LocationBoxActions.setProvinceId(num));
    dispatch(LocationBoxActions.loadDistrict());
  };

  const handleSetDistrictId = num => {
    dispatch(LocationBoxActions.setDistrictId(num));
    dispatch(LocationBoxActions.loadWard());
  };

  const handleWardId = num => {
    dispatch(LocationBoxActions.setWardId(num));
    dispatch(LocationBoxActions.setIsDoneLocation());
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(LocationBoxActions.setAddress(e.target.value || ''));
  };

  useEffect(() => {
    if (!provinces.length) dispatch(LocationBoxActions.loadProvince());
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>
          {' '}
          Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có){' '}
        </Title>
        <BtnWrapper>
          {' '}
          <BtnChosenLocation
            title={provinceName || 'Hồ Chí Minh'}
            activeId={provinceId}
            onClick={handleSetProvinceId}
            data={provinces}
          />
          <BtnChosenLocation
            title={districtName || 'Quận/Huyện'}
            activeId={districtId}
            onClick={handleSetDistrictId}
            data={districts}
          />
          <BtnChosenLocation
            title={wardName || 'Phường/Xã'}
            activeId={wardId}
            onClick={handleWardId}
            data={wards}
          />
          <FloatingInput
            customColor="#288ad6;"
            customBorder="1px solid #d1d1d1"
            name="address"
            label="Số nhà tên đường"
            onChange={handleFormChange}
          />
        </BtnWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    background: #f6f6f6;
    transform: rotate(-45deg);
    display: block;
    position: absolute;
    left: 48px;
    top: -6px;
  }
`;

const Content = styled.div`
  padding: 10px 10px;
`;

const Title = styled.h5`
  font-size: 1.4rem;
`;

const BtnWrapper = styled.div`
  margin-top: 10px;
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
