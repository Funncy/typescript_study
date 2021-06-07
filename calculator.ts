{
	type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
	function calculate(operator: Operator, num1: number, num2: number): number {
		switch (operator) {
			case 'add':
				return num1 + num2;
			case 'substract':
				return num1 - num2;
			case 'multiply':
				return num1 * num2;
			case 'divide':
				return num1 / num2;
			case 'remainder':
				return num1 % num2;
			default:
				throw new Error('operator is worng!');
		}
	}

	console.log(calculate('add', 1, 3));
	console.log(calculate('substract', 1, 3));
	console.log(calculate('multiply', 1, 3));
	console.log(calculate('divide', 1, 3));
	console.log(calculate('remainder', 1, 3));
}
