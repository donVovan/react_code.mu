//⊗jsrtPmCpRCC
import React from "react";

const Verdict = ({temp}) => {
    function isTemp(temp) {
        if (temp <= 0){
            return 'Вода замёрзла!'
        } else if (temp >= 100) {
            return 'Вода испарилась!'
        } else {
            return 'Вода пока жидкая'
        }
    }
    return <div>
        здесь будет вывод: <br/>
        {isTemp(temp)}
    </div>
}

export default Verdict;