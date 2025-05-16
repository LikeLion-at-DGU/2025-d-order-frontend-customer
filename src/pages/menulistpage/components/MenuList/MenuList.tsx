import * as S from './MenuList.styled';

import MenuItem from '../Menu/MenuItem';

import { MENULISTPAGE_CONSTANTS } from '@pages/menulistpage/constants/menulistpageconstants';

type Category = 'menu' | 'tableFee' | 'drink';

interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: Category;
  soldOut: boolean;
}

interface SectionRefsType {
  tableFee: React.RefObject<HTMLDivElement | null>;
  menu: React.RefObject<HTMLDivElement | null>;
  drink: React.RefObject<HTMLDivElement | null>;
}

interface MenuListProps {
  items: MenuItemType[];
  sectionRefs: SectionRefsType;
  selectedCategory: Category;
  onOpenModal: (item: MenuItemType) => void;
}

const MenuList = ({ items, sectionRefs, onOpenModal }: MenuListProps) => {
  const tableFees = items.filter((item) => item.category === 'tableFee');
  const menus = items.filter((item) => item.category === 'menu');
  const drinks = items.filter((item) => item.category === 'drink');
  return (
    <S.Wrapper>
      <S.Section ref={sectionRefs.tableFee}>
        <S.SectionTitle>
          {MENULISTPAGE_CONSTANTS.LISTPAGEHEADER.TEXT.TABELFEE}
        </S.SectionTitle>
        <S.List>
          {tableFees.map((item) => (
            <MenuItem key={item.id} item={item} onClick={onOpenModal} />
          ))}
        </S.List>
      </S.Section>

      <S.Section ref={sectionRefs.menu}>
        <S.SectionTitle>
          {MENULISTPAGE_CONSTANTS.LISTPAGEHEADER.TEXT.MENU}
        </S.SectionTitle>
        <S.List>
          {menus.map((item) => (
            <MenuItem key={item.id} item={item} onClick={onOpenModal} />
          ))}
        </S.List>
      </S.Section>

      <S.Section ref={sectionRefs.drink}>
        <S.SectionTitle>
          {MENULISTPAGE_CONSTANTS.LISTPAGEHEADER.TEXT.BEVERAGE}
        </S.SectionTitle>
        {drinks.map((item) => (
          <MenuItem key={item.id} item={item} onClick={onOpenModal} />
        ))}
      </S.Section>
    </S.Wrapper>
  );
};

export default MenuList;
