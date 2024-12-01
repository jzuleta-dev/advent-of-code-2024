const setup = () => {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function generateRandomList(size) {
		const list = [];
		for (let i = 0; i < size; i++) {
			list.push(getRandomInt(1, 9));
		}
		return list;
	}
 
	const list1 = generateRandomList(10);
	const list2 = generateRandomList(10);

	return { list1, list2 };
}

const orderList = (list) => list.sort((a, b) => a - b);


const calculateDistances = (list1, list2) => {
	const distances = [];
	// in case that they are not the same length
	const minLength = Math.min(list1.length, list2.length);

	for (let i = 0; i < minLength; i++) {
		distances.push(Math.abs(list1[i] - list2[i]));
	}
	return distances;
}

const getListWeight = (list) => list.reduce((acc, val) => acc + val, 0);

const main  = () => {
	const {list1: leftList, list2: rightList} = setup()

	console.log('Left List:', leftList);
	console.log('Right List:', rightList);
	const minLeftList = orderList(leftList)
	const minRightList = orderList(rightList)

	const distances = calculateDistances(minLeftList, minRightList)

	const distanceSum = getListWeight(distances)


	// AI generated. Not tested
	const printListsVertically = (list1, list2, distances) => {
		const maxLength = Math.max(list1.length, list2.length, distances.length);
		for (let i = 0; i < maxLength; i++) {
			const val1 = list1[i] !== undefined ? list1[i] : ' ';
			const val2 = list2[i] !== undefined ? list2[i] : ' ';
			const val3 = distances[i] !== undefined ? distances[i] : ' ';
			console.log(`${val1}\t${val2}\t${val3}`);
		}
	}
	printListsVertically(minLeftList, minRightList, distances);

	console.log('\n\n\n')
	console.log('*** the distance is: ',  distanceSum)
	console.log('\n\n\n')
}

main();