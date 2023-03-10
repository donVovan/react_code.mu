//⊗jsrtPmCpEGS
import React from "react";
import {nanoid} from "nanoid";
import {useState} from "react";
import User from "./User";

const id = () => nanoid();
const initUsers = [
    {id: id(), name: 'user1', surname: 'surn1', age: 30, isEdit: false},
    {id: id(), name: 'user2', surname: 'surn2', age: 31, isEdit: false},
    {id: id(), name: 'user3', surname: 'surn3', age: 32, isEdit: false},
];

function Users() {
    const [users, setUsers] = useState(initUsers);

    function toggleMode(id) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user.isEdit = !user.isEdit;
            }
            return user;
        }));
    }

    function editUser(id, field, event) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user[field] = event.target.value;
            }
            return user;
        }))
    }


    const items = users.map(user => {
        return <User
            id={user.id}
            key={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
            isEdit={user.isEdit}
            toggleMode={toggleMode}
            editUser={editUser}
        />
    })

    return <div>
        {items}
    </div>;
}

export default Users;