import { Card } from 'app/components/Card';
import styled from 'styled-components';
import { ProductData } from './data';

export const ProductList = () => {
  return (
    <Wrapper>
      <ProductWrapper>
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
        <Card imgWidth="200px" imgHeight="200px" data={ProductData[0]} />
      </ProductWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 10px;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
