import styled from 'styled-components';
import { CommentItem } from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectComment,
  selectIsLoading,
  selectLengthComment,
} from '../slice/selector';
import { CenteredLoading } from 'app/components/LoadingCenter';
import { useEffect } from 'react';
import socket from 'utils/socket/socket';
import { selectProductId } from 'app/pages/DetaiItem/slice/selector';
import { IComment } from '../slice/type';
import { CommentBoxAction } from '../slice';

export const Comment = () => {
  const comment = useSelector(selectComment);
  const isLoading = useSelector(selectIsLoading);
  const lengthComment = useSelector(selectLengthComment);
  const dispatch = useDispatch();

  const productId = useSelector(selectProductId);

  useEffect(() => {
    socket.emit('joinRoom', productId);

    const handleNewComment = (comment: IComment) => {
      dispatch(CommentBoxAction.setNewComment(comment));
    };

    const handleUpdateComment = (updateData: {
      commentId: number;
      totalReaction: number;
    }) => {
      dispatch(CommentBoxAction.updateCommentReaction(updateData));
    };

    socket.on('newComment', handleNewComment);

    socket.on('updateComment', handleUpdateComment);

    return () => {
      socket.off('newComment', handleNewComment);
      socket.off('updateComment', handleUpdateComment);
    };
  }, [productId]);

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
