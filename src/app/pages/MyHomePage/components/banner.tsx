import styled from 'styled-components';
import CloseImg from './assets/close.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomePageActions } from '../slice';
import { selectBanner } from '../slice/selector';

interface Props {
  isClose?: boolean;
}

export const Banner = () => {
  const [isClose, setClose] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const banner = useSelector(selectBanner);

  useEffect(() => {
    const bannerClosedTime = localStorage.getItem('bannerClosed');

    dispatch(HomePageActions.loadingBanner());

    if (bannerClosedTime) {
      const { closedAt, expiresAt } = JSON.parse(bannerClosedTime);
      const currentTime = new Date().getTime();

      if (currentTime < expiresAt) {
        setClose(true);
      } else {
        localStorage.removeItem('bannerClosed');
      }
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banner.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [banner]);

  const handleCloseBanner = () => {
    setClose(true);

    const currentTime = new Date().getTime();
    const expireTime = currentTime + 30000;

    localStorage.setItem(
      'bannerClosed',
      JSON.stringify({
        closedAt: currentTime,
        expiresAt: expireTime,
      }),
    );
  };

  return (
    <>
      {!banner.length || isClose ? null : (
        <BannerWrapper isClose={isClose}>
          <Link href="#!">
            <BannerImg src={banner[currentIndex]} />
          </Link>

          <CloseBtn onClick={handleCloseBanner}>
            <CloseImgBtn src={CloseImg} />
          </CloseBtn>
        </BannerWrapper>
      )}
    </>
  );
};

const BannerWrapper = styled.div<Props>`
  display: ${({ isClose }) => (isClose ? 'none' : 'block')};
  position: relative;
  width: 100%;
  padding-top: 20%;
`;

const BannerImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const CloseBtn = styled.button<Props>`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 1px solid black;
  border-radius: 50%;
  right: 8px;
  top: 8px;
  background: white;
`;

const CloseImgBtn = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Link = styled.a``;
