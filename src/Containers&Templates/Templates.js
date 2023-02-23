import '../Styling/index.css';
import '../Styling/output.css';

import {motion} from 'framer-motion';

/*
Summary: This file defines the template components that will be movable
         The templates represent the possible components that the user can place in the container components
*/

/**
 *  DirectoryTemplate: This template represents a directory of cards
 * @param {children} children: The children of the template
 * */
function DirectoryTemplate({children}){
    return (
      <div className="h-full w-full flex flex-col p-8 rounded-2xl items-center bg-gray-800">
        {children}
        </div>
    );
}

/**
 * NoteTemplate: This template represents a note that the user writes in
 * @param {children} children: The children of the template
 * */
function NoteTemplate({children}){
    return (
      <div className="h-full w-full flex flex-col p-8 rounded-2xl shadow-lg bg-gray-600">
        {children}
        </div>
    );
}

/**
 * OnlineTemplate: This template represents the online functionality of the app. Users can 
 *                 see related content, other users, and a feed of other users' notes
 * @param {children} children: The children of the template
 * */
function OnlineTemplate({children}){
    return (
      <div className="h-full w-full flex flex-col p-8 rounded-2xl shadow-lg bg-gray-600">
        {children}
        </div>
    );
}

export {DirectoryTemplate, NoteTemplate, OnlineTemplate};