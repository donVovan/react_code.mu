//⊗jsrtPmCpChCPS
import React from "react";
import {nanoid} from "nanoid";
import {useState} from "react";
import User from "./User";

const id = () => nanoid();
const initUsers = [
    {id: id(), name: 'user1', surname: 'surn1', age: 30, ban: false},
    {id: id(), name: 'user2', surname: 'surn2', age: 31, ban: false},
    {id: id(), name: 'user3', surname: 'surn3', age: 32, ban: false},
];

function Users() {
    const [users, setUsers] = useState(initUsers);

    function setBan(id) {
        setUsers(users.map(user => {
            if (user.id === id){
                user.ban = true;
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
            ban={user.ban}
            setBan={setBan}
            />
    })

    return <div>
        {items}
    </div>;
}

export default Users;