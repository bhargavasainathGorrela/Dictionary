// import React, { useState } from "react";

// function SearchBox() {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     alert(`Searching for: ${query}`);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex space-x-3">
//         <input
//           type="text"
//           value={query}
//           placeholder="Enter search text..."
//           onChange={(e) => setQuery(e.target.value)}
//           className="px-4 py-2 w-72 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSearch}
//           className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Search;
import React from 'react'

function Search() {
    const name="Bhargavasainath";
    const num1=10, num2=20;

  return (
    <div>
        <center>
            <h1>my name is {name}</h1>
             <h3>{name.length>5?'longname':'shortname'}</h3>
            <h4>sum of {num1} and {num2} is {num1+num2}</h4>
            <button className='btn' onClick={()=>alert("clicked")}>Click</button>
        </center>
      
    </div>
  )
}

export default Search
