import './App.css';
import { Header } from './Header';
import { Card } from "./Card";
import { Routes, Route } from "react-router-dom"

function App() {
  // var data = [
  //   {
  //     name: "office task -1",
  //     desc: "this is the description for My First task",
  //     status: "Notcompleted"
  //   },
  //   {
  //     name: "office task -2",
  //     desc: "this is the description for My Second task",
  //     status: "Completed"
  //   },
  //   {
  //     name: "office task -3",
  //     desc: "this is the description for My Third task",
  //     status: "Notcompleted"
  //   }
  // ]
  
  return (
    <div className="page">
      
      <Header />

      <Routes>
        <Route path="/" element={<Header />} />
        
        <Route path="/todo/Card" element={<Card />} />
      </Routes>
    </div>
  );
}
export default App;
