import React, { useEffect } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from "../redux/reducer/productReducer";
import { addItem } from '../redux/reducer/cartReducer';
import { Product } from '../types/product';

const ProductsList = () => {
    const dispatch = useAppDispatch()

    const productList = useAppSelector(state => {
        // console.log(productList)
        return state.productReducer.productList

    })
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleAdd=(item:Product) =>{
        dispatch(addItem(item))
    }
    return (
        <div className='container'>
            <Row lg={4}>
            {
                productList.map((item) =>
                    <div key={item.id}>
                        <Col className="d-flex">
                        <Card className= "flex-fill col-md-4 mx-3 my-3">
                            <Card.Img variant="top" src= {item.images[0]} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.price} €</Card.Text>
                                <Button className= "btn-primary" onClick={()=>handleAdd(item)}>Add to Cart</Button>
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

export default ProductsList