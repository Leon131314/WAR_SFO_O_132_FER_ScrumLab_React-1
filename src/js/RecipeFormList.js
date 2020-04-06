import React from "react";


export default class RecipeLists extends React.Component {
    render() {
        return (
            <div className="Lists">
                {/*<div className="ListBox">*/}
                <ol className="ListInstructions">{this.props.instructions.map(instruction => {
                        if (instruction.test !== '') {
                            return (
                                <div key={instruction.test}>
                                    <li className="Instructions">{instruction.test} {' '}
                                    <i className="far fa-trash-alt" onClick={e => {
                                    this.props.remove(e,instruction)}}></i>
                                    </li>
                                </div>
                            )
                        }
                    }
                )}</ol>
                {/*</div>*/}
                <ul className="ListIngredients">{this.props.recipes.map(recipe => {
                        if (recipe.ingredients !== '') {
                            return (
                                <div key={recipe.ingredients}>
                                    <li className="Ingredients">{recipe.ingredients} {'  '}
                                        <i className="far fa-trash-alt" onClick={e => {
                                            this.props.removeIngredient(e,recipe)}}></i>
                                    </li>
                                </div>
                            )
                        }
                    }
                )}</ul>

            </div>
        )
    }
}