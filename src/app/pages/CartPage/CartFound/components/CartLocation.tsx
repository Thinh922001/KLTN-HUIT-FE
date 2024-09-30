import styled from 'styled-components';
import { BtnChosenLocation } from './BtnChosenLocation';

export const CartLocation = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          {' '}
          Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có){' '}
        </Title>
        <BtnWrapper>
          {' '}
          <BtnChosenLocation />
          <BtnChosenLocation />
          <BtnChosenLocation />
          <BtnChosenLocation />
        </BtnWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    background: #f6f6f6;
    transform: rotate(-45deg);
    display: block;
    position: absolute;
    left: 48px;
    top: -6px;
  }
`;

const Content = styled.div`
  padding: 10px 10px;
`;

const Title = styled.h5`
  font-size: 1.4rem;
`;

const BtnWrapper = styled.div`
  margin-top: 10px;
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
