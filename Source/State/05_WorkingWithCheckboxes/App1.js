//⊗jsrtPmStChc
import React, {useState} from 'react';
import './App.css';

const App = () => {
const [checked, setChecked] = useState(true);
const [res, setRes] = useState('')
const handleChange = () => {
  setChecked(!checked);
}
const getCheck = () => {
    if (checked){
        return 'Привет';
    } else {
        return 'Ну пока';
    }
  
}

return <div>
    <input type="checkbox" checked={checked} onChange={handleChange}/><br/>
    <button onClick={()=>setRes(getCheck)}>тыц</button>
    <p>{res}</p>
</div>
}


export default App;
