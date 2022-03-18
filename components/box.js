import  './box.css';
import react from 'react';
import {Link} from 'react-router-dom';
import {APPLICATIONS} from './APPLICATIONS';

function RenderApplication({application,onClick}){
  return(
    <li key ={application.id} className='r1'>
      < Link style={{color:'black'}} onClick={()=>onClick(application)} to="/applicationview" >
          {application.id +'\t'}{'\t'}{'\t'+application.name}
        </Link>
        </li>
  )
}

function Box(props) {
  console.log("box props",props);
  if(APPLICATIONS===null){
    return (<div></div>);
  }
  const applications=APPLICATIONS.map((application)=>{
    return (
      <RenderApplication application={application} onClick={props.onClick}/>
    )
  })
  return (
    
    <div className="rectangle">
     <h1>Applications</h1>
     <ul className="newclass">
      {/* <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li>
      <li className='r1'><a href="applicationview">Application</a></li> */}
      {applications}
    </ul>
     </div>
  

  );
}

export default Box ;
