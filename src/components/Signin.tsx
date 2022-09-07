import React, { useState } from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    // console.log(input);
    function handleVal(e:any) {
        // console.log(e.target.value);
        const { name, value } = e.target
        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }
    const handlePrevent = async(e:any) => {
        e.preventDefault()
        const { email, password } = input
        if (email === "") {
            alert("Please enter your Email")
        }
        else if (!email.includes("@")) {
            alert("Please enter your Valid Email Address")
        }
        else if (password === "") {
            alert("Please enter your Password")
        }
        else if (password.length < 7) {
            alert("Password must be greater than 7 Char")
        }
        else {
            // alert("User Login Successfully")
            const userData = await fetch("http://localhost:5000/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await userData.json()
            // console.log(data)
            if (data.status === 201) {
                localStorage.setItem("usersdatatoken", data.result.token)
                setInput({ ...input, email: "", password: ""})
            }
        }
    }
return (
    <>
        <Container style={{
                margin: '9% auto', maxWidth: '800px', minHeight: '480px', backgroundColor: 'rgb(255 255 255)',
                boxShadow: 'rgb(150 156 157 / 30%) 0px 5px 15px 0px', borderRadius: '36px',paddingLeft:'18%', paddingTop: '25px'
            }}>
            <h1 >Login Here</h1>
            <form className='mt-4' style={{ display: 'inline-block', width: '20rem' }}>
                <MDBInput className='mb-4' type='email' id='email' name='email' value={input.email} onChange={handleVal} label='Email address' />
                <MDBInput className='mb-4' type='password' id='password' name='password' value={input.password} onChange={handleVal} label='Password' />
                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='rememberMe' label='Remember me' />
                    </MDBCol>
                </MDBRow>
                <MDBBtn type='submit' className='mb-4' block onClick={handlePrevent}>
                    Sign in
                </MDBBtn>
                <div className='text-center'>
                    <p>
                        Don't have account? <Link to='/signup'>Register</Link>
                    </p>
                    <p>or sign up with:</p>
                    <MDBBtn floating className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>
                    <MDBBtn floating className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn floating className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>
                    <MDBBtn floating className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
            </form>
        </Container>
    </>
    )
}

export default Login
