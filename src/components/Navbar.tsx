import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { useAppSelector } from '../redux/hooks'
import logo from '../images/logo.jpg'

const NavBar = () => {
    const items = useAppSelector(state => {
        return state.cartReducer.productList
    })
    return (
        <div>
            <Navbar bg="dark" variant="dark"  fixed='top'>
                <Navbar.Brand href="#home"><img style={{ marginLeft: '5rem', width: '65px', height: '60px', borderRadius: '3rem' }}
                    src={logo} alt="Logo" /> <small style={{ fontSize: 'xx-large', marginLeft: '1rem', fontFamily: 'emoji' }} >Hyper Shop</small></Navbar.Brand>
                <Nav className="me-auto text-decoration-none text-light mx-3">
                    <NavLink to="/home" className="text-decoration-none text-light mx-3">Home</NavLink>
                    <NavLink to="/productItem" className="text-decoration-none text-light mx-3">Item</NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-3">Cart</NavLink>
                </Nav>
                <Nav>
                    <NavLink to="/cart" style={{marginRight:'5rem'}} className="text-decoration-none text-light">Cart Items: {items.length}</NavLink>
                </Nav>

            </Navbar>
        </div>
    )
}

export default NavBar