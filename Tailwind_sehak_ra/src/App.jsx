// import { useState } from 'react'/
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from "./Component/Card";
function App() {
  return (
    <>
    <h1 className="bg-yellow-500 text-black">Hell0, this is App JSX  file </h1>
      <Card username="Code With Zobhi" btntext="Click Chia"  secbtn="Chlick A "/>
      <Card username="zobhi code"  btntext="Click Zobhi"  secbtn="Chlick B " />
      <Card/> 
    </>
  
  );
}

export default App;
