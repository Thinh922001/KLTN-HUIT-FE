import styled from 'styled-components';
import { ELabel, ILabel } from 'types/Card';

interface Props {
  type: ELabel;
}

export const mapCardLabel = (labels: ILabel[]) => {
  return (
    labels.length &&
    labels.map((e, index) => {
      return (
        <CardLabel key={index} type={e.label}>
          {e.text}
        </CardLabel>
      );
    })
  );
};

export const CardLabel = styled.span<Props>`
  border-radius: 2px;
  font-size: 11px;
  line-height: 12px;
  display: inline-block;
  padding: 3px;
  height: 17px;
  margin-bottom: 5px;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }

  ${({ type }) => {
    if (type === ELabel.PRIMARY)
      return `
            background-color: #ffebee;
             color: #dd2f2c;`;

    return `
            background-color: #f1f1f1;
            color: #333;`;
  }}
`;
