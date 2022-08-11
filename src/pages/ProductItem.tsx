import React,{useEffect} from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addItem } from '../redux/reducer/cartReducer';
import { Product } from '../types/product';
import { fetchProducts } from "../redux/reducer/productReducer";


const ProductItem = () => {
  const dispatch = useAppDispatch()
  const ListOfProducts = useAppSelector(state => {
    return state.cartReducer.productList

  })
  useEffect(() => {
    dispatch(fetchProducts())
}, [])

  const handleAdd=(item:Product) =>{
    dispatch(addItem(item))
}

  return (
    <div className='container'>
      <h1 style={{ marginTop: '6rem' }}>Product Details</h1>
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
                  <Card.Text>{items.description}</Card.Text>
                  <Button className="btn-primary" onClick={()=>handleAdd(items)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        )
      }
      </Row>

    </div >
  )
}

export default ProductItem
