import { Helmet } from 'react-helmet-async';
import { RightMenu } from './components/RightMeu';

export function OrderHistory() {
  return (
    <>
      <Helmet>
        <title>Lịch sử mua hàng</title>
        <meta name="description" content="history order" />
      </Helmet>
      <RightMenu />
    </>
  );
}
