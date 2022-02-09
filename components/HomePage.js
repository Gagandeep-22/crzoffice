import React from 'react';
import './HomePage.css'
import bg from '../images/beach.png'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   Link,
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import ApplicationMenu from './ApplicationMenu'

const Cards = () => {

    const cardInfo = [
        {
          title: "Residential 1",
        },
        {
          title: "Residential 2",
        },
        {
          title: "Commercial 1",
        },
        {
          title: "Commercial 2",
        },
        {
          title: "User",
        },
        {
          title: "Statistic",
        },
      ];

      const renderCard = (card, index) => {
        return (
            <div className='column'>
                <div key={index} className="card">
                    <div className='Title'>{card.title}</div>
                    <Link to='/ApplicationMenu'><button type="button" className="btn btn-outline-info">View</button></Link>      
                </div>
            </div>
            
        );
      };

      const HomePage = () => {
        return <div style={{
          backgroundImage: `url(${bg})`,
          height:'100vh',
          marginTop:'-50px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          }}>
          <div className='row'>
                {cardInfo.map(renderCard)}  
        </div>;
      </div>
      }
  return <>
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}>
                    <Route index element={<HomePage />} />
                    <Route path='/ApplicationMenu' component={<ApplicationMenu />} />
                </Route>
            </Routes>
        </BrowserRouter>     

        {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/ApplicationMenu" component={ApplicationMenu} />
          <Redirect to="/" />
        </Switch>
      </Router> */}
  </>
};

export default Cards;
