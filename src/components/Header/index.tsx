import React from "react";

import logoImg from '../../assets/logo.png';

import { Container, Logo, NavContainer, Nav, NavItem, NavLink } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="" />
            </Logo>
            <NavContainer>
                <Nav>
                    <NavItem>
                        <NavLink>Overview</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Champions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Support</NavLink>
                    </NavItem>
                </Nav>
            </NavContainer>
        </Container>
    )
}

export default Header;