import * as S from "../OrderListPage.styled";
import testImg from "@assets/images/Pizza.svg";
import menuLine from "@assets/images/menuLine.svg";

interface OrderItemProps {
    name: string;
    price: number;
    quantity: number;
    image: string;
}


const OrderListItems = ({ name, price, quantity, image }: OrderItemProps) => {
    return (
        <>
        <S.ItemWrapper>
            <S.ImageWrapper>
            <img src={image} alt={`${name} 이미지`} />
            </S.ImageWrapper>
            <S.ContentContainer>
            <S.TitleWrapper>
                <p>{name}</p>
            </S.TitleWrapper>
            <S.InfoContainer>
                <S.PriceWrapper>{price.toLocaleString()}원</S.PriceWrapper>
                <S.AmountWrapper>{quantity}</S.AmountWrapper>
            </S.InfoContainer>
            </S.ContentContainer>
        </S.ItemWrapper>
        <img style={{ width: "100%" }} src={menuLine} alt="메뉴 구분선" />
        </>
    );
};

export default OrderListItems;