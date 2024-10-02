import styled from 'styled-components';
import IconCommit from './IconCommit';

export const WeCommit = () => {
  return (
    <Wrapper>
      <Content>
        <Header>Chúng tôi cam kết</Header>
        <CommitContent>
          <CommitItems>
            <IconCommit width="32px" height="32px" position="-35px -35px" />
            <CommitText>
              <CommitBold>Lắp đặt miễn phí </CommitBold>lúc giao hàng
            </CommitText>
          </CommitItems>
          <CommitItems>
            <IconCommit width="32px" height="32px" position="0 -35px" />
            <CommitText>
              Hư gì đổi nấy <CommitBold> 12 tháng</CommitBold> tận nhà (miễn phí
              tháng đầu )
            </CommitText>
          </CommitItems>
          <CommitItems>
            <IconCommit width="32px" height="32px" position="-105px -35px" />
            <CommitText>
              Bảo hành<CommitBold> Chính hãng 2 năm,</CommitBold> có người đến
              tận nhà
            </CommitText>
          </CommitItems>
          <CommitItems>
            <IconCommit width="32px" height="32px" position="-70px -35px" />
            <CommitText>Có sách hướng dẫn sử dụng</CommitText>
          </CommitItems>

          <CommitItems>
            <IconCommit width="32px" height="32px" position="-105px -35px" />
            <CommitText>Bảo hành lên đến 20 năm</CommitText>
          </CommitItems>

          <CommitItems>
            <IconCommit width="60px" height="26px" position="-121px -154px" />
            <CommitText>
              Nếu dùng cho hoạt động kinh doanh (nhà máy, khách sạn, giặt
              ủi,...) thì không được bảo hành
            </CommitText>
          </CommitItems>
        </CommitContent>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 12px;
`;

const Content = styled.div`
  width: 100%;
  padding: 15px;
`;

const Header = styled.h3`
  padding-top: 15px;
  color: #101828;
  font-size: 1.6rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CommitContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CommitItems = styled.div`
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  padding: 12px 0 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommitText = styled.span``;

const CommitBold = styled.b`
  font-weight: 700;
`;
