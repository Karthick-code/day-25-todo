export function Cards({ name, desc, status }) {
  var op2 = "";
  if (status == "Notcompleted") {
    op2 = "Completed";
  }
  else if (status == "Completed") {
    op2 = "Notcompleted";
  }
  return (
    <div className="col-4-lg card-display">
      Name: {name}<br />
      Description:  {desc}<br />
      status: <select className="drop">
        <option>{status}</option>
        <option>{op2}</option>
      </select>
    </div>

  );

}
