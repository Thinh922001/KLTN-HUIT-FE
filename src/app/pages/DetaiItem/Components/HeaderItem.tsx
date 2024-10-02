import styled from 'styled-components';

export const HeaderItem = () => {
  return (
    <Wrapper>
      <Header>Điện thoại iPhone 15 Pro Max 256GB</Header>
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
