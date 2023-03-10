//⊗jsrtPmStChc
import React, {useState} from 'react';
import './App.css';

const App = () => {
const [checked, setChecked] = useState(true);

let mess;
if (checked) {
mess = <div>
    <p>
        увы, вам еще нет 18 лет:(
    </p>
</div>

} else {
    mess = <div>
        <h2>Ура, вам уже есть 18</h2>
        <p>
            здесь расположен контент только для взрослых
        </p>
    </div>
}



return <div>
    Вам уже есть 18 лет? Да - <input type="checkbox" checked={!checked} onChange={()=> setChecked(!checked)}/><br/>
    <div>{mess}</div>
</div>
}


export default App;
