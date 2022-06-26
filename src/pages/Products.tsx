import React, { useEffect } from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';
import { fetchProducts } from "../redux/reducer/productReducer";


const Products = () => {
    const dispatch = useAppDispatch()

    const productList = useSelector((state: RootState) => {
        return state.productReducer.productList

    })
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className='container'>
            <Row lg={4}>
            {
                productList.map((item) =>
                    <div key={item.id}>
                        <Col className="d-flex">
                        <Card style={{ width: '18rem' }} className= "flex-fill col-md-4 mx-3 my-3">
                            <Card.Img variant="top" src= {item.images[0]} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.price}</Card.Text>
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

export default Products
