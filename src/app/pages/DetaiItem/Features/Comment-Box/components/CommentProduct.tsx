import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CommentBoxAction } from '../../Review/slice';
import { VoteData } from 'utils/data';
import { StartVote } from './StartVote';
import { generateStars } from 'utils/array';
import { selectStartRate } from '../../Review/slice/selector';
import CommentInput from './Comment';
import { FloatingInput } from 'app/components/FloatingInput';
import CustomCheckbox from 'app/components/CustomCheckBox';
import { useState } from 'react';

export const CommentProduct = () => {
  const dispatch = useDispatch();

  const startRate = useSelector(selectStartRate);

  const voteArr = generateStars(startRate);

  const changeStartRate = (startRate: number) => {
    dispatch(CommentBoxAction.setStartRate(startRate));
  };

  const [isDegree, setIsDegree] = useState<boolean>(false);

  return (
    <Wrapper>
      <CloseBtnWrapper
        onClick={() => dispatch(CommentBoxAction.resetDefaultState())}
      >
        <CloseBtn />
      </CloseBtnWrapper>
      <HeaderWrapper>
        <HeaderTitle>Đánh giá sản phẩm </HeaderTitle>
      </HeaderWrapper>
      <ImgWrapper>
        <Img src="https://cdn.tgdd.vn/Products/Images/3385/326047/TimerThumb/may-loc-nuoc-ro-sunhouse-sha76623kl-11-loi-(4).jpg" />
      </ImgWrapper>
      <StartVoteWrapper>
        {voteArr.map((e, index) => (
          <StartVote
            title={VoteData[index]}
            key={index}
            activeStart={!!e}
            onClick={() => changeStartRate(index + 1)}
            isActive={startRate === index + 1}
          />
        ))}
      </StartVoteWrapper>
      <CommentInput />
      <FormGroupInput>
        <FloatingInput
          customColor="#333;"
          customBorder="1px solid #d1d1d1"
          name="fullName"
          label="Họ và Tên (bắc buộc)"
          disableFloating={true}
          disableFocusColor={true}
        />
        <FloatingInput
          customColor="#333;"
          customBorder="1px solid #d1d1d1"
          name="phoneNumber"
          label="Số điện thoại (bắc buộc)"
          disableFloating={true}
          disableFocusColor={true}
        />
      </FormGroupInput>
      <FormGroup>
        <CheckBoxWrapper>
          <CustomCheckbox
            id="degree"
            isChecked={isDegree}
            onChange={checked => setIsDegree(checked)}
          />
          <LabelPolicy htmlFor="degree">
            Tôi đồng ý với{' '}
            <LinkPolicy href="#!">Chính sách xử lý dữ liệu cá nhân </LinkPolicy>
            của chúng tôi
          </LabelPolicy>
        </CheckBoxWrapper>
      </FormGroup>
      <FormGroup>
        <BtnWrite>Gửi đánh giá</BtnWrite>
      </FormGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 680px;
  background-color: #fff;
  border-radius: 20px;
  padding-bottom: 30px;
  z-index: 100;
  position: relative;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f5f5f7;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  padding: 22px;
  text-align: center;
`;

const HeaderTitle = styled.h6``;

const CloseBtnWrapper = styled.div`
  padding: 10px;
  position: absolute;
  right: 27px;
  top: 8px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  &::before,
  &::after {
    background-color: #3e3e3f;
    border-radius: 3px;
    content: '';
    position: absolute;
    height: 20px;
    width: 3px;
  }

  &::before {
    transform: rotate(-45deg);
    top: 0;
    left: 8px;
  }

  &::after {
    transform: rotate(45deg);
    top: 0;
    left: 8px;
  }
`;

const StartVoteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const Img = styled.img`
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const FormGroup = styled.div`
  width: 85%;
  margin: 0 auto;
  & + & {
    margin-top: 12px;
  }
`;

const FormGroupInput = styled(FormGroup)`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LabelPolicy = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
`;

const LinkPolicy = styled.a`
  color: #288ad6;
`;

const Btn = styled.button`
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  display: block;
  line-height: 17px;
  padding: 14px 10px;
  text-align: center;
  width: 100%;
`;

const BtnWrite = styled(Btn)`
  background-color: #0071e3;
  border: 1px solid #0071e3;
`;
