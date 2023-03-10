//⊗jsrtPmCpChC
import React, {useState} from 'react';
import './App.css';
import User from "./User";
import {nanoid} from "nanoid";

const id = () => nanoid();

const persons = [
    {id: id(), name: 'Алексей', surn: 'Блинов', age: '3,5'},
    {id: id(), name: 'Михаил', surn: 'Блинов', age: '3,5'},
]

function App() {

    return <div>
        <User name={persons[0].name} surn={persons[0].surn} age={persons[0].age}/>
        <User name={persons[1].name} surn={persons[1].surn} age={persons[1].age}/>
    </div>;
}


export default App;