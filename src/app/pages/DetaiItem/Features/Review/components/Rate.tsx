import styled from 'styled-components';
import { Icon } from '../../assets/Icon';
import { generateStars } from 'utils/array';
import { ITimeLineStart, TimeLineStart } from './TimeLineStart';

export const Rate = () => {
  const avgStart = 2.7;
  const array = generateStars(avgStart);

  const iconProps = {
    1: { position: '0 -75px', height: '17px', width: '18px' },
    0: { position: '-50px -75px', height: '16px', width: '17px' },
    '-1': { position: '-25px -75px', height: '17px', width: '17px' },
  };

  const TimeLineStartsData: ITimeLineStart[] = [
    {
      start: 5,
      percent: 49,
    },
    {
      start: 4,
      percent: 33,
    },
    {
      start: 3,
      percent: 12,
    },
    {
      start: 2,
      percent: 3,
    },
    {
      start: 1,
      percent: 3,
    },
  ];

  return (
    <Wrapper>
      <HeaderTitle>
        Đánh giá Điện thoại Samsung Galaxy Z Flip6 5G 12GB/256GB
      </HeaderTitle>
      <PointWrapper>
        <PointAVG>{avgStart}</PointAVG>
        {array.map((e, index) => {
          return (
            <Icon
              key={index}
              position={iconProps[e].position}
              height={iconProps[e].height}
              width={iconProps[e].width}
            />
          );
        })}

        <TotalRateWrapper>
          <TotalRate>67 đánh giá</TotalRate>
        </TotalRateWrapper>
      </PointWrapper>
      <TimeLineStartWrapper>
        {TimeLineStartsData.map((e, index) => (
          <TimeLineStart data={e} key={index} />
        ))}
      </TimeLineStartWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div``;

const HeaderTitle = styled.h4`
  font-size: 1.6rem;
  line-height: 32px;
  font-weight: bold;
`;

const PointWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 50px;
`;

const PointAVG = styled.p`
  color: #ff9f00;
  font-size: 28px;
  font-weight: bold;
  line-height: 28px;
  margin-right: 6px;
`;

const TimeLineStartWrapper = styled.div`
  margin-top: 20px;
`;

const TotalRate = styled.span`
  color: #0071e3;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1.5rem;
`;

const TotalRateWrapper = styled.div`
  display: flex;
  align-items: center;
`;
