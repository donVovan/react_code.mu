//⊗jsrtPmStChc
import React, {useState} from 'react';
import './App.css';

const App = () => {
const [checked, setChecked] = useState(true);

return <div>
    <input type="checkbox" checked={checked} onChange={()=> setChecked(!checked)}/><br/>
    <div>{checked ? 'Какой-то контент' : ''}</div>
</div>
}


export default App;
