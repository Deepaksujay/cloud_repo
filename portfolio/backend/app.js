const express = require('express')
app = express()
const cors = require('cors')
app.use(cors())


port = process.env.port || 4000;
app.listen(port,()=>console.log(`Listening on ${port}`))
const education = [
    {
        institute:'Indian Institute of Information Technology',
        place:'Dharwad',
        fromYear:'2020',
        toYear:'2024',
        major:'Computer Science',
        grade:'8.39',
        gradingSystem:'10.0',
        level:'Bachelors'
    },
    {
        institute:'Fiitjee',
        place:'Vijayawada',
        fromYear:'2017',
        toYear:'2020',
        major:'Maths-Physics-Chemistry (MPC)',
        grade:'9.38',
        gradingSystem:'10',
        level:'High School'
    }
]

const projects = [
    {
        name:'Project 1',
        techStack : ['python','react'],
        link : 'project1.com'
    },
    {
        name:'Project 2',
        techStack : ['node js','react'],
        link : 'project2.com'
    },
    {
        name:'Project 3',
        techStack : ['node js','react','express'],
        link : 'project3.com'
    },
]

app.get('/education',(req,res)=>{
    res.send(education)
})

app.get('/projects',(req,res)=>{
    res.send(projects)
})






