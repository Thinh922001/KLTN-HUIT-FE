import styled from 'styled-components';
import { useProductDetailSlice } from '../slice';
import { useSelector } from 'react-redux';
import { selectTitle } from '../slice/selector';

export const HeaderItem = () => {
  useProductDetailSlice();
  const title = useSelector(selectTitle);
  return (
    <Wrapper>
      <Header>{title}</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;
