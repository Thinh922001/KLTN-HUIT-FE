import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CommentBoxAction } from '../../Review/slice';
import { StartVote } from './StartVote';
import { VoteData } from 'utils/data';
import { useEffect, useState } from 'react';
import {
  selectImgProductDetail,
  selectTitle,
} from 'app/pages/DetaiItem/slice/selector';

export const ReviewProduct = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const img = useSelector(selectImgProductDetail);

  const title = useSelector(selectTitle);

  const handleOnClick = (value: number) => {
    setIsVisible(false);
    setTimeout(() => {
      dispatch(CommentBoxAction.setStateBoxComment('COMMENT'));
      dispatch(CommentBoxAction.setStartRate(value));
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <Wrapper isVisible={isVisible}>
      <CloseBtnWrapper
        onClick={() => dispatch(CommentBoxAction.resetDefaultState())}
      >
        <CloseBtn />
      </CloseBtnWrapper>

      <HeaderWrapper>
        <HeaderTitle>Đánh giá sản phẩm</HeaderTitle>
      </HeaderWrapper>
      <ImgWrapper>
        <Img src={img} />
      </ImgWrapper>
      <TitleProduct>{title}</TitleProduct>
      <StartVoteWrapper>
        {VoteData.map((e, index) => (
          <StartVote
            title={e}
            key={index}
            onClick={() => handleOnClick(index + 1)}
          />
        ))}
      </StartVoteWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isVisible: boolean }>`
  width: 680px;
  background-color: #fff;
  border-radius: 20px;
  padding-bottom: 30px;
  z-index: 100;
  position: relative;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f5f5f7;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  padding: 22px;
  text-align: center;
`;

const HeaderTitle = styled.h6``;

const CloseBtnWrapper = styled.div`
  padding: 10px;
  position: absolute;
  right: 27px;
  top: 8px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  &::before,
  &::after {
    background-color: #3e3e3f;
    border-radius: 3px;
    content: '';
    position: absolute;
    height: 20px;
    width: 3px;
  }

  &::before {
    transform: rotate(-45deg);
    top: 0;
    left: 8px;
  }

  &::after {
    transform: rotate(45deg);
    top: 0;
    left: 8px;
  }
`;

const Img = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const TitleProduct = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
  margin: 20px 20px 0;
  text-align: center;
`;

const StartVoteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;
