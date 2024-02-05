import { useState } from "react";


function App() {

  const [newTask, setNewTask] = useState("")

  const onInputChange = ({target}) => setNewTask(target.value)


  return (
    <div>
     
        <h1>Hello</h1>
     
      
        <h2>Lista Zadań</h2>
        <input value={newTask} onChange={onInputChange} />
        <button >Dodaj</button>
      

    </div>

  );
}

export default App;
