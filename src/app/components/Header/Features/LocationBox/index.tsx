import styled from 'styled-components';
import { LocationBoxActions, useLocationBoxSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAddress,
  selectDoneLocation,
  selectLocationName,
  selectStatusBoxLocation,
} from './slice/selectors';
import { SelectLocation } from './components/SelectLocation';
import { Input } from 'app/components/Input/Input';
import { ChangeEvent, useState } from 'react';
import { OverlayActions } from 'app/components/Overlay/slice';
import { Span } from 'app/components/Span/inedx';

interface Props {
  isActive: boolean;
}

export const LocationBox = () => {
  useLocationBoxSlice();

  const [addressState, setAddressState] = useState<string>('');

  const dispatch = useDispatch();

  const isActive = useSelector(selectStatusBoxLocation);
  const isDoneLocation = useSelector(selectDoneLocation);
  const selectedNameLocation = useSelector(selectLocationName);
  const address = useSelector(selectAddress);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressState(e.target.value || '');
  };

  const handleSubmitAddress = () => {
    dispatch(LocationBoxActions.setAddress(addressState));
    setAddressState('');
    dispatch(OverlayActions.hideOverlay());
    dispatch(LocationBoxActions.hideLocationBox());
  };

  const resetFormLocationBox = () => {
    dispatch(LocationBoxActions.resetLocationBox());
  };

  return (
    <Wrapper isActive={isActive}>
      {isDoneLocation ? (
        <WrapperBoxDone>
          <WrapperContent>
            {' '}
            <Header>Chọn địa chỉ nhận hàng</Header>
            <SelectedBoxLocation>
              Địa chỉ đã chọn: {selectedNameLocation ?? 'Chưa có địa chỉ'}
              <Change onClick={resetFormLocationBox}>Thay đổi</Change>
            </SelectedBoxLocation>
            <LocationBoxInput
              placeholder="Số nhà, tên đường (không bắt buộc)"
              name="address"
              value={addressState ? addressState : address}
              type="text"
              onChange={handleFormChange}
            />
            <Desc>
              Vui lòng cho chúng tôi biết số nhà, tên đường để thuận tiện giao
              hàng cho quý khách.
            </Desc>
          </WrapperContent>
          <LocationConfirm>
            <Separate />
            <BtnConfirm onClick={handleSubmitAddress}>
              Xác nhận địa chỉ
            </BtnConfirm>
          </LocationConfirm>
        </WrapperBoxDone>
      ) : (
        <WrapperContent>
          {' '}
          <Header>Chọn địa chỉ nhận hàng</Header>
          <SelectedBoxLocation>Địa chỉ đã chọn: </SelectedBoxLocation>
          <LocationSelected>Hồ Chí Minh</LocationSelected>
          <SelectLocation />
        </WrapperContent>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<Pick<Props, 'isActive'>>`
  position: fixed;
  width: 600px;
  height: 500px;
  inset: 0;
  z-index: 100;
  margin: auto;
  background: #fff;
  border-radius: 8px;

  ${({ isActive }) => (isActive ? `display: block` : `display: none`)}
`;

const WrapperContent = styled.div`
  color: #333;
  padding: 10px 15px 0 15px;
`;

const Header = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 10px;
`;

const SelectedBoxLocation = styled.span`
  font-size: 1.4rem;
  color: #98a2b3;
`;

const LocationSelected = styled.span`
  color: #344054;
  font-size: 1.2rem;
`;

const LocationBoxInput = styled(Input)`
  margin-top: 10px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const Desc = styled(SelectedBoxLocation)`
  margin-top: 10px;
  font-size: 1.4rem;
`;

const LocationConfirm = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;
`;

const BtnConfirm = styled.button`
  height: 40px;
  width: 100%;
  line-height: 40px;
  color: #fff;
  background-color: #2a83e9;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

const WrapperBoxDone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Separate = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d0d5dd;
  margin-bottom: 10px;
`;

const Change = styled.span`
  color: #288ad6;
  font-size: 1.4rem;
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;
  font-weight: 700;
`;
