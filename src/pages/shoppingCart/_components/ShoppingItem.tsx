import styled from "styled-components";
import test from "@assets/images/character.svg";
import close from "@assets/icons/close.svg";
import plus from "@assets/icons/plus.svg";
import minus from "@assets/icons/minus.svg";
import minusDisavle from "@assets/icons/minusDisable.svg";
import Line from "@assets/images/Line3.svg";
import { ShoppingItemType } from "../types/types";

interface ShoppingListProps {
  item: ShoppingItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  deleteItem: () => void;
}

const ShoppingItem = ({
  item,
  onIncrease,
  onDecrease,
  deleteItem,
}: ShoppingListProps) => {
  return (
    <>
      <ShoppingItemWrapper>
        <div>
          <img src={test} alt="선택한 음식 사진" />
        </div>
        <div className="itemContainer">
          <div className="contentWrapper">
            <ItemText>{item.name}</ItemText>
            <button onClick={deleteItem}>
              <img src={close} alt="장바구니에서 지우기 버튼" />
            </button>
          </div>

          <div className="contentWrapper">
            <PriceText>{item.price}원</PriceText>
            <AmountWrapper>
              <button onClick={onDecrease} disabled={item.quantity === 1}>
                <img
                  src={item.quantity === 1 ? minusDisavle : minus}
                  alt="수량 감소"
                />
              </button>
              <AmountText>{item.quantity}</AmountText>
              <button onClick={onIncrease}>
                <img src={plus} alt="수량 증가" />
              </button>
            </AmountWrapper>
          </div>
        </div>
      </ShoppingItemWrapper>
      <img src={Line} alt="구분선" style={{ width: "100%" }} />
    </>
  );
};

export default ShoppingItem;

const ShoppingItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;

  .itemContainer {
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contentWrapper {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 15px;

  button {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 110, 63, 0.3);
    border-radius: 50%;

    &:disabled {
      background-color: rgba(192, 192, 192, 0.2);
    }
  }
`;

const ItemText = styled.p`
  color: #101010;
  ${({ theme }) => theme.fonts.Bold16}
`;

const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.Black01};
  ${({ theme }) => theme.fonts.SemiBold14}
  opacity: 0.6;
`;

const AmountText = styled.p`
  color: ${({ theme }) => theme.colors.Black01};
  ${({ theme }) => theme.fonts.ExtraBold16}
`;
