//⊗jsrtPmCpMVS
import React from "react";
import UserField from "./UserField";

function User({id, name, surname, age, changeField}) {
    return <tr>
        <UserField id={id} text={name} type='name' changeField={changeField} />
        <UserField id={id} text={surname} type='surname' changeField={changeField} />
        <UserField id={id} text={age} type='age' changeField={changeField} />
    </tr>
}

export default User;