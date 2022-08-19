import React from 'react';
function Loader({isLoading}) {
    return ( 
        <div style={isLoading ? {display: 'flex'} : {display:'none'}} className='border text-center m-auto flex-col text-white border-white rounded-full h-[40vh] w-[20vw] animate-bounce'>
            <p className='w-full text-center mt-[50%]'>Turbo Barnacle</p>
            <h3 className='w-full text-center text-gray-500 mt-[10%]'>Loading....</h3>
        </div>
     );
}

export default Loader;