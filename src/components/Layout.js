import React from 'react';
import Nav from './Nav';
import LayoutClasses from "./styles/Layout.module.css"

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main className={LayoutClasses.main}>
                <div className={LayoutClasses.container}>
                    {children}
                </div>
            </main>
        </>
    );
}

export default Layout;
