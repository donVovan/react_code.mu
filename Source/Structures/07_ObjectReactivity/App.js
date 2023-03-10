//⊗jsrtPmScOIB
import React, {useState} from 'react';
import './App.css';

function App() {
    const [obj, setObj] = useState({
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
    });
const handleChange = (key) => {
    const copy  = Object.assign({}, obj);
    copy[key] = '!';
     setObj(copy);
}

    return <div>
        <span>{obj.prop1}</span>,
        <span>{obj.prop2}</span>,
        <span>{obj.prop3}</span><br/>
        <button onClick={()=> handleChange('prop1')}>раз</button>
        <button onClick={()=> handleChange('prop2')}>два</button>
        <button onClick={()=> handleChange('prop3')}>три</button>
    </div>;
}


export default App;