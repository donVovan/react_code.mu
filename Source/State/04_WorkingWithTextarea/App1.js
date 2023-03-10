//⊗jsrtPmStTx
import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');
    const [res, setRes] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
        setRes(getTranslit(event.target.value));
    }
    function getTranslit(str) {
        let alpabet = {
            'а': 'a',
            'б': 'b',
            'в': 'v',
            'г': 'g',
            'д': 'd',
            'е': 'e',
            'ё': 'jo',
            'ж': 'zh',
            'з': 'z',
            'и': 'i',
            'й': 'jj',
            'к': 'k',
            'л': 'l',
            'м': 'm',
            'н': 'n',
            'о': 'o',
            'п': 'p',
            'р': 'r',
            'с': 's',
            'т': 't',
            'у': 'u',
            'ф': 'f',
            'х': 'h',
            'ц': 'c',
            'ч': 'ch',
            'ш': 'sh',
            'щ': 'shh',
            'ъ': '"',
            'ы': 'y',
            'ь': "'",
            'э': 'eh',
            'ю': 'ju',
            'я': 'ja',
            ' ': ' ',
            ',': ',',
            '.': '.'
        }
        let result = ''
        for (let i = 0; i < str.length; i++) {
            if (Object.keys(alpabet).includes(str[i])){
                result += alpabet[str[i]];
            } else {
                result += str[i];
            }
        }
        return result;
    }


    return <div>
        <textarea value={value} onChange={handleChange} />
        <p>{res}</p>
    </div>;
}

export default App;
