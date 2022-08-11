import { Navbar, Nav, Container, Badge, Form, Button } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom"
import { useAppSelector } from '../redux/hooks'
import logo from '../images/logo.jpg'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
    const items = useAppSelector((state) => 
        state.cartReducer.productList
    )
    return (
        <div>
            
            <Container>
                <Navbar bg="dark" variant="dark" fixed='top'>
                    <Navbar.Brand as={Link} to={"/home"}><img style={{ marginLeft: '5rem', width: '65px', height: '60px', borderRadius: '3rem' }}
                        src={logo} alt="Logo" /> <small style={{ fontSize: 'x-large', marginLeft: '1rem', fontFamily: 'emoji' }} >Hyper Shop</small>
                    </Navbar.Brand>
                    <Nav className="me-auto text-decoration-none text-light mx-3">
                        <NavLink to="/home" className="text-decoration-none text-light mx-5">Home</NavLink>
                        <NavLink to="/cart" className="text-decoration-none text-light mx-3">Cart</NavLink>
                    </Nav>
                    <Nav >
                        <Form className="d-flex mx-5">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <NavLink to="/cart" style={{ marginRight: '5rem' }} >
                            <Badge className='mx-2 rounded-circle' style={{ fontSize: '20px' }}><FaShoppingCart />
                                <span className="position-absolute bg-dark translate-middle rounded-circle">{items.length}
                                </span>
                            </Badge>
                            <button className="btn btn-primary mx-1"> Login </button>
                            <button className="btn btn-primary mx-1"> Signup </button>
                        </NavLink>
                    </Nav>
                </Navbar>
            </Container>

        </div>
    )
}

export default NavBar