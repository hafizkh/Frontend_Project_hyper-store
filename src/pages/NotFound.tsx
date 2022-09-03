import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from '../images/404_Not_found.jpg'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='mt-4' style={{marginLeft:'20%'}}>
    <img  src= {notFound} alt="Not Found" />
    <div className="card-body">
      <button type='button' 
      style={{marginLeft:'50%'}}
      className="btn btn-primary btn-rounded" 
      onClick={()=>navigate("/home")}>Home</button>
    </div>
  </div>
  )
}

export default NotFound