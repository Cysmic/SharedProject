import '../Styling/index.css';
import '../Styling/output.css';

import {motion} from 'framer-motion';

function Template1({children}){
    return (
      <div className="h-full w-full flex flex-col p-8 rounded-2xl items-center bg-gray-800">
        {children}
        </div>
    );
}

function Template2({children}){
    return (
      <div className="h-full w-full flex flex-col p-8 rounded-2xl shadow-lg bg-gray-600">
        {children}
        </div>
    );
}


function Template3({children}){
    return (
      <div className="h-full w-full flex flex-col p-8 rounded-2xl shadow-lg bg-gray-600">
        {children}
        </div>
    );
}

export {Template1, Template2, Template3};