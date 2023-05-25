import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header, List } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

export const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </List>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};