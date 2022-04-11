const currentDay = new Date().getDay();


switch (currentDay)	{
	case 0:
	console.log("sunday");
	break;
	case 1:
	console.log("monday");
	break;
	case 2:
	console.log("tuesday");
	break;
	case 3:
	console.log("wednesday");
	break;
	case 4:
	console.log("thursday");
	break;
	case 5:
	console.log("friday");
	break;
	case 6:
	console.log("saturday");
	break;
	default:
	console.log(N/A);
};

const forArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let i = 0; i < forArr.length; i++) {
 	console.log(forArr[i]);
};

let zeroToFifty= 0;
while (zeroToFifty <= 50){
	console.log(zeroToFifty);
	zeroToFifty++;
};

let zeroToOnefifty = 0;
const limit = 150;
do {
	console.log(zeroToOnefifty);
	zeroToOnefifty++
} while (zeroToOnefifty <= limit);


let mainArr = [];
for (let i = 0; i < 1000; i++) {
	mainArr.push(i * i);
    console.log(mainArr[i]);
}