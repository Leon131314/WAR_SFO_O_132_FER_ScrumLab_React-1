import NewRecipe from './NewRecipe'
import RecipeLists from './RecipeFormList'
import uuid from 'uuid';
import React from "react";


export default class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    ingredientID: 0,
                    instructionID: 0,
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
    };

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
    };

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
                instructionID: uuid.v4(),
                instructions: this.state.instructions,
            }])
        });

    };

    addIngredients = (e) => {
        e.preventDefault();
        this.setState({
            recipes: this.state.recipes.concat([{
                ingredientID: uuid.v4(),
                ingredients: this.state.ingredients,
            }])
        });

    };

    removeInstruction(event, id) {
        const array = [...this.state.recipes];
        const index = array.indexOf(id);
        array.splice(index, 1);
        this.setState({recipes: array});
    };

    saveAndClose = () =>{
        // debugger
        //POST data to server
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            body: JSON.stringify(this.state.recipes),
            headers: {
                "Content-Type": "application/json"
            }
        });

        //GET data from server
        fetch('http://localhost:3000/recipes', {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(recipeDB => {
            console.log('odpowiedz z serwera: ', recipeDB)
        }).catch(err => {
            console.log('eRroR!', err)
        });

        this.props.handleClick();
    };



    render() {
        return(
            <div className="RecipeFormBox">
                <NewRecipe addIngredient={this.addIngredients} addInstruction={this.addInstructions}
                changeIngredient={this.handleChangeIngredient} changeInstruction={this.handleChangeInstruction}
                changeDescreiption={this.handleChangeDescription} changeTitle={this.handleChangeTitle}
                saveAndClose={this.saveAndClose}/>
                <RecipeLists class="recipe" recipes={this.state.recipes} remove={this.removeInstruction}/>
            </div>
        )
    }

}