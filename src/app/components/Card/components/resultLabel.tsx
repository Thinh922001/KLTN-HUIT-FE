import styled from 'styled-components';
import { EResultLabel } from 'types/Card';
import img1 from '../assets/result-img/1.png';
import img3 from '../assets/result-img/2.png';
import img2 from '../assets/result-img/3.png';

const RESULT_LABEL_BG: {
  [key: number]: { BG: string; IMG: string };
} = {
  0: {
    BG: 'linear-gradient(to right, #ef3006, #c60004)',
    IMG: img1,
  },
  1: {
    BG: 'linear-gradient(to right, #e91f63, #db2663)',
    IMG: img2,
  },
  2: {
    BG: 'linear-gradient(to right, #faab08, #d42611)',
    IMG: img3,
  },
};

interface Props {
  text: string;
  type: EResultLabel;
  BG: string;
}

export const ResultLabel: React.FC<Pick<Props, 'text' | 'type'>> = ({
  text,
  type,
}) => {
  const { IMG, BG } = RESULT_LABEL_BG[type] || RESULT_LABEL_BG[1];
  return (
    <Wrapper BG={BG}>
      <Img src={IMG} />
      <Span>{text}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.p<Pick<Props, 'BG'>>`
  margin-top: 5px;
  border-radius: 20px;
  display: inline-flex;
  font-size: 0;
  overflow: hidden;
  max-width: 100%;
  padding-right: 8px;
  align-items: center;
  padding-bottom: 2px;
  background: ${({ BG }) => BG};
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Span = styled.span`
  color: #fff;
  font-size: 1.2rem;
  line-height: 13px;
  overflow: hidden;
  padding: 4px 0 0 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;
  text-transform: uppercase;
`;
