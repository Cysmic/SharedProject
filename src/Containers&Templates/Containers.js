import '../Styling/index.css';
import '../Styling/output.css';

/*
Summary: This file defines the container components that will not be movable 
           The containers represent the possible locations for the template components to be placed
           The Primary Container is the largest and will be placed in the middle taking up the most focus of the user
           The Auxilary Container is the smallest and will be placed on the sides taking up the least focus of the user
*/

/**
 * ContainerPrimary: This container represents the primary container that will be placed in the middle
 * @param {children} children: The children of the container
 * */
function ContainerPrimary({children}){
    return (
      <div className="h-5/6 w-1/3 mx-8 my-16">
        {children}
        </div>
    );
}

/**
 * ContainerAuxilary: This container represents the auxilary container that will be placed on the sides
 * @param {children} children: The children of the container
 * */
function ContainerAuxilary({children}){
    return (
      <div className="h-5/6 w-1/4 mx-16 my-16">
        {children}
        </div>
    );
}

export {ContainerPrimary, ContainerAuxilary};