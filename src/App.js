import Home from './component/Home';
import Womensrunning from './component/Womenrunning';
import Navbar from './component/Navbar';
import Mens from "./component/Mens";
import Womens from "./component/Womens";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/mens' element = {<Mens/>}/>
        <Route path='/womens' element = {<Womens/>}/>
        
      </Routes>
      
    </>
  )
}

export default App;
