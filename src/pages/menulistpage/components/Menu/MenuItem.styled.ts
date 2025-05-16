import styled from 'styled-components';

export const Wrapper = styled.div<{ $soldout?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  opacity: ${({ $soldout }) => ($soldout ? 0.4 : 1)};
  pointer-events: ${({ disabled, $soldout }) =>
    disabled || $soldout ? 'none' : 'auto'};
  cursor: ${({ disabled, $soldout }) =>
    disabled || $soldout ? 'default' : 'pointer'};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const MenuImage = styled.img`
  width: 70px;
  aspect-ratio: 1 / 1;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.Gray01};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const ItemName = styled.div`
  ${({ theme }) => theme.fonts.Bold14};
  color: ${({ theme }) => theme.colors.Black01};
`;

export const ItemDes = styled.div<{ $soldout?: boolean; disabled?: boolean }>`
  ${({ theme, $soldout }) =>
    $soldout ? theme.fonts.ExtraBold12 : theme.fonts.SemiBold12};
  color: ${({ theme, $soldout }) =>
    $soldout ? theme.colors.Orange01 : theme.colors.Black01};
`;

export const ItemPrice = styled.div`
  ${({ theme }) => theme.fonts.Bold12};
  color: ${({ theme }) => theme.colors.Black01};
`;
