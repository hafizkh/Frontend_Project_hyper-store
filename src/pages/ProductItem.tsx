import { Button, Card, Col, Row } from 'react-bootstrap'
import { useAppDispatch } from '../redux/hooks'
import { addItem } from '../redux/reducer/cartReducer';
import { Product } from '../types/product';
import { useParams } from 'react-router-dom';
import { useItem } from '../hooks/useItem';


const ProductItem = () => {
  const {itemId} = useParams()
  const item = useItem(itemId);
  const dispatch = useAppDispatch()
  // const ListOfProducts = useAppSelector((state) => {
  //   return state.cartReducer.productList
  // })

  const handleAdd=(item:Product) =>{
    dispatch(addItem(item))
}

  return (
  
    <>
    {item &&
    <div className='container'>
    <h1 style={{ marginTop: '6rem' }}>Product Details</h1>
            <div >
              <Card style={{display:"flex", flexDirection:'inherit', alignItems:'center', width: 'auto' }} className="col-md-4 mx-3 my-3">
                <Card.Img variant="top" src={item.images[0]} style={{ width: '25rem' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}€</Card.Text>
                  <Card.Text>{item.description}</Card.Text>
                  <Button className="btn-primary" onClick={()=>handleAdd(item)}>Add to Cart</Button>
                </Card.Body>
              </Card>
          </div>
       </div > 
}
    </>
   
   )
  }



export default ProductItem
