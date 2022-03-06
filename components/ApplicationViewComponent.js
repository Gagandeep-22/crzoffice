import React ,{Component}from'react';
import {Card,CardBody,Row,Col,Button} from 'reactstrap';
import Doclist from './Doclist';
import Upload from './UploadComponent';
import DownloadFiles from  './DownloadFiles'
import axios from 'axios';
class ApplicationView extends Component{
    constructor(props){
        super(props);
        this.handleRemarks=this.handleRemarks.bind(this)
        this.handleDocs=this.handleDocs.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

        this.state={
            Remarks:"",
            Docs:[],
            // application:null,
        }
    }
    componentDidMount(){
        this.setState({application:this.props.application});
    }
handleRemarks(event){
    this.setState({Remarks:event.target.value});
    // console.log(this.state.Remarks);
}
handleSubmit(){
    console.log("state",this.state);
    console.log("props",this.props);
    // axios.post("link",{
    //     //remarks
    //     //documents
    // }).then((response)=>{
    //     alert("update sucessfull");
    // })
}
handleDocs(event){
    if(event.target.checked){
        this.setState({Docs:this.state.Docs.concat(event.target.value)});
    }  
    else{
        var docs=this.state.Docs;
        console.log("docs",docs);
        // var idex=this.Docs.indexOf(event.target.value)
        this.setState({Docs:this.state.Docs.filter(doc=>doc!== event.target.value)});
    }  
    // console.log("value=",event.target.value);
    // console.log('Docs',this.state.Docs);
}
    render(){
        return(
            <>
                <div className='container' style={{marginRight:'1',backgroundImage:'../assets/bgimg.png',backgroundSize:'cover'}}>
                    <Row style={{textAlign:'center'}}>
                        <Col md={{size:2}} lg={{size:4}} >
                            <h4>Application</h4>
                            <Card  style={{ backgroundColor: '#A2A6FD', borderColor: '#333',textAlign:'left' }}>
                                <CardBody>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Application for:</span>{this.props.application.type} </li>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Appliant name:</span>{this.props.application.name} </li>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Correspondence Address:</span> </li>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Mobile Number :</span>{this.props.application.mobile} </li>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Survey Number: </span></li>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Village: </span>{this.props.application.village} </li>
                                    <li className='list-unstyled m-1 applist'> <span style={{color:'red'}}>Taluk:</span> {this.props.application.taluk}</li>
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
                  <Row style={{marginTop:'5%'}}>
                    <Col className='md-2'>
                        <Button onClick={this.handleSubmit}>CLICKME!</Button>
                    </Col>
                  </Row>
                </div>
            </>
           
        );
    }
}

export default ApplicationView