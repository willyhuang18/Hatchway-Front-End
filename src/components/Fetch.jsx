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
      <div className="relative top-64  rounded-lg shadow-lg container h-80 ">
        <div className=" h-full w-full col-auto p-6  overflow-auto  ">
          {posts.map(post => (
              <div className="flex ">
                <div>
                  <img src={post.pic} className="rounded-full h-24 w-24 object-contain border-black border-2 p-1 mr-3" alt="icon"/>
                </div>
                <ul>
                  <li className="text-3xl font-bold uppercase " key={post.id}>{post.firstName} {post.lastName} </li>
                  <li>Email: </li>
                  <li>Company: </li>
                  <li>Skill: </li>
                  <li>Grade: </li>

                </ul>
              </div>
            ))
          }
        </div>
      </div>
    )
}


export default Fetch;