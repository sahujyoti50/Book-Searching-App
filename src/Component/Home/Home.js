import { useEffect, useState } from "react";
import BookList from "../../API/BookList.json";
import "./Home.css";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [booksList, setBookList] = useState(BookList);

  const searchClickHandler = () => {
    const filteredValue = BookList.filter(
      (books) =>
        books.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        books.author.toLowerCase().includes(searchInput.toLowerCase()) ||
        books.year.toString().includes(searchInput)
    );
    setBookList(filteredValue);
  };

  useEffect(() => {
    searchClickHandler();
  }, [searchInput]);

  return (
    <div className="homeBody">
      <div>
        <input
          type="search"
          placeholder="Search by Book Name.."
          className="serachBox"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        {/* <button type="button" className="search" onClick={searchClickHandler}>
          Search
        </button> */}
      </div>
      <div className="bookList">
        {booksList.map((books) => {
          return (
            <ul key={books.pages} className="Ulist">
              <img src={books.imageLink} alt={books.title} />
              <li>
                <b>{books.title}</b>
              </li>
              <li>{books.author}</li>
              <li>{books.pages}</li>
              <li>{books.language}</li>
              <li>{books.year}</li>
              <li>{books.country}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
