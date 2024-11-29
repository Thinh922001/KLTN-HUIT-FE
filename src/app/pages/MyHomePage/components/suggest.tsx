import { Card } from 'app/components/Card';
import styled from 'styled-components';
import { data } from 'app/components/Card/data/card-data';
import { SeeMore } from 'app/components/SeeMore';
import { HomePageActions, useHomePageSlice } from '../slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, selectProductLoading } from '../slice/selector';
import { CenteredLoading } from 'app/components/LoadingCenter';

export const Suggest = () => {
  useHomePageSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomePageActions.loadProduct());
  }, []);

  const product = useSelector(selectProduct);

  const isLoadingProduct = useSelector(selectProductLoading);

  const dataProduct = [...product, ...data];

  return (
    <SuggestWrapper>
      <SuggestTitle>Gợi ý cho bạn</SuggestTitle>
      {isLoadingProduct ? (
        <CenteredLoading />
      ) : (
        <>
          <SuggestItems>
            {dataProduct.length &&
              dataProduct.map((e, index) => <Card data={e} key={index} />)}
          </SuggestItems>
          {/* <SeeMore text="Xem thêm sản phẩm" /> */}
        </>
      )}
    </SuggestWrapper>
  );
};

const SuggestWrapper = styled.section`
  width: 100%;
  padding: 20px 10px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
`;

const SuggestTitle = styled.h3`
  color: #1d2939;
  font-size: 24px;
  padding: 0 0 20px 20px;
  font-weight: bold;
`;

const SuggestItems = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
