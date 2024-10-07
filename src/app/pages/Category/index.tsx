import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { IBreakCum } from '../DetaiItem/Components/type';
import { BreakCum } from '../DetaiItem/Components/BreakCum';
import { Container } from 'app/components/container';
import { Banner } from './components/Banner';
import { Filter } from './components/Filter';
import { ProductList } from './components/ProductList';

export function Category() {
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
        <Container>
          <BreakCum data={BreakCumData} />
          <Banner />
          <ProductionContainer>
            <Filter />
            <ProductList />
          </ProductionContainer>
        </Container>
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
