import React, { useState } from 'react'
import axios from 'axios'





const ListTodo = ({ todos, settodos, setediting, settitle, setinfo, setgetid }) => {

    const handledelete = (id) => {
        // console.log(id);
        // const deletedtodo = await axios.delete(`http://localhost:5000/todos/delete/${id}`);


        const updateitems = todos.filter((todo) => {
            return todo.id !== id;

        })
        // console.log(updateitems);
        settodos(updateitems);
    }




    const handleupdate = (id) => {
        // first get the id of udated todo 
        // then toggle the or change add note to update todo with prevous info of tdod 
        // then make changes of new todod 
        // then save new as new todod 
        const previusdata = todos.find((todo) => {
            return todo.id === id;
        })

        // console.log(previusdata);


        setediting(true);
        settitle(previusdata.title);
        setinfo(previusdata.info);
        setgetid(id);
        // setnewtitle(previusdata.title);
        // console.log(previusdata.title);
        // setnewinfo(previusdata.info);
        // console.log(previusdata.info);
        // setnewdata(id);


    }
    return (
        <>
            <div className='flex flex-col mt-4 w-1/2  p-4'>
                <h2 className='text-2xl mt-2'>Your Notes</h2>
                <div className=''>
                    {
                        todos.length === 0 ? (
                            <p className='mt-2'>Nothing to show! Use "Add a note" section to add notes</p>

                        ) : (
                            // <p className='mt-2'>Nothing to show! Use "Add a note" section to add notes</p>

                            <ul>
                                {todos.map((todo) => (
                                    <li key={todo.id}>
                                        <div className=' flex flex-rol justify-between	w-full h-18  border-2	border-gray-500 mt-2 p-2 rounded-md'>
                                            <div>
                                                <h3 className='text-2xl font-bold	'>{todo.title}</h3>

                                                <p className='text-xl italic'>{todo.info}</p>
                                            </div>
                                            <div>
                                                <button className='text-left text-xl px-1 py-1 mt-2 w-20 h-10 font-bold rounded-md bg-red-400 text-white hover:bg-red-700 mr-4' onClick={() => handledelete(todo.id)} >Delete</button>
                                                <button className='text-left text-xl px-1 py-1 mt-2 w-20 h-10 font-bold rounded-md bg-green-400 text-white hover:bg-green-700' onClick={() => handleupdate(todo.id)}>Update </button>
                                            </div>


                                        </div>




                                    </li>


                                ))}
                            </ul>

                        )


                    }

                </div>
                {
                    todos.length !== 0 && (
                        <div className='mt-4 flex justify-center'>
                            <button className='text-center  text-xl px-3 py-1 mt-2 w-20 h-10 font-bold rounded-md bg-black text-white hover:bg-red-700 ' onClick={() => settodos([])}>Clear</button>

                        </div>
                    )
                }

            </div></>
    )
}

export default ListTodo