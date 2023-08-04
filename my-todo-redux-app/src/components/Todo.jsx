import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoInput from './TodoInput';
function Todo() {
    const [data, setData]= useState([]);

    const fetchdata = async()=>{

        try{
            const res = await axios.get(`  http://localhost:8080/todo`)
            console.log(res.data);
            setData(res.data)
        }catch(err){

        }
    }

    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <div>Todo
        <TodoInput></TodoInput>
        <div>
        {
            data.map((e)=>(
                <div key={e.id} style={{border:"solid", width: "300px" , margin: "auto"}}>
                    <h3>{e.title}</h3>
                    <h4>{e.status ? "True" : "False"}</h4>
                    <button>DELETE</button>
                </div>
            ))
        }
        </div>
     
    </div>
  )
}

export default Todo