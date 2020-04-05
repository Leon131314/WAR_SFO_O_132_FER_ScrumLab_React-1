import React from "react";


export default class RecipeLists extends React.Component {
    render() {
        return (
            <div className="Lists">
                {/*<div className="ListBox">*/}
                <ol className="ListInstructions">{this.props.recipes.map(recipe => {
                        if (recipe.instructionID !== 0) {
                            return (
                                <div key={recipe.instructionID}>
                                    <li className="Instructions">{recipe.instructions}
                                    <i className="far fa-trash-alt" onClick={e =>
                                    this.props.remove(e,recipe)}></i>
                                    </li>

                                </div>
                            )
                        }
                    }
                )}</ol>
                {/*</div>*/}
                <ul className="ListIngredients">{this.props.recipes.map(recipe => {
                        if (recipe.ingredientID !== 0) {
                            return (
                                <div key={recipe.ingredientID}>
                                    <li className="Ingredients">{recipe.ingredients}</li>
                                    {/*<Button variant="dark" size="sm" className="Button-remove-ingredient" onClick={e => {*/}
                                    {/*    this.props.removeTest(e, ingredient)*/}
                                    {/*}}><FaTrash/></Button>*/}
                                </div>
                            )
                        }
                    }
                )}</ul>

            </div>
        )
    }
}