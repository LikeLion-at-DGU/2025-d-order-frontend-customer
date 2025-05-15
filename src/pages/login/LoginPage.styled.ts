import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);

  padding-top: 145px;
  padding-bottom: 23px;
  box-sizing: border-box;

  justify-content: space-around;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const InfoText = styled.div`
  color: ${({ theme }) => theme.colors.Black01};
  ${({ theme }) => theme.fonts.Bold18};
  margin-bottom: 30px;
  opacity: 0.4;
`;

export const NoticeText = styled.div`
  color: ${({ theme }) => theme.colors.Black01};
  ${({ theme }) => theme.fonts.SemiBold12};
  margin-top: 10px;
  margin-bottom: 43px;
  opacity: 0.4;
`;

export const InputTableNumber = styled.input`
  display: flex;
  align-items: center;
  width: 82%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.Black02};
  padding: 0 17px;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.Bg};

  &::placeholder {
    color: ${({ theme }) => theme.colors.Black02};
  }

  ${({ theme }) => theme.fonts.SemiBold16}
  color:${({ theme }) => theme.colors.Black02};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.Black02};
  }
`;
