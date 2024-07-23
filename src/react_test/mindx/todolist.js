import React, { useState } from "react";

const Todolist = () => {
  const [list, setList] = useState("");
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [checkitem,setCheckItem] = useState([])
  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (list.trim() === "") {
      return;
    }
    alert("done!");
    setSubmittedTasks([...submittedTasks, list]);
    setList("");
  };

  const handleDelete = (index) => {
    const updatedTasks = [...submittedTasks];
    updatedTasks.splice(index, 1);
    setSubmittedTasks(updatedTasks);
  };
  const handleCheckbox =(index) => {
    const newCheckboxitems = [...checkitem];
    newCheckboxitems[index] = !newCheckboxitems[index]
    setCheckItem(newCheckboxitems)
  }
  return (
    <div>
      <h1 className="text-center mt-20">Todo List</h1>
      <div className="ml-32">
        <form onSubmit={handleClick}>
          <input
            placeholder="Enter your task here ..."
            className="font-semibold outline-none text-black rounded-lg p-2"
            value={list}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </form>
      </div>
      <hr />
      <div className="ml-32 ">
        {submittedTasks.map((task, index) => (
            <div>
            <div key={index} className="flex items-center mt-3">
            <input
             type="checkbox" 
             className="mr-2"
             checked={checkitem[index] || false}
             onChange={() => handleCheckbox(index)}
            
            />
            <p>{task}</p>
            {checkitem[index] && (
                  <button
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => handleDelete(index)}
                >
                  Xóa
                </button>
            )}
          
            
          </div>
            
            </div>
         
        ))}
       
      </div>
      <p className="absolute left-28 bottom-10">{submittedTasks.length} task left</p>
      <div className="absolute right-28 bottom-10">
        
            Mindx Todo list
        </div>
    </div>
  );
};

export default Todolist;
