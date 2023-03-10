//⊗jsrtPmBsEO
import React from 'react';

function App() {
	const arr = [];
	for (let i = 1; i < 6; i++) {
		arr.push(<li>{i}</li>);
	}
	return <ul>
		{arr}
	</ul>;
}

export default App;
