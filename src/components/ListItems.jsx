import React from "react";

const ListItems = ({id,deleteItem,completeItem,value,completed}) => {
  return (
    <li className="rounded-xl flex justify-between items-center py-2 px-4 bg-gray-100 text-base mb-2;">
      <div className="task">
        <span onClick={() => completeItem(id)} className="mr-3 cursor-pointer">
          {completed ? (
            <i className="fa-regular fa-circle-check"></i>
          ) : (
            <i className="fa-regular fa-circle"></i> 
          )}
        </span>
        <span>{value}</span>
      </div>
      <span onClick={() => deleteItem(id)} className="hover:bg-red-500 h-7 w-7 rounded-full text-center cursor-pointer duration-300	hover:text-white flex items-center justify-center">
        X
      </span>
    </li>
  );
};

export default ListItems;
