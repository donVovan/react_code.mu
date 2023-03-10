//⊗jsrtPmStInr
import React, {useState} from 'react';

function App() {
    let [name, setName] = useState('Ivan');
    let [surname, setSurname] = useState('Oblomov');
    let [age, setAge] = useState(33);
    let [ban, setBan] = useState(false);

    return <div>
        <div>
            <span>{name}</span>
            <span>{surname}</span>
        </div>
        <div>
            <button onClick={() => setName('Maxim')}>раз</button>
            <button onClick={() => setSurname('Petrov')}>два</button>
        </div>
        <div>
            Бан статус: <span>{ban ? 'забанен' : 'не забанен'}</span>
        </div>
        <div>
            <button onClick={()=> setBan(!ban)}>бан/разбан</button>
        </div>
        возраст: {age}
        <div>
            <button onClick={()=> setAge(age + 1)}>постареть</button>
            <button onClick={()=> setAge(age - 1)}>помолодеть</button>
        </div>

    </div>
}

export default App;
