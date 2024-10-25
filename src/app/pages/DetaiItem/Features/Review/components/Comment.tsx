import styled from 'styled-components';
import { CommentItem } from './CommentItem';
import { useSelector } from 'react-redux';
import {
  selectComment,
  selectIsLoading,
  selectLengthComment,
} from '../slice/selector';
import { CenteredLoading } from 'app/components/LoadingCenter';

export const Comment = () => {
  const comment = useSelector(selectComment);
  const isLoading = useSelector(selectIsLoading);
  const lengthComment = useSelector(selectLengthComment);

  return (
    <Wrapper>
      {isLoading && lengthComment === 0 ? (
        <CenteredLoading />
      ) : comment.length > 0 ? (
        comment.map(e => <CommentItem key={e.id} data={e} />)
      ) : (
        <NoCommentsMessage>Chưa có bài đánh giá nào</NoCommentsMessage>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

const NoCommentsMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #777;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
`;
