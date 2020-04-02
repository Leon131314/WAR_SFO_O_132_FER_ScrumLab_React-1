
import React from 'react';

const AddRecipe = () =>{

    const handleClick = () =>{
        console.log('click') //tutaj bedziemy chcieli wywolac okno dodania przepisu, ale jeszcze go nie mamy ==TK==
    };

    return(
        <div className="widget addRecipe" onClick={handleClick}>
            <i className="far fa-plus-square"></i>
            <span className='widget-txt'>dodaj przepis</span>
        </div>
    )
};

export default AddRecipe;