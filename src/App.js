
import './App.css';
import AddEdite from './component/AddEdite';
import Header from './component/Header';
import Register from './component/Register';
import { Routes, Route, Link } from "react-router-dom";
import ListRecord from './component/index ';

function App() {
 
  return (
    <div className='App'>
      <Header/>
<Routes>
<Route path="/" element={<ListRecord/>}></Route>

    <Route path="/add" element={<AddEdite/>} ></Route>
    <Route path="/update/:id" element={<AddEdite/>} ></Route>

</Routes>

    </div>
    
    
  );
}

export default App;