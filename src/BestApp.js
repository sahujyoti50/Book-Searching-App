import React, { useEffect, useState } from "react";
import books from "./API/BookList.json";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Link, Switch } from "react-router-dom/cjs/react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./App.css";

const BOOKS = [
  {
    id: 0,
    name: "Things Fall Apart",
    author: "Hans Christian Andersen",
  },
  {
    id: 1,
    name: "Fairy tales",
    author: "Dante Alighieri",
  },
  {
    id: 2,
    name: "The Divine Comedy",
    author: "Hans Christian Andersen",
  },
  {
    id: 3,
    name: "The Epic Of Gilgamesh",
    author: "Dante Alighieri",
  },
  {
    id: 4,
    name: "The Book Of Job",
    author: "Unknown",
  },
];

function BestApp() {
  const [input, setInput] = useState("");
  const [bookList, setBookList] = useState(books);

  const searchHandler = () => {
    const filtered = books.filter((book) =>
     book.title.toLowerCase().includes(input.toLowerCase())
    );
    setBookList(filtered);
  };

  useEffect(() => {
    searchHandler();
  }, [input]);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
    //will contain all autosearch option
  };

  //   const handleOnHover = (result) => {
  //     // the item hovered
  //     console.log(result);
  //   };

  const handleOnSelect = (book) => {
    // the item selected
    setInput(book.name);
  };

  const handleOnFocus = () => {
    console.log("focused");
    //when focus on search box
  };
  const formatResult = (book) => {
    return (
      <>
        <span style={{ backgroundColor: "lightgreen", padding: "5px" }}>
          Name: {book.name}
        </span>
      </>
    );
  };
  const clearHandler=()=>{
    setInput("");
    setBookList(books);
  }

  return (
    <>
      <nav
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          fontSize: "20px",
          border: "1px solid green",
          margin: "10px",
        }}
      >
        <Link style={{ textDecoration: "none", color: "green" }} to="/booklist">
          BookList
        </Link>
        <Link
          style={{ textDecoration: "none", color: "green", marginLeft: "35px" }}
          to="/home"
        >
          Home
        </Link>
      </nav>
      <Switch>
        <Route path="/booklist">
          <div style={{ textAlign: "center" }}>
            {/* <form onSubmit={searchHandler}> */}
            {/* <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{border:"none",padding:"10px",width:"50%",boxShadow:"1px 2px 5px gray",margin:"10px"}}
            /> */}

            <ReactSearchAutocomplete
              items={BOOKS}
              onSearch={handleOnSearch}
              //   onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
              value={input}
              // onChange={(e) => setInput(e.target.value)}
              style={{
                border: "none",
                padding: "10px",
                boxShadow: "1px 2px 5px gray",
                margin: "10px"
              }}
            />
           <button style={{backgroundColor:"lightGreen",border:"none",padding:"10px",margin:"10px"}} onClick={clearHandler}>clear</button>
         <br/>
            {/* </form> */}
            <div style={{ display: "inline-flex" }}>
              {bookList.map((book) => (
                <div
                  key={book.id}
                  style={{
                    border: "1px solid green",
                    margin: "10px",
                  }}
                >
                  <img src={book.imageLink} />
                  <p>{book.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Route>
        <Route path="/home">
          <h2 style={{ textAlign: "center" }}>Welcome to book filding App</h2>
        </Route>
      </Switch>
    </>
  );
}

export default BestApp;
