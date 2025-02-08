import React from 'react'
import PagesHeader from './Component/Header/PagesHeader'
import PagesFooter from './Component/Footer/PagesFooter'
import { Outlet } from 'react-router-dom' //use outlet to dynamically use componenet

function Router() {
  return (
    <>
        <PagesHeader/>
        <Outlet/>
        <PagesFooter/>
    </>
  )
}

export default Router
