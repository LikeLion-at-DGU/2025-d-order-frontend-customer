import * as S from './MenuListHeader.styled';

import { MENULISTPAGE_CONSTANTS } from '@pages/menulistpage/constants/menulistpageconstants';

interface MenuListHeaderProps {
  onNavigate: () => void;
  onReceipt: () => void;
}

const MenuListHeader = ({ onNavigate, onReceipt }: MenuListHeaderProps) => {
  return (
    <S.Wrapper>
      <S.Logo src={MENULISTPAGE_CONSTANTS.HEADER.IMAGE.LOGO} />
      <S.Icons>
        <S.Icon
          src={MENULISTPAGE_CONSTANTS.HEADER.IMAGE.RECEIPT}
          onClick={onReceipt}
        />
        <S.Icon
          src={MENULISTPAGE_CONSTANTS.HEADER.IMAGE.CART}
          onClick={onNavigate}
        />
      </S.Icons>
    </S.Wrapper>
  );
};

export default MenuListHeader;
