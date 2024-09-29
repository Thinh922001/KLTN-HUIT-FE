import styled from 'styled-components';
import { LocationContent } from './LocationContent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationBoxActions, useLocationBoxSlice } from '../slice';
import {
  selectDistricts,
  selectIsLoading,
  selectProvince,
  selectWards,
} from '../slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

interface Props {
  headerActive?: 'provinces' | 'district' | 'ward';
  activeComponent?: string;
}

export const SelectLocation = () => {
  useLocationBoxSlice();
  const dispatch = useDispatch();

  const [activeComponent, setActiveComponent] = useState('provinces');

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const provinces = useSelector(selectProvince);
  const districts = useSelector(selectDistricts);
  const wards = useSelector(selectWards);
  const isLoading = useSelector(selectIsLoading);

  const handleSetProvinceId = num => {
    dispatch(LocationBoxActions.setProvinceId(num));
    dispatch(LocationBoxActions.loadDistrict());
  };

  const handleOnClickDistrict = () => {
    setActiveComponent('district');
    if (!districts.length) dispatch(LocationBoxActions.loadDistrict());
  };

  const handleOnclickWard = () => {
    setActiveComponent('ward');
    if (!wards.length) dispatch(LocationBoxActions.loadWard());
  };

  const handleSetDistrictId = num => {
    dispatch(LocationBoxActions.setDistrictId(num));
    dispatch(LocationBoxActions.loadWard());
  };

  const handleSetWardId = num => {
    dispatch(LocationBoxActions.setWardId(num));
  };

  useEffect(() => {
    if (!provinces.length) dispatch(LocationBoxActions.loadProvince());
  }, []);

  return (
    <Wrapper>
      <WrapperHeader>
        <Item
          headerActive="provinces"
          activeComponent={activeComponent}
          onClick={() => setActiveComponent('provinces')}
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

      {activeComponent === 'provinces' &&
        (isLoading ? (
          <CenteredWrapper>
            {' '}
            <LoadingIndicator />
          </CenteredWrapper>
        ) : (
          <LocationContent
            data={provinces}
            handleId={handleSetProvinceId}
            setActiveComponent={setActiveComponent}
            componentType="district"
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
            setActiveComponent={setActiveComponent}
            componentType="ward"
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
            data={wards}
            handleId={handleSetWardId}
            setActiveComponent={setActiveComponent}
            componentType="ward"
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
