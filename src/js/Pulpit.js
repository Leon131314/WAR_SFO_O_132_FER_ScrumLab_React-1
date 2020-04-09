import React, {Component} from 'react';
import WidgetAddRecipe from "./WidgetAddRecipe";
import WidgetAddSchedule from "./WidgetAddSchedule";
import Messages from "./Messages";
import RecipeForm from "./RecipeForm";
import NewPlan from "./NewPlan";
import WeekView from "./WeekView";

class Pulpit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            AddRecipeClickStatus: false,
            AddScheduleClickStatus: false
        }
    }

    handleRecipeClick = () =>{
        this.setState(prevState => ({
            AddRecipeClickStatus: !prevState.AddRecipeClickStatus
        }));
    };

    handleScheduleClick = () =>{
        this.setState(prevState => ({
            AddScheduleClickStatus: !prevState.AddScheduleClickStatus
        }));
    };

    render() {
        console.log(this.state.AddRecipeClickStatus);
        if (this.state.AddRecipeClickStatus) {
            return <RecipeForm handleRecipeClick={this.handleRecipeClick}/>
        }
        if (this.state.AddScheduleClickStatus) {
            return <NewPlan handleScheduleClick={this.handleScheduleClick}/>
        } else {
            return(
                <div className='pulpit'>
                    <WidgetAddRecipe handleRecipeClick={this.handleRecipeClick}/>
                    <WidgetAddSchedule handleScheduleClick={this.handleScheduleClick}/>
                    <Messages/>
                    {/*<NewPlan/>*/}
                    {/*<WeekView/>*/}
                </div>
            )
        }
    }

}

export default Pulpit;