import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'
import './styles/nav.css'

export default function NavBar(props){
    return (<div className='nav-bar'>
        <h3 className='nav-bar-ele'>Gudiseva Deepak Sujay</h3>
        <div className='routers'>
        <Link to='/' className='nav-bar-button nav-bar-ele'> Home </Link>
        <Link to='/projects' className='nav-bar-button nav-bar-ele'> Project </Link>
        <Link to='/education' className='nav-bar-button nav-bar-ele'> Education </Link>
        <Link to='/achievements' className='nav-bar-button nav-bar-ele'> Achievements </Link>
        <Link to='/contact-me' className='nav-bar-button nav-bar-ele'> Contact Me </Link>
        </div>
    </div>)
}