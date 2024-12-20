import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { FloatingInput } from '../FloatingInput';
import { OrderDetailActions } from 'app/pages/OrderDetail/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectReasonReturn } from 'app/pages/OrderDetail/slice/selector';

type QuantitySelectorProps = {
  maxQuantity: number;
  minWidth?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

interface ReturnReasonSelectorProps {
  reasons: string[];
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  display: inline-block;
  min-width: 50px;
  font-size: 16px;
  color: #333;
`;

const Select = styled.select<{ customWidth?: string }>`
  width: ${({ customWidth }) => (customWidth ? customWidth : '200px')};
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
  minWidth,
}) => {
  return (
    <Container>
      <Label>Chọn số lượng:</Label>
      <Select onChange={onChange} customWidth={minWidth}>
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
}) => {
  const dispatch = useDispatch();

  const reason = useSelector(selectReasonReturn);
  const [isCustomReason, setIsCustomReason] = useState(false);

  const handleReasonChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === 'other') {
      setIsCustomReason(true);
      dispatch(OrderDetailActions.setReasonReturn(''));
    } else {
      setIsCustomReason(false);
      dispatch(OrderDetailActions.setReasonReturn(value));
    }
  };

  const handleCustomReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(OrderDetailActions.setReasonReturn(value));
  };

  return (
    <Container>
      <Label>Chọn lý do đổi trả:</Label>
      <Select
        value={isCustomReason ? 'other' : reason}
        onChange={handleReasonChange}
        customWidth="400px"
      >
        {reasons.map((r, index) => (
          <Option key={index} value={r}>
            {r}
          </Option>
        ))}
        <Option value="other">Nhập lý do khác...</Option>
      </Select>

      {isCustomReason && (
        <FloatingInput
          name="customReason"
          label="Nhập lý do của bạn"
          value={reason}
          onChange={handleCustomReasonChange}
          customWidth="300px"
          disableFocusColor={true}
          disableFloating={true}
          customHeight="32.5px"
        />
      )}
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
