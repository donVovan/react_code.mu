//⊗jsrtPmBsEO
import React from 'react';

function App() {
	function func(arg1, event, arg2) {
		console.log(arg1, arg2, event);
	}
	
	return <div>
		<button onClick={event => func('eee', event, 'бе-бе-бе')}>act</button>
	</div>;
}

export default App;
