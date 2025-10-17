import { useState } from 'react'
import './App.css'
import Book from "./components/Book"
import getData from "./components/getData"

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;


function App() {
  const [count, setCount] = useState(0);
  const [book,setBook] = useState({
      title: null,
      author: null,
      isEbook: null,
      category: null,
      language: null,
      image: null,
      publishedDate: null,
      averageRating: null,
      saleability:null,
      canonicalVolumeLink: null,
      acsTokenLink:null
  })
  const [seenVol,setSeenVol] = useState([]);
  const [startIndex,setStartIndex] = useState(0);
  const [currIndex,setCurrIndex] = useState(0);
  const maxResults = 10;
  
  const makeQuery = async ()=>{
    let tempIndex = currIndex;
    let tempStartIndex = startIndex;
    console.log("Before is " + tempIndex);
    if(tempIndex >= 9){
      setCurrIndex(0);
      tempIndex = 0;

      console.log("currIndex: " + currIndex);
      setStartIndex(startIndex+10);
      tempStartIndex+=10;
    }
    console.log("start: " +tempStartIndex);
    let query = `https://www.googleapis.com/books/v1/volumes?q={}&startIndex=${tempStartIndex}&maxResult=${maxResults}&key=${ACCESS_KEY}`;
    console.log("Current is "+ tempIndex);
    let id = await callAPI(query,tempIndex);
    let currArr = seenVol;

    if(id && typeof id == "string"){
      console.log("this ran");
      currArr.push(id);
      setSeenVol(currArr);

    }
  }

  const callAPI = async (query,currIndex)=>{
    
    const response = await fetch(query);
    const json = await response.json();

    let jsonObject = json.items[currIndex];
    let tempIndex = currIndex;

    console.log(jsonObject);

    if(seenVol.includes(jsonObject.id)){
      while(seenVol.includes(jsonObject.id) && tempIndex < 10){
        tempIndex+=1;
        jsonObject = json.items[tempIndex];
        setCurrIndex(tempIndex);
      }
    }else{
      setCurrIndex(tempIndex+1);
    }
    // Should only reach entry 10 (index 9) max and no more
    
    
    console.log(tempIndex);
    const object = await getData(jsonObject);
    
    setBook(object);

    return object.id;
  }

  return (
   
    <div className="wholePage">
      {/*Plan: 1 row / 3 column grid with gap.*/}
      <div className="prevBooks">
        <h4>Previous books:</h4> 

      </div>
      
      <div className="mainContent">
        <h1>Book Finder</h1>
        <h3>Find your next book here!</h3>
        {/* Include component here */}
        <Book json = {book}/>
        <button onClick={() =>{makeQuery()}}><span>Generate!</span></button>
      </div>
      
      <div className="banList">
        <div>
          <h2>Ban List</h2>
          <p>Attributes here are banned! Click them to unban them.</p>
          <p>hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
