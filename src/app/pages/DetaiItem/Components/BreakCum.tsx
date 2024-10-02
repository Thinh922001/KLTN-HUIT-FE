import React from 'react';
import styled from 'styled-components';

interface BreadCumLinkProps {
  isLast: boolean;
}

export const BreakCum = () => {
  const data = [
    {
      name: 'Điện thoại',
      link: '/',
    },
    {
      name: 'Điện thoại Iphone (Apple)',
      link: '/chi-tiet-san-pham',
    },
  ];
  return (
    <Wrapper>
      <BreadCumList>
        {data &&
          data.length > 0 &&
          data.map((e, index) => (
            <React.Fragment key={index}>
              <BreadCumItem>
                <BreadCumLink href={e.link} isLast={index === data.length - 1}>
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
  color: ${props =>
    props.isLast ? 'black' : '#98a2b3'}; // Đổi màu dựa trên prop isLast
  text-decoration: none;
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
