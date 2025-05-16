import * as S from "./OrderListPage.styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderListHeader from "./_components/OrderListHeader";
import OrderListItems from "./_components/OrderListItems";
import pizzaImg from "@assets/images/Pizza.svg";

interface OrderItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

const OrderListPage = () => {
    const [OrderList, setOrderList] = useState<OrderItem[] | null>(null);
    const navigate = useNavigate();

    useEffect(()=> {
        setOrderList([
            {
                id: 1,
                name: "피자",
                price: 20000,
                image: pizzaImg,
                quantity: 2,
            },
            {
                id: 2,
                name: "맛있는 피자",
                price: 20000,
                image: pizzaImg,
                quantity: 2,
            },
            {
                id: 3,
                name: "고급피자",
                price: 200000,
                image: pizzaImg,
                quantity: 3,
            },
        ]);
    }, []);
    return(
        <>
            <S.HeaderWrapper>
                <OrderListHeader
                    text="주문내역"
                    goBack={()=> {
                        navigate("/list");
                    }}
                />
            </S.HeaderWrapper>
            <S.PageWrapper>
                <S.OrderListWrapper>
                    {OrderList?.map((item) => (
                        <OrderListItems
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        image={item.image}
                        />
                    ))}
                </S.OrderListWrapper>
            </S.PageWrapper>
        </>
    );
};

export default OrderListPage;