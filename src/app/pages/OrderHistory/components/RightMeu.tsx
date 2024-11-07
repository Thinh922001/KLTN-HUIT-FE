import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMenuRightState } from '../slice/selector';
import { Order } from './Order';
import { Info } from './Info';

export const RightMenu = () => {
  const stateMenu = useSelector(selectMenuRightState);
  return <Wrapper>{stateMenu === 'ORDER' ? <Order /> : <Info />}</Wrapper>;
};

const Wrapper = styled.div``;
