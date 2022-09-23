import React, { useState } from 'react';

// local dependencies
import { getVersion } from 'common/util';
import "../index.css";


// export a react component
export default ( props ) => {
    const [ count, incrementCount ] = useState( 0 );

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <div className='h-1/2 w-4/5 flex flex-col items-center'>
                <div className='font-mono font-bold text-3xl w-2/3'>Hello,</div>
                <div className='font-mono font-bold text-xl w-2/3 px-10'>this is <span className='text-orange-500 bg-gray-200 px-2 shadow-md'>Electron</span> App with <span className='text-blue-500 bg-gray-200 px-2 shadow-md'>ReactJS</span> and <span className='text-blue-500 bg-gray-200 px-2 shadow-md'>TailWindCSS</span> frameworks.</div>
                <div className='font-mono font-bold text-xl w-2/3 px-5'>Its works for <span className='text-green-500 bg-gray-200 px-2 shadow-md'>Windows 7</span> as well. with the capability to compile it to .exe file with <span className='text-blue-500 bg-gray-200 px-2 shadow-md'>electron-builder</span>.</div>
            </div>
        </div>
    );
};