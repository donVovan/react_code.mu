//⊗jsrtPmBsUF
import React from 'react';

function App() {
	function getDigitsSum(num) {
		let nums = String(num);
		let sum = 0;
		for (let i = 0; i < nums.length; i++){
			sum += Number(nums[i]);
		}
		return sum;
	}
	
	return <p>
		{getDigitsSum(12345)}
	</p>
}

export default App;
