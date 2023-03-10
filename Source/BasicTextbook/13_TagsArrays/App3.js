//⊗jsrtPmBsEO
import React from 'react';

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e'];
	const res = arr.map((item) => {return <li>{item}</li>});
	return <ul>
		{res}
	</ul>
}

export default App;
