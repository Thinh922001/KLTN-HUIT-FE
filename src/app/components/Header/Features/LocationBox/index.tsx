import styled from 'styled-components';
import { useLocationBoxSlice } from './slice';
import { useSelector } from 'react-redux';
import { selectStatusBoxLocation } from './slice/selectors';
import { SelectLocation } from './components/SelectLocation';

interface Props {
  isActive: boolean;
}

export const LocationBox = () => {
  useLocationBoxSlice();

  const isActive = useSelector(selectStatusBoxLocation);

  return (
    <Wrapper isActive={isActive}>
      <WrapperContent>
        {' '}
        <Header>Chọn địa chỉ nhận hàng</Header>
        <SelectedBoxLocation>Địa chỉ đã chọn: </SelectedBoxLocation>
        <LocationSelected>Hồ Chí Minh</LocationSelected>
        <SelectLocation />
      </WrapperContent>
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
