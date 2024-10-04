import { Container } from 'app/components/container';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { BreakCum } from './Components/BreakCum';
import { HeaderItem } from './Components/HeaderItem';
import { ImgSlideShow } from './Components/ImgSlideShow';
import { WeCommit } from './Components/WeCommit';
import { Specifications } from './Components/Specifications';
import { Variants } from './Components/Variant';
import { Price } from './Components/Price';
import { Location } from './Components/Location';
import { Buy } from './Components/Buy';

export function DetailItem() {
  const dataBreakCum = [
    {
      name: 'Điện thoại',
      link: '/',
    },
    {
      name: 'Điện thoại Iphone (Apple)',
      link: '/chi-tiet-san-pham',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Chi Tiết sản phẩm</title>
        <meta name="description" content="detailItem" />
      </Helmet>
      <Wrapper>
        <Container>
          <BreakCum data={dataBreakCum} />
          <HeaderItem />
          <DetailWrapperItem>
            <LeftSide>
              <ImgSlideShow />
              <WeCommit />
              <Specifications />
            </LeftSide>
            <RightSide>
              <RightSideContent>
                <Variants />
                <Price />
                <Location />
                <Buy />
              </RightSideContent>
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
  gap: 25px;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const RightSideContent = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  padding: 15px;
`;
