import styled from 'styled-components';
import { Container } from '../container';
import { IconFooter, IconSocial } from './components/icon';
import zaloIcon from './assets/zalo.png';

export const MyFooter = () => {
  return (
    <Footer>
      <Container>
        <FooterContent>
          <ContentLeft>
            <ContentColumn>
              <ContentHeader>Tổng đài hỗ trợ</ContentHeader>
              <ContentItems>
                <Span>Gọi mua: </Span>
                <A href="#!">1900 232 461 </A>
                (8:00 - 21:30)
              </ContentItems>
              <ContentItems>
                <Span>Khiếu nại: </Span>
                <A href="#!">1800.1063 </A>
                (8:00 - 21:30)
              </ContentItems>
              <ContentItems>
                <Span>Bảo hành: </Span>
                <A href="#!">1900 232 465 </A>
                (8:00 - 21:00)
              </ContentItems>
            </ContentColumn>
            <ContentColumn>
              <ContentHeader>Về công ty</ContentHeader>
              <ContentItems>
                <LinkHover href="#!">Giới thiệu công ty (MWG.vn)</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkHover href="#!">Tuyển dụng</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkHover href="#!">Gửi góp ý Khiếu nại</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkHover href="#!">Tìm siêu thị (2967 shop)</LinkHover>
              </ContentItems>
            </ContentColumn>
            <ContentColumn>
              <ContentHeader>Thông tin khác</ContentHeader>
              <ContentItems>
                <LinkHover href="#!">Tích điểm Quà tặng VIP</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkHover href="#!">DV vệ sinh máy lạnh</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkHover href="#!">Lịch sử mua hàng</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkHover href="#!">Tìm hiểu về mua trả góp</LinkHover>
              </ContentItems>
              <ContentItems>
                <LinkArrow href="#!">Xem thêm</LinkArrow>
              </ContentItems>
            </ContentColumn>
          </ContentLeft>
          <ContentRight>
            <ContentHeader>Website cùng tập đoàn</ContentHeader>
            <WrapperIcon>
              <IconFooter position="0 0" />
              <IconFooter position="0 -58px" />
              <IconFooter position="-170px 0" />
              <IconFooter position="-85px -90px" />
              <IconFooter position="-85px -120px" />
              <IconFooter position="0 -120px" />
              <IconFooter position="-170px -120px" />
            </WrapperIcon>
            <Social>
              <LinkFooter href="#!">
                <IconSocialFooter position="-225px 0"></IconSocialFooter>
                3886.8k Fan
              </LinkFooter>
              <LinkFooter href="#!">
                <IconSocialFooter position="-200px 0"></IconSocialFooter>
                3tr Đăng ký
              </LinkFooter>
              <LinkFooter href="#!">
                <ImgZalo src={zaloIcon} alt="zalo" />
                Zalo
              </LinkFooter>
            </Social>
            <WrapperIcon>
              <IconSocial height="24px" width="79px" position="-200px -30px" />
              <IconSocial height="24px" width="24px" position="-250px 0px" />
              <IconSocial height="24px" width="122px" position="-80px -60px" />
              <ImgIcon src="https://tinnhiemmang.vn/handle_cert?id=thegioididong.com" />
            </WrapperIcon>
          </ContentRight>
        </FooterContent>
      </Container>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: #fff;
  width: 100%;
  margin-top: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const ContentLeft = styled.div`
  display: flex;
  gap: 30px;
`;

const ContentColumn = styled.div`
  line-height: 21px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContentHeader = styled.h5``;

const ContentItems = styled.p`
  font-weight: 400;
`;

const Span = styled.span``;

const A = styled.a`
  color: #2f80ed;
`;

const LinkHover = styled.a`
  color: #333;
  line-height: 21px;
  transition: color 0.3s;
  &:hover {
    color: #288ad6;
  }
`;

const LinkArrow = styled(LinkHover)`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    height: 5px;
    width: 5px;
    transform: rotate(-135deg);
    border-right: 0;

    right: -14px;
    top: 34%;
  }
`;

const ContentRight = styled.div`
  margin-left: auto;
  width: 348px;
`;

const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
  & > ${IconFooter} {
    border-radius: 5px;
  }
`;

const Img = styled.img`
  object-fit: cover;
`;

const ImgIcon = styled(Img)`
  width: 85px;
  height: 35px;
`;

const ImgZalo = styled(Img)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

const LinkFooter = styled(A)`
  display: inline-flex;
  align-items: center;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const IconSocialFooter = styled(IconSocial)`
  margin-right: 5px;
`;
