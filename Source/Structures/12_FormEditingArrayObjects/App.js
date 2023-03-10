//⊗jsrtPmScOAEF
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
    const [editId, setEditId] = useState(null);

    const rows = prods.map(prod => {
        return <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>{prod.catg}</td>
            <td>{prod.cost}</td>
            <td>{<button onClick={()=>setEditId(prod.id)}>Редактировать</button>}</td>
        </tr>;
    });
    
    function getValue(product) {
        return prods.reduce((res, prod)=> {
            if (prod.id === editId) {
                return prod[product];
            } else {
                return res;
            }
        },'')
    }
    function changeItem(product, event) {
        setProds(prods.map(prod => {
            if (prod.id === editId){
                return {...prod, [product]: event.target.value};
            } else {
                return prod;
            }
        }))
    }


    return (<div>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
        <div>
            <input value={getValue('name')} onChange={event => changeItem('name', event)}/>
            <input value={getValue('catg')} onChange={event => changeItem('catg', event)}/>
            <input value={getValue('cost')} onChange={event => changeItem('cost', event)}/><br/>
            <button onClick={()=> setEditId(null)}>Сохранить</button>
        </div>
    </div>);
}


export default App;