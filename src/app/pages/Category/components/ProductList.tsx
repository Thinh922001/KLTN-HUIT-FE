import { Card } from 'app/components/Card';
import styled from 'styled-components';
import { ProductCateActions, useProductCateSlice } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilters,
  selectIsLoadingPage,
  selectProductCate,
  selectSkip,
  selectTake,
  selectTotal,
} from '../slice/selector';
import { SeeMore } from 'app/components/SeeMore';
import { CenteredLoading } from 'app/components/LoadingCenter';

export const ProductList = () => {
  useProductCateSlice();

  const dispatch = useDispatch();

  const product = useSelector(selectProductCate);
  const isLoading = useSelector(selectIsLoadingPage);
  const skip = useSelector(selectSkip);
  const take = useSelector(selectTake);
  const total = useSelector(selectTotal);

  const nextPage = () => {
    dispatch(ProductCateActions.nextPage());
    dispatch(ProductCateActions.loadingPage());
  };

  return (
    <Wrapper>
      <ProductWrapper>
        {product.length > 0 &&
          product.map(e => (
            <Card key={e.id} imgWidth="200px" imgHeight="200px" data={e} />
          ))}
      </ProductWrapper>

      {isLoading ? (
        <CenteredLoading />
      ) : skip + take < total ? (
        <SeeMore
          onClick={nextPage}
          text={`Xem thêm ${total - (skip + take)} sản phẩm`}
        />
      ) : null}
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
