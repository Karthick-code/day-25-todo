import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Cards({ id, name, desc, status }) {
  var [state, setState] = useState(status);
  var navigate = useNavigate();
  var op2 = ""; var style
  var handleChange = (event) => {
    setState(event.target.value)
    var updatetodo = { name: {name }, desc: {desc}, status: state };
    fetch(`https://6673019d6ca902ae11b2c41a.mockapi.io/api/todotask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatetodo)
    })
  }
  if (status === "Notcompleted") {
    op2 = "Completed";
    style = {
      backgroundColor: "rgb(252, 167, 181)",
      border: "2px solid black",

    }
  }
  else if (status === "Completed") {
    op2 = "Notcompleted";
    style = {
      backgroundColor: "rgb(8, 143, 116) ",
      border: "2px solid black"
    }
  }
  return (
    <div className="col-4-lg card-display">
      Name: {name}<br />
      Description:  {desc}<br />
      status: <select className="drop1" style={style} onchange={handleChange}>
        <option value={status}>{status}</option>
        <option value={op2}>{op2}</option>
      </select>
      <div className="buts">
        <button type="button" id="edit" onClick={() => {

          var Tname = prompt("enter task name:");
          console.log(Tname)
          var Tdesc = prompt("enter task Description:")
          console.log(Tdesc)
          if (Tname !== null && Tname !== "" && Tdesc !== "" && Tdesc !== null) {
            var updatetodo = { name: Tname, desc: Tdesc, status: "Notcompleted" };
            fetch(`https://6673019d6ca902ae11b2c41a.mockapi.io/api/todotask/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(updatetodo)
            })
            .then((res)=>res.json())
            .then(()=>navigate("/"))
          }
        }}>Edit</button>


        <button type="button" id="delete" onClick={(e) => {

          var confirmBox = window.confirm("Are you sure you want to delete this item?");

          if (confirmBox === true) {
            fetch(`https://6673019d6ca902ae11b2c41a.mockapi.io/api/todotask/${id}`, {
              method: "DELETE"
            })
            .then((res)=>res.json())
            .then(()=>navigate("/"))
          }
        }} >Delete</button>
      </div>
    </div>

  );

}

