import * as S from './MenuAssignModal.styled';

import { useState, useEffect } from 'react';

import { MENULISTPAGE_CONSTANTS } from '@pages/menulistpage/constants/menulistpageconstants';

interface MenuAssignModalProps {
  item: {
    name: string;
    price: number;
    quantity: number;
  };
  onClose: () => void;
  onSubmit: () => void;
  isClosing: boolean;
}

const MenuAssignModal = ({
  item,
  onClose,
  onSubmit,
  isClosing,
}: MenuAssignModalProps) => {
  const [count, setCount] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const isMin = count <= 1;
  const isMax = count > item.quantity;
  const isMax2 = count >= item.quantity;

  const handleDecrease = () => {
    if (!isMin) setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (isMax2) {
      setShowToast(true);
    }
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  return (
    <S.Wrapper>
      <S.BackWrap onClick={onClose} />
      <S.ModalWrap $isClosing={isClosing}>
        <S.Col>
          {/* <S.CloseButton onClick={onClose}>닫기</S.CloseButton> */}

          <S.Row>
            <S.Col2>
              <S.Title>{item.name}</S.Title>
              <S.Price>{item.price.toLocaleString()}원</S.Price>
            </S.Col2>
          </S.Row>
          <S.Row2>
            <S.QuantityBox>
              <S.QuantityText>수량</S.QuantityText>
              <S.QuantityButton disabled={isMin} onClick={handleDecrease}>
                -
              </S.QuantityButton>
              <S.Quantity>{count}</S.Quantity>
              <S.QuantityButton disabled={isMax} onClick={handleIncrease}>
                +
              </S.QuantityButton>
            </S.QuantityBox>
          </S.Row2>
          <S.SubmitButton disabled={isMax} onClick={onSubmit}>
            장바구니 담기
          </S.SubmitButton>
        </S.Col>
      </S.ModalWrap>
      {showToast && (
        <S.Toast>
          <S.ToastIcon src={MENULISTPAGE_CONSTANTS.ASSIGNMODAL.IMAGES.NOTICE} />
          최대 수량은 {item.quantity}개입니다.
        </S.Toast>
      )}
    </S.Wrapper>
  );
};

export default MenuAssignModal;
