import styled from 'styled-components';
import IconCommit from './IconCommit';
import {
  LocationBoxActions,
  useLocationBoxSlice,
} from 'app/components/Header/Features/LocationBox/slice';
import { useDispatch } from 'react-redux';
import { OverlayActions } from 'app/components/Overlay/slice';

export const Location = () => {
  useLocationBoxSlice();

  const dispatch = useDispatch();

  const handleShowLocationBox = () => {
    dispatch(OverlayActions.showOverlay());
    dispatch(LocationBoxActions.showLocationBox());
  };
  return (
    <Wrapper>
      <LocationContent onClick={handleShowLocationBox}>
        {' '}
        <IconCommit position="-190px 0" width="16px" height="16px" />
        <LocationText>
          Chọn địa chỉ nhận hàng để biết thời gian giao.
        </LocationText>
      </LocationContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
  border-bottom: 2px solid #f1f1f1;
`;

const LocationContent = styled.div`
  cursor: pointer;
`;

const LocationText = styled.p`
  color: #2f80ed;
  display: inline-block;
  border-radius: 4px;
  position: relative;
  line-height: 1;
  margin-top: 5px;
  font-size: 1.4rem;
`;
