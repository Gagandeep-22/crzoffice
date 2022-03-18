import React, { useState,useContext } from "react";
import { Container, Form, Button, Card,CardBody,Row, Col,Label,Input,FormGroup } from "reactstrap";
import * as Icons from "react-bootstrap-icons";
// import { right } from "@popperjs/core";
import { AuthContext } from "./authContext";
import axios from 'axios';
// import { withRoter } from "react-router-dom";


const Login=(props)=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loggedIn, setLogin } = useContext(AuthContext);

    const handleLogin=(e)=>{
        // this.toggleModal();
        console.log(props);
        // alert("Username: " + username + " Password: " + password
        // );
        props.history.push('./home');
    e.preventDefault();
      }

//   const handleLogin = () => {
//     axios.post("http://localhost:3001/login", {
//       username: username,
//       password: password,
//     }).then((response) => {
//       if (response.status==200) {
//         setLogin(username)}
//     }).catch(error=>{
//         console.log("login error");
//         console.log(error);
//     });
//   };
    return(
        <div>
            <Card className="cardwhole">
                <div style={{textAlign:'center'}}>
                    <Icons.PersonCircle size="100" className="iconStyle" />
                </div>
                <CardBody>
                    <Container>
                        <Row>
                            <Col style={{textAlign:'center'}}>
                            <h3>Login</h3>
                            </Col>
                            
                        </Row>
                        <Form >
                            <Row>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        onChange={(e)=>{setUsername(e.target.value)}} />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        onChange={(e)=>{setPassword(e.target.value)}} />
                                </FormGroup>
                            </Row>
                            <Row style={{marginTop:"5%"}}>
                                <Col>
                                    <Button onClick={handleLogin}>Login</Button>
                                </Col>
                                <Col>
                                    <Button style={{float:'right'}} >Forgot Password</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
}
export default Login;