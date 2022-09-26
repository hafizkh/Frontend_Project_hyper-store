import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
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
        if (firstname == "") {
            toast.warning("Please enter your First Name", {
                position: "top-center"
            })
        }
        else if (lastname === "") {
            toast.warning("Please enter your Last Name", {
                position: "top-center"
            })
        }
        else if (username === "") {
            toast.warning("Please enter your Username", {
                position: "top-center"
            })
        }
        else if (email === "") {
            toast.warning("Please enter your Email", {
                position: "top-center"
            })
        }
        else if (!email.includes("@")) {
            toast.warning("Please enter your Valid Email Address", {
                position: "top-center"
            })
        }
        else if (password === "") {
            toast.warning("Please enter your Password", {
                position: "top-center"
            })
        }
        else if (password.length < 7) {
            toast.warning("Password lenghth should be more than 7 char", {
                position: "top-center"
            })
        }
        else {
            //    alert("User Registered Successfully")
            const userData = await fetch("http://localhost:4000/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname, lastname, username, email, password
                })
            })
            const data = await userData.json()
            // console.log(data)
            if (data.status === 201) {
                toast.success("User has been registered")
                setInput({ ...input, firstname: "", lastname: "", username: "", email: "", password: "" })
            }
        }
    }
    return (
        <div>
            <Container style={{
                margin: '9% auto', maxWidth: '800px', minHeight: '480px', backgroundColor: 'rgb(255 255 255)',
                boxShadow: 'rgb(150 156 157 / 30%) 0px 5px 15px 0px', borderRadius: '36px', paddingLeft: '18%', paddingTop: '1px'
            }}>
                <h1 className='mt-5'>Register Here</h1>
                <form action="" className='mt-4' style={{ display: 'inline-block', width: '20rem' }}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" id='fnam' className="form-control" name='firstname' value={input.firstname} onChange={handleVal} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" id='lname' className="form-control" name='lastname' value={input.lastname} onChange={handleVal} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type='username' id='email' className="form-control" name='username' value={input.username} onChange={handleVal} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type='email' id='email' className="form-control" name='email' value={input.email} onChange={handleVal} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type='password' id='password' className="form-control" name='password' value={input.password} onChange={handleVal} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handlePrevent}>Sign up</button>
                    <p>
                        Already have an account? <Link to='/signin'>Login</Link>
                    </p>
                </form>
            </Container>
        </div>
    )
}

export default Register