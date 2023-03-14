//⊗jsrtPmCpRCC
import React, {useState} from "react";

function getSum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += +elem;
    }

    return res;
}

function Calculator() {
    const [nums, setNums] = useState([1, 2, 3]);

    function handleBlur(event) {
        setNums([...nums, event.target.value]);
    }

    return <div>
        <p>{getSum(nums)}</p>
        <input onBlur={handleBlur} />
    </div>;
}

export default Calculator;