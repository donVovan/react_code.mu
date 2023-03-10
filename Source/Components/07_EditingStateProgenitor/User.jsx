//⊗jsrtPmCpEGS
import React from "react";
import UserField from "./UserField";

function User({id, name, surname, age, isEdit, toggleMode, editUser}) {
    return <div>
        <p>{id}</p>
        Имя: <UserField
        id={id}
        text={name}
        type="Имя"
        isEdit={isEdit}
        editUser={editUser}
        />,
        Фамилия: <UserField
        id={id}
        text={surname}
        type="Фамилия"
        isEdit={isEdit}
        editUser={editUser}
        />,
        Возраст: <UserField
        id={id}
        text={age}
        type="Возраст"
        isEdit={isEdit}
        editUser={editUser}
        />
        <button onClick={()=> toggleMode(id)}>
            {isEdit ? 'сохранить' : 'редактировать'}
        </button>
    </div>
}

export default User;