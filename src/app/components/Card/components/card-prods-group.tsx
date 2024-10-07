import React from 'react';
import styled from 'styled-components';

interface Props {
  prodsGroup: string[];
}

export const CardProdsGroup: React.FC<Props> = ({ prodsGroup }) => {
  return (
    <Wrapper>
      {prodsGroup.length > 0 &&
        prodsGroup.map((e, index) => <ProdItem key={index}>{e}</ProdItem>)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProdItem = styled.span`
  border-radius: 8px;
  padding: 5px 8px;
  border: 1px solid #e0e0e0;
  display: inline-block;
  font-size: 1.2rem;
  line-height: 16px;
  color: #333;
`;
