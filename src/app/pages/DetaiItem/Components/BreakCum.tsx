import React from 'react';
import styled from 'styled-components';
import { IBreakCum } from './type';

interface BreadCumLinkProps {
  isLast: boolean;
  isLink?: boolean;
}

interface BreakCumData {
  data: IBreakCum[];
}

export const BreakCum: React.FC<BreakCumData> = ({ data }) => {
  return (
    <Wrapper>
      <BreadCumList>
        {data &&
          data.length > 0 &&
          data.map((e, index) => (
            <React.Fragment key={index}>
              <BreadCumItem>
                <BreadCumLink
                  {...(e?.link && { href: e.link })}
                  isLast={index === data.length - 1}
                  isLink={!!e?.link}
                >
                  {e.name}
                </BreadCumLink>
              </BreadCumItem>
              {index < data.length - 1 && <BreadCumSeparate />}
            </React.Fragment>
          ))}
      </BreadCumList>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BreadCumList = styled.ul`
  display: flex;
  align-items: center;
`;

const BreadCumItem = styled.li`
  font-size: 1.4rem;
`;

const BreadCumLink = styled.a<BreadCumLinkProps>`
  color: ${props => (props.isLast ? 'black' : '#98a2b3')};
  text-decoration: none;

  cursor: ${props => (props.isLink ? 'pointer' : 'text')};
`;

const BreadCumSeparate = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 2px solid #98a2b3;
  border-bottom: 2px solid #98a2b3;
  rotate: -45deg;
  margin: 0 10px;
`;
