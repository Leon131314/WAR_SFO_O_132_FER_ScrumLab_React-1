import React from 'react';

class NewRecipe extends React.Component{
    render(){
        return (
           <div>
                <div className="nr-main">
                    <div className="nr-header">
                        <h1>Nowy przepis</h1>
                        <button className="nr-button"> Zapisz i zamknij</button>
                    </div>
                    <div className="nr-recipe">
                        <div className="nr-recipe-name">
                            <h2>Nazwa przepisu</h2>
                            <input className="nr-recipe-input" type="textarea" />
                        </div>
                        <div className="nr-recipe-name">
                            <h2>Opis przepisu</h2>
                            <input className="nr-recipe-input" type="textarea" />
                        </div>
                    </div>
                    <div className="nr-ingr">
                        <div className="nr-ingr-n">
                            <h2>Instrukcje</h2>
                            <input  type="textarea" />
                            <button>+</button>
                            <div>ddddd</div>
                        </div>
                        <div className="nr-ingr-n">
                            <h2>Składniki</h2>
                            <input  type="textarea" />
                            <button>+</button>
                            <div>dddd</div>
                        </div>
                    </div>
                </div>
            </div>
    )}
};

export default NewRecipe;