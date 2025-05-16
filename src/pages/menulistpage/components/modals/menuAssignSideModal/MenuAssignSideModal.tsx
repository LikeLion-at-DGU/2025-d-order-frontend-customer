import * as S from './MenuAssignSideModal.styled';

import { MENULISTPAGE_CONSTANTS } from '@pages/menulistpage/constants/menulistpageconstants';
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
          <S.Title>{MENULISTPAGE_CONSTANTS.ASSIGNSIDEMODAL.TEXT.Title}</S.Title>
          <S.ButtonWrap>
            <S.CancelButton onClick={onNavigate}>
              {MENULISTPAGE_CONSTANTS.ASSIGNSIDEMODAL.TEXT.MoveToBowl}
            </S.CancelButton>
            <S.ConfirmButton onClick={onClose}>
              {MENULISTPAGE_CONSTANTS.ASSIGNSIDEMODAL.TEXT.MoreMenu}
            </S.ConfirmButton>
          </S.ButtonWrap>
        </S.Col>
      </S.ModalWrap>
    </S.Wrapper>
  );
};

export default MenuAssignSidModal;
