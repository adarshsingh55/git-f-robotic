import React, { useState, useRef, useContext } from "react";
import "./SearchTag.css";
import noteContext from "../../context/Nodecontext";



function SearchTag(props) {

  const context = useContext(noteContext);
  const { getbyTag, setLoding,Tag } = context;
  const ref = useRef("");
  const [filteredData, setfilteredData] = useState([]);
  const { placeholder } = props;


  // let setsNotes = new Set();
  // notes.forEach((element) => {
  //   if (element.tag === undefined) {
  //     setsNotes.add("NO tag");
  //   } else {
  //     setsNotes.add(element.tag);
  //   }
  // });
  // let setArr = Array.from(setsNotes);
  //  console.log( setsNotes);


  const handleFilter = (event) => {
    const searchword = event.target.value;
    // console.log(searchword);
    // let newArr =setArr
    const newFilter = Tag.filter((value) => {
      return value.toLowerCase().includes(searchword.toLowerCase());
    });
    if (searchword === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };


  const clearinput = () => {
    setfilteredData([]);
    ref.current.value = "";

  };


  const handelSubmit = (e) => {
    setLoding(true);
    e.preventDefault();
    getbyTag(ref.current.value);
    // setfilteredData(setArr);
    clearinput()
  };

  return (
    <div className="searchTag-search">
      <form onSubmit={handelSubmit} className="searchTag-input">
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchTag-icon">
          {filteredData.length === 0 ? (
            <img
              className="searchTag-searchIcon"
              src="./img/magnifying.svg"
              alt="search"
            />
          ) : (
            <img
              className="searchTag-searchIcon"
              src="./img/xmark-solid.svg"
              alt="search"
              id="clearBtn"
              onClick={clearinput}
            />
          )}
          {/* <i className='searchTag-searchIcon'  class="fa-solid fa-magnifying-glass"></i> */}
        </div>
      </form>
      {filteredData.length !== 0 && (
        <div className="searchTag-result">
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <div
                onClick={()=>ref.current.value = value}
                className="searchTag-resultItem"
                key={key}
              >
                {value}{" "}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchTag;
