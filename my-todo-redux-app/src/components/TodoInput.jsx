import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postfail,postrequest,postsuccess } from '../redux/action';

const intialvlaue = {
  title: "",
  status: true
}
function TodoInput() {
  const [ todo, setTodo] = useState(intialvlaue);
  console.log(todo);

const dispatch = useDispatch();

  const handleaddtodo = async(e)=>{
    e.preventDefault();
    try{
      dispatch(postrequest());
      const res = await axios.post(` http://localhost:8080/todo`, todo)
              dispatch(postsuccess(res.data))
    }catch(err){
      console.log(err);
      dispatch(postfail());
    }
  }


  return (
    <div>
        
        <input type="text"
        placeholder='add todo'
        value={todo.title}
        onChange={(e)=>setTodo({...todo, title: e.target.value})}
        />
        <input type="submit" onClick={handleaddtodo} />
    </div>
  )
}

export default TodoInput