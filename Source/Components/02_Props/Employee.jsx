import React from "react";

function Employee({surn, name, patr, salary }) {
return <div>
    <p>Фамилия: {surn}</p>,
    <p>Имя: {name}</p>,
    <p>Отчество: {patr}</p>,
    <p>Зарплата: {salary}</p>,
</div>
}

export default Employee;