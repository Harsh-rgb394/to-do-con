import axios from 'axios';
import { useState, useEffect } from 'react'
// import { useToasts } from 'react-toast-notifications';

const Addtodo = ({ todos, settodos, isediting, setediting, title, info, settitle, setinfo, getid, setgetid }) => {
    // const { addToast } = useToasts();
    // const [newtitle, setnewtitle] = useState('');
    // const [newinfo, setnewinfo] = useState('');
    // const [title, settitle] = useState('');
    // const [info, setinfo] = useState('');
    // const [local,getlocal]=useState(todos);


    // const [newtodos, setnewtodos] = useState([]);















    const handlesubmit = async () => {
        // e.preventDefault();

        if (title.length === 0) {
            alert("Please fill the title");
        }
        else if (info.length === 0) {
            alert("Please fill the description");

        }
        else if (title && info && isediting) {
            settodos(todos.map((todo) => {
                if (todo.id === getid) {
                    return { ...todo, title: title, info: info };
                }
                return todo;
            }))
            setediting(true);

            settitle('');
            setinfo('');
            setgetid(null);


        }




        else if (title && info) {
            const allinputdata = { id: new Date().getTime().toString(), title: title.trim(), info: info.trim() };

            try {
                // const response = await axios.post("http://localhost:5000/todos/create", allinputdata);

                // console.log("created data", response.data);
                // if (response.data.success) {
                settodos([...todos, allinputdata])
                // addToast(response.data.message, { appearance: "success" });
                settitle('');
                setinfo('');
                // }



            } catch (error) {
                console.log("error in this", error);

            }

        }
        // console.log(todos);





    }

    const handlechange = () => {
        setediting(false);
        settitle('');
        setinfo('');
    }






    return (
        <>



            <div className='w-1/2'>
                <h1 className='text-4xl '>Welcome to Magic Notes</h1>
                <div className='flex flex-col mt-4  border-2	border-inherit p-4 bg-red-50		'>
                    <h2 className='text-2xl mb-2'>{isediting ? ("Change..") : ("Let's ...")}</h2>
                    <input className='rounded-sm h-8 mb-4 ' type='text' value={title} onChange={(e) => settitle(e.target.value)} />
                    <textarea className='rounded-sm h-20' type='text' value={info} onChange={(e) => setinfo(e.target.value)} />
                    <div className='flex flex-row justify-between'>
                        <button className='text-left text-xl px-1 py-1 mt-2 w-20 font-bold rounded-md bg-blue-500 text-white hover:bg-blue-600' onClick={handlesubmit}>{isediting ? ("Update") : ("Add")}</button>
                        {isediting ? (<button className='text-left text-xl px-1 py-1 mt-2 w-20 font-bold rounded-md bg-orange-500 text-white hover:bg-orange-400' onClick={handlechange}>Cancel</button>) : (null)}
                    </div>

                </div>
            </div>




        </>
    )
}

export default Addtodo