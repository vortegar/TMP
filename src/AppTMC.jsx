import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar'
import { UserProvider } from './context/UserProvider'
import { Contacto } from './pages/Contacto'
import { DatosGratis } from './pages/DatosGratis'
import { HomePage } from './pages/HomePage'
import { Servicios } from './pages/Servicios'

export const AppTMC = () => {
  return (
    <UserProvider>
      <Navbar/>

      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/contacto' element={ <Contacto /> } />
        <Route path='/servicios' element={ <Servicios /> } />
        <Route path='/datos-gratis' element={ <DatosGratis /> } />
        

      </Routes>


    </UserProvider>
  )
}

