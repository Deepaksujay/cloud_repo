import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'

export default function Home(props){
    return <div className='home'>
        <props.NavBar/>
    </div>
}