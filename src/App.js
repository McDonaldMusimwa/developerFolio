import {useEffect, useState} from 'react';
import "./App.scss";
import Main from "./containers/Main";
import Cursor from './components/ui/Cursor';
function App() {
const [screensize,setScreensize]=useState(0)


useEffect(()=>{
  function windowResize(){
    setScreensize(window.innerWidth)
  }
window.addEventListener("resize",windowResize)

  return ()=>{
    window.removeEventListener("resize",windowResize)
  }
},[])

  return (
    <div >
    {screensize>700 && <Cursor />}
      <Main />
    </div>
  );
}

export default App;
