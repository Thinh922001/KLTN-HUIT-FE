import styled from 'styled-components';
import { generateStars } from 'utils/array';
import { Icon } from '../../assets/Icon';
import { iconProps } from 'utils/url';
import { IComment } from '../slice/type';
import React from 'react';

interface Props {
  data: IComment;
}

export const CommentItem: React.FC<Props> = ({ data }) => {
  const numStart = generateStars(data.rating);

  return (
    <Wrapper>
      <CmtName>{data.owner.aliasName}</CmtName>
      <StartWrapper>
        {numStart.map((e, index) => (
          <Icon
            key={index}
            position={iconProps[e].position}
            height={iconProps[e].height}
            width={iconProps[e].width}
          />
        ))}
        <TxtIntroWrapper>
          <Icon
            position="-45px -60px"
            height="11px"
            width="12px"
            style={{ marginRight: '5px' }}
          />
          <TxtIntro>Sẽ giới thiệu cho bạn bè người thân</TxtIntro>
        </TxtIntroWrapper>
      </StartWrapper>
      <CmtContent>
        <CmtTxt>{data.comment}</CmtTxt>
      </CmtContent>

      <CmtImgWrapper>
        {data.img &&
          data.img?.length > 0 &&
          data.img?.map((e, index) => <CmtImg key={index} src={e} />)}
      </CmtImgWrapper>
      <CmtCommand>
        <Icon
          position="-179px -43px"
          height="15px"
          width="15px"
          style={{ transform: 'translateY(-2px)', cursor: 'pointer' }}
        />
        <CmtCmdText>
          {data.totalReaction ? `${data.totalReaction} ` : null} Hữu ích
        </CmtCmdText>
        <TxtDate>2 ngày trước</TxtDate>
      </CmtCommand>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid #ebf0f9;
  padding: 15px 0;
  & + & {
    margin-top: 20px;
  }
`;

const CmtName = styled.h6`
  white-space: break-spaces;
  text-transform: capitalize;
  color: #222b45;
  display: inline;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-right: 10px;
`;

const StartWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;

const TxtIntroWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;

  &::before {
    background-color: #ebf0f9;
    content: '';
    height: 16px;
    left: 0;
    position: absolute;
    top: calc(50% - 8px);
    width: 1px;
  }
`;

const TxtIntro = styled.span`
  font-size: 12px;
`;

const CmtContent = styled.div`
  margin-top: 10px;
  max-width: 400px;
`;

const CmtTxt = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 24px;
`;

const CmtImgWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const CmtImg = styled.img`
  border-radius: 4px;
  object-fit: cover;
  height: 80px;
  width: 80px;
`;

const CmtCommand = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const CmtCmdText = styled.span`
  font-size: 1.3rem;
`;

const TxtDate = styled.span`
  font-size: 1.3rem;
`;
