import NewRecipe from './NewRecipe'
import RecipeLists from './RecipeFormList'
import React from "react";


export default class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // id:'', //wychodzi na to ze "id" jest niepotrzebne w state bo API samo dodaje id do kazego przepisu
            name: '',
            description: '',
            steps: [],
            ingredients: [],
        };
    }

    handleChangeTitle = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    };

    handleChangeDescription = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value
        });
    };

    handleChangeInstruction = event => {
        this.setState({value: event.target.value});
    };

    handleChangeIngredient = (event) => {
        this.setState({value: event.target.value});
    };


    addInstructions = (e) => {
        e.preventDefault();
        this.setState(state => {
            const steps = state.steps.concat(state.value);
            return {
                steps,
                value:''
            }
        });

    };

    addIngredients = (e) => {
        e.preventDefault();
        this.setState(state => {
            const ingredients = state.ingredients.concat(state.value);
            return {
                ingredients,
                value:''
            }
        });

    };

    removeInstruction = (event, id) => {
        const array = [...this.state.steps];
        const index = array.indexOf(id);
        array.splice(index, 1);
        this.setState({steps: array});
    };

    removeIngredient = (event, id) => {
        const array = [...this.state.ingredients];
        const index = array.indexOf(id);
        array.splice(index, 1);
        this.setState({ingredients: array});
    };

    saveAndClose = () =>{
        // let counter = this.state.id + 1;

        // this.setState({
        //     ...this.state,
            // id: counter
        // });

        // debugger
        //POST data to server
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            body: JSON.stringify(this.state),
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

        this.props.handleRecipeClick();
    };



    render() {
        return(
            <div className="RecipeFormBox">
                <NewRecipe addIngredient={this.addIngredients} addInstruction={this.addInstructions}
                           changeIngredient={this.handleChangeIngredient} changeInstruction={this.handleChangeInstruction}
                           changeDescription={this.handleChangeDescription} changeTitle={this.handleChangeTitle}
                           saveAndClose={this.saveAndClose}/>
                <RecipeLists class="recipe" instructions={this.state.steps} ingredients={this.state.ingredients}
                             remove={this.removeInstruction} removeIngredient={this.removeIngredient}/>

            </div>
        )
    }

}