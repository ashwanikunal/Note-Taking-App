import React from 'react';

export default function Header( {onOpenNew,query,setQuery}) {
    return(
        <header className='flex items-center justify-between p-4 bg-gray-50'>
        <h1 className='text-xl font-semibold'>Keep Clone</h1>
        <div className='flex gap-2 items-center'>
         <input 
         value ={query}
         onChange={(e) => setQuery(e.target.value)}
         placeholder='Search notes...'
         className = 'px-3 py-2 border rounded-md outline-none'/>
         <button onClick={onOpenNew}
         className='px-4 py-2 bg-blue-600 text-white rounded-md'>
            n
         </button>
        </div>
        </header>
    )
};