import styled from "styled-components";

//for OrderListHeader
export const Header = styled.header`
    box-sizing: border-box;
    padding: 2rem 1.25rem;
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    button{
        padding: 0;
    }
    div{
        ${({theme}) => theme.fonts.ExtraBold18};  
    }
`;

export const TotalWrapper = styled.div`
    box-sizing: border-box;
    padding: 0.2rem 1.25rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const TotalPrice = styled.p`
    color: ${({ theme }) => theme.colors.Black01};
    ${({ theme }) => theme.fonts.Bold16}
`;
export const PriceText = styled.p`
    color: ${({ theme }) => theme.colors.Orange01};
    ${({ theme }) => theme.fonts.ExtraBold16}
`;


// for OrderListItems
export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 4.3rem;
    box-sizing: border-box;
    gap: 20px;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 0.3rem;
`;

export const ImageWrapper = styled.div`
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.colors.Gray01};
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p{
        color: #101010;
        font-weight: ${({ theme }) => theme.fonts.Bold16};
    }
`;

export const InfoContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PriceWrapper = styled.p`
    color: ${({ theme }) => theme.colors.Black01};
    ${({ theme }) => theme.fonts.SemiBold14}
    opacity: 0.6;
`;

export const AmountWrapper = styled.p`
    color: ${({ theme }) => theme.colors.Black01};
    ${({ theme }) => theme.fonts.ExtraBold16};
    margin-right: 2rem;
`;


// for OrderListPage

export const HeaderWrapper = styled.div`
    width: 100%;
    height: fit-content;
    box-shadow: 0px 4px 4px 0px #00000005;
`;
export const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1.25rem;
`;

export const OrderListWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
`;