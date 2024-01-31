import React, { useState, useEffect } from 'react'
import Addtodo from '../Components/Addtodo'
import ListTodo from '../Components/ListTodo'
// import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
const HomePage = () => {
  // const { addToast } = useToasts();

  const [todos, settodos] = useState(() => {
    const savedtodos = localStorage.getItem("todos");

    if (savedtodos) {
      return JSON.parse(savedtodos);
    }
    return [];
  });

  const [isediting, setediting] = useState(false);
  // const [newdata, setnewdata] = useState(null);
  const [title, settitle] = useState('');
  const [info, setinfo] = useState('');
  const [getid, setgetid] = useState(null);

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  // useEffect(() => {


  //   const fetchTodos = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/todos/get");
  //       // console.log(res);


  //       // if (res.data.success) {
  //       settodos(res.data);
  //       // alert("get worked correctly");
  //       // addToast(res.data.message, { appearance: "success" });
  //       // }

  //     } catch (error) {
  //       console.log("error while fetching the data from backend", error);
  //       // addToast(res.data.message, { appearance: "error" });


  //     }
  //   }
  //   fetchTodos();
  // }, [])


  return (
    <>

      <div className='flex flex-col jusitfy-center items-center mt-12'>
        <Addtodo todos={todos} settodos={settodos} isediting={isediting} setediting={setediting} title={title} info={info} settitle={settitle} setinfo={setinfo} getid={getid} setgetid={setgetid} />

        <ListTodo todos={todos} settodos={settodos} isediting={isediting} setediting={setediting} settitle={settitle} setinfo={setinfo} setgetid={setgetid} />




      </div>



    </>
  )
}

export default HomePage