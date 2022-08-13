import { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addItem, removeItem, removeItemInCart } from '../redux/reducer/cartReducer'
import { itemsInCart } from '../types/product';

const Cart = () => {
  const [price, setPrice] = useState(0)
  console.log(price)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const productsInCart = useAppSelector(state => state.cartReducer.cartItems)
  // console.log(productsInCart)

  const handleRemove = (item: itemsInCart) => {
    dispatch(removeItem(item))
  }
  const handleAddIncart = (item: itemsInCart) => {
    dispatch(addItem(item))
  }
  const handleRemoveIncart = (item: itemsInCart) => {
    dispatch(removeItemInCart(item))
  }
  const homePage = () => {
    navigate("/home")
  }
  const totalPrice = () => {
    let price = 0
    productsInCart.map((item, i) => {
      price = item.price * item.quantity + price
    })
    setPrice(price)
  }
  useEffect(() => {
    totalPrice()

  }, [totalPrice])
  return (
    <div style={{ marginBottom: '7rem' }}>
      {
        productsInCart.length ?
          <div>
            <h1 style={{ marginTop: '6rem', textAlign: 'center', fontFamily: 'system-ui' }}>Your Products in Cart</h1>
            <div className="card" style={{width: '18rem',marginLeft:'31rem',textAlign: 'center'}}>
              <ul className="list-group list-group-light">
                <li className="list-group-item px-3"><strong> Total Price: {price} €</strong></li>
                {/* <li className="list-group-item px-3"><strong> Total Items in Cart: {quantity}</strong></li> */}
              </ul>
            </div>
            <Row lg={3}>
              {
                productsInCart.map((item) =>
                  <div key={item.id}>
                    <Col className="d-flex">
                      <Card style={{ width: '10rem', }} className="flex-fill col-md-4 mx-3 my-3">
                        <Card.Img variant="top" src={item.images[0]} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.price}€</Card.Text>
                          <Card.Text>Price:<strong> {item.price * item.quantity}</strong></Card.Text>
                          <div>
                            <span onClick={() => handleRemoveIncart(item)}><i className="fa-solid fa-circle-minus"></i></span>
                            <span><i className="mx-2 fa-regular fa-expand-wide">{item.quantity}</i></span>
                            <span onClick={() => handleAddIncart(item)}><i className="fa-solid fa-circle-plus"></i></span>
                          </div>
                          <Button className="btn-primary mt-2" onClick={() => handleRemove(item)}>Remove</Button>
                        </Card.Body>
                      </Card>
                      <hr />
                    </Col>
                  </div>
                )
              }
            </Row>
          </div >
          :
          <Container style={{
            display: 'flex', justifyContent: 'center', width: "auto", padding: 'auto', position: "relative",
            margin: 'inherit', marginLeft: '-14%', paddingTop: '10%', alignItems: 'center'
          }} >
            <p style={{ fontSize: '45px', marginTop: '6rem', fontFamily: 'monospace' }}>Your cart is empty</p>
            <img src="./cart.gif" alt="Empty cart" style={{ marginTop: "6rem", padding: '10px' }} />
            <Button style={{ marginTop: '22rem', marginLeft: '-26rem' }} onClick={() => homePage()}>Go Back</Button>
          </Container>
      }
    </div >
  );
}


export default Cart
