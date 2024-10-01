import styled from 'styled-components';

export const ReceiveSM = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          Giỏ hàng đang có sản phẩm không hỗ trợ nhận hàng tại siêu thị
        </Title>
        <TitleWrapper>
          <Subtitle>
            Máy giặt sấy Electrolux UltimateCare 500 Inverter giặt 9 kg - sấy 6
            kg EWW9024P5WB
          </Subtitle>
        </TitleWrapper>
        <Desc>
          Vui lòng chọn <Link href="#!">Giao tận nơi</Link> để đặt hàng
        </Desc>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  background: #f6f6f6;
  border: 1px solid #e1e1e1;

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
  padding: 30px 20px;
`;

const Title = styled.h5`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const Desc = styled.span`
  font-size: 1.4rem;
`;

const Link = styled.a`
  color: #288ad6;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  padding: 20px 0 25px 0;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.2rem;
  padding-left: 10px;

  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;

  color: #333;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #c4c4c4;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
