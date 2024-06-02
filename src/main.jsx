import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Events from './components/Events/Events.jsx';
import Workshop from './components/Workshops/Workshops.jsx';
import Login from './components/Login/Login.jsx';
import Clubs from './components/Clubs/Clubs.jsx';
import TechClub from './components/TechClub/TechClub.jsx';
import './index.css'
import './App.css'
import BussinessClub from './components/BussinessClub/BussinessClub.jsx';
import SocialClub from './components/SocialClub/SocialClub.jsx'
import SportsClub from './components/SportsClub/SportsClub.jsx'
import CulturalClub from './components/CulturalClub/CulturalClub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='/events' element={<Events />} />
      <Route path='/workshop' element={<Workshop />} />
      <Route path='/clubs' element={<Clubs />} />
      <Route path='clubs/techclub' element={<TechClub/>}/>
      <Route path='clubs/culturalclub' element={<CulturalClub/>}/>
      <Route path='clubs/socialclub' element={<SocialClub/>}/>
      <Route path='clubs/bussinessclub' element={<BussinessClub/>}/>
      <Route path='clubs/sportsclub' element={<SportsClub/>}/>
      <Route path='/login' element={<Login />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
