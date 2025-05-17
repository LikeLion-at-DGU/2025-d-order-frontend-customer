import styled from "styled-components";
import { motion } from "framer-motion";
import check from "@assets/icons/check.svg";
const CopyModal = () => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 20, x: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5 }}
    >
      <img src={check} alt="계좌번호 복사됨" />
      <p>게좌번호가 복사되었어요!</p>
    </Wrapper>
  );
};

export default CopyModal;

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  padding: 12px 14px;

  width: 335px;
  height: 44px;

  background-color: #ff6e3f;
  z-index: 11;
  border-radius: 8px;

  p {
    color: #fafafa;
    ${({ theme }) => theme.fonts.SemiBold14}
  }
`;
