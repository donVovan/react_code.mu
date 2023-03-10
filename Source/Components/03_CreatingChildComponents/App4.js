//⊗jsrtPmCpChC
import React, {useState} from 'react';
import './App.css';
import User from "./User";
import {nanoid} from "nanoid";

const id = () => nanoid();

const users = [
    {id: id(), name: 'user1', surn: 'surn1', age: 30},
    {id: id(), name: 'user2', surn: 'surn2', age: 31},
    {id: id(), name: 'user3', surn: 'surn3', age: 32},
];

function App() {
    const result = users.map(user => {
        return <User key={user.id} name={user.name} surn={user.surn} age={user.age}/>
    })
    return <table>
        <tbody>
        {result}
        </tbody>

    </table>;
}


export default App;