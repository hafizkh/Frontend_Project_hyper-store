import { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks/Apphooks'
import { addItem, removeItem, removeItemInCart } from '../redux/reducer/cartReducer'
import { itemsInCart } from '../types/product';

const Cart = () => {
  const [price, setPrice] = useState(0)
  console.log(price)
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
            <div className="card" style={{ width: '18rem', marginLeft: '31rem', textAlign: 'center' }}>
              <ul className="list-group list-group-light" style={{ backgroundColor: '#cfd7c4' }}>
                <li className="list-group-item px-3" style={{ background: '#ddeef5' }} ><strong> Total Price: {price} €</strong></li>
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
                          <Card.Text>Price:<strong> {item.price * item.quantity} €</strong></Card.Text>
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
          <div className="card container d-flex justify-content-center align-items-center"
            style={{ marginTop: '215px', width: 'fit-content',borderRadius:'5rem' }}>
            <img src="./cart.gif" style={{ width: '11rem', height: '11rem' }} alt="Fissure in Sandstone" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '45px', fontFamily: 'monospace' }}>Your cart is empty</h5>
              <Link to="/home" className="btn btn-primary mt-4" style={{ marginLeft: '176px' }} >Go Back</Link>
            </div>
          </div>
      }
    </div >
  );
}


export default Cart
