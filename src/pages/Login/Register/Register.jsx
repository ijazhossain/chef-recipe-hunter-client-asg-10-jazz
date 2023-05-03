import React, { useRef, useState } from 'react';
import './Register.css'
import LoginBanner from '../LoginBanner/LoginBanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../assets/images/login.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useNavigate } from 'react-router-dom';

/* ==================================
        Registration Page
===================================== */

const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('')
    const [validated, setValidated] = useState(false)
    const handleFormSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            // console.log('not validate')
        }
        setValidated(true);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event?.target?.confirmPassword?.value;
        console.log(name, email, password, confirmPassword);


    }
    const handleRegister = event => {
        setRegistered(event.target.checked);
    }


    return (
        <div className='reg-form-container '>
            <LoginBanner></LoginBanner>


            <Container className='px-4 px-lg-0 my-lg-5 py-4 py-lg-5'>
                <Row className='p-0 p-lg-5 '>
                    <Col lg={6} className='d-lg-flex flex-column align-items-center justify-content-end d-none '>
                        <img style={{ width: "100%" }} src={img} alt="banner img" />
                    </Col>
                    <Col lg={6} className=''>
                        <SocialLogin></SocialLogin>

                        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='social-container mx-md-auto  mt-3'>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className='text-start ps-2 w-100'>Name</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Enter your name" required />
                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter your name.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text-start ps-2 w-100'>Email address</Form.Label>
                                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted w-100 text-start d-block ps-2">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhotoUrl">
                                <Form.Label className='text-start ps-2 w-100'>Photo url</Form.Label>
                                <Form.Control name='imgUrl' type="text" placeholder="Enter your photo link" />

                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter a valid photo url.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='text-start ps-2 w-100'>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />

                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label className='text-start ps-2 w-100'>Confirm Password</Form.Label>
                                <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter your password again.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="text-left mb-3 mt-2" controlId="formBasicBox">
                                <div className='w-100 d-flex align-items-center justify-content-start'>
                                    <p className="text-left mb-0 ps-2">Already have an account?</p>
                                    <button onClick={() => navigate('/login')} className='btn btn-link text-decoration-none  fw-semibold login-link'>Login</button>
                                </div>


                            </Form.Group>
                            <span className='text-danger'></span>{/* error */}
                            <Button className='submit-btn fw-semibold  w-100 mt-2' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Register;