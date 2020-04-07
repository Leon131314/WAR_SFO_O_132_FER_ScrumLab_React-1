import React from 'react';


class Recipes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
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
        console.log(this.state.recipes)
    };

    delete = () => {//////////////do uzupełnienia/////////////////
        this.setState({
            recipes:[],
        });
    };

    addRecipe = () => {//////////////do uzupełnienia/////////////////

    };

    editRecipe = () => {//////////////do uzupełnienia/////////////////

    };

    render(){
        console.log(this.state.recipes)

        return (


            <div className="rec-main">
                    <div className="rec-header">
                        <h1 className="rec-h1">Lista przepisów</h1>
                        <button className="rec-button" onClick={this.addRecipe}> +</button>
                    </div>
                <div className="tab-main">

                    <table className="tab">
                        <tr className="tab-tr">
                            <th className="tab-h-1" >ID</th>
                            <th className="tab-h-2">Nazwa</th>
                            <th className="tab-h-3">Opis</th>
                            <th className="tab-h-4">Akcje</th>
                        </tr>

                            {this.state.recipes.map(
                                (item,index) => (
                                    <tr>
                                        <td>{item.id} </td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button type="button" onClick={this.editRecipe} className="rec-btn" > <i className="far fa-edit " ></i> </button>
                                            <button type="button" onClick={this.delete} className="rec-btn"> <i className="far fa-trash-alt" aria-hidden="true"></i> </button>
                                        </td>
                                    </tr>
                        ))}

                    </table>
                </div>
            </div>
        )}
}

export default Recipes;
