
import React,{Component} from "react";
import {Collapse, Navbar,Nav, NavItem, NavLink, NavbarText,NavbarToggler }from "reactstrap";

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
            <>
                <div className="AppHeader">
                    <div style={{display:"inline-block",margin:'1'}}>
                        <img src='assets/sealimg.png'style={{height:'8em' ,display:"inline-block",padding:'1em'}}/>
                    </div>
                    <div style={{display:"inline-block",verticalAlign:'middle'}}>
                        <h2><strong> ಉಡುಪಿ ಜಿಲ್ಲೆ</strong> </h2>
                        <h3 style={{color:"#ffffff"}}>UDUPI DISTRICT</h3>
                    </div>
                           
                    <h3 style={{color:"white",position:'sticky',right:'0'}}>Coastal Regulation Zone</h3>
                </div>
                <Navbar expand='md' className="Navigation" >
                    <div className="container">
                    <NavbarToggler className='me-2' onClick={this.toggleNav} style={{backgroundColor:"red"}}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
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
                </Navbar>
            </>
        ); 
    }
}

export default Header