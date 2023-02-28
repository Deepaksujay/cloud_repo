import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Education(props){
    const [arr,setArr] = useState([])
    useEffect(()=>{
        const d = async()=>{
            try{
                const lol = await axios.get(`${process.env.React_App_url}:${process.env.React_App_port}/education`)
                //console.log(lol)
                setArr(lol.data)
            }
            catch (err){
                console.log(err)
            }
        }
        d()
    },[])
    function getHtml(type){
        return <li className='education' key={type.institute}>
            <h4 className='name'>{type.institute},</h4>
            <h5 className='place'> {type.place}</h5>
            <h6 className='year'>{type.fromYear}-{type.toYear}</h6>
            <p className='level'>{type.level}</p>
            <p className='major'>Major in {type.major}</p>
            <p className='grade'>
                Grade : <strong>{type.grade}/{type.gradingSystem}</strong>
                </p>
        </li>
    }
    return <div className='education-page'>
       <props.NavBar/>
       <div className='educations'>
        <ul className='list'>
            {arr.map(x=>getHtml(x))}
        </ul>
       </div>
    </div>
}