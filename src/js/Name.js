import React from 'react';


class Name extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:""
        }
    };

    handleChange=event=>{
        this.setState({
            name:event.target.value
        })
    }

    handleOnClick= () => {
        let name=this.state.name;
        localStorage.setItem('name', JSON.stringify(name));
    };

    render(){
        return (
            <div className="name-main">

                <form >
                    <input  type="text" value={this.state.name} placeholder="tutaj wpisz jak masz na imię" onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.handleOnClick} className="name-btn" >Gotowe!</button>
                </form>

            </div>
        )}
}

export default Name;
