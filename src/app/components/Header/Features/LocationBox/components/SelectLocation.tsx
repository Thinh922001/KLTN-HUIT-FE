import styled from 'styled-components';
import { LocationContent } from './LocationContent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationBoxActions, useLocationBoxSlice } from '../slice';
import {
  selectActiveComponent,
  selectDistrictId,
  selectDistricts,
  selectIsLoading,
  selectProvince,
  selectProVinceId,
  selectWardId,
  selectWards,
} from '../slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { ActiveComponent } from '../slice/type';

interface Props {
  headerActive?: ActiveComponent;
  activeComponent?: string;
}

export const SelectLocation = () => {
  useLocationBoxSlice();
  const dispatch = useDispatch();

  const activeComponent = useSelector(selectActiveComponent);
  const provinces = useSelector(selectProvince);
  const districts = useSelector(selectDistricts);
  const wards = useSelector(selectWards);
  const isLoading = useSelector(selectIsLoading);

  const provinceId = useSelector(selectProVinceId);

  const districtId = useSelector(selectDistrictId);

  const wardId = useSelector(selectWardId);

  const handleSetProvinceId = num => {
    dispatch(LocationBoxActions.setProvinceId(num));
    dispatch(LocationBoxActions.loadDistrict());
  };

  const handleOnClickDistrict = () => {
    dispatch(LocationBoxActions.setActiveComponent('district'));
    if (!districts.length) dispatch(LocationBoxActions.loadDistrict());
  };

  const handleOnclickWard = () => {
    dispatch(LocationBoxActions.setActiveComponent('ward'));
    if (!wards.length) dispatch(LocationBoxActions.loadWard());
  };

  const handleSetDistrictId = num => {
    dispatch(LocationBoxActions.setDistrictId(num));
    dispatch(LocationBoxActions.loadWard());
  };

  const handleSetWardId = num => {
    dispatch(LocationBoxActions.setWardId(num));
    dispatch(LocationBoxActions.setSelectedLocationName());
    dispatch(LocationBoxActions.setIsDoneLocation());
  };

  useEffect(() => {
    if (!provinces.length) dispatch(LocationBoxActions.loadProvince());
  }, []);

  return (
    <Wrapper>
      <WrapperHeader>
        <Item
          headerActive="province"
          activeComponent={activeComponent}
          onClick={() =>
            dispatch(LocationBoxActions.setActiveComponent('province'))
          }
        >
          Tỉnh/TP 1
        </Item>
        <Item
          activeComponent={activeComponent}
          headerActive="district"
          onClick={handleOnClickDistrict}
        >
          Quận/Huyện 1
        </Item>
        <Item
          onClick={handleOnclickWard}
          activeComponent={activeComponent}
          headerActive="ward"
          disabled={districts.length > 0 ? false : true}
          style={{ opacity: districts.length > 0 ? 1 : 0.5 }}
        >
          Phường/Xã
        </Item>
      </WrapperHeader>

      {activeComponent === 'province' &&
        (isLoading ? (
          <CenteredWrapper>
            {' '}
            <LoadingIndicator />
          </CenteredWrapper>
        ) : (
          <LocationContent
            data={provinces}
            handleId={handleSetProvinceId}
            idActive={provinceId}
            setActiveComponent={() =>
              dispatch(LocationBoxActions.setActiveComponent('district'))
            }
          />
        ))}
      {activeComponent === 'district' &&
        (isLoading ? (
          <CenteredWrapper>
            {' '}
            <LoadingIndicator />
          </CenteredWrapper>
        ) : (
          <LocationContent
            data={districts}
            handleId={handleSetDistrictId}
            idActive={districtId}
            setActiveComponent={() =>
              dispatch(LocationBoxActions.setActiveComponent('ward'))
            }
          />
        ))}
      {activeComponent === 'ward' &&
        (isLoading ? (
          <CenteredWrapper>
            {' '}
            <LoadingIndicator />
          </CenteredWrapper>
        ) : (
          <LocationContent
            idActive={wardId}
            data={wards}
            handleId={handleSetWardId}
          />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
`;

const WrapperHeader = styled.div`
  display: flex;
  margin-top: 10px;
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const Item = styled.button<Props>`
  width: calc(100% / 3);
  color: #2377e8;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  padding: 10px 0;
  transition: background-color 0.3s;
  border-radius: 5px;

  ${({ headerActive, activeComponent }) =>
    headerActive === activeComponent && `background-color: #b2cde5;`}
`;
