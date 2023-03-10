//⊗jsrtPmScOA
import React, {useState} from 'react';
import './App.css';
import {nanoid} from "nanoid";


function App() {
    const id = () => nanoid();
    const initProds = [
        {id: id(), name: 'prod1', catg: 'catg1', cost: 100},
        {id: id(), name: 'prod2', catg: 'catg2', cost: 200},
        {id: id(), name: 'prod3', catg: 'catg3', cost: 300},
    ];

    const rows = initProds.map((item) => {
        return <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.catg}</td>
            <td>{item.cost}</td>
        </tr>;
    })
    return (
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    )

}


export default App;