import { useState } from 'react'
import './App.css'

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;


function App() {
  const [count, setCount] = useState(0)

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

        <button>Generate!</button>
      </div>
      
      <div className="banList">
        <div>
          <h2>Ban List</h2>
          <p>Attributes here are banned! Click them to unban them.</p>
          <p>hello</p>
          <p>hello again</p>
        </div>
      </div>
      
    </div>
  )
}

export default App
