import { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addItem, removeItem, removeItemInCart } from '../redux/reducer/cartReducer'
import { itemsInCart } from '../types/product';
import { idText } from 'typescript';

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
      price = item.price *item.quantity + price
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
            <div>
                <p>Total price: {price}</p>
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
                          <Card.Text>Total Price of {item.quantity} items:<strong> {item.price*item.quantity}</strong></Card.Text>
                          <div>
                            <Button onClick={() => handleRemoveIncart(item)}><FaUserMinus /> </Button>
                            <input value={item.quantity} style={{ width: '4rem' }} />
                            <Button onClick={() => handleAddIncart(item)}><FaUserPlus /></Button>
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
