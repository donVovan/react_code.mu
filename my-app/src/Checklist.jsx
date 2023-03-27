//⊗jsrtPmPrjChL
import React, { useState } from 'react';

function Checklist() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleInputChange = event => {
        setText(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!text || /^\s*$/.test(text)) {
            return;
        }

        setItems([...items, { text, checked: false }]);
        setText('');
    };

    const handleDelete = i => {
        setItems(items.filter((_, index) => index !== i));
    };

    const handleEdit = (i, newText) => {
        const newItems = [...items];
        newItems[i].text = newText;
        setItems(newItems);
        setText('');
    };

    const handleCheck = i => {
        const newItems = [...items];
        newItems[i].checked = !newItems[i].checked;
        setItems(newItems);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={handleInputChange} />
                <button type="submit">Добавить</button>
            </form>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
            <span style={item.checked ? { textDecoration: 'line-through' } : null}>
              {item.text}
            </span>
                        <button onClick={() => handleCheck(i)}>Отметить</button>
                        <button onClick={() => handleDelete(i)}>Удалить</button>
                        {item.checked ? null : (
                            <>
                                <button onClick={() => setText(item.text)}>Редактировать</button>
                                <button onClick={() => handleEdit(i, text)}>Сохранить</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Checklist;