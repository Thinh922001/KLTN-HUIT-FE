import styled from 'styled-components';
import bannerImg from './assets/banner.png';
import CloseImg from './assets/close.png';
import { useState } from 'react';

interface Props {
  isClose?: boolean;
}

export const Banner = () => {
  const [isClose, setClose] = useState(false);

  return (
    <BannerWarper isClose={isClose}>
      <Link href="#!">
        <BannerImg src={bannerImg} />
      </Link>
      <CloseBtn onClick={() => setClose(true)}>
        <CloseImgBtn src={CloseImg} />
      </CloseBtn>
    </BannerWarper>
  );
};

const BannerWarper = styled.div<Props>`
  display: ${({ isClose }) => (isClose ? 'none' : 'block')};
  margin-top: 20px;
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
`;

const CloseImgBtn = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Link = styled.a``;
