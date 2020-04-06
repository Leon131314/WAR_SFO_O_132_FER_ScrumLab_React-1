
import React, {Component} from 'react';

class WidgetAddRecipe extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="widget addRecipe" onClick={this.props.handleClick}>
                <i className="far fa-plus-square"></i>
                <span className='widget-txt'>dodaj przepis</span>
            </div>
        )
    }
};

export default WidgetAddRecipe;