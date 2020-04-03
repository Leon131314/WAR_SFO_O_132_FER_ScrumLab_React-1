import React from "react";

class WeekView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weekNumber:"pierwszy"
        }
    };
    render(){
        const nr_tygodnia = this.state.weekNumber;
        return (
            <div className="week-view-container">
                <div className="week-view-header">Twój plan na {nr_tygodnia} tydzień:</div>
                <div className="week-view-wrapper">

                    <div className="week-view-day">Poniedziałek</div>
                    <div className="week-view-day">Wtorek</div>
                    <div className="week-view-day">Środa</div>
                    <div className="week-view-day">Czwartek</div>
                    <div className="week-view-day">Piątek</div>
                    <div className="week-view-day">Sobota</div>
                    <div className="week-view-day">Niedziela</div>

                    <div className="week-view-main2">śniadanie</div>
                    <div className="week-view-main2">śniadanie</div>
                    <div className="week-view-main2">śniadanie</div>
                    <div className="week-view-main2">śniadanie</div>
                    <div className="week-view-main2">śniadanie</div>
                    <div className="week-view-main2">śniadanie</div>
                    <div className="week-view-main2">śniadanie</div>

                    <div className="week-view-main1">drugie<br/>śniadanie</div>
                    <div className="week-view-main1">drugie<br/> śniadanie</div>
                    <div className="week-view-main1">drugie<br/>śniadanie</div>
                    <div className="week-view-main1">drugie<br/>śniadanie</div>
                    <div className="week-view-main1">drugie<br/>śniadanie</div>
                    <div className="week-view-main1">drugie<br/>śniadanie</div>
                    <div className="week-view-main1">drugie<br/>śniadanie</div>

                    <div className="week-view-main">zupa</div>
                    <div className="week-view-main">zupa</div>
                    <div className="week-view-main">zupa</div>
                    <div className="week-view-main">zupa</div>
                    <div className="week-view-main">zupa</div>
                    <div className="week-view-main">zupa</div>
                    <div className="week-view-main">zupa</div>

                    <div className="week-view-main1">drugie<br/>danie</div>
                    <div className="week-view-main1">drugie<br/>danie</div>
                    <div className="week-view-main1">drugie<br/>danie</div>
                    <div className="week-view-main1">drugie<br/>danie</div>
                    <div className="week-view-main1">drugie<br/>danie</div>
                    <div className="week-view-main1">drugie<br/>danie</div>
                    <div className="week-view-main1">drugie<br/>danie</div>

                    <div className="week-view-main">kolacja</div>
                    <div className="week-view-main">kolacja</div>
                    <div className="week-view-main">kolacja</div>
                    <div className="week-view-main">kolacja</div>
                    <div className="week-view-main">kolacja</div>
                    <div className="week-view-main">kolacja</div>
                    <div className="week-view-main">kolacja</div>

                </div>
                <div className="week-view-footer">
                    <a href="#" className="week-view-footer-aside">
                        <i className="fas fa-angle-double-left" aria-hidden="true"></i>
                        <div className="week-view-footer-arrows">poprzedni</div>
                    </a>
                    <a href="#" className="week-view-footer-aside">
                        <div className="week-view-footer-arrows">następny</div>
                        <i className="fas fa-angle-double-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        )}
}

export default WeekView;