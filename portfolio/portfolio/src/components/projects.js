import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Projects(props){
    const [arr,setArr] = useState([])
    useEffect(()=>{
        const d = async ()=>{
            try{
                const dat = await axios.get(`${process.env.React_App_url}:${process.env.React_App_port}/projects`)
                setArr(dat.data)
            }
            catch(err){
                console.log(err)
            }
        }
        d()
    },[])
    function giveHtml(x){
        return <li className='project' key={x.name}>
            <h4 className='project-name'>{x.name}</h4>
            <p className='tech-stack'>Tech Stack : {x.techStack.map(x=>(x.concat(', ')))}</p>
            <a href={x.link}>link</a>
        </li>
    }
    return <div className='projects-page'>
        <props.NavBar/>
        <div className='Projects'>
            <h3>Hear are my Projects</h3>
            <ul className='list'>
                {arr.map(x=>giveHtml(x))}
            </ul>
        </div>
    </div>
}