import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { sections } from "../../../data/pageSections";
import { MD_BREAKPOINT, SM_BREAKPOINT } from "../../../utils/constants";
import logo from "../../assets/images/logo-cecilia-h70.png";
import hamburger from "../../assets/images/square.png";

const navbarHeight = 80;

const NavContainer = styled.nav`
  width: 100%;
  height: ${navbarHeight}px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const InnerWrapper = styled.div`
  z-index: 100;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 2px 0 6px gray;
  position: relative;
  height: 100%;
  @media (max-width: ${SM_BREAKPOINT}) {
    padding: 0 8px;
  }
`;

const BrandHolder = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  user-select: none;
  cursor: pointer;
  @media (max-width: ${SM_BREAKPOINT}) {
    font-size: 13px;
  }
`;

const NavButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 258px;
  display: flex;
  align-items: stretch;
  height: 100%;
  z-index: 150;
  transition: bottom 0.3s;
  @media (max-width: ${MD_BREAKPOINT}) {
    height: unset;
    width: 100%;
    flex-wrap: wrap;
    left: 0;
    z-index: 10;
    bottom: ${({ itemAmount, isOpen }) =>
      Math.ceil(itemAmount / 2) * navbarHeight * (isOpen ? -1 : 1)}px;
  }
`;

const NavButton = styled.button`
  border: none;
  background-color: #f5f5f5;
  height: ${navbarHeight}px;
  padding: 0 20px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  outline: none;
  max-width: 180px;

  &:hover {
    background-color: #aaa;
    color: white;
  }

  &:focus {
    background-color: #999;
    color: white;
  }
  @media (max-width: ${MD_BREAKPOINT}) {
    max-width: unset;
    width: 50%;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  @media (max-width: ${MD_BREAKPOINT}) {
    display: block;
    position: absolute;
    right: 16px;
    cursor: pointer;
    > img {
      height: 40px;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const navigationHandler = (e) => {
    const { path } = e.target.dataset;
    setIsOpen(false);
    if (path) {
      history.push(path);
    }
  };
  return (
    <NavContainer>
      <InnerWrapper>
        <BrandHolder onClick={() => history.push("/")}>
          <img src={logo} alt="Logo Cecilia Ainardi" />
          <h2>Cecilia Ainardi</h2>
        </BrandHolder>

        <HamburgerButton onClick={toggleMenu}>
          <img src={hamburger} alt="menu" />
        </HamburgerButton>
      </InnerWrapper>
      <NavButtons itemAmount={sections.length} isOpen={isOpen}>
        {sections.map(({ label, path }) => (
          <NavButton data-path={path} onClick={navigationHandler} key={label}>
            {label}
          </NavButton>
        ))}
      </NavButtons>
    </NavContainer>
  );
};

export default Navbar;
