import React from 'react';

const AddSchedule = () =>{

    const handleClick = () =>{
        console.log('click') //tutaj bedziemy chcieli wywolac okno dodania planu, ale jeszcze go nie mamy ==TK==
    };

    return(
        <div className="widget addSchedule" onClick={handleClick}>
            <i className="far fa-plus-square"></i>
            <span className='widget-txt'>dodaj plan</span>
        </div>
    )
};

export default AddSchedule;