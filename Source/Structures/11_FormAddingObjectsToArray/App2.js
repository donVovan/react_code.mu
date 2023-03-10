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

const getIdObj = () => {
    return {
        id: id(),
        name: '',
        catg: '',
        cost: ''
    }
}

function App() {
    const [prods, setProds] = useState(initProds);
    const [obj, setObj] = useState(getIdObj());

    const rows = prods.map(prod => {
        return <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>{prod.catg}</td>
            <td>{prod.cost}</td>
            <td>{<button onClick={() => remItem(prod.id)}>Удалить</button>}</td>
        </tr>;
    });

    const changeProd = (prod, event) => {
      setObj({...obj, [prod]: event.target.value});
    }
    const addItem = () => {
      setProds([...prods, obj]);
      setObj(getIdObj());
    }

    function remItem(id) {
        setProds(prods.filter(prod => prod.id !== id));
    }
    
    return (<div>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
        <input value={obj.name} onChange={event => changeProd('name', event)}/>
        <input value={obj.catg} onChange={event => changeProd('catg', event)}/>
        <input value={obj.cost} onChange={event => changeProd('cost', event)}/>
        <button onClick={addItem}>Сохранить</button>
    </div>);
}


export default App;