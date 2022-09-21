import React from 'react';
import Illustration from '../Illustration';
import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import classes from '../styles/Login.module.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.login}`}>
                    {/* E-mail */}
                    <TextInput type='email' placeholder='Enter Your email' icon='alternate_email' />

                    {/* Password */}
                    <TextInput type='password' placeholder='Enter Your password' icon='lock' />

                    {/* submit button */}
                    <Button><span>Submit Now</span></Button>

                    <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    );
}

export default Login;
