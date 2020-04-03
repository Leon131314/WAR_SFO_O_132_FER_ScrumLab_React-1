import React from 'react';

class NewRecipe extends React.Component{
    render(){
        return (
           <div>
                <div className="nr-main">
                    <div className="nr-header">
                        <h1 className="nr-h1">Nowy przepis</h1>
                        <button className="nr-button"> Zapisz i zamknij</button>
                    </div>
                    <div className="nr-recipe">
                        <div className="nr-recipe-name">
                            <h2>Nazwa przepisu</h2>
                            <textarea className="nr-recipe-input" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                        <div className="nr-recipe-name">
                            <h2>Opis przepisu</h2>
                            <textarea className="nr-recipe-input" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                    </div>
                    <div className="nr-ingr">
                        <div className="nr-ingr-n">
                            <h2 className="nr-ingr-h2">Instrukcje</h2>
                            <textarea className="nr-ingr-input" name="nazwa" cols="x" rows="y"></textarea>
                            <button className="nr-ingr-btn">+</button>
                            <textarea className="nr-ingr-input-2" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                        <div className="nr-ingr-n">
                            <h2 className="nr-ingr-h2">Składniki</h2>
                            <textarea className="nr-ingr-input" name="nazwa" cols="x" rows="y"></textarea>
                            <button className="nr-ingr-btn">+</button>
                            <textarea className="nr-ingr-input-2" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                    </div>
                </div>
            </div>
    )}
};

export default NewRecipe;