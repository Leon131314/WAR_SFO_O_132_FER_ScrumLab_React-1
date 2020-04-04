import React from "react";


export default class RecipeLists extends React.Component {
    render() {
        return (
            <div className="Lists">
                <ul className="List-instructions">{this.props.recipes.map(recipe => {
                        if (recipe.id !== 0) {
                            return (
                                <div key={recipe.id}>
                                    <li><h1 className="Instructions">{recipe.instructions}</h1></li>
                                    {/*<Button variant="dark" size="sm" className="Button-remove-instruction" onClick={e => {*/}
                                    {/*    this.props.removeTest(e, instruction)*/}
                                    {/*}}><FaTrash/></Button>*/}
                                </div>
                            )
                        }
                    }
                )}</ul>
                <ul className="List-ingredients">{this.props.recipes.map(recipe => {
                        if (recipe.id !== 0) {
                            return (
                                <div key={recipe.id}>
                                    <li><h1 className="Ingredients">{recipe.ingredients}</h1></li>
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