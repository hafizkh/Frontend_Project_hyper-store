import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useAppDispatch } from '../redux/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { removeItem } from '../redux/reducer/cartReducer'
import { Product } from '../types/product';


const Cart = () => {
  const dispatch = useAppDispatch()
  const ListOfProducts = useSelector((state:RootState) => {
    return state.cartReducer.productList

  })

  const handleRemove = (e: Product) => {
    dispatch(removeItem(e))
  }
  return (
    <div className='container'>
      <h1 className='my-5'>Cart</h1>
      <Row lg={3}>
      {
        ListOfProducts.map((items) =>
          <div key={items.id}>
            <Col className="d-flex">
              <Card style={{ width: '18rem' }} className="flex-fill col-md-4 mx-3 my-3">
                <Card.Img variant="top" src={items.images[0]} />
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>{items.price}€</Card.Text>
                  <Button className="btn-primary" onClick={() => handleRemove(items)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        )
      }
      </Row>

    </div >
  );
}

export default Cart
