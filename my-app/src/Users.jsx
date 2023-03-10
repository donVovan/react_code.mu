//⊗jsrtPmCpMVS
import React from "react";
import {nanoid} from "nanoid";
import {useState} from "react";
import User from "./User";

const id = () => nanoid();
const initUsers = [
    {id: id(), name: 'user1', surname: 'surn1', age: 30},
    {id: id(), name: 'user2', surname: 'surn2', age: 31},
    {id: id(), name: 'user3', surname: 'surn3', age: 32},
];

function Users() {
    const [users, setUsers] = useState(initUsers);

    function changeField(id, field, event) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user[field] = event.target.value;
            }
            return user;
        }))
    }

    const rows = users.map(user => {
        return <User
            key={user.key}
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
            changeField={changeField}
        />;
    })

    return <div>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    </div>;
}

export default Users;