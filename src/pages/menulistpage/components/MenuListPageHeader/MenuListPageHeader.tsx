import * as S from './MenuListPageHeader.styled';

interface MenuListPageHeaderProps {
  title: string;
  tableNumber: number;
  selectedCategory: 'tableFee' | 'menu' | 'drink';
  onSelectCategory: (category: 'tableFee' | 'menu' | 'drink') => void;
}

const MenuListPageHeader = ({
  title,
  tableNumber,
  selectedCategory,
  onSelectCategory,
}: MenuListPageHeaderProps) => {
  return (
    <S.Wrapper>
      <S.TableInfo>
        <S.Title>{title}</S.Title>
        <S.TableNumber>테이블 : {tableNumber}</S.TableNumber>
      </S.TableInfo>
      <S.SelectCategory>
        <S.Category
          onClick={() => onSelectCategory('tableFee')}
          className={selectedCategory === 'tableFee' ? 'selected' : ''}
        >
          테이블 이용료
        </S.Category>
        <S.Category
          onClick={() => onSelectCategory('menu')}
          className={selectedCategory === 'menu' ? 'selected' : ''}
        >
          메뉴
        </S.Category>
        <S.Category
          onClick={() => onSelectCategory('drink')}
          className={selectedCategory === 'drink' ? 'selected' : ''}
        >
          음료
        </S.Category>
      </S.SelectCategory>
    </S.Wrapper>
  );
};

export default MenuListPageHeader;
