import React from 'react';
import classes from '../styles/Signup.module.css'
import Illustration from '../Illustration';
import Form from '../Form';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <h1>Creae an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup}`}>
                    {/* Name */}
                    <TextInput type='text' placeholder='Enter Your Name' icon='person' />

                    {/* E-mail */}
                    <TextInput type='email' placeholder='Enter Your email' icon='alternate_email' />

                    {/* Password */}
                    <TextInput type='password' placeholder='Enter Your password' icon='lock' />

                    {/* Confirm Password */}
                    <TextInput type='password' placeholder='Confirm Your password' icon='lock_clock' />

                    {/* Agreement Checkbox */}
                    <Checkbox text='I agree to the Terms &amp; Conditions' />

                    {/* submit button */}
                    <Button><span>Submit Now</span></Button>

                    <div class="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Signup;
