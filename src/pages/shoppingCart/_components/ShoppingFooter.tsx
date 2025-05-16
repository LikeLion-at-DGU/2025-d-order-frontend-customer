import Btn from "@components/button/Btn";
import styled from "styled-components";
const ShoppingFooter = () => {
  return (
    <Wrapper>
      <div style={{ justifyContent: "space-between" }}>
        <p id="totalPrice">💵 총 주문금액</p>
        <PriceText>49,000원</PriceText>
      </div>
      <div style={{ justifyContent: "center" }}>
        <Btn text="주문하기" onClick={() => {}} />
      </div>
    </Wrapper>
  );
};

export default ShoppingFooter;

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  box-sizing: border-box;
  padding: 1.25em;

  z-index: 10;
  div {
    display: flex;
    flex-direction: row;
  }

  #totalPrice {
    color: ${({ theme }) => theme.colors.Black01};
    ${({ theme }) => theme.fonts.Bold16}
  }
`;

const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.Orange01};
  ${({ theme }) => theme.fonts.ExtraBold16}
`;
