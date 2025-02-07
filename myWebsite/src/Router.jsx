import React from 'react'
import PagesHeader from './Component/Header/PagesHeader'
import PagesFooter from './Component/Footer/PagesFooter'
import { Outlet } from 'react-router-dom'
import Home from './Component/Home/Home'

function Router() {
  return (
    <>
        <PagesHeader/>
        <Home/>
        <PagesFooter/>
    </>
  )
}

export default Router
