import React from 'react';

class NewPlan extends React.Component{
    render(){
        return (
            <div className="np-container">
                <div className="np-main">
                    <div className="np-header">
                        <h1 className="np-h1">Nowy plan</h1>
                        <button className="np-button" onClick={this.props.saveAndClose}> Zapisz i zamknij</button>
                    </div>
                    <div className="np-plan">
                        <div className="np-plan-name">
                            <h2 className="np-h2">Nazwa planu</h2>
                            <textarea onChange={this.props.addTitle} className="np-plan-input" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                        <div className="np-plan-name">
                            <h2 className="np-h2">Opis planu</h2>
                            <textarea onChange={this.props.addDescription} className="np-plan-input2" name="nazwa" cols="x" rows="y"></textarea>
                        </div>
                        <div className="np-plan-name-number">
                            <h2 className="np-h2">Numer tygodnia</h2>
                            <textarea onChange={this.props.addWeekNumberId} className="np-plan-input-number" name="nazwa" cols="x" rows="1"></textarea>
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
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>WTOREK</th>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>ŚRODA</th>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>CZWARTEK</th>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>PIĄTEK</th>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>SOBOTA</th>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                        <tr className="np-plan-table-row">
                            <th>NIEDZIELA</th>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <form action="">
                                    <select onChange={this.props.recipesTitle} name="dish name">
                                        <option selected>Zapiekanka z ziemniakami</option>
                                        <option>druga możliwość</option>
                                        <option>trzecia możliwość</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )}
};

export default NewPlan;