
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [dates, setDates] = useState([]);

  const inputRef = useRef();
  const dateRef = useRef();

  const addToList = () => {
    if(inputRef.current.value === "" || dateRef.current.value === "") {
      alert("Empty!");
    }
    else{
      setList([...list, inputRef.current.value]);
      setDates([...dates, dateRef.current.value]);

      inputRef.current.value = "";
      dateRef.current.value = "";

      alert("Added To List!");
    }
  };

  return (
    <div className="container">
      <div className="inputs">
        <input
          ref={inputRef}
          type="text"
          placeholder="What To Do..."
        />
        <input
          ref={dateRef}
          type="date"
          min="2025-09-01"
          max="2030-10-10"
        />
        <button className="add-btn" onClick={addToList}>ADD</button>
      </div>

      <div className="Result">
        <table border="1" cellPadding="8" className="todo-table">
          <thead>
            <tr>
              <th>TO-DO</th>
              <th>Time</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {list.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>{dates[index]}</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
