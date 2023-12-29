import React, { useEffect } from 'react'
import { TodoWrapper } from './components/TodoWrapper'
import { useState } from 'react'

export const App = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask,setMainTask] = useState([]);

  const SubmitHandler = (e) =>{
   e.preventDefault();
    setMainTask([...mainTask, {title ,desc}]);
    setTitle("");
    setDesc("");
  }

  const deleteHandler = (i) => {
    let copyTask =  [...mainTask]
    copyTask.splice(i,1);
    setMainTask(copyTask)
  }
 
  let renderTask = ""

    mainTask.length>0? renderTask = mainTask.map((t, i) => {
      return  (
         <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-5 w-2/3'>
         <h5 className='text-xl font-semibold'>{t.title}</h5>
         <h6 className='text-xl font-semibold relative'>{t.desc}</h6>
       </div>
       <button  onClick={()=>deleteHandler(i)} className=' border border-white  font-bold bg-red-500 hover:bg-red-800 mx-2 my-4 px-4 py-1 text-white'>Delete</button>
         </li>
      ) 
    }
    
    ) : renderTask = <h2 className='text-center'>No tasks available</h2>

  return (
    <>
    <TodoWrapper />
    <div className='flex justify-center'>
      <form onSubmit={SubmitHandler}>
      <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Input Title' className='p-2 px-4 py-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 mx-4 my-8 ' />
      <input value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" placeholder='Input Desc' className='p-2 px-4 py-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 mx-8 my-8  ' />

    <button disabled={title.trim() === '' || desc.trim() === ''} className=' border border-black rounded-md py-4 px-4 hover:bg-gray-300 mx-8 my-8 font-bold text-xl '> Add task</button>
      </form>
    </div>
    <hr  />
    <div className=' p-8 bg-slate-300' >
    <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default App;




















//Counter project

// import React, { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [neg, setNeg] = useState('');

//   return (
//     <div className="border-4 border-gray-400 p-4 rounded">
//       <div className="flex flex-col items-center">
//         <h1 className="bg-yellow-500 p-4 rounded mb-4">
//           Num Count = {count}
//         </h1>

//         <div className="grid grid-cols-2 gap-4">
//           <button
//             className="p-4 bg-red-500 text-white hover:bg-blue-700 rounded-xl font-bold"
//               onClick={() => {
//                 setNeg("");
//                 setCount(count + 1)
//               }}
//           >
//             Increase
//           </button>

//           <button
//             className="p-4 text-white bg-red-500 hover:bg-blue-700 rounded-xl font-bold"
//             onClick={() => {
//               count > 0 ? setCount(count - 1) : setNeg('Cannot go negative');
//             }}
//           >
//             Decrease
//           </button>
//         </div>

//         <p className="mt-4">{neg}</p>
//       </div>
//     </div>
//   );
// };

// export default App;
