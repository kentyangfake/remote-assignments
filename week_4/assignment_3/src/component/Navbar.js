import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';

const Header = styled.header`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: lightgray;
    height: 50px;
    padding-left: 4vw;
    padding-right: 4vw;
`

const Menu = styled.div`
    display: none;
    @media screen and (min-width: 800px){
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        position: relative;
        background-color: transparent;
        width:fit-content;
        height:50px;
    }
`
//mobile menu
const MobileMenu = styled.div`
    display:flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background-color: white;
    @media screen and (min-width: 800px){
        display: none;
    }

`

const HamburgerDiv = styled.div`
    position: absolute;
    right: 0.5em;
    top: o.5em;
    display: block;
    cursor: pointer;
    width: 50px;
    @media screen and (min-width: 800px){
        display: none;
    }
`

const H1 = styled.h1`
    font-size: 20px;
    margin-right: auto;
`

const Li = styled.li`
    list-style-type: none;
    padding-left: 4em;
    padding:20px;
`

const Mobilemenu = (props) => {
    if(props.toggled === false){
        return ('');
    } else {
        return (
            <MobileMenu>
                <Li>item 1</Li>
                <Li>item 2</Li>
                <Li>item 3</Li>
                <Li>item 4</Li>
            </MobileMenu>
        );
    }
}

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return(
    <Header>
        <H1>Website Title/Logo</H1>
        <Menu>
            <Li>item 1</Li>
            <Li>item 2</Li>
            <Li>item 3</Li>
            <Li>item 4</Li>
        </Menu>
        <Mobilemenu toggled={isOpen}/>
        <HamburgerDiv>
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </HamburgerDiv>
    </Header>
    );
}

export default Navbar;