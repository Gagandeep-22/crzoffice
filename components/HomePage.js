import React from 'react';
import './HomePage.css'
import { Link, BrowserRouter } from "react-router-dom";

const Home = () => {

    const cardInfo = [
        {
          title: "Residential Conversion",
          routeTo: "/applicationmenu",
        },
        {
          title: "Residential Construction",
          routeTo: "/applicationmenu",
        },
        {
          title: "Commercial Conversion",
          routeTo: "/applicationmenu",
        },
        {
          title: "Commercial Construction",
          routeTo: "/applicationmenu",
        },
        {
          title: "Statistics",
          routeTo: "/statistics"
        },
      ];

      const renderCard = (card, index) => {
        return (
            <div key={index} className='col-md-4'>
                <div key={index} className='homeCard'>
                    <div className='Title'>{card.title}</div>
                    <br/>
                    <div>
                      <Link to={card.routeTo}><button type="button" className="btn btn-outline-info">View</button></Link>   
                    </div>   
                </div>
            </div>
        );
      };

      const HomePage = () => {
        return <div className='row'>
                {cardInfo.map(renderCard)}  
        </div>;
      }
  return <>
        <HomePage />  
  </>
};

export default Home;
