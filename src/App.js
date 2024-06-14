import './App.css';
import { Header } from './Header';

function App() {
  var data = [
    {
      name: "office task -1",
      desc: "this is the description for My First task",
      status: "Notcompleted"
    },
    {
      name: "office task -2",
      desc: "this is the description for My Second task",
      status: "Completed"
    },
    {
      name: "office task -3",
      desc: "this is the description for My Third task",
      status: "Notcompleted"
    }
  ]
  return (
    <div className="page">
      <Header data={data} />
    </div>
  );
}
export default App;
