import React, {Component} from 'react';
import WidgetAddRecipe from "./WidgetAddRecipe";
import WidgetAddSchedule from "./WidgetAddSchedule";
import Messages from "./Messages";

class Pulpit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            AddRecipeClickStatus: ""
        }

    }

    checkStatus = (AddRecipeData) => {
        this.setState({
            AddRecipeClickStatus: AddRecipeData
        })
    };

    render() {
        return(
            <div className='pulpit'>
                <WidgetAddRecipe parentCallback={this.checkStatus}/>
                <WidgetAddSchedule/>
                <Messages/>
            </div>
        )
    }

}

export default Pulpit;