import React, {Component} from 'react';
import WidgetAddRecipe from "./WidgetAddRecipe";
import WidgetAddSchedule from "./WidgetAddSchedule";
import Messages from "./Messages";
import RecipeForm from "./RecipeForm";

class Pulpit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            AddRecipeClickStatus: false
        }
    }

    handleClick = () =>{
        this.setState(prevState => ({
            AddRecipeClickStatus: !prevState.AddRecipeClickStatus
        }));
    };

    render() {
        console.log(this.state.AddRecipeClickStatus);
        if (this.state.AddRecipeClickStatus) {
            return <RecipeForm handleClick={this.handleClick}/>
        } else {
            return(
                <div className='pulpit'>
                    <WidgetAddRecipe handleClick={this.handleClick}/>
                    <WidgetAddSchedule/>
                    <Messages/>
                </div>
            )
        }
    }

}

export default Pulpit;