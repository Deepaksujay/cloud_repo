import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'

export default function Achievements(props){
    const arr = [
        {
            description:'4 start in leetcode',
            link:'https://leetcode.com/DeepakSujay/',
        },
        {
            description:'4 start in codechef',
            link:'',
        }
    ]
    function getHtml(part){
        return <li className='achivement'>
            <p>{part.description}</p>
            {(part.link.length>0)?<p className='link'>visit <a href={part.link} target={'_blank'}>here</a></p>:null}
        </li>
    }
    return <div className='achievements-page'>
        <props.NavBar/>
        <div className='achivements'>
            <ul className='list'>
            {arr.map(x=>getHtml(x))}
            </ul>
        </div>
    </div>
}