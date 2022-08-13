import React, { useEffect } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts } from "../redux/reducer/productReducer";
import { addItem } from '../redux/reducer/cartReducer';
import { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';

const ProductsList = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const listOfProducts = useAppSelector(state => state.productReducer.productList)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleAdd=(item:Product) =>{
        dispatch(addItem(item))
    }
    return (
        <div className='container'>
            <Row lg={3}>
            {
            // listOfProducts.length > 0 &&
                listOfProducts.map((item) =>
                    <div key={item.id}>
                        <Col className="d-flex">
                        <Card className= "flex-fill col-md-4 mx-3 my-3">
                            <Card.Img variant="top" src= {item.images[0]} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.price} €</Card.Text>
                                <div className='d-flex'>
                                <Button className= "btn-primary mx-4" onClick={()=>handleAdd(item)}>Add to Cart</Button>
                                <Button className= "btn-primary mx-3" onClick={() => navigate(`/${item.id}`)}>Details { ">>"} </Button>
                                </div>
                                
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