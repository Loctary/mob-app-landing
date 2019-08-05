import styled from 'styled-components';

export const NavMenu = styled.div`
  background: transparent;
  padding: 1rem 0;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  ${({ isScrolling }) =>
    isScrolling &&
    `
    background: linear-gradient(135deg, rgb(74, 13, 143) 0%, rgb(250, 42, 143) 100%);
    padding: 0;
  `}
`;

export const NavLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;
  font-size: 14px;
  :hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const NavItems = styled.div`
  flex-basis: auto;
`;

export const NavButton = styled.a`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 0.375rem 1.35rem;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border-color: #f8f9fa;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  color: #f8f9fa;
  border: 1px solid #f8f9fa;
  :hover {
    background-color: #f8f9fa;
    color: #d6619c;
    text-decoration: none;
  }
  @media (max-width: 992px) {
    margin-left: 1rem !important;
  }
  @media (max-width: 576px) {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
`;

export const NavItemsUl = styled.ul`
  display: flex;
  margin: 0;
  justify-content: flex-end;
  margin-left: auto;
  list-style: none;
`;

export const NavLogo = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

export const NavBar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;
