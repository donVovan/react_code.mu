//⊗jsrtPmBsEO
import React from 'react';

function App() {
	function func(event) {
		console.log(event.target);
	}
	
	return <div>
		<button onClick={func}>тыц</button>
	</div>;
}

export default App;
