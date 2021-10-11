import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
function Header() {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <NavBar>
      <Logo>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
      </Logo>
      <NavMenu>
        <a href="">Model s</a>
        <a href="">Model 3</a>
        <a href="">Model x</a>
        <a href="">Model y</a>
      </NavMenu>
      <NavBtn>
        <a href="/">Shop</a>
        <a href="/">Tesla account</a>
        <CustomMenuIcon onClick={() => setSidebarStatus(true)} />
      </NavBtn>
      <Sidebar status={sidebarStatus}>
        <CloseWrapper>
          <CustomCloseIcon onClick={() => setSidebarStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="#">item 1</a>
        </li>
        <li>
          <a href="#">item 2</a>
        </li>
        <li>
          <a href="#">item 3</a>
        </li>
        <li>
          <a href="#">item 4</a>
        </li>
        <li>
          <a href="#">item 5</a>
        </li>
        <li>
          <a href="#">item 6</a>
        </li>
        <li>
          <a href="#">item 7</a>
        </li>
        <li>
          <a href="#">item 8</a>
        </li>
        <li>
          <a href="#">item 9</a>
        </li>
        <li>
          <a href="#">help</a>
        </li>
      </Sidebar>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 0 20px;

  /* to stick to top left and right */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; //for sidebar
`;

const Logo = styled.div`
  /* margin-left: 10px; */
`;

const NavMenu = styled.div`
  /* width: 20vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 786px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  /* margin-right: 10px; */
  display: flex;
  align-items: center;
  a {
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenuIcon = styled(MenuIcon)`
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px;
  z-index: 16;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  text-align: start;
  padding: 20px;
  list-style: none;
  transform: ${(props) =>
    props.status ? "translateX(0)" : "translateX(100%)"};

  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
