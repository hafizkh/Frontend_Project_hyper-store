import { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import {FaShoppingCart, FaUserMinus, FaUserPlus} from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addItemInCart, removeItem } from '../redux/reducer/cartReducer'
import { cartItems,Product } from '../types/product';


const Cart = () => {
  const [price, setPrice] = useState(0)
  console.log(price)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const ListOfProducts = useAppSelector(state => {
    return state.cartReducer.productList

  })
  console.log(ListOfProducts)

  const handleRemove = (e: Product) => {
    dispatch(removeItem(e))
  }
  const handleAdd = (item: Product) => {
    dispatch(addItemInCart(item))
  }
  const homePage = () => {
    navigate("/home")
  }
  const totalPrice = () => {
    let price = 0
    ListOfProducts.map((item, i) => {
      price = item.price + price
    })
    setPrice(price)
  }
  useEffect(() => {
    totalPrice()

  }, [totalPrice])
  return (
    <div style={{ marginBottom: '7rem' }}>
      {
        ListOfProducts.length ?
          <div>
            <h1 style={{ marginTop: '6rem' }}>Your Products in Cart</h1>
            <Row lg={3}>
              {
                ListOfProducts.map((items) =>
                  <div key={items.id}>
                    <Col className="d-flex">
                      <Card style={{ width: '10rem', }} className="flex-fill col-md-4 mx-3 my-3">
                        <Card.Img variant="top" src={items.images[0]} />
                        <Card.Body>
                          <Card.Title>{items.title}</Card.Title>
                          <Card.Text>{items.price}€</Card.Text>
                        <Button className="btn-primary mt-2" onClick={() => handleRemove(items)}>Remove</Button>
                      </Card.Body>
                    </Card>
                    <hr />
                  </Col>
                  </div>
                )
              }
      <div>
        <p> Total: {price}€ </p>
      </div>
    </Row>

          </div > :
<div className='d-flex justify-content-center align-items-center container' style={{ width: "auto", padding: 'auto', position: "relative" }}>
  <p style={{ fontSize: '45px', marginTop: '6rem', fontFamily: 'monospace' }}>Your cart is empty</p>
  <img src="./cart.gif" alt="Empty cart" style={{ marginTop: "6rem", padding: '10px' }} />
  <div >
    <Button onClick={() => homePage()}>Go Back</Button>
  </div>
</div>
      }


    </div >
  );
}

export default Cart
