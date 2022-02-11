import { useState } from 'react';

const Search = () => {
  const [text, setText] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = evt => setText(evt.target.value);

  return (
    <div className="search">
      <form onSubmit={onSubmit} className="search__text">
        <input
          type="text"
          name="text"
          placeholder="Search applications"
          value={text}
          onChange={onChange}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
