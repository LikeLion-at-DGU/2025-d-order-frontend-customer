import * as S from "../OrderListPage.styled";
import backIcon from "@assets/icons/left.svg";

const OrderListHeader = ({
    text,
    goBack,
} : {
    text: string;
    goBack: () => void;
}) => {
    return (
        <>
            <S.Header>
                <button onClick={goBack}>
                    <img src={backIcon} alt="돌아가기 버튼" />
                </button>
                <div>{text}</div>
                <div style={{width: "30px"}}></div>
            </S.Header>
            <S.TotalWrapper>
                <S.TotalPrice>💵 총 주문금액</S.TotalPrice>
                <S.PriceText>49,000원</S.PriceText>
            </S.TotalWrapper>
        </>
        
    );
};

export default OrderListHeader;
