import { Component } from 'react';
import ApplicationView from './ApplicationViewComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';

import { Switch, Route,Redirect} from 'react-router-dom';
class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
              
              
              <div  className="App" >
                <Header/>
                <Switch >
                    <Route path='/home' component={Home}/>
                    <Route path='/applicationview' component={ApplicationView}/>
                    <Redirect to='/home'/>
                    {/* <ApplicationView/> */}
                </Switch>
              </div>
            </>
          );
    }
}
export default Main