/*function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));
*/

function somarNumeros(arr) {
	return arr.reduce(function(prev, current){
		console.log ({ prev});
		console.log ({current});
		return prev + current;
},0);
}

const arr = [1,2];

console.log(somarNumeros(arr));