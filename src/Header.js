
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  var navigate = useNavigate();



  return (
    <>
      <div className="title"><b>My Todo</b></div>
      <div className="input">
        <input type="text" className="input1" name="todoname" placeholder="Todo name" />
        <input type="text" className="input2" name="tododesc" placeholder="Todo Description" />
        <button className="addtodo" onClick={() => {
          //console.log(data)
          var x = document.querySelector(".input1").value;
          var y = document.querySelector(".input2").value;
          var newtodo = { name: x, desc: y, status: "Notcompleted" };
          fetch(`https://6673019d6ca902ae11b2c41a.mockapi.io/api/todotask`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newtodo)
          })
            .then((res) => res.json())
            .then(() => navigate("/"))
        }}> Add todo</button>
      </div>
      {useEffect(() => {
        fetch(`https://6673019d6ca902ae11b2c41a.mockapi.io/api/todotask`, {
          method: "GET"
        })
          .then((res) => res.json())
          .then(() => navigate("/todo/Card"))
      }, [])}


    </>


  );

}
