import { Navbar, Nav, Container, Badge, Form, Button } from 'react-bootstrap'
import { NavLink, Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../app/hooks/Apphooks'
import logo from '../images/logo.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { useEffect } from 'react'
import { fetchCategory } from '../app/features/categorySlice'
import { fetchProductsByCategory } from '../app/features/productSlice'

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) =>
        state.cartReducer.cartItems
    )
    useEffect(() => {
        dispatch(fetchCategory());
    }, []);
    const categoryList = useAppSelector((state) => state.categoryReducer.categoryList);
    const handleCategoryChange = (e: any) => {
        handleCategoryId(e.target.value);
    };
    const handleCategoryId = (e: any) => {
        dispatch(fetchProductsByCategory(e));
    };
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
                    <Nav>
                    <li >
                            <select style={{height: '35px',borderRadius:'6px'}} onChange={handleCategoryChange}>
                                <option value= "" >Categories</option>
                                {categoryList.map(category =>
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                )}
                            </select>
                        </li>
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
                        <NavLink to="/cart" >
                            <Badge className='mx-2 rounded-circle' style={{ fontSize: '20px' }}><FaShoppingCart />
                                <span className="position-absolute bg-dark translate-middle rounded-circle">{items.length}
                                </span>
                            </Badge>
                        </NavLink>
                    </Nav>
                    <Nav className='mx-5'>
                        <button className="btn btn-primary mx-1" onClick={() => navigate("/signin")}> Login </button>
                        <button className="btn btn-primary mx-1" onClick={() => navigate("/signup")}> Signup </button>
                    </Nav>
                </Navbar>
            </Container>

        </div>
    )
}

export default NavBar