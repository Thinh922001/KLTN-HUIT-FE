import styled, { keyframes } from 'styled-components';
import IconLogin from '../icons';
import { Span } from '../Span/inedx';
import { mapCardLabel } from '../CardLabel';
import { ICard } from 'types/Card';
import { CardTxtOnline } from './components/card-txt-online';
import { currencyVND } from 'utils/string';
import { ResultLabel } from './components/resultLabel';
import { CardTab } from '../CardTab';
import subImg from './assets/sub-1.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardProdsGroup } from './components/card-prods-group';

interface Props {
  data: ICard;
  imgWidth?: string;
  imgHeight?: string;
  index?: number;
}

export const Card: React.FC<Props> = ({ data, imgWidth, imgHeight, index }) => {
  return (
    <CardWrapper index={index}>
      {data.labels?.length ? mapCardLabel(data.labels) : null}
      <CardImgWrapper>
        <A to={`/chi-tiet-san-pham/${data.id}`}>
          <CardImg imgWidth={imgWidth} imgHeight={imgHeight} src={data.img} />
        </A>
        {data.subImg && <CardSubImg src={subImg} />}
      </CardImgWrapper>

      {data.resultLabel && (
        <ResultLabel
          text={data.resultLabel.text}
          type={data.resultLabel.type}
        />
      )}
      <CardTitleWrapper>
        <CardTitle>{data.title ?? ''}</CardTitle>
      </CardTitleWrapper>
      {data.tabs && <CardTab tabs={data.tabs} />}
      {data.prodsGroup && <CardProdsGroup prodsGroup={data.prodsGroup} />}
      {data.txtOnline && (
        <CardTxtOnline type={data.txtOnline.type ?? 0}>
          {data.txtOnline.text ?? ''}
        </CardTxtOnline>
      )}
      <CardPrice>{currencyVND(data.price ?? 0)}</CardPrice>
      {data.discount && (
        <CardOldPriceWrapper>
          <CardOldPrice>
            {currencyVND(data.discount.OldPrice ?? 0)}
          </CardOldPrice>
          <CardPercent>{data.discount.discountPercent ?? 0}%</CardPercent>
        </CardOldPriceWrapper>
      )}
      {data.textGift && <TextGift>{data.textGift}</TextGift>}
      {data.vote && (
        <CardVote>
          <StartIcon position="-136px -19px" width="14px" height="14px" />
          <StartNumber>{data.vote.startRate ?? 0}</StartNumber>
          <Span>({data.vote.totalVote ?? 0})</Span>
        </CardVote>
      )}
    </CardWrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const CardTitle = styled.h3`
  line-height: 21px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1d2939;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: color 0.3s;
`;

const CardImg = styled.img<{ imgWidth?: string; imgHeight?: string }>`
  width: ${({ imgWidth }) => imgWidth ?? `155px`};
  height: ${({ imgHeight }) => imgHeight ?? `155px`};
  object-fit: contain;
  padding-top: 8px;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: transform 0.5s, opacity 0.5s ease-in-out;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

// Styled Components
const CardWrapper = styled.div<{ index?: number }>`
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #eaecf0;
  background-color: #fff;
  min-height: 436px;
  animation: ${scaleIn} 0.5s ease-in-out;
  animation-delay: ${({ index }) => (index ?? 0) * 0.1}s;
  animation-fill-mode: both;

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);

    ${CardTitle} {
      color: #288ad6;
    }

    ${CardImg} {
      transform: translateY(-8px);
    }
  }
`;

const CardTitleWrapper = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const CardPrice = styled.strong`
  display: inline-block;
  color: #dd2f2c;
  font-size: 1.8rem;
  margin-bottom: 8px;
`;

const CardOldPriceWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  gap: 5px;
`;

const CardOldPrice = styled.p`
  color: #98a2b3;
  text-decoration-line: line-through;
`;

const CardPercent = styled.span`
  color: #dd2f2c;
  font-size: 1.3rem;
`;

const CardVote = styled.div`
  color: #667085;
  font-size: 1.2rem;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const StartNumber = styled.div`
  font-weight: normal;
  margin-right: 2px;
  color: #667085;
`;

const StartIcon = styled(IconLogin)`
  margin: -4px 0 0 0;
`;

const TextGift = styled.p`
  color: #1d2939;
  margin-bottom: 10px;
`;

const CardImgWrapper = styled.div`
  position: relative;
  min-height: 163px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardSubImg = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const A = styled(Link)`
  display: block;
`;
