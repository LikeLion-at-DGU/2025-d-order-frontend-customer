import { Outlet } from "react-router-dom";
import styled from "styled-components";
const DefaultLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: calc(var(--vh, 1vh) * 100);
  /* padding-top: 3.5rem; */

  background-color: ${({ theme }) => theme.colors.Bg};
`;
