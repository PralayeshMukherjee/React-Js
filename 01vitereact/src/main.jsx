import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
function MyApp(){
    return(
        <h1>hey raj! myapp running</h1>
    );
}
const username = "chai aur code";
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'click me to go google',
    username
)
createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    // reactElement
    <App/>
)
