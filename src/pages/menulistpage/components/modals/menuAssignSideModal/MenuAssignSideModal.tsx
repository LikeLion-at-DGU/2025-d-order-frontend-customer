import * as S from './MenuAssignSideModal.styled';

interface MenuAssignSidModalProps {
  onClose: () => void;
  onNavigate: () => void;
}

const MenuAssignSidModal = ({
  onClose,
  onNavigate,
}: MenuAssignSidModalProps) => {
  return (
    <S.Wrapper>
      <S.BackWrap onClick={onClose} />
      <S.ModalWrap>
        <S.Col>
          <S.Title>장바구니에 추가되었어요!</S.Title>
          <S.ButtonWrap>
            <S.CancelButton onClick={onNavigate}>
              장바구니로 이동
            </S.CancelButton>
            <S.ConfirmButton onClick={onClose}>
              다른 메뉴 더 보기
            </S.ConfirmButton>
          </S.ButtonWrap>
        </S.Col>
      </S.ModalWrap>
    </S.Wrapper>
  );
};

export default MenuAssignSidModal;
