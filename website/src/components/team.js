import React from 'react';
// import {Card} from "react-bootstrap";
import me from "../assets/img/me.jpg"
import me1 from "../assets/img/me1.jpg"
import "./Box.css"

const Team = () => {
  const teamMembers = [
    {image: me,title:"Aawaj Bhaukajee",text:"Member 1"},
    {image: me1,title:"Imtiaz Khaled",text:"Member 2"},
    {image: me1,title:"Bijay Parajuli",text:"Member 3"},
    {image: me1,title:"Hoang Lu",text:"Member 4"},
    {image: me1,title:"Israel Tshitenge",text:"Member 5"},
  ];
    
  const renderCard = (card,index) => {
    return( 
        <div>

            <div className="cardDiv">
              <img src={card.image}/>
              <p>{card.title}</p>              
              <p>{card.text}</p>
            </div>
        </div>        
    );
  };
        return<div className = "grid">{teamMembers.map(renderCard)}</div>;
    };

export default Team;
