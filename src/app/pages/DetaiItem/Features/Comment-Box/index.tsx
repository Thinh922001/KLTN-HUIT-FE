import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CommentBoxAction } from '../Review/slice';
import { selectStateBoxComment } from '../Review/slice/selector';
import { ReviewProduct } from './components/ReviewProduct';
import { CommentProduct } from './components/CommentProduct';

export const CommentBox = () => {
  const dispatch = useDispatch();

  const handleWrapperClick = () => {
    dispatch(CommentBoxAction.resetDefaultState());
  };

  const stateBoxComment = useSelector(selectStateBoxComment);

  return (
    <Wrapper onClick={handleWrapperClick}>
      <ReviewProductWrapper onClick={e => e.stopPropagation()}>
        {stateBoxComment === 'REVIEW' ? <ReviewProduct /> : <CommentProduct />}
      </ReviewProductWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 62px 0 0 0;
  width: 100vw;
  height: calc(100vh - 62px);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ReviewProductWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  animation: fadeInContent 0.3s ease-in-out forwards; /* Thêm animation khi hiện */

  @keyframes fadeInContent {
    0% {
      opacity: 0; /* Bắt đầu với opacity 0 */
    }
    100% {
      opacity: 1; /* Dần dần hiện với opacity 1 */
    }
  }
`;
