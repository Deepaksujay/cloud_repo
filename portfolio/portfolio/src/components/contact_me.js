import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'
import { useState } from 'react';

export default function(props){
    const [click,setClick] = useState(false)
    const [data,setData] = useState('')
    const myDetails = [
        {
            name: 'Phone',
            info: '7989789545',
        },
        {
            name: 'Email',
            info: 'deepaksujay123@gmail.com',
        },
        {
            name : 'LinkedIn',
            info: 'linkedin.com',
        },
        {
            name: 'Github',
            info: 'github.com'
        }
    ]
    function updateValue(event){
        setClick(!click)
        const target = event.target
        console.log(target.value)
        setData(target.value)
    }
    function popUp(){
        if (click === true){
            return <p className='pop-up'>{data}</p>
        }
        return null
    }
    function giveHtml(x){
        return <li>
        <button className='contact-button' value={x.info} onClick={updateValue} >{x.name}</button>
        </li>
    }
    return <div className='contact-me-page'>
        <props.NavBar/>
        <ul className='contact-list'>
            {myDetails.map(x=>giveHtml(x))}
        </ul>
        <div className='pop-up-box'>
            {popUp()}
        </div>
    </div>
}