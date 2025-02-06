import React from 'react'
import Header from './Componenet/Header/Header'
import Footer from './Componenet/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
