import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../assets/Icon';

export interface ITimeLineStart {
  rating: number;
  ratingReaction: number;
}

interface Props {
  data: ITimeLineStart;
}

export const TimeLineStart: React.FC<Props> = ({ data }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(`${data.ratingReaction}%`);
    }, 100);
    return () => clearTimeout(timer);
  }, [data.ratingReaction]);

  return (
    <Wrapper>
      <NumberStart>{data.rating}</NumberStart>
      <Icon position="-160px -65px" height="11px" width="12px" />
      <WrapperTiming>
        <Timing tWidth={width} />
      </WrapperTiming>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }
`;

const WrapperTiming = styled.div`
  background-color: #eee;
  border-radius: 20px;
  height: 6px;
  position: relative;
  width: calc(100% - 343px);
  margin-left: 10px;
`;

const Timing = styled.p<{ tWidth: string }>`
  display: inline-block;
  width: 0;
  background-color: #ff9f00;
  border-radius: 20px;
  left: 0;
  height: 6px;
  position: absolute;
  top: 0;
  transition: width 1s ease-in-out;

  ${({ tWidth }) =>
    tWidth &&
    `
    width: ${tWidth};
  `}
`;

const NumberStart = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 14px;
  color: rgb(16, 16, 16);
  margin-right: 5px;
`;
