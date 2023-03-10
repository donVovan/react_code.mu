//⊗jsrtPmCpChCPS
import React from "react";

function User({id, name, surname, age}) {
    return <div>
        <p>{id}</p>
        Имя: <span>{name}</span>,
        Фамилия: <span>{surname}</span>,
        Возраст: <span>{age}</span>
    </div>
}

export default User;