import React from 'react'
import Header from './Component/Header/Header'
import {Route, Routes} from 'react-router-dom'
import List from './Component/List/List'
import Contact from './Component/Form/Contact'
import Box from './Component/Box/box'
import Card from './Component/Cards/Cards'

const App = () =>{
    return (
        <>
        <Header/>
        <Routes>
            <Route path='/list' element={<List/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/box' element={<Box/>}/>
            <Route path='/card' element={<Card/>}/>
        </Routes>
        </>
    )
}





export default App