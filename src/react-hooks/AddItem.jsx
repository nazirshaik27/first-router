import React, { useState } from 'react'

const AddItem = () => {
    const [items, setItems] = useState(['item1', 'item2', 'item3']);
    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
      };
    
      const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
      };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove Item</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  )
}

export default AddItem
