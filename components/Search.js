import { useState } from 'react';
import './Search.css';

const Search = () => {
  const [text, setText] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = evt => setText(evt.target.value);

  return (<div className="wrap">
    <form onSubmit={onSubmit}>
      <div className="search">
        <input
        type="text"
        name="text"
        className="searchTerm"
        placeholder="Search application"
        value={text}
        onChange={onChange}

    />
    <button type="submit" className="searchButton">Search</button>
    </div>
  </form>
  </div>
  );
};
export default Search;
