import * as S from "./LoginPage.styled";

import { useNavigate } from "react-router-dom";

import LoginLogo from "./_components/LoginLogo";
import Btn from "@components/button/Btn";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <S.LoginWrapper>
      <LoginLogo />
      <S.LoginInputWrapper>
        <S.InfoText>테이블 번호를 입력해 주세요.</S.InfoText>
        <S.InputTableNumber placeholder="예) 09" />
        <S.NoticeText>
          실제와 다른 테이블 번호 입력 시, 이용이 제한될 수 있어요.
        </S.NoticeText>
        <Btn text="주문 시작하기" onClick={() => navigate("/main")} />
      </S.LoginInputWrapper>
    </S.LoginWrapper>
  );
};

export default LoginPage;
