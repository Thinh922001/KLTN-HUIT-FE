import styled from 'styled-components';
import Icon from '../icons';
import ProductIon from 'app/pages/MyHomePage/components/assets/1.jpg';
import { Span } from '../Span/inedx';

export const Card = () => {
  return (
    <CardWrapper>
      <CardLabel>Trả góp 0%</CardLabel>
      <CardImg src={ProductIon} />
      <CardTitle>Samsung Inverter 305 lít RT31CG5424B1SV</CardTitle>
      <CardSubTile>Online giá rẻ quá</CardSubTile>
      <CardPrice>9.890.000₫</CardPrice>
      <CardOldPriceWrapper>
        <CardOldPrice>11.190.000₫</CardOldPrice>
        <CardPercent>-11%</CardPercent>
      </CardOldPriceWrapper>
      <CardVote>
        <StartIcon position="-136px -19px" width="14px" height="14px" />
        <StartNumber>4.3</StartNumber>
        <Span>(90)</Span>
      </CardVote>
    </CardWrapper>
  );
};

const CardImg = styled.img`
  width: 155px;
  height: 155px;
  object-fit: contain;
  padding-top: 8px;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: transform 0.5s;
`;

const CardTitle = styled.h3`
  display: inline-block;
  margin-bottom: 8px;
  line-height: 21px;
  font-size: 1.4rem;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  font-weight: 700;
  color: #1d2939;

  transition: color 0.5s;
`;

const CardWrapper = styled.div`
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #eaecf0;
  background-color: #fff;
  min-height: 391px;
  cursor: pointer;

  &:hover {
    ${CardTitle} {
      color: #288ad6;
    }

    ${CardImg} {
      transform: translateY(-8px);
    }
  }
`;

const CardSubTile = styled.p`
  font-weight: 700;
  color: #fd853a;
  font-size: 1.2rem;
  margin-bottom: 10px;
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
  text-align: left;
  display: inline-block;
  font-size: 1.4rem;
  line-height: 17px;
  text-decoration-line: line-through;
`;

const CardPercent = styled.span`
  color: #dd2f2c;
  display: inline-block;
  font-size: 1.3rem;
  line-height: 17px;
`;

const CardVote = styled.div`
  color: #667085;
  font-size: 1.2rem;
  line-height: 13px;
`;

const StartNumber = styled.div`
  font-weight: normal;
  margin-right: 2px;
  color: #667085;
  vertical-align: unset;
  display: inline-block;
`;

const ItemLabel = styled.span`
  border-radius: 2px;
  font-size: 11px;
  line-height: 12px;
  display: inline-block;

  padding: 3px;
  height: 17px;
  margin-bottom: 5px;

  & + & {
    margin-right: 4px;
  }
`;

const CardLabel = styled(ItemLabel)`
  background-color: #f1f1f1;
  color: #333;
`;

const StartIcon = styled(Icon)`
  margin: -4px 0 0 0;
`;
