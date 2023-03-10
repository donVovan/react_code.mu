//⊗jsrtPmCpChC
import React, {useState} from 'react';
import './App.css';
import Employee from "./Employee";

const name1 = 'Алексей';
const name2 = 'Михаил';
const surn = 'Блинов';
const patr = 'Владимирович';
const wage1 = '120000$';
const wage2 = '100000$'

function App() {

    return <div>
        <Employee name={name1} patr={patr} surn={surn} salary={wage1}/>
        <Employee name={name2} patr={patr} surn={surn} salary={wage2}/>
    </div>;
}


export default App;