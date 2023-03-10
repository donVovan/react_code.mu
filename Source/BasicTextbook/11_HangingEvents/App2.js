//⊗jsrtPmBsUF
import React from 'react';

function App() {
	function showNum(number) {
		alert(number);
	}
	return <div>
		<button onClick={() => showNum(1)}>act1</button>
		<button onClick={() => showNum(2)}>act2</button>
		<button onClick={() => showNum(3)}>act3</button>
	</div>;
}

export default App;
