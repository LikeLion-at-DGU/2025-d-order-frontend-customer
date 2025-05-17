import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: calc(100% - 2rem);
  max-width: calc(540px - 2rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.Bg};
  z-index: 1;
`;

export const TableInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold16};
  color: ${({ theme }) => theme.colors.Black01};
`;

export const TableNumber = styled.div`
  ${({ theme }) => theme.fonts.Bold14};
  color: ${({ theme }) => theme.colors.Orange01};
`;

export const SelectCategory = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
`;

export const Category = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold14};
  color: ${({ theme }) => theme.colors.Black01};

  cursor: pointer;

  &.selected {
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Black02};
  }
`;
