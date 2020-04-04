import NewRecipe from './NewRecipe'
import RecipeLists from './RecipeFormList'
import uuid from 'uuid';

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import React from "react";


export default class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    title: '',
                    description: '',
                    instructions: '',
                    ingredients: '',
                    counter: 0,
                },
            ]
        };

    }

    handleChangeTitle = (event) => {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }

    handleChangeDescription = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value
        });
    };

    handleChangeInstruction = (event) => {
        this.setState({
            ...this.state,
            instructions: event.target.value
        });
    }

    handleChangeIngredient = (event) => {
        this.setState({
            ...this.state,
            ingredients: event.target.value
        });
    };


    addInstructions = (e) => {
        e.preventDefault();
        this.setState({
            recipes: this.state.recipes.concat([{
                id: uuid.v4(),
                instructions: this.state.instructions,
            }])
        });

    };

    addIngredients = (e) => {
        e.preventDefault();
        this.setState({
            recipes: this.state.recipes.concat([{
                id: uuid.v4(),
                ingredients: this.state.ingredients,
            }])
        });

    };

    render() {
        return(
            <>
                <NewRecipe addIngredient={this.addIngredients} addInstruction={this.addInstructions}
                changeIngredient={this.handleChangeIngredient} changeInstruction={this.handleChangeInstruction}/>
                <RecipeLists class="recipe" recipes={this.state.recipes}/>
            </>
        )
    }

}