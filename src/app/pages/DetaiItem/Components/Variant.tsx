import styled from 'styled-components';
import { VariantItems } from './VariantItems';

export const Variants = () => {
  const data = [
    {
      name: 'size',
      img: [],
      options: ['256GB', '512GB', '1TB'],
    },
    {
      name: 'color',
      img: ['#BAB4A9', '#3F4042', '#3D4555', '#F2F1EB'],
      options: ['Titan tự nhiên', 'Titan đen', 'Titan xanh', 'Titan trắng'],
    },
  ];
  return (
    <Wrapper>
      {data.length > 0 &&
        data.map((e, index) => <VariantItems key={index} data={e} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
