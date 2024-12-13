import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Icon from 'app/pages/CartPage/components/icon-card';

export const ProductCateNotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <CartContainer>
        <IconCart position="0 -98px" width="70px" height="55px" />
        <SpanCart>Không có sản phẩm nào </SpanCart>
        <BtnCart onClick={() => navigate('/')}>Về Trang chủ</BtnCart>
        <SpanDesc>
          Khi cần trợ giúp vui lòng gọi 1900 232 461 hoặc 028.3948.6789 (8h00 -
          21h30)
        </SpanDesc>
      </CartContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 83px);
`;

const CartContainer = styled.div`
  margin: 40px auto 0;
  width: 560px;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const IconCart = styled(Icon)`
  display: block;
  overflow: hidden;
`;

const SpanCart = styled.span`
  display: block;
  overflow: hidden;
  text-align: center;
  padding: 10px;
`;

const BtnCart = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #288ad6;
  margin: 0 10px;
  color: #288ad6;
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

const SpanDesc = styled(SpanCart)`
  padding: 0;
  line-height: 28px;
  font-size: 1.4rem;
`;
