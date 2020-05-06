import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onChange={() => {console.log("test change text")}}
      />
    </React.Fragment>
  );
}

export default App;
