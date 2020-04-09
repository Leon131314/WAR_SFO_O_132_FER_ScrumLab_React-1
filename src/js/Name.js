import React from 'react';
import RecipeForm from "./RecipeForm";
import Pulpit from "./Pulpit";


class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            clicked: false
        }
    };

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    };

    handleOnClick = () => {
        // let name = this.state.name;
        // localStorage.setItem('name', JSON.stringify(name));

        fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        });
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    };

    render() {
        console.log(this.state.clicked);
        if (this.state.clicked) {
            return <Pulpit/>
        } else {
            return (
                <div className="name-main">

                    <h1 className="name-container-title">Witaj,</h1>
                    <h3 className="name-container-subtitle top">wygląda na to że jesteś</h3>
                    <h3 className="name-container-subtitle bottom">tutaj pierwszy raz!</h3>

                    <form>
                        <input type="text" value={this.state.name} placeholder="tutaj wpisz jak masz na imię"
                               onChange={this.handleChange}/>
                        <br/>
                        <button onClick={this.handleOnClick} className="name-btn">Gotowe!</button>
                    </form>

                    <h3 className="name-container-text">Podaj nam swoje imię, a my</h3>
                    <h3 className="name-container-text middle">zorganizujemy dla Ciebie naszą aplikację</h3>
                    <h3 className="name-container-text">:)</h3>

                </div>
            )
        }
    }
}

export default Name;
