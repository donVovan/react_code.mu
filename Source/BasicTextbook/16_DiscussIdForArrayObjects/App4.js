//⊗jsrtPmBsOAI
import React from 'react';
import { nanoid } from 'nanoid';

function App() {
	const id = () => { return nanoid() };
	const users = [
		{ id: id(), name: 'user1', surn: 'surn1', age: 30 },
		{ id: id(), name: 'user2', surn: 'surn2', age: 31 },
		{ id: id(), name: 'user3', surn: 'surn3', age: 32 },
		{ id: id(), name: 'user4', surn: 'surn3', age: 33 },
	];
	const res = users.map((item) => {
		return <li key={item.id}>
			<span>{item.name}</span> <span>{item.surn}</span>: <span>{item.age}</span>
		</li>;
	})
	return <ul>
		{res}
	</ul>;
}

export default App;
