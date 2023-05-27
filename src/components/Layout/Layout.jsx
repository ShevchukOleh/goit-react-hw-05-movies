import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header, List } from './Layout.styled';
import { Suspense } from 'react';
import { Container } from 'pages/Home/Home.styled';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

const Layout = () => {
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
        <Suspense fallback={<Container>Loading...</Container>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;