import NewPlan from "./NewPlan";
import PlanLists from "./PlanFormList";
import React from "react";

export default class PlanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: [
                {
                    title: "",
                    description: "",
                    id: ""
                },
            ],
            dishes: [
                {
                    titles: ""
                }
            ]

        };

    }

    addTitles = (e) => {
        e.preventDefault();
        this.setState({
            schedules: this.state.schedules.concat([{
                title: this.state.title,
            }])
        });
    };

    addDescriptions = (e) => {
        e.preventDefault();
        this.setState({
            schedules: this.state.schedules.concat([{
                description: this.state.description,
            }])
        });
    };

    addWeekId = (e) => {
        e.preventDefault();
        this.setState({
            schedules: this.state.schedules.concat([{
                id: this.state.id,
            }])
        });
    };

    handleChangeDish = (event) => {
        this.setState({
            ...this.state,
            titles: event.target.value
        });
    };

    saveAndClose = () =>{
        // debugger
        //POST data to server
        fetch('http://localhost:3000/schedules', {
            method: 'POST',
            body: JSON.stringify(this.state.schedules),
            headers: {
                "Content-Type": "application/json"
            }
        });

        //GET data from server
        fetch('http://localhost:3000/schedules', {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(scheduleDB => {
            console.log('odpowiedz z serwera: ', scheduleDB)
        }).catch(err => {
            console.log('eRroR!', err)
        });

        this.props.handleClick(); {/*Do czego jest ten handleClick? /Darek*/ }
    };


    render() {
        return(
            <div className="planFormBox">
                <NewPlan addTitle={this.addTitles} addDescription={this.addDescriptions}
                         addWeekNumberId={this.addWeekId} saveAndClose={this.saveAndClose}
                         recipesTitle={this.handleChangeDish}/>
                <PlanLists class="plan" plans={this.state.schedules}
                           dishes={this.state.dishes}/>
                {/*Zobaczcie co poprawić, trzeba na pewno z bazą skorelować scheduleDB ??
                 nie bardzo wiem na szybko jak to zrobić lub ją zmienić.
                 Zostawiam na później do zrobienia to wyświetlanie
                -PlanFormList.js /Darek */}
            </div>
        )
    }

}