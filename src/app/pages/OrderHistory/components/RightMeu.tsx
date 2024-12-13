import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMenuRightState } from '../slice/selector';
import { Info } from './Info';
import { Order } from './Order';

export const RightMenu = () => {
  const stateMenu = useSelector(selectMenuRightState);
  return <Wrapper>{stateMenu === 'ORDER' ? <Order /> : <Info />}</Wrapper>;
};

const Wrapper = styled.div``;
