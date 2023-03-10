//⊗jsrtPmCpChC
import React from "react";

function Employee({name, patr, surn, salary}) {

    return <div>
        {/*<Employee name={name} patr={patr} surn={surn} salary={wage}/>
        <Employee name={name} patr={patr} surn={surn} salary={wage}/>*/}
        <p>
            Фамилия: {surn} <br/>
            Имя: {name}<br/>
            Отчество: {patr}<br/>
            з/п: {salary}
        </p>
    </div>;
}

export default Employee;