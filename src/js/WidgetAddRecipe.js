
import React, {Component} from 'react';

class WidgetAddRecipe extends Component{

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }


    handleClick = () =>{
        // this.setState({
        //     clicked: true
        // });
        this.props.parentCallback(true);
        console.log(this.state.clicked)
        //DO DOKONCZENIA ==TK==
    };

    render() {
        return(
            <div className="widget addRecipe" onClick={this.handleClick}>
                <i className="far fa-plus-square"></i>
                <span className='widget-txt'>dodaj przepis</span>
            </div>
        )
    }
};

export default WidgetAddRecipe;