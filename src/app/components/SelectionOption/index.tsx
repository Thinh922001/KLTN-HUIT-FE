import React from 'react';
import styled from 'styled-components';

type QuantitySelectorProps = {
  maxQuantity: number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type ReturnReasonSelectorProps = {
  reasons: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  display: inline-block;
  min-width: 50px;
  font-size: 16px;
  color: #333;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  color: #333;
`;

const Option = styled.option`
  padding: 5px;
  background: white;
  color: #333;
`;

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity,
  onChange,
}) => {
  return (
    <Container>
      <Label>Chọn số lượng:</Label>
      <Select onChange={onChange}>
        {Array.from({ length: maxQuantity }, (_, index) => (
          <Option key={index + 1} value={index + 1}>
            {index + 1}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

const ReturnReasonSelector: React.FC<ReturnReasonSelectorProps> = ({
  reasons,
  onChange,
}) => {
  return (
    <Container>
      <Label>Chọn lý do SP:</Label>
      <Select onChange={onChange}>
        {reasons.map((reason, index) => (
          <Option key={index} value={reason}>
            {reason}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

const defaultReasons = [
  'Sản phẩm bị lỗi',
  'Không đúng sản phẩm đặt hàng',
  'Sản phẩm bị hỏng trong quá trình vận chuyển',
  'Không còn nhu cầu sử dụng',
  'Thời gian giao hàng quá lâu',
  'Sản phẩm không giống mô tả',
  'Không phù hợp với nhu cầu',
  'Đã mua nhầm sản phẩm',
  'Sản phẩm bị thiếu phụ kiện',
  'Nhận được hàng không đúng màu sắc',
  'Sản phẩm đã qua sử dụng',
  'Chất lượng không đạt yêu cầu',
  'Giá sản phẩm quá cao so với chất lượng',
  'Nhận sai kích thước hoặc thông số kỹ thuật',
];

export { QuantitySelector, ReturnReasonSelector, defaultReasons };
