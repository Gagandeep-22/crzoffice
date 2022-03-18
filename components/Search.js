// import { DropdownItem,DropdownToggle,DropdownMenu,DropdownL} from 'reactstrap';
// import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Search.css';
import {APPLICATIONS} from './APPLICATIONS';
import { Alert } from 'reactstrap';

function RenderResult({application,onClick}){
  return(
    <li key ={application.id} className='searchr1'>
      < Link style={{color:'black'}} onClick={()=>onClick(application)} to="/applicationview" >
          {application.id +'\t'}{'\t'}{'\t'+application.name}
        </Link>
        </li>
  )
}
const Results=(props)=>{
  console.log("resluts props",props);
  if(props.Resultlist===null&&props.error===null){
    return (<div></div>);
  }
  if(props.Resultlist===null&&props.error==!null){
    return(
      <div><Alert color='danger'>no result found</Alert></div>
    );
  }
  const results=props.Resultlist.map((application)=>{
    return (
      <RenderResult application={application} onClick={props.onClick}/>
    )
  })
  return(
    <div className="searchrectangle">
        <ul className="searchnewclass">
          {/* <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>
          <li className='searchr1'><a href="applicationview">Application</a></li>  */}
          {results}   
        </ul>
        {/* <div>no result found</div> */}
       </div>
  )

};

const Search = (props) => {
  const [text, setText] = useState("");
  const [searchby, setSearch] = useState("name");
  const [searchResults,setResult]=useState(null);
  const [error,setError]=useState(null);
  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      // alert("search for: "+text +"\nSearchby "+searchby);
      // console.log("searchcbY",searchby);
      // console.log("props",props);
      var prop=searchby;
      var val=text;
      var results=APPLICATIONS.filter(application=>text.toLowerCase()===application[searchby].toLowerCase());
      // var results=APPLICATIONS.filter(application=>application[searchby].includes(text));
      console.log("results",results);
      if(results===undefined || results.length==0){
        setError(true)
      }
      else{
        setResult(results);
      }
      
    }

    // axios.post("link",{
    //   //text,
    //   //searchby,
    // }).then(response=>{
    //   if (response.ok){
    //     setResult=(response.data);
    //   }
    //   else{
    //     console.log('Error '+response.status+' : '+response.statusText);
    //   }
    // }).catch(error=>console.log(error));
  };

  const chgText = evt => (setText(evt.target.value),console.log("text called"));
  const chgSerch = evt => (setSearch(evt.target.value),console.log("called"));
  return (
    <>
      <div className="wrap">
        <form onSubmit={onSubmit}>
          <div className="search">
            <input
            type="text"
            name="text"
            className="searchTerm"
            placeholder="Search application"
            value={text}
            onChange={chgText}

        />
        <button type="submit" className="searchButton">Search</button>
          
        </div>
          <select name="serchby" id="serchby" 
          onChange={chgSerch} value={searchby}
          >
            <optgroup label='Search by'>
              <option>name</option>
              <option>AppId</option>\
              <option>village</option>
              <option>taluk</option>
            </optgroup>
          </select>

       </form>
  <Results Resultlist={searchResults} error={error} onClick={(application)=>props.onClick(application)}/>
      </div> 
      
  </>
  );
};
export default Search;
