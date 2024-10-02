import { Container } from 'app/components/container';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { BreakCum } from './Components/BreakCum';
import { HeaderItem } from './Components/HeaderItem';
import { ImgSlideShow } from './Components/ImgSlideShow';
import { WeCommit } from './Components/WeCommit';

export function DetailItem() {
  return (
    <>
      <Helmet>
        <title>Chi Tiết sản phẩm</title>
        <meta name="description" content="detailItem" />
      </Helmet>
      <Wrapper>
        <Container>
          <BreakCum />
          <HeaderItem />
          <DetailWrapperItem>
            <LeftSide>
              <ImgSlideShow />
              <WeCommit />
            </LeftSide>
            <RightSide>
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              dolores quo, dolorem explicabo animi consectetur. Obcaecati amet
              nam perspiciatis nesciunt aspernatur corporis ipsam quasi
              asperiores culpa id. Expedita, corporis praesentium.
            </RightSide>
          </DetailWrapperItem>
        </Container>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div``;

const DetailWrapperItem = styled.div`
  display: grid;
  grid-template-columns: 55% 35%;
  width: 100%;
  gap: 10px;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;
