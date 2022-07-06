import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
const Layout = ({search, setSearch}) => {
    return (
        <div className="App">
            <Header title="Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Outlet/>
            <Footer />
        </div>
    )
}

export default Layout