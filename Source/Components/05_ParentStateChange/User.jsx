//⊗jsrtPmCpChCPS
import React from "react";

function User({id, name, surname, age, setBan}) {
    return <div>
        <p>{id}</p>
        Имя: <span>{name}</span>,
        Фамилия: <span>{surname}</span>,
        Возраст: <span>{age}</span>,
        <span>{setBan ? 'забанен' : 'разбанен'}</span>
        <button onClick={()=> setBan(id)}>Мочить!</button>
    </div>
}

export default User;