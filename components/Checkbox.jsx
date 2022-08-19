import React from 'react';
function Checkbox({name}) {
    return ( 
        <div className='flex items-center text-white m-2'>
             <input type="checkbox" id={name} className='m-1'/>
            <label htmlFor={name}>{name}</label>
        </div> 
     );
}

export default Checkbox;