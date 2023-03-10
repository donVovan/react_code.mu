//⊗jsrtPmBsAC
import React from 'react';

function App() {
	const isAdmin = true;
	let text;
	if (isAdmin) {
		text = <p>'Да, ты админ'</p>;
	}
	return text;
}

export default App;
