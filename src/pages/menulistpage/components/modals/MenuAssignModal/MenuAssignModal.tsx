import * as S from './MenuAssignModal.styled';

import { MENULISTPAGE_CONSTANTS } from '@pages/menulistpage/constants/menulistpageconstants';

interface MenuAssignModalProps {
  item: { name: string; price: number; quantity: number };
  count: number;
  isMin: boolean;
  isMax: boolean;
  showToast: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
  onClose: () => void;
  onSubmit: () => void;
  isClosing: boolean;
}

const MenuAssignModal = ({
  item,
  count,
  isMin,
  isMax,
  showToast,
  onDecrease,
  onIncrease,
  onClose,
  onSubmit,
  isClosing,
}: MenuAssignModalProps) => {
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
              <S.QuantityButton disabled={isMin} onClick={onDecrease}>
                -
              </S.QuantityButton>
              <S.Quantity>{count}</S.Quantity>
              <S.QuantityButton disabled={isMax} onClick={onIncrease}>
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
