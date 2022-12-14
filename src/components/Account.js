import React from 'react';
import AccountClasses from "./styles/Account.module.css"
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <div className={AccountClasses.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
        </div>
    );
}

export default Account;
