import React, { useState } from "react";
import ListItems from "./ListItems";

const TodoApp = () => {
  const [display, setDisplay] = useState("");
  const [items, setItems] = useState([]);

  const showData = (e) => {
    setDisplay(e.target.value);
  };

  const addItems = () => {
    setItems((newItems) => {
      return [...newItems, { text: display, completed: false }];
    });
    setDisplay(""); 
  };

  const deleteItem = (id) => {
    setItems((newItems) => {
      return newItems.filter((arrEl, i) => {
        return i !== id;
      });
    });
  };

  const completeItem = (id) => {
    setItems((newItems) => {
      return newItems.map((item, i) => {
        if (i === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <div className="lg-['110px'] m-auto">
        <div className="flex h-screen w-full justify-center p-6">
          <div className="box max-w-sm w-full h-fit bg-white rounded-md p-4">
            <h1 className="font-bold text-center text-2xl font-poppins">
              To-Do Application
            </h1>
            <div className="input text-center mt-8 flex gap-2">
              <input
                onChange={showData}
                value={display} 
                className="flex-1 h-10 p-3 rounded-lg border border-[#941CB5] focus:outline-none"
                type="text"
                placeholder="Input your task"
              />
              <button onClick={addItems} className="rounded-lg bg-[#941CB5] w-10 h-10 text-white font-bold text-center">
                Add
              </button>
            </div>

            <div className="tasks mt-8">
              <ul>
                {items.map((taskItem, index) => {
                  return (
                    <ListItems
                      key={index}
                      id={index}
                      deleteItem={deleteItem}
                      completeItem={completeItem}
                      value={taskItem.text}
                      completed={taskItem.completed}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
