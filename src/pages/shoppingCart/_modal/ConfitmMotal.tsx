import styled from "styled-components";
const ConfirmModal = ({
  text,
  confirm,
}: {
  text: string;
  confirm: () => void;
}) => {
  return (
    <ModalContainer>
      <div>{text}</div>
      <div>
        <button onClick={confirm}>확인</button>
      </div>
    </ModalContainer>
  );
};

export default ConfirmModal;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-rows: 1.5fr 1fr;

  width: 270px;
  height: 120px;

  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.Bg};
  button {
    color: ${({ theme }) => theme.colors.Orange01};
    ${({ theme }) => theme.fonts.Bold16}
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:nth-child(1) {
    grid-row: 1/2;
  }
  div:nth-child(2) {
    grid-row: 2/3;
    border-top: 1px solid ${({ theme }) => theme.colors.Black02};
  }

  ${({ theme }) => theme.fonts.Bold16}
`;
