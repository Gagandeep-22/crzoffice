import React from "react";
import { Card } from "react-bootstrap";
import './Box.css'

const Body = () => {
  const cardInfo = [
    {
      title: "Residential 1",
      src: "/"

    },
    {
      title: "Residential 2",
      src: "/"
    },
    {
      title: "Commercial 1",
      src: "/"
    },
    {
      title: "Commercial 2",
      src: "/"
    },
    {
      title: "User",
      src: "/"
    },
    {
      title: "Statistic",
      src: "/"
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card key={index} className="Card">
        <Card.Body className="CardBody">
          <Card.Title>{card.title}</Card.Title>
          <button>Apply</button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="CardBlock">
    <div className="CardItem">
      {cardInfo.map(renderCard)}
    </div>
    </div>;
};

export default Body;