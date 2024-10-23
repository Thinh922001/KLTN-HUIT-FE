import styled from 'styled-components';
import { CommentItem } from './CommentItem';

export const Comment = () => {
  return (
    <Wrapper>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
`;
