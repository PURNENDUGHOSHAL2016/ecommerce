import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpperNavbar from './UpperNavbar';
import LowerNavbar from './LowerNavbar';
import Footer from './Footer';
const Layout = ({ children}) => {
  return (
    <div className="layout">
      <Head>
        <title>PG Mastery Store</title>
      </Head>
      <header>
        <UpperNavbar /><br/>
        <LowerNavbar/>
      </header>
      <main className="main-container">
      {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout