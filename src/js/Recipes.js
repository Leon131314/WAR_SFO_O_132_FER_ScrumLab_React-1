import React from 'react';

class Recipes extends React.Component{
    render(){
        return (


            <div className="rec-main">
                    <div className="rec-header">
                        <h1 className="rec-h1">Lista przepisów</h1>
                        <button className="rec-button"> +</button>
                    </div>
                <div className="tab-main">
                    <table className="tab">
                        <tr className="tab-tr">
                            <th className="tab-h-1" >ID</th>
                            <th className="tab-h-2">Nazwa</th>
                            <th className="tab-h-3">Opis</th>
                            <th className="tab-h-4">Akcje</th>
                        </tr>
                        <tr>
                            <td>a </td>
                            <td>b</td>
                            <td>c</td>
                            <td>
                                <i className="far fa-edit"></i> <i className="far fa-trash-alt" aria-hidden="true"></i>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        )}
}

export default Recipes;
