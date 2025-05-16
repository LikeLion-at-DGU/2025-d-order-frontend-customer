import * as S from './MenuItem.styled';

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
      soldOut={item.soldOut}
      disabled={isTableFeeAndSoldOut}
      onClick={handleClick}
    >
      <S.Row>
        <S.MenuImage src={item.imageUrl} />
        <S.Col>
          <S.ItemName>{item.name}</S.ItemName>
          <S.ItemDes>{item.soldOut ? 'SOLD OUT' : item.description}</S.ItemDes>
        </S.Col>
      </S.Row>
      <S.ItemPrice>{item.price.toLocaleString()}원</S.ItemPrice>
    </S.Wrapper>
  );
};

export default MenuItem;
