import { MyFooter } from 'app/components/footer';
import MyHeader from 'app/components/Header';
import { Main } from 'app/components/Main';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <MyHeader />
      <Main>
        <Outlet />
      </Main>
      <MyFooter />
    </>
  );
};
