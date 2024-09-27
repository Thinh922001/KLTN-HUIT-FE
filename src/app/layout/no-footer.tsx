import MyHeader from 'app/components/Header';
import { Main } from 'app/components/Main';
import { Outlet } from 'react-router-dom';

export const NoFooterLayout = () => {
  return (
    <>
      <MyHeader />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
