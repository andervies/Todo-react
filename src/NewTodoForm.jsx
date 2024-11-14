import { useState } from "react";

export function NewTodoForm(prop) {
  const [newItem, setNewItem] = useState("Placeholder");

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === "") return;

    prop.addTodo(newItem);

    setNewItem("");
  }

  return (
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="text">Enter an item </label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        {" "}
        Add{" "}
      </button>
    </form>
  );
}
