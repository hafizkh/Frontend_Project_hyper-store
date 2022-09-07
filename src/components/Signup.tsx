import React, { useState } from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        // cpassword: "",
    })
    // console.log(input);
    function handleVal(e: any) {
        // console.log(e.target.value);
        const { name, value } = e.target
        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }

    const handlePrevent = async (e: any) => {
        e.preventDefault()

        const { firstname, lastname, username, email, password } = input

        if (firstname === "") {
            alert("Please enter your First Name")
        }
        else if (lastname === "") {
            alert("Please enter your Last Name")
        }
        else if (username === "") {
            alert("Please select your suitable username")
        }
        else if (email === "") {
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
            //    alert("User Registered Successfully")
            const userData = await fetch("http://localhost:5000/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname, lastname, username, email, password
                })
            })
            const data = await userData.json()
            console.log(data)
            if (data.status === 201) {
                alert("User has been registered")
                setInput({ ...input, firstname: "", lastname: "", username:"",email: "", password: "" })
            }
        }
    }
    return (
        <>
            <Container style={{
                margin: '9% auto', maxWidth: '800px', minHeight: '480px', backgroundColor: 'rgb(255 255 255)',
                boxShadow: 'rgb(150 156 157 / 30%) 0px 5px 15px 0px', borderRadius: '36px', paddingLeft: '18%', paddingTop: '1px'
            }}>
                <h1 className='mt-5'>Register Here</h1>
                <form className='mt-4' style={{ display: 'inline-block', width: '20rem' }}>
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput id='fnam' name='firstname' label='First name' value={input.firstname} onChange={handleVal} />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput id='lname' name='lastname' label='Last name' value={input.lastname} onChange={handleVal} />
                        </MDBCol>
                    </MDBRow>
                    <MDBInput className='mb-4' type='username' id='email' name='username' label='Username' value={input.username} onChange={handleVal} />
                    <MDBInput className='mb-4' type='email' id='email' name='email' label='Email address' value={input.email} onChange={handleVal} />
                    <MDBInput className='mb-4' type='password' id='password' name='password' label='Password' value={input.password} onChange={handleVal} />
                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex'>
                            <MDBCheckbox id='rememberMe' label='Remember me' />
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn type='submit' className='mb-4' block onClick={handlePrevent}>
                        Sign up
                    </MDBBtn>
                    <p>
                        Already have an account? <Link to='/signin'>Login</Link>
                    </p>
                </form>
            </Container>
        </>
    )
}

export default Register