import React from 'react';

class NewPlan extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            toBeSend: {
                name: '',
                description: '',
                weekNumber: 0,
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: []
            }
        }

    }

    componentDidMount() {
        fetch('http://localhost:3000/recipes', {
            method: 'GET'
        }).then (resp => {
            return resp.json();
        }).then(rec => {
                this.setState({ recipes: rec });
                console.log(rec)
            }
        ).catch(err => {
            console.log('eRroR!', err)
        });
    };

    handleChangeTitle = (e) => {
        let nameValue = e.target.value;
        const newState = Object.assign({}, this.state.toBeSend);
        newState.name = nameValue;

        this.setState({
            toBeSend: newState
        });
    };


    handleChangeDescription = (e) => {
        let descriptionValue = e.target.value;
        const newState = Object.assign({}, this.state.toBeSend);
        newState.description = descriptionValue;

        this.setState({
            toBeSend: newState
        });
    };

    handleChangeWeekNumber = (e) => {
        let weekNumberValue = e.target.value;
        const newState = Object.assign({}, this.state.toBeSend);
        newState.weekNumber = weekNumberValue;

        this.setState({
            toBeSend: newState
        });
    };

    handleMon = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.monday[selectId] = e.target.value;

        this.setState({
           toBeSend: nextToBeSend
        });
    };

    handleTue = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.tuesday[selectId] = e.target.value;

        this.setState({
            toBeSend: nextToBeSend
        });
    };

    handleWed = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.wednesday[selectId] = e.target.value;

        this.setState({
            toBeSend: nextToBeSend
        });
    };

    handleThu = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.thursday[selectId] = e.target.value;

        this.setState({
            toBeSend: nextToBeSend
        });
    };

    handleFri = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.friday[selectId] = e.target.value;

        this.setState({
            toBeSend: nextToBeSend
        });
    };

    handleSat = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.saturday[selectId] = e.target.value;

        this.setState({
            toBeSend: nextToBeSend
        });
    };

    handleSun = (e) => {
        let nextToBeSend = {...this.state.toBeSend};
        let selectId = e.target.attributes["data-position"].value;

        nextToBeSend.sunday[selectId] = e.target.value;

        this.setState({
            toBeSend: nextToBeSend
        });
    };

    saveAndClose = () => {

        //POST data to server
        fetch('http://localhost:3000/schedules', {
            method: 'POST',
            body: JSON.stringify(this.state.toBeSend),
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

        this.props.handleScheduleClick(); //ten handler zamyka NewPlan i wracamy do Pulpitu

    };

    renderMonday = () => {
        let mondaySelect = [];

        for (let i = 0; i < 5; i++) {
            mondaySelect.push(<td><select data-position={i} onChange={this.handleMon} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return mondaySelect;
    };

    renderTuesday = () => {
        let tuesdaySelect = [];

        for (let i = 0; i < 5; i++) {
            tuesdaySelect.push(<td><select data-position={i} onChange={this.handleTue} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return tuesdaySelect;
    };

    renderWednesday = () => {
        let wednesdaySelect = [];

        for (let i = 0; i < 5; i++) {
            wednesdaySelect.push(<td><select data-position={i} onChange={this.handleWed} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return wednesdaySelect;
    };

    renderThursday = () => {
        let thursdaySelect = [];

        for (let i = 0; i < 5; i++) {
            thursdaySelect.push(<td><select data-position={i} onChange={this.handleThu} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return thursdaySelect;
    };

    renderFriday = () => {
        let fridaySelect = [];

        for (let i = 0; i < 5; i++) {
            fridaySelect.push(<td><select data-position={i} onChange={this.handleFri} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return fridaySelect;
    };

    renderSaturday = () => {
        let saturdaySelect = [];

        for (let i = 0; i < 5; i++) {
            saturdaySelect.push(<td><select data-position={i} onChange={this.handleSat} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return saturdaySelect;
    };

    renderSunday = () => {
        let sundaySelect = [];

        for (let i = 0; i < 5; i++) {
            sundaySelect.push(<td><select data-position={i} onChange={this.handleSun} name="dish name">
                <option value='' disabled selected>Wybierz przepis...</option>
                {this.state.recipes.map(recipe => (
                    <option value={recipe.name}>{recipe.name}</option>
                ))}
            </select></td>);
        }
        return sundaySelect;
    };

    render(){
        return (
            <div className="np-container">
                <div className="np-main">
                    <div className="np-header">
                        <h1 className="np-h1">Nowy plan</h1>
                        <button className="np-button" onClick={this.saveAndClose}> Zapisz i zamknij</button>
                    </div>
                    <div className="np-plan">
                        <div className="np-plan-name">
                            <h2 className="np-h2">Nazwa planu</h2>
                            <textarea onChange={this.handleChangeTitle} className="np-plan-input" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                        <div className="np-plan-name">
                            <h2 className="np-h2">Opis planu</h2>
                            <textarea onChange={this.handleChangeDescription} className="np-plan-input2" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                        <div className="np-plan-name-number">
                            <h2 className="np-h2">Numer tygodnia</h2>
                            <textarea onChange={this.handleChangeWeekNumber} className="np-plan-input-number" name="nazwa" cols="x" rows="1"></textarea>
                        </div>
                    </div>
                    <div className="np-plan-line"></div>
                    <table className="np-plan-table">
                        <tr className="np-plan-table-row">
                            <th> </th>
                            <th>ŚNIADANIE</th>
                            <th>DRUGIE<br/> ŚNIADANIE</th>
                            <th>ZUPA</th>
                            <th>DRUGIE<br/> DANIE</th>
                            <th>KOLACJA</th>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>PONIEDZIAŁEK</th>
                            {this.renderMonday()}
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>WTOREK</th>
                            {this.renderTuesday()}
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>ŚRODA</th>
                            {this.renderWednesday()}
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>CZWARTEK</th>
                            {this.renderThursday()}
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>PIĄTEK</th>
                            {this.renderFriday()}
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>SOBOTA</th>
                            {this.renderSaturday()}
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>NIEDZIELA</th>
                            {this.renderSunday()}
                        </tr>
                    </table>
                </div>
            </div>
        )}
};

export default NewPlan;