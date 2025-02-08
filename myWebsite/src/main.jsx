import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Router from './Router.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'


const MyRouter = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Router/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter}/>
  </StrictMode>,
)
