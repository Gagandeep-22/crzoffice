import React ,{Component}from'react';
import {Card,CardBody,Row,Col,Button} from 'reactstrap';
import Doclist from './Doclist';
import Upload from './UploadComponent';
import DownloadFiles from  './DownloadFiles'

class ApplicationView extends Component{
    constructor(props){
        super(props);
        this.handleRemarks=this.handleRemarks.bind(this)
        this.handleDocs=this.handleDocs.bind(this)
        this.state={
            Remarks:"",
            Docs:[]
        }
    }
handleRemarks(event){
    this.setState({Remarks:event.target.value});
    console.log(this.state.Remarks);
}

handleDocs(event){
    if(event.target.checked){
        this.setState({Docs:this.state.Docs.push(event.target.value)});
    }  
    else{
        var docs=this.state.Docs;
        console.log("docs",docs);
        var idex=this.Docs.indexOf(event.target.value)
        this.setState({Docs:docs.splice(idex,1)});
    }  
    console.log(event.target.value);
    console.log('Docs',this.state.Docs);
}
    render(){
        return(
            <>
                <div className='container' style={{marginRight:'1',backgroundImage:'../assets/bgimg.png',backgroundSize:'cover'}}>
                    <Row style={{textAlign:'center'}}>
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
                                        <textarea id='feedback' 
                                            name='feedback' 
                                            cols={40} 
                                            placeholder='Feedback/remarks'
                                            onChange={this.handleRemarks}
                                            value={this.state.Remarks}
                                            ></textarea> 
                                    </li>
                                </CardBody>
                            </Card>
                            <br/>
                            <h4 style={{color:'white'}}>download documents</h4>
                            <div style={{borderColor:'#333',backgroundColor: '#C4C4C4'}}> 
                                <DownloadFiles/>
                            </div>

                            <h4 style={{color:'white'}}>upload clearence</h4>
                            <div style={{borderColor:'#333',backgroundColor: '#C4C4C4'}}> 
                                <Upload/>
                            </div>
                        </Col>
                        <Col md={{size:2}} lg={{size:7}} className='m-2' >
                             <div style={{borderColor:'#333',textAlign:'center'}}>
                             <h4>Mark the Requisite Documents</h4>
                                 <Doclist onChange={this.handleDocs}/>
                             </div>
                        </Col>
                        {/* <div className='col-12 col-md -6 col-lg-3' >
                            <h4>download documents</h4>
                            <div style={{borderColor:'#333',backgroundColor: '#C4C4C4'}}> 
                            download
                            </div>

                            <h4>upload clearence</h4>
                            <div style={{borderColor:'#333',backgroundColor: '#C4C4C4'}}> 
                                <Upload/>
                            </div>
                        
                        </div> */}
                    </Row>
                  
                    {/* <Button onClick={console.log("state",this.state)}>CLICKME!</Button> */}
                </div>
            </>
           
        );
    }
}

export default ApplicationView