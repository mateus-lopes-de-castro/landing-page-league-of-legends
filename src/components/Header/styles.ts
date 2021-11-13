import styled from "styled-components";

export const Container = styled.div`
    height: 9.5rem;
    width: 100%;
    margin: auto;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.div`
    width: 145px;
    pointer-events: visible;

    > img {
        width: 100%;
    }
`

export const NavContainer = styled.nav`

`

export const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

export const NavItem = styled.li`
    margin-left: 1rem;
`


export const NavLink = styled.a`
    display: inline-block;
    padding: 0.5rem;
    text-transform: uppercase;
    position: relative;
    pointer-events: visible;
    cursor: pointer;

    &::before,
    &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        background-color: #d0a85c;
        transition: width 0.3s ease;
    }

    &:hover::before,
    &:hover::after {
        width: 50%;
    }

    &::before {
        left: 0;
        top: 0;
    }

    &::after {
        right: 0;
        bottom: 0;
    }
`