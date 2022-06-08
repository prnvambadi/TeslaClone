import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
  return (
    <Container>
    <a>
        <img src="/images/logo.svg" alt="" />
    </a>
    <Menu>
    <a href="#">Model S</a>
    <a href="#">Model 3</a>
    <a href="#">Model X</a>
    <a href="#">Model Y</a>
    </Menu>
    <RightMenu>
    <a href="#">Shop</a>
    <a href="#">Tesla Account</a>
    <CustomMenu>

    </CustomMenu>

    </RightMenu>
    <BurgerMenu>
    <CustomClose></CustomClose>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Existing Inventory</a></li>
    </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position: fixed;
display:flex;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
justify-content: space-between;
z-index: 1;

`

const Menu = styled.div`
display: flex;
alig-items: center;
flex: 1;
justify-content: center;
padding-left:80px;

a {
    font-weight: 750;
    text-decoration:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items: center;
a {
    font-weight: 750;
    text-decoration:uppercase;
    margin-right:10px;
    flex-wrap: nowrap;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`
const BurgerMenu = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color:White;
width : 300px;
z-index:16;
list-style : none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
li {
    padding : 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
a{
    font-weight:600;
}

`
const CustomClose = styled(CloseIcon);