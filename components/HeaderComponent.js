import SealImg from '../assets/sealimg.png'
import React,{Component} from "react";
// import {Collapse, Navbar,Nav, NavItem, NavLink, NavbarText,NavbarToggler }from "reactstrap";

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render(){
        return(
            <div className='AppHeader'>
                    <div className='SealImg'>
                        <img src={SealImg} style={{height:'8em'}}/>
                    </div>
                    <div className='District'>
                        <h1><strong> ಉಡುಪಿ ಜಿಲ್ಲೆ</strong> </h1>
                        {/* <br/> */}
                        <h2 style={{color:"#ffffff"}}>UDUPI DISTRICT</h2>
                    </div>
                    <div className='Coastal'>       
                         <h1>Coastal Regulation Zone</h1>
                    </div>
              { /* <Navbar expand='md' className="Navigation" >
                    <div className="container">
                    <NavbarToggler className='me-2' onClick={this.toggleNav} style={{backgroundColor:"red"}}/>
                        <Collapse isOpen={this.state.isNavOpen} pills>
                            <Nav pills >
                                <NavItem>
                                    <NavLink style={{color:'black'}} href='/home' active>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:'black'}} >FORMS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:'black'}} >NOTIFICATIONS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{color:'black'}} >USERS</NavLink>
                                </NavItem>
                            </Nav>
                        <NavbarText><NavLink style={{color:'black'}}>Logout</NavLink></NavbarText>
                        </Collapse>
                    </div>                  
                </Navbar> */}
            </div>
        ); 
    }
}

export default Header