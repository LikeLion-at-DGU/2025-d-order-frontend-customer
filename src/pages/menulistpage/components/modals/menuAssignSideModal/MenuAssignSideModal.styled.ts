import styled, { keyframes } from 'styled-components';

const bounceUpSmooth = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 100%) scale(0.95);
    filter: blur(6px);
  }
  45% {
    opacity: 1;
    transform: translate(-50%, 0px) scaleY(1.06);
    filter: blur(0px);
  }
  75% {
    transform: translate(-50%, 0px) scaleY(0.98);
  }
  100% {
    transform: translate(-50%, 0) scale(1);
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 2.5rem);
  padding: 1.25rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold18};
  color: ${({ theme }) => theme.colors.Black01};
`;

export const BackWrap = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 540px;
  min-height: calc(var(--vh, 1vh) * 100);
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalWrap = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 540px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 30px 30px 0px 0px;

  transform-origin: bottom center;
  animation: ${bounceUpSmooth} 0.7s cubic-bezier(0.22, 1, 0.36, 1);
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 100%;
  gap: 3rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  ${({ theme }) => theme.fonts.Bold16};
  color: ${({ theme }) => theme.colors.Orange01};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.White};
  border: 1px solid ${({ theme }) => theme.colors.Orange01};
  border-radius: 10px;

  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  ${({ theme }) => theme.fonts.Bold16};
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.Orange01};
  border: 1px solid ${({ theme }) => theme.colors.Orange01};
  border-radius: 10px;

  cursor: pointer;
`;
