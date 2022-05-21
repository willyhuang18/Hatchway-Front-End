import React,{ useState } from "react";

function Fetch({props}){
  const [open, setOpen]= useState(true);
    
    return (
      <div className="relative rounded-lg  ">
        <div className=" h-full w-full col-auto p-6  overflow-auto  ">
              <div className="flex flex-warp gap-20 ">
                <div>
                  <img src={props.pic} className="rounded-full h-24 w-24 object-contain border-black border-2 p-1 mr-3" alt="icon"/>
                </div>
                <div>
                  <p className="text-3xl font-bold uppercase " key={props.id}>{props.firstName} {props.lastName} </p>
                  <p>Email: {props.email}</p>
                  <p>Company: {props.company} </p>
                  <p>Skill: {props.skill} </p>
                  <p>Average: {props.grades.reduce((a,b) => Number(a) + Number(b), 0) / props.grades.length} </p>
                    <ul className="p-2">
                    {! open ? 
                    props.grades.map((grade, index) =>(
                      <li key={index}>Test{props.grades.indexOf(grade)+ 1 +": "}{grade}</li>
                    )) : " "
                  }
                  </ul>
                </div>
                <div className="w-0 h-0 pt-1 absloute transition-transform ">
                  <button className=" hover:text-gray text-black font-bold py-1 px-1" onClick={() => setOpen(!open)}>
                    {open ?
                      <svg className="fill-current w-4 h-4"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                      :
                      <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
                      }
                  </button>
                </div>
              </div>
        </div>
      </div>
    )
}


export default Fetch;