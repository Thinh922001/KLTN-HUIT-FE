import styled from 'styled-components';
import { generateStars } from 'utils/array';
import { Icon } from '../../assets/Icon';

export const CommentItem = () => {
  const numStart = generateStars(4);

  const iconProps = {
    1: { position: '-140px -25px', height: '11px', width: '12px' },
    0: { position: '-160px -25px', height: '11px', width: '12px' },
  };

  return (
    <Wrapper>
      <CmtName>Lê Cường Thịnh</CmtName>
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
        <CmtTxt>Sản phẩm rất tốt</CmtTxt>
      </CmtContent>
      <CmtImgWrapper>
        <CmtImg src="https://cdn.tgdd.vn/comment/54051064/16815383878655130338128515518280-20230415130005.jpg" />
        <CmtImg src="https://cdn.tgdd.vn/comment/54051064/16815383878655130338128515518280-20230415130005.jpg" />
        <CmtImg src="https://cdn.tgdd.vn/comment/54051064/16815383878655130338128515518280-20230415130005.jpg" />
      </CmtImgWrapper>
      <CmtCommand>
        <Icon
          position="-179px -43px"
          height="15px"
          width="15px"
          style={{ transform: 'translateY(-2px)', cursor: 'pointer' }}
        />
        <CmtCmdText>Hữu ích</CmtCmdText>
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
