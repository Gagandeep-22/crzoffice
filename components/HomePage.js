import React from 'react';
import './HomePage.css'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationMenu from './ApplicationMenu'
import Statistic from './Statistic';

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
          title: "Statistic",
          routeTo: "/statistic"
        },
      ];

      const renderCard = (card, index) => {
        return (
          <BrowserRouter>
            <div className='column'>
                <div key={index} className='card'>
                    <div className='Title'>{card.title}</div>
                    <Link to={card.routeTo}><button type="button" className="btn btn-outline-info">View</button></Link>      
                </div>
            </div>
            </BrowserRouter>
            
        );
      };

      const HomePage = () => {
        return <div className='row'>
                {cardInfo.map(renderCard)}  
        </div>;
      }
  return <>
        <HomePage />

        <BrowserRouter>
        <Routes>
                    <Route path='/applicationmenu' component={ApplicationMenu} />
                    <Route path='/statistic' component={Statistic} />
        </Routes>
        </BrowserRouter>     
  </>
};

export default Home;
