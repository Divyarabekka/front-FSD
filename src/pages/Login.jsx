import React,{useState} from 'react'
import {Container , Form,Button} from 'react-bootstrap';
import axios from "axios"
import API_URL from '../../config/global';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [formData,setFormData]= useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const handleChange = (e)=>{
       
        const{name,value}=e.target
        setFormData({...formData,[name]: value})
    }
    const handlesubmit= async(e)=>{
        e.preventDefault()
        const response = await axios.post(`${API_URL}/login`,formData);
            console.log(response);
            localStorage.setItem("userinfo",JSON.stringify(response.data))
            navigate("/home")
    }
  return (
    <>
    <Container>
        <h1>Login Form</h1>
        <Form onSubmit={handlesubmit}>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} required/>
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} required/>
                </Form.Group>

            <Button variant='primary' type='submit'>Login</Button>
            
        </Form>
    </Container>
    <img src="https://burst.shopifycdn.com/photos/finger-pointing-at-javascript-code.jpg?width=1000&format=pjpg&exif=0&iptc=0" class="img-class" alt=""
    style={{width: "900px", height:"250px",margin: "10px 280px"}}/><br></br></>
  )
}

export default Login