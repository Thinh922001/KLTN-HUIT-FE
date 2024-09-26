import React from 'react';
import styled from 'styled-components';

interface Props {
  tabs: string[];
}

export const CardTab: React.FC<Props> = ({ tabs }) => {
  return (
    <TabWrapper>
      {tabs.map((e, index) => {
        return <TabItem key={index}>{e}</TabItem>;
      })}
    </TabWrapper>
  );
};

export const TabWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
  font-size: 1.4rem;
`;

const TabItem = styled.span`
  background: #f2f4f7;
  display: inline-block;
  padding: 2px 5px;
  border: none;
  color: #667085;
`;
