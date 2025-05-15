import styled from "styled-components";

interface BtnProps {
  text: string;
  onClick?: () => void;
}

const Btn = ({ text, onClick }: BtnProps) => {
  return <BtnContainer onClick={onClick}>{text}</BtnContainer>;
};

export default Btn;

const BtnContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 88%;
  height: 50px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.Orange01};
  color: ${({ theme }) => theme.colors.Bg};
  ${({ theme }) => theme.fonts.Bold16};

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (hover: none) {
    &:active {
      transform: scale(1.05);
    }
  }
`;
