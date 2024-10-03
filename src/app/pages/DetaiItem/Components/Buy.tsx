import styled from 'styled-components';
import IconCommit from './IconCommit';

export const Buy = () => {
  return (
    <Wrapper>
      <BuyBtn>
        <IconBuy position="-200px -164px" width="18px" height="18px" />
        Thêm vào giỏ
      </BuyBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BuyBtn = styled.button`
  cursor: pointer;
  border-color: #2a83e9;
  background-color: #fff;
  color: #2a83e9;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  width: 100%;
  height: 53px;
  border-radius: 8px;
  border: 1px solid rgb(42, 131, 233);
`;

const IconBuy = styled(IconCommit)`
  flex-shrink: 0;
`;
