import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from './components/cart-items';
import { currencyVND } from 'utils/string';
import { CartInfo } from './components/CartInfo';

export function CartFound() {
  return (
    <Wrapper>
      <CartContainer>
        <CartHeader>
          <BuyMore to="/">Mua Thêm sản phẩm khác</BuyMore>
          <YourCard>Giỏ hàng của anh</YourCard>
        </CartHeader>
        <CartBody>
          <CardItem />
          <Total>
            <TotalWrapper>
              {' '}
              <TotalText>Tạm tính (1 sản phẩm): </TotalText>
              <TotalText>{currencyVND(1290000)} </TotalText>
            </TotalWrapper>
          </Total>
          <CartInfo />
        </CartBody>
      </CartContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 83px);
`;

const CartContainer = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const BuyMore = styled(Link)`
  font-size: 1.4rem;
  color: #288ad6;
  line-height: 16px;
  padding: 10px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    border-top: 1px solid #288ad6;
    border-left: 1px solid #288ad6;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px 2px 0;
    transform: rotate(-45deg);
    left: -3px;
    top: 39%;
  }
`;

const YourCard = styled.a`
  font-size: 1.4rem;
`;

const CartBody = styled.div`
  width: 100%;
  display: block;
  background: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  position: relative;
`;

const Total = styled.div`
  border-bottom: 1px solid #ccc;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 1.4rem;
`;

const TotalText = styled.span``;
