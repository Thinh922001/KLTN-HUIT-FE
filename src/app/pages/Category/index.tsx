import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { IBreakCum } from '../DetaiItem/Components/type';
import { BreakCum } from '../DetaiItem/Components/BreakCum';
import { Container } from 'app/components/container';
import { Banner } from './components/Banner';
import { Filter } from './components/Filter';
import { ProductList } from './components/ProductList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductCateActions, useProductCateSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { CenteredLoading } from 'app/components/LoadingCenter';
import { selectIsLoading } from './slice/selector';

export function Category() {
  useProductCateSlice();

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(ProductCateActions.setCateId(id));
    dispatch(ProductCateActions.loadProduct());
  }, [id]);

  const BreakCumData: IBreakCum[] = [
    {
      name: 'Trang chủ',
      link: '/',
    },
    {
      name: '136 điện thoại',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Danh mục</title>
        <meta name="description" content="login" />
      </Helmet>
      <Wrapper>
        {isLoading ? (
          <WrapperLoading>
            <CenteredLoading minHeight="100%" />
          </WrapperLoading>
        ) : (
          <Container>
            <BreakCum data={BreakCumData} />
            <Banner />
            <ProductionContainer>
              <Filter />
              <ProductList />
            </ProductionContainer>
          </Container>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

const ProductionContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
`;

const WrapperLoading = styled.div`
  width: 100vw;
  height: calc(100vh - 157px);
`;
