import React, { useState } from 'react'; 

function Tag(props) {
    const [tag, setTag] = useState({
        name: "",
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
        setTag(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
    
      function submitTag(event) {
        props.onAdd(tag);
        setTag({
          name: "",
        });
        event.preventDefault();
      }

    return (
        <div>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight " 
            type="text" 
            placeholder="Add Tag"
            name="name"
            onChange={handleChange}
            value={tag.name}></input>
            <button className="bg-gray-500 hover:bg-gray-700 text-white 
            font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button"
            onClick={submitTag}
            >
            Add
            </button>
        </div>
    
    )
}

export default Tag