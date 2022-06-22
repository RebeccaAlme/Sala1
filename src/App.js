import React from 'react'
import NavBar from './components/navBAr/navBar'
import Jumbotron from './components/jumbotron/jumbotron'
import InfoPrincipal from './components/infoPrincipal/infoPrincipal'
import Menu from './components/Menu/menu'
import Footer from './components/footer/footer'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/home'
import Blog from './components/blog/blog'
import Reservaciones from './components/reservaciones/reservaciones'

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Menu' element={<Menu/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='reservaciones' element={<Reservaciones/>}/>
      </Routes>
    </div>     
    </>
  )
}
export default App
