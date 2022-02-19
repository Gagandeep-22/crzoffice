import { Component } from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

import Login from './Login';
import ApplicationView from './ApplicationViewComponent';
  import Doclist from './Doclist';
import Stats_Table from './Stats_Table';
// import Statistics from './Table';
import Box from './Box';
import ApplicationMenu from './ApplicationMenu'
import Search from './Search';
import Home from './HomePage';
import DownloadFiles from  './DownloadFiles'


// import {Routes, Route,BrowserRouter} from 'react-router-dom';
class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
              <div  className="MainContent" >
              <BrowserRouter>
                <Routes >
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/applicationview' element={<ApplicationView/>}/>
                    <Route path='/applicationmenu' element={<ApplicationMenu/>}/>
                    <Route path='/statistics' element={<Stats_Table/>}/> 
                    <Route path='/login' element={<Login/>}/> 
                     <Route path='*' element={<Home/>}/>
                </Routes>
                </BrowserRouter>
                {/* <Login/> */}
                {/* <Home/> */}
                {/* <ApplicationView/> */}
                {/* <Box/> */}
                {/* <Doclist/> */}
                {/* <ApplicationMenu/> */}
                {/* <Stats_Table/> */}
                {/* <Statistics/> */}
                {/* <Search/> */}
                {/* <DownloadFiles/> */}
              </div>
            </>
          );
    }
}
export default Main