import React,{ useEffect,useState } from "react";
import axios from "axios";

function Fetch(){
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
        <div>
            <ul>
              {posts.map(post => (
              <li key={post.id}>{post.firstName}</li>))
              }
  
            </ul>
        </div>
    )
}


export default Fetch;