import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CommentBox } from '../Comment-Box';
import { Comment } from './components/Comment';
import { Rate } from './components/Rate';
import { CommentBoxAction } from './slice';
import { selectIsShow } from './slice/selector';

export const Review = () => {
  const dispatch = useDispatch();

  const setIsShow = () => {
    dispatch(CommentBoxAction.setIsShow());
  };

  const isShow = useSelector(selectIsShow);

  return (
    <Wrapper>
      <Rate />
      <Comment />
      <BtnWrapper>
        <BtnViewAll>Xem 67 đánh giá</BtnViewAll>
        <BtnWrite onClick={setIsShow}> Viết đánh giá</BtnWrite>
      </BtnWrapper>
      {isShow && <CommentBox />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
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
  width: 50%;
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
