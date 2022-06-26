import React from 'react'
import { Navbar, Nav, Container,NavbarBrand } from 'react-bootstrap'
import {NavLink} from "react-router-dom"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const NavBar = () => {
    const items = useSelector((state: RootState) => {
        return state.cartReducer.productList
    })
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container >
                    <NavLink to="/home" className="text-decoration-none text-light mx-3">Navbar</NavLink>
                    <Nav className="me-auto text-decoration-none text-light mx-3">
                        <NavLink to="/home" className="text-decoration-none text-light mx-3">Home</NavLink>
                        <NavLink to="/productItem" className="text-decoration-none text-light mx-3">Item</NavLink>
                        <NavLink to="/cart" className="text-decoration-none text-light mx-3">Cart</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to="/cart" className="text-decoration-none text-light mx-3">Cart Items: {items.length}</NavLink>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar