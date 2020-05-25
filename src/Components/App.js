import React  from 'react';
import Router from "Components/Router";
import Home from "Routes/Home";

function App() {
  return (
    <>
      <Router path="/" exact component={Home}/>
    </>
  );
}

export default App;
