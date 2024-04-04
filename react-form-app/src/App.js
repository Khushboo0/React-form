import React from 'react'
import ReactForm from './reactForm';

function App() {
  const formStyle = {
    marginLeft:'auto',
    marginRight:'auto',
    width:'500px'
  }
  return (
    <div style={formStyle}>
      <h1>
        React Form!
      </h1>
      <ReactForm/>
    </div>
  );
}

export default App;
