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
            showMe: [],
            showSteps: '',
            showIngredient:''
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






    // -----------------   INSTRUKCJE  -----------------  ///

    handleChangeInstruction = event => {
        this.setState({value: event.target.value});
    };

    addInstructions = (e) => {
        e.preventDefault();
        this.setState(state => {
            const steps = state.steps.concat(state.value);
            const showMe = state.showMe.concat(true)
            return {
                showMe,
                steps,
                value:''
            }
        });

    };


    clickEditInstruction =(e, id) => {

        const arraySteps = [...this.state.steps];
        const indexElement = arraySteps.indexOf(id);
        const indexShow = indexElement;

        this.setState({showSteps: indexShow});
    };

    handleChangeEditInstructions =(event) => {
        this.setState({value: event.target.value});
    };


    saveEditInstruction =(event,id)=> {

        const array = [...this.state.steps];
        const index = array.indexOf(id);
        this.state.steps[index] = this.state.value;
        this.forceUpdate();
        this.setState({
            ...this.state,
            showSteps: 1000,
        });
    };


    removeInstruction = (event, id) => {
        const array = [...this.state.steps];
        const index = array.indexOf(id);
        array.splice(index, 1);
        this.setState({steps: array});
    };

    // -----------------   SKLADNIKI  -----------------  ///


    handleChangeIngredient = (event) => {
        this.setState({value: event.target.value});
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

    clickEditIngredient =(e, id) => {

        const arraySteps = [...this.state.ingredients];
        const indexElement = arraySteps.indexOf(id);
        const indexShow = indexElement;

        this.setState({showIngredient: indexShow});
    };

    handleChangeEditIngredients =(event) => {
        this.setState({value: event.target.value});
    };


    saveEditIngredient =(event,id)=> {
        const array = [...this.state.ingredients];
        const index = array.indexOf(id);
        this.state.ingredients[index] = this.state.value;
        this.forceUpdate();
        this.setState({
            ...this.state,
            showIngredient: 1000,
        });
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
        let test = 'test';
        return(
            <div className="RecipeFormBox">
                <NewRecipe addIngredient={this.addIngredients} addInstruction={this.addInstructions}
                           changeIngredient={this.handleChangeIngredient} changeInstruction={this.handleChangeInstruction}
                           changeDescription={this.handleChangeDescription} changeTitle={this.handleChangeTitle}
                           saveAndClose={this.saveAndClose}/>
                <RecipeLists class="recipe" instructions={this.state.steps} ingredients={this.state.ingredients}
                             remove={this.removeInstruction} removeIngredient={this.removeIngredient}
                            test = {test} indexShow={this.state.showSteps} changeInstruction={this.handleChangeEditInstructions}
                            clickEdit={this.clickEditInstruction} clickSave={this.saveEditInstruction}
                            indexShowIngredient={this.state.showIngredient} clickSaveIngredient={this.saveEditIngredient}
                            changeIngredient={this.handleChangeEditIngredients} clickEditIngredient={this.clickEditIngredient}/>

            </div>
        )
    }

}