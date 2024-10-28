import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CommentBox } from '../Comment-Box';
import { Comment } from './components/Comment';
import { Rate } from './components/Rate';
import { CommentBoxAction, useCommentBoxSlice } from './slice';
import {
  selectComment,
  selectIsLoading,
  selectIsShow,
  selectLengthComment,
  selectRatingLoading,
  selectTotal,
} from './slice/selector';
import { useEffect } from 'react';
import { CenteredLoading } from 'app/components/LoadingCenter';

export const Review = () => {
  const dispatch = useDispatch();

  const setIsShow = () => {
    dispatch(CommentBoxAction.setIsShow());
  };

  const isShow = useSelector(selectIsShow);
  const totalComment = useSelector(selectTotal);
  const lengthComment = useSelector(selectLengthComment);
  const isLoading = useSelector(selectIsLoading);
  const isRatingLoading = useSelector(selectRatingLoading);

  useEffect(() => {
    dispatch(CommentBoxAction.resetComment());
  }, [dispatch]);

  useEffect(() => {
    dispatch(CommentBoxAction.loadComment());
    dispatch(CommentBoxAction.loadingRating());
  }, [dispatch]);

  return (
    <Wrapper>
      <Rate />
      <Comment />
      {isLoading && lengthComment > 0 && isRatingLoading ? (
        <CenteredLoading />
      ) : (
        <BtnWrapper isMore={totalComment > lengthComment}>
          {totalComment > lengthComment && (
            <BtnViewAll
              onClick={() => dispatch(CommentBoxAction.LoadMoreComment())}
            >
              Xem thêm {totalComment - lengthComment} đánh giá
            </BtnViewAll>
          )}
          <BtnWrite onClick={setIsShow}> Viết đánh giá</BtnWrite>
        </BtnWrapper>
      )}

      {isShow && <CommentBox />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const BtnWrapper = styled.div<{ isMore: boolean }>`
  display: grid;
  grid-template-columns: 1fr ${({ isMore }) => isMore && '1fr'};
  gap: 10px;
  margin-top: 10px;
  align-items: center;
`;

const Btn = styled.button`
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  display: block;
  line-height: 17px;
  padding: 14px 10px;
  text-align: center;
  transition: 0.3s;
  width: 100%;
`;

const BtnViewAll = styled(Btn)`
  background-color: #fff;
  border: 1px solid #3e3e3f;
  color: #3e3e3f;
  &:hover {
    background-color: #3e3e3f;
    color: #fff;
  }
`;

const BtnWrite = styled(Btn)`
  background-color: #0071e3;
  border: 1px solid #0071e3;

  &:hover {
    background-color: transparent;
    color: #0071e3;
  }
`;
