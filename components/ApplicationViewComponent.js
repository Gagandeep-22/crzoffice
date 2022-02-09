import React ,{Component}from'react';
import {Card,CardHeader,CardBody,Row,Col, Label} from 'reactstrap';
import Header from './HeaderComponent'
class ApplicationView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className='container'>
                    <Row>
                        <Col md={{size:2}} lg={{size:4}} >
                            <h4>Application</h4>
                            <Card  style={{ backgroundColor: '#A2A6FD', borderColor: '#333', GridRow:' 1 / 3' }}>
                                <CardBody>
                                    <li className='list-unstyled m-1 applist'> Applicantion for: </li>
                                    <li className='list-unstyled m-1 applist'> Appliant name: </li>
                                    <li className='list-unstyled m-1 applist'> Correspondence Address: </li>
                                    <li className='list-unstyled m-1 applist'> Mobile Number : </li>
                                    <li className='list-unstyled m-1 applist'> Survey Number: </li>
                                    <li className='list-unstyled m-1 applist'> Village: </li>
                                    <li className='list-unstyled m-1 applist'> Taluk: </li>
                                    <li className='list-unstyled m-1 applist'> 
                                        <textarea id='feedback' name='feedback' cols={40} placeholder='Feedback/remarks'></textarea> 
                                    </li>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={{size:2}} lg={{size:4}} className='m-1' >
                             <h4 >documents</h4>
                             <div style={{borderColor:'#333',backgroundColor: '#A2A6FD'}}>
                                 to upload
                             </div>
                        </Col>
                        <div className='col-12 col-md -6 col-lg-3' >
                            <h4>download documents</h4>
                            <div style={{borderColor:'#333',backgroundColor: '#C4C4C4'}}> download</div>
                            <h4>upload clearence</h4>
                            <div style={{borderColor:'#333',backgroundColor: '#C4C4C4'}}> upload</div>
                        
                        </div>
                    </Row>
                    <div className='row'>
                        
                    </div>
                    
                </div>
            </>
           
        );
    }
}

export default ApplicationView