import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ShoppingHeader from "./_components/ShoppingHeader";
import Character from "@assets/images/character.svg";
import { useEffect, useState } from "react";
import ShoppingItem from "./_components/ShoppingItem";
import ShoppingFooter from "./_components/ShoppingFooter";
import ConfirmModal from "./_modal/ConfitmMotal";
import { ShoppingItemType } from "./types/types";
import SendMoneyModal from "./_modal/sendMoneyModal";
import CopyModal from "./_modal/CopyModal";
import { AnimatePresence } from "framer-motion";

const ShoppingCartPage = () => {
  const [ShoppingList, setShoppingList] = useState<ShoppingItemType[] | null>(
    null
  );
  const navigate = useNavigate();
  const [isConfirmModal, setisConfirmModal] = useState<boolean>(false);
  const [isSendMoneyModal, setIsSendMoneyModal] = useState<boolean>(true);
  const [isCopyModal, setIsCopyModal] = useState<boolean>(false);

  useEffect(() => {
    setShoppingList([
      {
        id: 1,
        name: "피자",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 2,
        name: "피자2",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 3,
        name: "피자3",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 4,
        name: "피자4",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 5,
        name: "피자5",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 6,
        name: "피자6",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 7,
        name: "피자7",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
      {
        id: 8,
        name: "피자8",
        price: 20000,
        image: "https://example.com/image.jpg",
        quantity: 1,
        inventory: 10,
      },
    ]);
  }, []);

  // 상품 리스트 관리 함수
  const deleteItem = (id: number) => {
    if (!ShoppingList) return;
    const updateList = ShoppingList.filter((item) => item.id !== id);
    setShoppingList(updateList);
  };
  const increase = (id: number) => {
    if (!ShoppingList) return;
    const updateList = ShoppingList.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setShoppingList(updateList);
  };

  const decrease = (id: number) => {
    if (!ShoppingList) return;
    const updateList = ShoppingList.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setShoppingList(updateList);
  };

  // 상품 모달 관리
  const CloseModal = () => {
    setisConfirmModal(false);
  };
  const CloseAcoountModal = () => {
    setIsSendMoneyModal(false);
  };

  // 계좌 페이지 이동
  const Pay = () => {
    setIsSendMoneyModal(false);
    navigate("confirm-pay");
  };

  // 계좌 복사 버튼
  const CopyAccount = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopyModal(true);
      setTimeout(() => {
        setIsCopyModal(false);
      }, 2000);
    } catch {
      alert("다시 시도해주세요");
    }
  };
  return (
    <Wrapper>
      <ShoppingHeader
        text="장바구니"
        goBack={() => {
          navigate("/menulist");
        }}
      />
      {ShoppingList == null ? (
        <ShoppingListEmpty>
          <img src={Character} alt="이미지" />
          <p>아직 장바구니에 담긴 메뉴가 없어요.</p>
        </ShoppingListEmpty>
      ) : (
        <ShoppingListWrapper>
          {ShoppingList.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onIncrease={() => increase(item.id)}
              onDecrease={() => decrease(item.id)}
              deleteItem={() => deleteItem(item.id)}
            />
          ))}
        </ShoppingListWrapper>
      )}
      <ShoppingFooter />
      {isConfirmModal && (
        <DarkWrapper>
          <ConfirmModal
            text="테이블 이용료 주문이 필요해요!"
            confirm={() => {
              CloseModal;
            }}
          ></ConfirmModal>
        </DarkWrapper>
      )}
      {isSendMoneyModal && (
        <DarkWrapper>
          <SendMoneyModal
            canclePay={CloseAcoountModal}
            pay={Pay}
            copyAccount={(text: string) => CopyAccount(text)}
          />
          <AnimatePresence>{isCopyModal && <CopyModal />}</AnimatePresence>
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
  max-height: calc(100vh - 140px - 100px - 2em);
  overflow-y: auto;
`;

const DarkWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 11;
`;
