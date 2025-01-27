import { useState } from 'react';
import pic from "C:/Manthan/Coding/React Projects/myWebsite/src/images/manthan.jpg";
import instaIcon from "C:/Manthan/Coding/React Projects/myWebsite/src/images/instaIcon.png"
import linkedinIcon from "C:/Manthan/Coding/React Projects/myWebsite/src/images/linkedinIcon.png"
import spotifyIcon from "C:/Manthan/Coding/React Projects/myWebsite/src/images/spotifyIcon.png"
import './pages.css'
import * as React from 'react';
import { Link, useMatch, useResolvedPath} from 'react-router-dom'

function Main () {
  return(   
    <>
      <main>
        <h1 className = "mainTitle">Welcome To Monty's Mojo Dojo Casa House</h1>
        <div className='about'>
          <h2>About me</h2>
        </div>
        <div className='container'>
          <div className='boxes' id='box1'>
            <div className='boxes' id= "box1a"> 
            <div className='title'>
              <h2 >Hello I'm</h2>
              <h1 id='name'>Manthan Chugh</h1>
              <h3 id='titleText'>CS and Business Student</h3>
              <br></br>
            </div>
            <div className='titleText'>
            <p>Hi my name is Manthan Chugh, I am a first year Computer Science and Management
                Science student at the University of Edinburgh. Welcome to my website.
            </p>
            <p>I am 17 years old. Enjoy watching F1 and Football. Fitness is a key part of my lifestyle
              and I enjoy going to gym a lot. I love learning new languages both spoken and programming. 
              I currently speak English and Hindi to a native level and am also learning French, German and Dutch.
            </p>
            <p>I am looking for an currently looking for an internship if you would like to contact me. 
            </p>
            </div>
            </div>
          </div>
          <div className='boxes' id='box2'>
            <div className='boxes' id='box2a'> 
                <img src={pic} width = {300} id='portugalPic'/> 
            </div>
            <div className='boxes' id='box2b'>
              <ul>
                <CustomLink to = "https://www.instagram.com/manthan_chugh07/"><img src = {instaIcon} width={50}/></CustomLink>                
                <CustomLink to = "https://www.linkedin.com/in/manthan-chugh-326a4a202/"><img src = {linkedinIcon} width={50}/></CustomLink>
                <CustomLink to = "https://open.spotify.com/user/ml0r4ldb0vpjmlaih8hes6vyp"><img src = {spotifyIcon} width={50}/></CustomLink>
              </ul>
            </div>
          </div>
        </div>
      </main>
      </>
   );
}
function Home() {
    return(
        <div>
            <Main/>
        </div> )
}

function CustomLink ({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true })

  return(
      <li className={isActive? "active" : ""}>
          <Link to = {to} {...props}>
              {children}
          </Link>
      </li>

  )
}
export default Home
