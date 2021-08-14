import React from 'react';
import Characters from "./components/Characters";

function App() {
  return (
    <div className="container">
      <div className="fixed-top bg-light">
        <h1 className="text-center p-2">Rick and Morty API</h1>
      </div>
      <div className="mt-5">
        <Characters/>
      </div>
    </div>
  )
}

export default App
