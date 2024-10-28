import styled from 'styled-components';
import { Icon } from '../../assets/Icon';
import { generateStars } from 'utils/array';
import { ITimeLineStart, TimeLineStart } from './TimeLineStart';
import { useSelector } from 'react-redux';
import { selectAvgRating, selectRatings, selectTotal } from '../slice/selector';
import { selectTitle } from 'app/pages/DetaiItem/slice/selector';

export const Rate = () => {
  const avgStart = useSelector(selectAvgRating);
  const array = generateStars(avgStart);
  const title = useSelector(selectTitle);

  const iconProps = {
    1: { position: '0 -75px', height: '17px', width: '18px' },
    0: { position: '-50px -75px', height: '16px', width: '17px' },
    '-1': { position: '-25px -75px', height: '17px', width: '17px' },
  };

  const TimeLineStartsDefault: ITimeLineStart[] = Array.from(
    { length: 5 },
    (_, i) => ({
      rating: 5 - i,
      ratingReaction: 0,
    }),
  );

  const ratings = [...useSelector(selectRatings)].reverse();

  const rating = ratings.length > 0 ? ratings : TimeLineStartsDefault;

  const total = useSelector(selectTotal);

  return (
    <Wrapper>
      <HeaderTitle>{title}</HeaderTitle>
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
          <TotalRate>{total} đánh giá</TotalRate>
        </TotalRateWrapper>
      </PointWrapper>
      <TimeLineStartWrapper>
        {rating.map((e, index) => (
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
