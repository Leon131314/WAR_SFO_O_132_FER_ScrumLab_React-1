import React, {Component} from 'react';

class WidgetAddSchedule extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="widget addSchedule" onClick={this.props.handleScheduleClick}>
                <i className="far fa-plus-square"></i>
                <span className='widget-txt'>dodaj plan</span>
            </div>
        )
    }
};

export default WidgetAddSchedule;