import React from 'react';
// import {Card} from "react-bootstrap";
import me from "../assets/img/me.jpg"
import Israel from "../assets/img/Israel.png"
import bj from "../assets/img/bj.jpg"
import imtiaz from "../assets/img/imtiaz.jpg"
import hoang from "../assets/img/hoang.jpg"
import linkedin from "../assets/img/linkedin.png"
import git from "../assets/img/git.png"

import "./Box.css"

const Team = () => {
  const teamMembers = [
    {image: imtiaz,title:"Imtiaz Khaled",text:"Developer",linkedin:"https://www.linkedin.com/in/imtiazkhaled/",github:"https://github.com/ImtiazKhaled"},
    {image: Israel,title:"Israel Tshitenge",text:"Developer",linkedin:"https://www.linkedin.com/in/israel-tshitenge-07749012b/",github:"https://github.com/tisral"},
    {image: bj,title:"Bijay Parajuli",text:"Developer",linkedin:"https://www.linkedin.com/in/bijay-parajuli-2002a7143/",github:"https://github.com/Bijay1parajuli"},
    {image: hoang,title:"Hoang Luu",text:"Developer",linkedin:"https://www.linkedin.com/in/hoangluu0/",github:"https://github.com/hoangluu404"},
    {image: me,title:"Aawaj Bhaukajee",text:"Developer",linkedin:"https://www.linkedin.com/in/aawaj-bhaukajee-b7065ab1/",github:"https://github.com/aawajBhaukajee"},
  ];
    
  const renderCard = (card,index) => {
    
    return( 
        <div>
            <div className="cardDiv">
              
              <img src={card.image} className="image"/>
              <p className='name'>{card.title}</p>           
              <p className='title'>{card.text}</p>      
              <div className="flex">
              <p><a href = {card.github} target="_blank"><img src={git} style={{width:"25px"}}/></a></p>
              <p><a href = {card.linkedin} target="_blank"><img src={linkedin} style={{width:"25px"}}/></a></p>  
              </div>
            </div>
            
        </div>   
             
    );
  };
        return<div className = "grid">{teamMembers.map(renderCard)}</div>;
    };

export default Team;


