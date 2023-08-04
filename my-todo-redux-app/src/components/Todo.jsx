import React, { useEffect } from 'react'
import axios from 'axios'
import TodoInput from './TodoInput';
import { useDispatch, useSelector } from 'react-redux';
import { getrequest,getsuccess,getfail,deletefail,deleterequest,deletesuccess } from '../redux/action';
function Todo() {
    // const [data, setData]= useState([]);
    const data = useSelector((state)=> state.data);
    const dispatch = useDispatch();

    const fetchdata = async()=>{

        try{
//get request
dispatch(getrequest());
            const res = await axios.get(`http://localhost:8080/todo`)
//get success
dispatch(getsuccess(res.data));
            console.log(res.data);
            // setData(res.data)
        }catch(err){
            dispatch(getfail());
            console.log(err);

        }
    }

    useEffect(()=>{
        fetchdata();
    },[])

const handledlete= async(id)=>{
   try{
    dispatch(deleterequest());
    const res = await axios.delete(`http://localhost:8080/todo/${id}`)
     dispatch(deletesuccess(id));
   }catch(err){
    dispatch(deletefail());
    console.log(err);
   }
}

  return (
    <div>Todo
        <TodoInput></TodoInput>
        <div>
        {
            data.map((e)=>(
                <div key={e.id} style={{border:"solid", width: "300px" , margin: "auto"}}>
                    <h1>{e.id}</h1>
                    <h3>{e.title}</h3>
                    <h4>{e.status ? "True" : "False"}</h4>
                    <button onClick={()=> handledlete(e.id)}>DELETE</button>
                </div>
            ))
        }
        </div>
     
    </div>
  )
}

export default Todo