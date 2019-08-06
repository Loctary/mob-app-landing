import styled from 'styled-components';
import { Button } from '../../styles';

export const NavMenu = styled.div`
  box-sizing: content-box;
  background: transparent;
  padding: 1rem 0;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  height: 32px;
  overflow: hidden;
  
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
    height: 285px;
  `}
  ${({ isScrolling, isMenuOpen }) =>
    (isScrolling || isMenuOpen) &&
    `
    background: linear-gradient(135deg, rgb(74, 13, 143) 0%, rgb(250, 42, 143) 100%);
  `}
  ${({ isScrolling }) =>
    isScrolling &&
    `
    padding: 0;
  `}
  ${({ isScrolling, isMenuOpen }) =>
    isScrolling &&
    !isMenuOpen &&
    `
    height: 56px;
  `}
`;

export const NavLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const NavItems = styled.div`
  flex-basis: auto;
  @media (max-width: 992px) {
    display: block;
    flex-basis: 100%;
  }
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
  margin-left: 1rem !important;
  :hover {
    background-color: #f8f9fa;
    color: #d6619c;
    text-decoration: none;
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
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0;
    text-align: center;
  }
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

export const DropDownSpan = styled.div`
  width: 30px;
  height: 30px;
  ${({ menuImg }) =>
    menuImg &&
    `
    background-image: url(${menuImg});
  `}
`;
export const DropDownButton = styled(Button)`
  color: rgba(255, 255, 255, 0.5);
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background: 0 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;
