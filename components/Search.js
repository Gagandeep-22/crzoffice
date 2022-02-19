// import { DropdownItem,DropdownToggle,DropdownMenu,DropdownL} from 'reactstrap';
// import { Dropdown } from 'react-bootstrap';

import { useState } from 'react';
import './Search.css';

const Search = () => {
  const [text, setText] = useState("");
  const [searchby, setSearch] = useState("Name");
  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      alert("serach of:"+text +"Searchby"+searchby);
      console.log("saerchcbY",searchby);
      setSearch("Name");
    }
  };

  const chgText = evt => (setText(evt.target.value),console.log("text called"));
  const chgSerch = evt => (setSearch(evt.target.value),console.log("calleg"));
  return (
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
        <optgroup label='Search by' >
          <option  >Name</option>
          <option  >AppId</option>
        </optgroup>
      </select>

  </form>
  </div>
  );
};
export default Search;
