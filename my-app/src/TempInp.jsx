import React from "react";

const TempInp = ({temp, setTemp}) => {

    function changeTemp(event) {
        setTemp(event.target.value)
    }

    return <div>
        <input value={temp} onInput={changeTemp}/>
    </div>
}

export default TempInp;