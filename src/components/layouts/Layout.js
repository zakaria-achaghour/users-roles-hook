import React from 'react'
import Header from './header/Header';

const Layout = (props)=> {
    return (
        <div>
        <Header branding="Users-Roles" />
         <div className='container-fluid'>{props.children}</div>
        </div>
    )
}

export default Layout
