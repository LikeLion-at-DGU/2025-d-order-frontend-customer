import styled, { keyframes, css } from 'styled-components';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  60% {
    opacity: 1;
    transform: translateY(8px);
  }
  100% {
    transform: translateY(0px);
  }
`;

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

const slideOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 2.5rem);
  padding: 1.25rem;
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

export const ModalWrap = styled.div<{ $isClosing?: boolean }>`
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

  ${({ $isClosing }) =>
    $isClosing
      ? css`
          animation: ${slideOutDown} 0.3s cubic-bezier(0.33, 1, 0.68, 1);
        `
      : css`
          animation: ${bounceUpSmooth} 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        `}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 100%;
  gap: 2rem;
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold18};
  color: ${({ theme }) => theme.colors.Black01};
`;
export const Price = styled.div`
  ${({ theme }) => theme.fonts.Bold14};
  color: ${({ theme }) => theme.colors.Black01};
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const QuantityText = styled.div`
  ${({ theme }) => theme.fonts.Bold16};
  color: ${({ theme }) => theme.colors.Black01};
`;

export const QuantityButton = styled.div<{ disabled?: boolean }>`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.25rem;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.Black02 : theme.colors.Orange01};
  background-color: ${({ disabled }) =>
    disabled ? 'rgba(192, 192, 192, 0.2)' : 'rgba(255, 110, 63, 0.3)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

export const Quantity = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold18};
  color: ${({ theme }) => theme.colors.Black01};
`;

export const SubmitButton = styled.div<{ disabled?: boolean }>`
  ${({ theme }) => theme.fonts.Bold16};
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.Black02 : theme.colors.Orange01};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 2rem;
  cursor: pointer;
`;

export const Toast = styled.div`
  ${({ theme }) => theme.fonts.Bold16};
  color: ${({ theme }) => theme.colors.White};
  position: fixed;
  top: 1rem;
  width: calc(100% - 4.5rem);
  max-width: calc(540px - 4.5rem);
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.Orange01};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  animation: ${slideDown} 0.4s ease-out;
`;

export const ToastIcon = styled.img`
  width: 20px;
`;
