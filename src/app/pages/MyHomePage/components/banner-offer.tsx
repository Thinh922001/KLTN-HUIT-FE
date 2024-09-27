import styled from 'styled-components';
import Offer_1 from './assets/offer-1.jpg';
import Offer_2 from './assets/offer-2.png';
import Offer_3 from './assets/offer-3.jpg';
import Offer_4 from './assets/offer-4.png';

export const BannerOffer = () => {
  return (
    <Wrapper>
      <Title>Gian hàng ưu đãi</Title>
      <ImgWrapper>
        <A href="#!">
          <Img src={Offer_1} />
        </A>
        <A href="#!">
          <Img src={Offer_2} />
        </A>
        <A href="#!">
          <Img src={Offer_3} />
        </A>
        <A href="#!">
          <Img src={Offer_4} />
        </A>
      </ImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ImgWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Title = styled.h3`
  color: #1d2939;
  font-size: 2.4rem;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 20px;
  padding: 0;
`;

const A = styled.a``;

const Img = styled.img`
  min-height: 467px;
  max-width: 317px;
  object-fit: cover;
`;
