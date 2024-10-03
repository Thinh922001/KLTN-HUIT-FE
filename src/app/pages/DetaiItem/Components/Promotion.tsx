import styled from 'styled-components';

export const Promotion = () => {
  return (
    <Wrapper>
      <ProHeaderWrapper>
        <Header>Khuyến mãi </Header>
        <HeaderDesc>
          Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 31/10
        </HeaderDesc>
        <Content>
          <ContentWrapper>
            <Num>1</Num>
            <ContentItems>
              Ốp lưng chính hãng Apple giảm thêm 300K khi mua kèm iPhone (áp
              dụng tuỳ model)
            </ContentItems>
          </ContentWrapper>

          <ContentWrapper>
            <Num>2</Num>
            <ContentItems>
              Thu cũ Đổi mới: Giảm thêm đến 2.000.000Đ (Áp dụng tuỳ model máy
              cũ, Không kèm ưu đãi thanh toán qua cổng, mua kèm){' '}
            </ContentItems>
          </ContentWrapper>
        </Content>
      </ProHeaderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
`;

const ProHeaderWrapper = styled.div`
  padding: 5px;
  background-color: #f9fafb;
  border-bottom-color: #eaecf0;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Header = styled.h6`
  color: #101828;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const HeaderDesc = styled.span`
  font-size: 1.2rem;
  line-height: 1.4;
  font-style: normal;
  color: #667085;
`;

const Content = styled.div`
  padding: 10px;
`;

const ContentItems = styled.p`
  color: #344054;
  line-height: 1.5;

  font-size: 1.3rem;

  font-weight: 500;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & + & {
    margin-top: 10px;
  }
`;

const Num = styled.span`
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  font-size: 11px;
  height: 16px;
  line-height: 16px;
  margin-top: 2px;
  text-align: center;
  width: 16px;
  background-color: #44a1fa;
  flex-shrink: 0;
`;
