import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'

import Home from './components/home.js'
import NavBar from './components/nav.js'
import ContactMe from './components/contact_me.js'
import Projects from './components/projects.js'
import Education from './components/education.js'
import Achievements from './components/achievements'

//Add education and achievements

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home NavBar={NavBar}/>
  },
  {
    path : '/projects',
    element: <Projects NavBar={NavBar}/>
  },
  {
    path : '/contact-me',
    element: <ContactMe NavBar={NavBar}/>
  },
  {
    path : '/education',
    element:  <Education NavBar={NavBar}/>
  },
  {
    path : '/achievements',
    element:  <Achievements NavBar={NavBar}/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

