//⊗jsrtPmBsEO
import React from 'react';

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e'];
	const res = arr.map((item, index) => {return <li key={index}>{item}</li>});
	return <ul>
		{res}
	</ul>
}

export default App;
