import styled from 'styled-components';

export const BannerWeek = () => {
  return (
    <BannerWeekWrapper>
      <BannerWeekTitle>Tuần lễ thương hiệu Sunhouse</BannerWeekTitle>
      <BannerWrapper>
        <BannerImg src={require('./assets/banner-week.jpg')} />
      </BannerWrapper>
    </BannerWeekWrapper>
  );
};

const BannerWeekWrapper = styled.section`
  margin-top: 20px;
  width: 100%;
`;

const BannerWeekTitle = styled.h3`
  color: #1d2939;
  font-size: 2.4rem;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BannerWrapper = styled.div`
  position: relative;
  padding-top: 28%;
  width: 100%;
`;

const BannerImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
