import React from "react";

class WeekView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            schedules: [],
            currentWeek: this.getCurrentWeek(),
            currentScheduleNumber:0
        }
    };

    componentDidMount() {
        fetch('http://localhost:3000/schedules', {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(schdl => {
            this.setState({ schedules: schdl });
            console.log(schdl);
            }
        ).catch(err => {
            console.log('eRroR!', err)
        });

    };

    getCurrentWeek = () =>{
        let now = new Date();
        let onejan = new Date(now.getFullYear(), 0, 1);
        let currentWeek = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
        return currentWeek;
    };

    onNextWeekClick = () => {
        this.setState({currentWeek: this.state.currentWeek + 1})
    };

    onPrevWeekClick = () => {
        this.setState({currentWeek: this.state.currentWeek - 1})
    };

    render(){
        let currentWeeksMealPlan = this.state.schedules.find(x => x.weekNumber == this.state.currentWeek);

        let weeksPlanRender = "";

        if (currentWeeksMealPlan === undefined){
            weeksPlanRender = <div className='noPlan-div'>Jeszcze nie został wprowadzony . . .</div>
        }

        if (currentWeeksMealPlan !== undefined) {
            weeksPlanRender =
                <div className="week-view-container">

                <div className="week-view-wrapper">

                    <div className="week-view-day">Poniedziałek</div>
                    <div className="week-view-day">Wtorek</div>
                    <div className="week-view-day">Środa</div>
                    <div className="week-view-day">Czwartek</div>
                    <div className="week-view-day">Piątek</div>
                    <div className="week-view-day">Sobota</div>
                    <div className="week-view-day">Niedziela</div>

                    <div className="week-view-main2">{currentWeeksMealPlan.monday[1]}</div>
                    <div className="week-view-main2">{currentWeeksMealPlan.tuesday[1]}</div>
                    <div className="week-view-main2">{currentWeeksMealPlan.wednesday[1]}</div>
                    <div className="week-view-main2">{currentWeeksMealPlan.thursday[1]}</div>
                    <div className="week-view-main2">{currentWeeksMealPlan.friday[1]}</div>
                    <div className="week-view-main2">{currentWeeksMealPlan.saturday[1]}</div>
                    <div className="week-view-main2">{currentWeeksMealPlan.sunday[1]}</div>

                    <div className="week-view-main1">{currentWeeksMealPlan.monday[2]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.tuesday[2]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.wednesday[2]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.thursday[2]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.friday[2]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.saturday[2]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.sunday[2]}</div>

                    <div className="week-view-main">{currentWeeksMealPlan.monday[3]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.tuesday[3]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.wednesday[3]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.thursday[3]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.friday[3]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.saturday[3]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.sunday[3]}</div>

                    <div className="week-view-main1">{currentWeeksMealPlan.monday[4]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.tuesday[4]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.wednesday[4]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.thursday[4]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.friday[4]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.saturday[4]}</div>
                    <div className="week-view-main1">{currentWeeksMealPlan.sunday[4]}</div>

                    <div className="week-view-main">{currentWeeksMealPlan.monday[5]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.tuesday[5]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.wednesday[5]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.thursday[5]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.friday[5]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.saturday[5]}</div>
                    <div className="week-view-main">{currentWeeksMealPlan.sunday[5]}</div>

                </div>
                </div>
        }
        return(
            <>
            <div className="week-view-header">Twój plan na {this.state.currentWeek} tydzień:</div>
                {weeksPlanRender}
            <div className="week-view-footer">
                <a className="week-view-footer-aside" onClick={this.onPrevWeekClick}>
                    <i className="fas fa-angle-double-left" aria-hidden="true"></i>
                    <div className="week-view-footer-arrows">poprzedni</div>
                </a>
                <a className="week-view-footer-aside" onClick={this.onNextWeekClick}>
                    <div className="week-view-footer-arrows">następny</div>
                    <i className="fas fa-angle-double-right" aria-hidden="true"></i>
                </a>
            </div>
        </>);
        }
}

export default WeekView;