let sum = 0;
for(let count = 0; count <= 999; count++) {
	if (count % 3 === 0 || count % 5 === 0) {
		sum = sum + count
	}
}

console.log(sum);