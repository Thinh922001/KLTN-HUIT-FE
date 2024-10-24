import { useState } from 'react';
import styled from 'styled-components';
import { BoxSpecif } from './BoxSpecif';
import { ProductDetailActions, useProductDetailSlice } from '../slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectComponentActive, selectSpecData } from '../slice/selector';
import { Review } from '../Features/Review';

export const Specifications = () => {
  useProductDetailSlice();

  const specData = useSelector(selectSpecData);
  const dispatch = useDispatch();
  const componentActive = useSelector(selectComponentActive);

  return (
    <Wrapper>
      <Content>
        <BtnWrapper>
          <BtnSpec
            isActive={componentActive === 'SPEC'}
            onClick={() =>
              dispatch(ProductDetailActions.setComponentActive('SPEC'))
            }
          >
            Thông số kỹ thuật
          </BtnSpec>
          <BtnSpec
            onClick={() =>
              dispatch(ProductDetailActions.setComponentActive('RATE'))
            }
            isActive={componentActive === 'RATE'}
          >
            Bài viết đánh giá
          </BtnSpec>
        </BtnWrapper>
        {componentActive === 'SPEC' ? (
          <SpecsWrapper>
            {specData.length &&
              specData.map((e, index) => <BoxSpecif data={e} key={index} />)}
          </SpecsWrapper>
        ) : (
          <Review />
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
`;

const Content = styled.div`
  width: 100%;
  padding: 15px;
`;

const BtnSpec = styled.button<{ isActive?: boolean }>`
  display: inline-block;

  padding: 10px 30px;
  margin: 0 15px 0 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.6rem;
  font-weight: 600;

  ${({ isActive }) =>
    isActive
      ? `
    border: 1px solid #bbddfd;
    background-color: #f1f8fe;
    color: #2a83e9;
   `
      : ` 
      border: 1px solid #e5e5e5;
      color: #3a3a3a;`}
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpecsWrapper = styled.div``;
