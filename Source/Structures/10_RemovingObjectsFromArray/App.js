//⊗jsrtPmScOA
import React, {useState} from 'react';
import './App.css';
import {nanoid} from "nanoid";

const id = () => nanoid();
const initProds = [
    {id: id(), name: 'prod1', catg: 'catg1', cost: 100},
    {id: id(), name: 'prod2', catg: 'catg2', cost: 200},
    {id: id(), name: 'prod3', catg: 'catg3', cost: 300},
];

function App() {
    const [prods, setProds] = useState(initProds);

    function remItem(id) {
        setProds(prods.filter(prod => prod.id !== id));
    }

    const rows = prods.map(prod => {
        return <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>{prod.catg}</td>
            <td>{prod.cost}</td>
            <td>{<button onClick={() => remItem(prod.id)}>remove</button>}</td>
        </tr>;
    });

    return (
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}


export default App;