import React,{ useEffect,useState } from "react";
import axios from "axios";
import "./components/App.css";
import Fetch from "./components/Fetch";

function App() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");

    useEffect(()=>{
      axios.get('https://api.hatchways.io/assessment/students')
        .then(res =>{
          const newStudent = [];
          console.log(res.data.students);
          res.data.students.map((student) => {
            return newStudent.push(student);
          })
          setPosts(newStudent);
        })
        .catch(err => {
          console.log(err);
        })
    },[])
  return ( 
      <div className=" grid place-items-center container pt-56 mx-56 " >
        <div className="max-w-[100px] rounded overflow-y-scroll shadow-lg max-h-96  hover:max-h-full">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"  
          type="text" onChange={(event) => setName(event.target.value)} placeholder="Search By name"></input>
        {posts.filter((val) => {
            if (name === "") {
              return val;
            } else {
              return val.firstName
              .concat(" ")
              .concat(val.lastName)
              .toLowerCase()
              .includes(name.toLowerCase().trim())
              
            } 
          })
        .map((post,index) => (
          <Fetch key={index} props={post}/>
        ))
        }
        </div>
      </div>
  );
}

export default App;
