import React from 'react';
import {Card} from "react-bootstrap";
import me from "../assets/img/me.jpg"
import me1 from "../assets/img/me1.jpg"


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
      <Card style = {{width: '10rem'}} key = {index}>
      <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
      <Card.Body>
    <Card.Title>{card.title}</Card.Title>
      <Card.Text>
     {card.text}
      </Card.Text>
  </Card.Body>
</Card>

    );
  };
        return<div className = "team">{teamMembers.map(renderCard)}</div>;
    };

export default Team;