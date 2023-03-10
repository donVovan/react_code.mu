//⊗jsrtPmStChc
import React, {useState} from 'react';
import './App.css';

const App = () => {
const [checked1, setChecked1] = useState(true);
const [checked2, setChecked2] = useState(true);
const [checked3, setChecked3] = useState(true);

return <div>
    <input type="checkbox" checked={checked1} onChange={()=> setChecked1(!checked1)}/>
    <input type="checkbox" checked={checked2} onChange={()=> setChecked2(!checked2)}/>
    <input type="checkbox" checked={checked3} onChange={()=> setChecked3(!checked3)}/><br/>
<ul>
    <li>{checked1 ? 'HTML' : ''}</li>
    <li>{checked2 ? 'CSS' : ''}</li>
    <li>{checked3 ? 'JS' : ''}</li>
</ul>
</div>
}


export default App;
