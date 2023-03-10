//⊗jsrtPmCpPr
import React, {useState} from 'react';
import './App.css';
import Employee from "./Employee";

function App() {

    return <div>
        <Employee name='Алексей' patr='Владимирович' surn='Блинов' salary='100000$'/>
        <Employee name='Михаил' patr='Владимирович' surn='Блинов' salary='100000$'/>
    </div>;
}


export default App;