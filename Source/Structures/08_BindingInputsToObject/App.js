//⊗jsrtPmScOIB
import React, {useState} from 'react';
import './App.css';

const initDate = {
    year: 2025,
    month: 12,
    day: 31,
}

function App() {
    const [obj, setObj] = useState(initDate);

    const week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    let dayWeek = new Date(obj.year, obj.month, obj.day).getDay();

    const handleChange = (date, event) => {
        const copy = Object.assign({}, initDate);
        copy[date] = event.target.value;
        setObj(copy);
    }

    return <div>
        <p>
            <input value={obj.year} onChange={event => handleChange('year', event)}/>
            <input value={obj.month} onChange={event => handleChange('month', event)}/>
            <input value={obj.day} onChange={event => handleChange('day', event)}/>
        </p>
        <p>
            {obj.year} - {obj.month} - {obj.day} - {week[dayWeek]}
        </p>

    </div>;
}


export default App;