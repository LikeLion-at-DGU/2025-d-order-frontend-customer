import styled from "styled-components";
import copy from "@assets/icons/copy.svg";

interface TotalAccount {
  depositor: string;
  account: string;
  totalPrice: string;
}
const SendMoneyModal = ({
  canclePay,
  pay,
  copyAccount,
}: {
  canclePay: () => void;
  pay: () => void;
  copyAccount: (text: string) => void;
}) => {
  const account: TotalAccount = {
    depositor: "황민영",
    account: "국민은행 12340000000",
    totalPrice: "49,000",
  };
  return (
    <ModalContainer>
      <Modalhead>
        <p>
          입금 계좌 안내 <br />
          <span>송금 후 직원을 불러주세요!</span>
        </p>
      </Modalhead>
      <ModalBody>
        <div>
          <Text>예금주</Text>
          <Text2>{account.depositor}</Text2>
        </div>
        <div>
          <Text>계좌</Text>
          <div>
            <Text2>{account.account}</Text2>
            <button onClick={() => copyAccount(account.account)}>
              <img src={copy} alt="계좌 복사 버튼" />
            </button>
          </div>
        </div>
        <div>
          <Text>보낼 금액</Text>
          <Text2>{account.totalPrice}원</Text2>
        </div>
      </ModalBody>
      <ModalConfirm>
        <button onClick={canclePay}>취소</button>
        <button onClick={pay}>직원 확인</button>
      </ModalConfirm>
    </ModalContainer>
  );
};

export default SendMoneyModal;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 14px;
  width: 270px;
  height: 260px;

  background-color: ${({ theme }) => theme.colors.Bg};
  display: grid;
  grid-template-rows: 1.2fr 2.4fr 0.9fr;
  div {
    display: flex;
  }
`;

const Modalhead = styled.div`
  grid-row: 1/2;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #c0c0c0;
  p {
    color: ${({ theme }) => theme.colors.Black01};
    ${({ theme }) => theme.fonts.Bold16}
  }
  span {
    color: ${({ theme }) => theme.colors.Orange01};
    ${({ theme }) => theme.fonts.Medium12}
  }
`;

const ModalBody = styled.div`
  box-sizing: border-box;
  padding: 1em;
  grid-row: 2/3;
  gap: 22px;
  border-bottom: 1px solid #c0c0c0;

  flex-direction: column;

  div {
    justify-content: space-between;
  }
`;

const ModalConfirm = styled.div`
  grid-row: 3/4;
  flex-direction: row;

  button {
    width: 50%;
    color: ${({ theme }) => theme.colors.Orange01};
    ${({ theme }) => theme.fonts.Bold16};
  }
  button:nth-child(1) {
    border-right: 1px solid #c0c0c0;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.Black02};
  ${({ theme }) => theme.fonts.SemiBold14}
`;

const Text2 = styled.p`
  color: ${({ theme }) => theme.colors.Black01};
  ${({ theme }) => theme.fonts.Bold14}
`;
