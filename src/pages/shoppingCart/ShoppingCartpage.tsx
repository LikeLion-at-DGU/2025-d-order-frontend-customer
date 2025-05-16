import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ShoppingHeader from "./_components/ShoppingHeader";
import Character from "@assets/images/character.svg";
import { useEffect, useState } from "react";
import ShoppingItem from "./_components/ShoppingItem";
import ShoppingFooter from "./_components/ShoppingFooter";
import ConfirmModal from "./_modal/ConfitmMotal";

interface ShoppingItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ShoppingCartPage = () => {
  const [ShoppingList, setShoppingList] = useState<ShoppingItem[] | null>(null);
  const navigate = useNavigate();
  const [isConfirmModal, setisConfirmModal] = useState<boolean>(true);

  useEffect(() => {
    setShoppingList([
      {
        id: 1,
        name: "피자",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
      },
    ]);
  }, []);
  return (
    <Wrapper>
      <ShoppingHeader
        text="장바구니"
        goBack={() => {
          navigate("/list");
        }}
      />
      {ShoppingList == null ? (
        <ShoppingListEmpty>
          <img src={Character} alt="이미지" />
          <p>아직 장바구니에 담긴 메뉴가 없어요.</p>
        </ShoppingListEmpty>
      ) : (
        <ShoppingListWrapper>
          <ShoppingItem />
        </ShoppingListWrapper>
      )}
      <ShoppingFooter />
      {isConfirmModal && (
        <DarkWrapper>
          <ConfirmModal
            text="테이블 이용료 주문이 필요해요!"
            confirm={() => {}}
          ></ConfirmModal>
        </DarkWrapper>
      )}
    </Wrapper>
  );
};

export default ShoppingCartPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const ShoppingListEmpty = styled.div`
  box-sizing: border-box;
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 98px - 200px);
`;

const ShoppingListWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 1.25em;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DarkWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 11;
`;
