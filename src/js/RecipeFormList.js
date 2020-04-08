import React from "react";


export default class RecipeLists extends React.Component {
    render() {
        return (
            <div className="Lists">
                {/*<div className="ListBox">*/}
                <ol className="ListInstructions">{this.props.instructions.map(instruction => {
                        if (instruction !== '') {
                            return (
                                <div key={instruction}>
                                    <li className="Instructions">{instruction} {' '}
                                        <i className="far fa-trash-alt" onClick={e => {
                                            this.props.remove(e,instruction)}}></i>
                                    </li>
                                </div>
                            )
                        }
                    }
                )}</ol>
                {/*</div>*/}
                <ul className="ListIngredients">{this.props.ingredients.map(ingredient => {
                        if (ingredient !== '') {
                            return (
                                <div key={ingredient}>
                                    <li className="Ingredients">{ingredient} {'  '}
                                        <i className="far fa-trash-alt" onClick={e => {
                                            this.props.removeIngredient(e,ingredient)}}></i>
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