import React,{ useEffect,useState } from "react";
import axios from "axios";
import "./components/App.css";
import Fetch from "./components/Fetch";

function App() {
  const [posts, setPosts] = useState([]);

    useEffect(()=>{
      axios.get('https://api.hatchways.io/assessment/students')
        .then(res =>{
          console.log(res.data.students);
          setPosts(res.data.students);
        })
        .catch(err => {
          console.log(err);
        })
    },[])
  return ( 
      <div className=" grid place-items-center container pt-56 mx-56 " >
        <div className="max-w-[100px] rounded overflow-y-scroll shadow-lg max-h-96 ">
        {posts.map((post,index) => (
          <Fetch key={index} props={post}/>
        ))
        }
        </div>
      </div>
  );
}

export default App;
