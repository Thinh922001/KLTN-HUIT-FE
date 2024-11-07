import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function OrderDetail() {
  return (
    <>
      <Helmet>
        <title>Chi tiết đơn hàng</title>
        <meta name="description" content="order detail" />
      </Helmet>
      <Wrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        necessitatibus doloremque unde libero quam? Soluta consequatur doloribus
        veritatis possimus accusantium impedit culpa ducimus voluptates neque,
        odio doloremque alias similique quasi!
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;
