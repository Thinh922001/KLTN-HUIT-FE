import styled from 'styled-components';
import { VariantItems } from './VariantItems';
import { useProductDetailSlice } from '../slice';
import { useSelector } from 'react-redux';
import { selectVariant } from '../slice/selector';

export const Variants = () => {
  useProductDetailSlice();
  const data = useSelector(selectVariant);

  return (
    <Wrapper>
      {data.length > 0 &&
        data.map((e, index) => <VariantItems key={index} data={e} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
