import { useEffect, useState } from 'react';
import { Cards } from './Cards';

export function Card() {
  var [data,setData]=useState([]);
  var [filter,setFilter]=useState("All");
   useEffect(()=>{
     fetch(`https://6673019d6ca902ae11b2c41a.mockapi.io/api/todotask`,{
      method:"GET"
    })
    .then((res)=> res.json())
    .then((d1)=> setData(d1)
     );
  },[])
  const handleChange=(event)=>{
    setFilter(event.target.value)
  }
  data = (filter !== "All") ? data.filter((ele) => {
         return ele.status === filter
      }) : data
  
  return (
    <div>
      <div className="card-section">
        <div><b>My Todos</b></div>
        <div><b>Status filter: </b>
          <select className="drop" onChange={handleChange} >
            <option value ="All">All</option>
            <option value ="Completed">Completed</option>
            <option value ="Notcompleted">Notcompleted</option>
          </select>
        </div>
      </div>
      <div className="cards">
        <div className="row">
          
          {data.map((ele, index) => {
            return <Cards  key={index} data={data} id={ele.id} name={ele.name} desc={ele.desc} status={ele.status} />;
          })}
        </div>
      </div>
    </div>
  );
}

