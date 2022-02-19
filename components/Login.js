import React, { useState } from "react";
import { Container, Form, Button, Card,CardBody,Row, Col,Label,Input,FormGroup } from "reactstrap";
import * as Icons from "react-bootstrap-icons";
// import { right } from "@popperjs/core";



const Login=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin=(e)=>{
        // this.toggleModal();
        console.log("Called");
        alert("Username: " + username + " Password: " + password
        );
    e.preventDefault();
      }
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