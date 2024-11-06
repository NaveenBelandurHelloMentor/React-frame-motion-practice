import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {BrowserRouter, BrowserRouter as router} from 'react-router-dom'

const Container = document.getElementById('root')
const Root = createRoot(Container)
Root.render(
    <BrowserRouter>
<App/>
</BrowserRouter>)