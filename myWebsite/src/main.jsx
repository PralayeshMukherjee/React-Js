import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import {Router,Home,About,Contact, TouchMail} from './Component/index.js'

const MyRouter = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Router/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='TouchMail' element={<TouchMail/>} />
      </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter}/>
  </StrictMode>,
)
