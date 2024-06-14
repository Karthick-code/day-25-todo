import { useState } from 'react';
import { Card } from './Card';

export function Header({ data }) {
  var [data, setData] = useState(data);
  var val1 = "", val2 = "";
  return (
    <div>
      <div className="title"><b>My Todo</b></div>
      <div className="input">
        <input type="text" className="input1" name="todoname" placeholder="Todo name" />
        <input type="text" className="input2" name="tododesc" placeholder="Todo Description" />
        <button className="addtodo" onClick={() => {
          //console.log(data)
          var x = document.querySelector(".input1").value;
          var y = document.querySelector(".input2").value;
          var obj = { name: x, desc: y, status: "Notcompleted" };
          setData([...data, obj]);
        }}> Add todo</button>
      </div>
      <Card data={data} />
    </div>

  );

}
