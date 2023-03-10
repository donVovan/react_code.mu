//⊗jsrtPmEdCTR
import React, {useState} from 'react';
import './App.css';

function App() {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    let elem1, elem2, elem3;
    if (visible1) {
        elem1 = <p>text</p>;
    }
    if (visible2) {
        elem2 = <p>text2</p>
    }
    if (visible3) {
        elem3 = <p>text3</p>
    }

    return (<div>
        <button onClick={()=>setVisible1(!visible1)}>{visible1 ? 'hide' : 'show'}</button>
        <button onClick={()=>setVisible2(!visible2)}>{visible2 ? 'hide' : 'show'}</button>
        <button onClick={()=>setVisible3(!visible2)}>{visible3 ? 'hide' : 'show'}</button>
        {elem1}
        {elem2}
        {elem3}
    </div>);
}


export default App;