import styled from "styled-components";

import CharacterLogo from "@assets/images/character.svg";
import TextLogo from "@assets/images/redLogo.svg";
const LoginLogo = () => {
  return (
    <LogoWrapper>
      <LogoImg
        src={TextLogo}
        alt="빨간글씨 디오더 로고"
        style={{ width: "176px", height: "auto" }}
      />
      <LogoImg
        src={CharacterLogo}
        alt="디오더 아코 로고"
        style={{ width: "192px", height: "auto" }}
      />
    </LogoWrapper>
  );
};

export default LoginLogo;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 63px;
`;

const LogoImg = styled.img`
  display: flex;
`;
