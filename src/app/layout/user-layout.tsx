import { Container } from 'app/components/container';
import { MyFooter } from 'app/components/footer';
import MyHeader from 'app/components/Header';
import { Main } from 'app/components/Main';
import { Overlay } from 'app/components/Overlay';
import UserMenuLeft from 'app/components/UserMenuLeft';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const UserLayout = () => {
  return (
    <>
      <MyHeader />
      <Main>
        <Container>
          <Wrapper>
            <UserMenuLeft />
            <Outlet />
          </Wrapper>
        </Container>
        <Overlay />
      </Main>
      <MyFooter />
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 25px 0 0 0;
  grid-gap: 30px;
  margin-bottom: 30px;
`;
