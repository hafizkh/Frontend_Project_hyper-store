import { Card, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import {FaShoppingCart, FaUserMinus, FaUserPlus} from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { removeItem } from '../redux/reducer/cartReducer'
import { Product } from '../types/product';


const Cart = () => {
  const navigate =useNavigate()
  const dispatch = useAppDispatch()
  const ListOfProducts = useAppSelector(state => {
    return state.cartReducer.productList

  })

  const handleRemove = (e: Product) => {
    dispatch(removeItem(e))
  }
  const homePage =()=>{
    navigate("/home")
  }
  return (
    <div style={{marginBottom:'7rem' }}>
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
                  <div className='mt-1 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} >-</span>
                    <span style={{fontSize:22}}>{items.price}</span>
                    <span style={{fontSize:24}}>+</span>

                    </div>
                  <Button className="btn-primary mt-2" onClick={() => handleRemove(items)}>Remove</Button>
                </Card.Body>
              </Card>
              <hr />
            </Col>
            
          </div>
        )
      }
      <div>
              <p> Total: 500$ </p>
            </div>
      </Row>
      
        </div>:
        <div className='d-flex justify-content-center align-items-center container' style={{width:"auto",padding:'auto',position:"relative"}}>
        <p style={{fontSize:'45px',marginTop: '6rem',fontFamily:'monospace'}}>Your cart is empty</p>
        <img src="./cart.gif" alt="Empty cart" style={{marginTop:"6rem",padding:'10px'}} />
        <div >
        <Button onClick={()=>homePage()}>Go Back</Button>
        </div>
       </div>
      }
      

    </div>
  );
}

export default Cart
