import React,{ useEffect,useState } from "react";
import axios from "axios";

function Fetch(){
    const [posts, setPosts] = useState([]);
    const [open, setOpen]= useState(true);

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
              <div className="flex flex-warp gap-10 ">
                <div>
                  <img src={post.pic} className="rounded-full h-24 w-24 object-contain border-black border-2 p-1 mr-3" alt="icon"/>
                </div>
                <div>
                  <p className="text-3xl font-bold uppercase " key={post.id}>{post.firstName} {post.lastName} </p>
                  <p>Email: {post.email}</p>
                  <p>Company: {post.company} </p>
                  <p>Skill: {post.skill} </p>
                  <p>Average: {post.grades.reduce((a,b) => Number(a) + Number(b), 0) / post.grades.length} </p>
                    <ul>
                    {!open ? 
                    post.grades.map((grade, index) =>(
                      <li key={index}>Test{post.grades.indexOf(grade)+ 1 +":"}{grade}</li>
                    )) : " "
                  }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
}


export default Fetch;