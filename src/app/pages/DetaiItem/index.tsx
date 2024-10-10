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
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailActions, useProductDetailSlice } from './slice';
import { selectIsLoading } from './slice/selector';
import { CenteredLoading } from 'app/components/LoadingCenter';

export function DetailItem() {
  useProductDetailSlice();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const isLoading = useSelector(selectIsLoading);

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

  useEffect(() => {
    dispatch(ProductDetailActions.setProductId(id));
    dispatch(ProductDetailActions.loadProductDetail());
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Chi Tiết sản phẩm</title>
        <meta name="description" content="detailItem" />
      </Helmet>
      {isLoading ? (
        <WrapperLoading>
          <CenteredLoading minHeight="100%" />
        </WrapperLoading>
      ) : (
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
      )}
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

const WrapperLoading = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`;
