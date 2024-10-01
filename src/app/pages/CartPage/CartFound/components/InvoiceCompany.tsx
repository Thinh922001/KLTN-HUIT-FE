import { FloatingInput } from 'app/components/FloatingInput';
import styled from 'styled-components';

export const InvoiceCompany = () => {
  return (
    <Wrapper>
      <Content>
        <InputWrapper>
          <FloatingInput
            customColor="#333;"
            customBorder="1px solid #d1d1d1"
            name="address"
            customWidth="100%"
            label="Tên công ty"
            disableFloating={true}
          />
          <FloatingInput
            customColor="#333;"
            customBorder="1px solid #d1d1d1"
            name="address"
            customWidth="100%"
            label="Địa chỉ công ty"
            disableFloating={true}
          />
          <FloatingInput
            customColor="#333;"
            customBorder="1px solid #d1d1d1"
            name="address"
            customWidth="100%"
            label="Mã số thuế"
            disableFloating={true}
          />
        </InputWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    background: #f6f6f6;
    transform: rotate(-45deg);
    display: block;
    position: absolute;
    left: 48px;
    top: -6px;
  }
`;

const Content = styled.div`
  padding: 10px 10px;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;
