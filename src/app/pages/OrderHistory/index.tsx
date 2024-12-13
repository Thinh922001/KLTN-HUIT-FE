import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { RightMenu } from './components/RightMeu';
import { useOrderHistorySlice } from './slice';

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
