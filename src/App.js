import { useState } from "react";


function App() {

  const [newTask, setNewTask] = useState("")

  const onInputChange = ({target}) => setNewTask(target.value)

  const onFormSubmit = (event) => {
    console.log("Wciśnięto przycisk");
    event.preventDefault()
  }

  return (
    <form onSubmit={onFormSubmit}>
     
        <h1>Hello</h1>
      
   
        <h2>Lista Zadań</h2>
        <input value={newTask} onChange={onInputChange} />
        <button>Dodaj</button>
     

    </form>

  );
}

export default App;
