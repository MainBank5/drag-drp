import { useState, useEffect } from "react";

const List = () => {
  const [item, setItem] = useState("");
  const [todo, setToDo] = useState([]);

  const handleInput = (e) => {
    setItem(e.target.value);
  };

  const addToDo = () => {
    if (!item) return;
    setToDo([...todo, { task: item, id: todo.length, completed: false }]);
    setItem(""); // Clear input after adding todo
  };

  const handledeleteToDo = (id) => {
    let newTodo = todo.filter((val) => val.id !== id);
    setToDo(newTodo);
  };

  const handleTaskCompletion = (id) => {
    const updatedTodo = todo.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setToDo(updatedTodo);
  };

  useEffect(() => {
    console.log("Todo list length changed:", todo.length);
  }, [todo]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-96 p-4 bg-white rounded shadow-lg">
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-grow px-3 py-2 mr-2 border rounded"
            placeholder="Add a new todo"
            value={item}
            onChange={handleInput}
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={addToDo}
          >
            Add
          </button>
        </div>
        <ul>
          {todo.map((itm) => (
            
            <li
              key={itm.id}
              className={`flex text-white justify-between items-center p-3 mb-2 bg-gray-100 rounded shadow ${
                itm.completed ? "line-through" : ""
              }`}
            >
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 cursor-pointer"
                  checked={itm.completed}
                  onChange={() => handleTaskCompletion(itm.id)}
                />
                {itm.task}
              </label>
              <button
                className="text-red-400 px-3 py-1 text-sm bg-red-500 rounded hover:bg-red-600"
                onClick={() => handledeleteToDo(itm.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;


