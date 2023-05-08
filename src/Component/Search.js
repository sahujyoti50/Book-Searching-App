import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function App() {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: "Things Fall Apart",
      author:"Hans Christian Andersen"
    },
    {
      id: 1,
      name: "Fairy tales",
      author:"Dante Alighieri",
    },
    {
      id: 2,
      name: "The Divine Comedy",
      author:"Hans Christian Andersen",
    },
    {
      id: 3,
      name:"The Epic Of Gilgamesh",
      author:"Dante Alighieri",
    },
    {
      id: 4,
      name: "The Book Of Job",
      author:"Unknown",
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left',backgroundColor:"lightpink",borderRadius:"5px 5px 0px 0px",padding:"5px"}}>ID: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' ,backgroundColor:"lightgreen",borderRadius:"0px 0px 0px 0px",padding:"5px"}}>Name: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'left',backgroundColor:"lightblue",borderRadius:"0px 0px 5px 5px",padding:"5px"}}>Author: {item.author}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default App