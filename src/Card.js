import { Cards } from './Cards';

export function Card({ data }) {
  //console.log(data)
  var select = document.querySelector(".drop");
  var value = '', res;
  return (
    <div>
      <div className="card-section">
        <div><b>My Todos</b></div>
        <div><b>Status filter: </b>
          <select className="drop">
            <option>All</option>
            <option>Completed</option>
            <option>Not completed</option>
          </select>
        </div>
      </div>
      <div className="cards">
        <div className="row">
          {data.map((ele, index) => {
            return <Cards key={index} name={ele.name} desc={ele.desc} status={ele.status} />;
          })}
        </div>
      </div>
    </div>
  );
}
