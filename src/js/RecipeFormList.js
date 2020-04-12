import React from "react";


export default class RecipeLists extends React.Component {
    render() {


        return (
            <div className="Lists">

                {/*INSTRUKCJE*/}

                <ol className="ListInstructions">{this.props.instructions.map((instruction, index) => {
                        if (instruction !== '') {
                            if (this.props.indexShow === index) {

                                return (
                                    <div key={instruction}>
                                        <li className="Instructions"> <input type="text" onChange={this.props.changeInstruction} />

                                            <i className="fas fa-check" onClick={e => {
                                                this.props.clickSave(e, instruction)
                                            }}></i>}

                                            <i className="far fa-trash-alt" onClick={e => {
                                                this.props.remove(e, instruction)
                                            }}></i>
                                        </li>
                                    </div>
                                )
                            }

                            if (this.props.indexShow !== index) {
                                //if index show  rowna sie inctruction show

                                return (
                                    <div key={instruction}>
                                        <li className="Instructions">  {instruction}

                                            <i className="far fa-edit" onClick={e => {
                                                this.props.clickEdit(e, instruction)
                                            }}></i>

                                            <i className="far fa-trash-alt" onClick={e => {
                                                this.props.remove(e, instruction)
                                            }}></i>
                                        </li>
                                    </div>
                                )
                            }
                        }
                    }
                )}</ol>


                {/*SKLADNIKI*/}


                <ul className="ListIngredients">{this.props.ingredients.map((ingredient, index) => {
                        if (ingredient !== '') {
                            if (this.props.indexShowIngredient === index) {

                                return (
                                    <div key={ingredient}>
                                        <li className="Ingredient"> <input type="text" onChange={this.props.changeIngredient} />

                                            <i className="fas fa-check" onClick={e => {
                                                this.props.clickSaveIngredient(e, ingredient)
                                            }}></i>}

                                            <i className="far fa-trash-alt" onClick={e => {
                                                this.props.removeIngredient(e, ingredient)
                                            }}></i>
                                        </li>
                                    </div>
                                )
                            }

                            if (this.props.indexShowIngredient !== index) {
                                //if index show  rowna sie inctruction show

                                return (
                                    <div key={ingredient}>
                                        <li className="Instructions">  {ingredient}

                                            <i className="far fa-edit" onClick={e => {
                                                this.props.clickEditIngredient(e, ingredient)
                                            }}></i>

                                            <i className="far fa-trash-alt" onClick={e => {
                                                this.props.removeIngredient(e, ingredient)
                                            }}></i>
                                        </li>
                                    </div>
                                )
                            }
                        }
                    }
                )}</ul>

            </div>
        )
    }
}