function checkYuGiOh(n) {
	const list = [];
	for (let x = 0; x < n; x++) {
		if (((x + 1) % 2 === 0) & ((x + 1) % 3 === 0) & ((x + 1) % 5 === 0)) {
			list[x] = 'yu-gi-oh';
		} else if (((x + 1) % 2 === 0) & ((x + 1) % 3 === 0)) {
			list[x] = 'yu-gi';
		} else if (((x + 1) % 2 === 0) & ((x + 1) % 5 === 0)) {
			list[x] = 'yu-oh';
		} else if ((x + 1) % 2 === 0) {
			list[x] = 'yu';
		} else if ((x + 1) % 3 === 0) {
			list[x] = 'gi';
		} else if ((x + 1) % 5 === 0) {
			list[x] = 'oh';
		} else {
			list[x] = x + 1;
		}
	}
	if (list.length < 1) {
		return 'invalid parameter: ' + n;
	}
	//if(n===undefined){
	//return "invalid parameter"
	//  }
	//else{
	else return list;
	//}
}
console.log(checkYuGiOh(10));
