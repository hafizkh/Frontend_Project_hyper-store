import { Button, Card } from 'react-bootstrap'
import { useAppDispatch } from '../redux/hooks/Apphooks'
import { addItem } from '../redux/reducer/cartReducer';
import { Product } from '../types/product';
import { useNavigate, useParams } from 'react-router-dom';
import { useItem } from '../redux/hooks/useItem';


const ProductItem = () => {
  const navigate = useNavigate()
  const {itemId} = useParams()
  const item = useItem(itemId);
  const dispatch = useAppDispatch()

  const handleAdd=(item:Product) =>{
    dispatch(addItem(item))
}
  return (
  
    <>
    {item &&
    <div className='container'>
    <h1  style={{ marginTop: '7rem' }} className='d-flex justify-content-center align-items-center container'>Product Detail</h1>
            <div style={{ marginTop: '2rem' }}>
              <Card style={{display:"flex", flexDirection:'inherit', alignItems:'center', width: 'auto' }} className="col-md-4 mx-3 my-3">
                <Card.Img variant="top" src={item.images[2]} style={{ width: '25rem', height:'auto' }} />
                <Card.Body style={{marginLeft:'20rem'}}>
                  <Card.Title style={{fontSize:'xx-large',fontFamily:'fantasy'}}>{item.title}</Card.Title>
                  <Card.Text style={{fontSize:'xx-large',fontFamily:'ui-rounded'}}>{item.price}€</Card.Text>
                  <Card.Text style={{fontSize:'xx-large',fontFamily:'ui-rounded'}}>{item.category.name}</Card.Text>
                  <Card.Text style={{fontSize:'xx-large',fontFamily:'serif'}}>{item.description}</Card.Text>
                  <Button className="btn-primary" onClick={()=>handleAdd(item)}>Add to Cart</Button>
                  <Button className="btn-primary mx-5" onClick={()=>navigate("/home")}>Home Page</Button>
                </Card.Body>
              </Card>
          </div>
       </div > 
}
    </>
   
   )
  }



export default ProductItem
