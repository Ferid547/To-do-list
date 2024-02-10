import { useState } from "react";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((prevData) => [...prevData, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="items">
      <h1>To Do List</h1>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        value={newItem}
        placeholder="Add an item..."
      />

      <button className="addBtn" onClick={() => addItem()}>
        Add
      </button>

      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.value}
            <MdDelete
              tabIndex={1}
              className="icon"
              onClick={() => deleteItem(i.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
