import React from "react";
import { Navbar,Nav, NavItem, NavLink}from "reactstrap";
import './Navigation.css'
function Navigation(){
    return(
        <Navbar expand='md' className="Navigation" >
                <div className="container" >
                {/* <NavbarToggler className='me-2' onClick={this.toggleNav} style={{backgroundColor:"red"}}/> */}
                {/* <Collapse isOpen={this.state.isNavOpen} pills> */}
                    <Nav navbar style={{textAlign:'left'}}>
                        <NavItem>
                            <NavLink style={{color:'black'}} href='/home' active>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:'black'}}   >FORMS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:'black'}} href='/notification'>NOTIFICATIONS</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink style={{color:'black'}} >USERS</NavLink>
                        </NavItem> */}
                        <NavLink style={{color:'black'}}>Logout</NavLink>
                    </Nav>
                    {/* <Nav className="ml-auto">
                        <NavLink style={{color:'black'}}>Logout</NavLink>
                    </Nav> */}
                    
                {/* </Collapse> */}
                </div>                  
        </Navbar> 
        

    );
}
export default Navigation;