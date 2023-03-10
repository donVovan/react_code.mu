//⊗jsrtPmBsOAI
import React from 'react';
import {nanoid} from 'nanoid';
import uuid from 'react-uuid';

function App() {
	return <>
	<p>
		{nanoid()}
	</p>
	<p>
		{uuid()}
	</p>
	</> 
}

export default App;
