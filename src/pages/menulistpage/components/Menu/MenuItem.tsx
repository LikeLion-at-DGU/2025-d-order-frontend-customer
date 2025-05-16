import * as S from './MenuItem.styled';

import { MENULISTPAGE_CONSTANTS } from '@pages/menulistpage/constants/menulistpageconstants';

type Category = 'menu' | 'tableFee' | 'drink';

interface ItemType {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  id: number;
  category: Category;
  soldOut: boolean;
}

interface MenuItemProps {
  item: ItemType;
  onClick: (item: ItemType) => void;
}

const MenuItem = ({ item, onClick }: MenuItemProps) => {
  const isTableFeeAndSoldOut = item.category === 'tableFee' && item.soldOut;
  const handleClick = () => {
    if (isTableFeeAndSoldOut) return;
    onClick(item);
  };
  return (
    <S.Wrapper
      $soldout={item.soldOut}
      disabled={isTableFeeAndSoldOut}
      onClick={handleClick}
    >
      <S.Row>
        <S.MenuImage
          src={item.imageUrl}
          onError={(e) => {
            e.currentTarget.src =
              MENULISTPAGE_CONSTANTS.MENUITEMS.IMAGES.NONIMAGE;
          }}
        />
        <S.Col>
          <S.ItemName>{item.name}</S.ItemName>
          <S.ItemDes $soldout={item.soldOut}>
            {item.soldOut ? 'SOLD OUT' : item.description}
          </S.ItemDes>
        </S.Col>
      </S.Row>
      <S.ItemPrice>{item.price.toLocaleString()}원</S.ItemPrice>
    </S.Wrapper>
  );
};

export default MenuItem;
