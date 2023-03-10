//⊗jsrtPmBsEO
import React from 'react';

function App() {
	const users = [
		{name: 'user1', surn: 'surn1', age: 30},
		{name: 'user2', surn: 'surn2', age: 31},
		{name: 'user3', surn: 'surn3', age: 32},
	];
	const res = users.map((item, i) => {
		return <li key={i}>
			<span>{item.name}</span> <span>{item.surn}</span>: <span>{item.age}</span>
			</li>;
			})
		return <ul>
			{res}
		</ul>;
}

export default App;
