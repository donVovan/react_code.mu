//⊗jsrtPmScOAAF
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
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    function remItem(id) {
        setProds(prods.filter(prod => prod.id !== id));
    }


    const rows = prods.map(prod => {
        return <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>{prod.catg}</td>
            <td>{prod.cost}</td>
            <td>{<button onClick={() => remItem(prod.id)}>Удалить</button>}</td>
        </tr>;
    });

    const addItem = () => {
        let obj = {
            id: id(),
            name: value1,
            catg: value2,
            cost: value3,
        };
        setProds([...prods, obj]);
        setValue1('');
        setValue2('');
        setValue3('');
    }

    return (<div>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
        <input value={value1} onChange={event => setValue1(event.target.value)}/>
        <input value={value2} onChange={event => setValue2(event.target.value)}/>
        <input value={value3} onChange={event => setValue3(event.target.value)}/>
        <button onClick={addItem}>Сохранить</button>
    </div>);
}


export default App;