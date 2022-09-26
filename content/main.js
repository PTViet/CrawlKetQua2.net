const result = {
	firstPrize: '',
	secondprize: '',
	thirdPrize: [],
	fourthPrize: [],
	fifthPrize: [],
	sixthPrize: [],
	seventhPrize: [],
}


window.onload = function () {
	result.firstPrize = document?.getElementById('rs_0_0').innerHTML;

	result.secondprize = document?.getElementById('rs_2_0').innerHTML;

	result.thirdPrize = `${document?.getElementById('rs_3_0').innerHTML | 'No data'},${document?.getElementById('rs_3_1').innerHTML | 'No data'},${document?.getElementById('rs_3_2').innerHTML | 'No data'},${document?.getElementById('rs_3_3').innerHTML | 'No data'},${document?.getElementById('rs_3_4').innerHTML | 'No data'},${document?.getElementById('rs_3_5').innerHTML | 'No data'}`;

	result.fourthPrize = `${document?.getElementById('rs_4_0').innerHTML | 'No data'},${document?.getElementById('rs_4_1').innerHTML | 'No data'},${document?.getElementById('rs_4_2').innerHTML | 'No data'},${document?.getElementById('rs_4_3').innerHTML | 'No data'}`;

	result.fifthPrize = `${document?.getElementById('rs_5_0').innerHTML | 'No data'},${document?.getElementById('rs_5_1').innerHTML | 'No data'},${document?.getElementById('rs_5_2').innerHTML | 'No data'},${document?.getElementById('rs_5_3').innerHTML | 'No data'},${document?.getElementById('rs_5_4').innerHTML | 'No data'},${document?.getElementById('rs_5_5').innerHTML | 'No data'}`;


	result.sixthPrize = `${document?.getElementById('rs_6_0').innerHTML | 'No data'},${document?.getElementById('rs_6_1').innerHTML | 'No data'},${document?.getElementById('rs_6_2').innerHTML | 'No data'}`;


	result.seventhPrize = `${document?.getElementById('rs_7_0').innerHTML | 'No data'},${document?.getElementById('rs_7_1').innerHTML | 'No data'},${document?.getElementById('rs_7_2').innerHTML | 'No data'},${document?.getElementById('rs_7_3').innerHTML | 'No data'}`;


	function exportToJsonFile(jsonData) {
		let dataStr = JSON.stringify(jsonData);
		let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

		let exportFileDefaultName = 'data.json';

		let linkElement = document.createElement('a');
		linkElement.setAttribute('href', dataUri);
		linkElement.setAttribute('download', exportFileDefaultName);
		linkElement.click();
	}
	exportToJsonFile(result);
};











// var delayInMilliseconds = 5000; //5 second

// setInterval(getLoSoAward, delayInMilliseconds);

// function getLoSoAward() {
// 	var hours = new Date().getHours();
// 	var minutes = new Date().getMinutes();

// 	// if ((hours == 18 && minutes == 14)) {
// 	// 	location.reload();
// 	// 	console.log("Reloaded");
// 	// }

// 	// if ((hours == 18 && minutes >=15 && minutes <= 35)) {
// 		console.log("Get reward start");
// 		// Giai dac biet
// 		const specialAward = document.getElementById("rs_0_0");
// 		const specialAwardNum = specialAward == null ? "" : specialAward.getAttribute("data-sofar");
// 		// Giai nhat
// 		const firstAward = document.getElementById("rs_1_0");
// 		const firstAwardNum = firstAward == null ? "" : firstAward.getAttribute("data-sofar");
// 		// Giai nhi
// 		const secondAward_1 = document.getElementById("rs_2_0");
// 		const secondAward_2 = document.getElementById("rs_2_1");
// 		const secondAward = (secondAward_1 == null ? "" : secondAward_1.getAttribute("data-sofar") + "-")
// 							+ (secondAward_2 == null ? "" : secondAward_2.getAttribute("data-sofar"));
// 		// Giai ba
// 		const thirdAward_1 = document.getElementById("rs_3_0");
// 		const thirdAward_2 = document.getElementById("rs_3_1");
// 		const thirdAward_3 = document.getElementById("rs_3_2");
// 		const thirdAward_4 = document.getElementById("rs_3_3");
// 		const thirdAward_5 = document.getElementById("rs_3_4");
// 		const thirdAward_6 = document.getElementById("rs_3_5");
// 		const thirdAward = (thirdAward_1 == null ? "" : thirdAward_1.getAttribute("data-sofar") + "-")
// 							+ (thirdAward_2 == null ? "" : thirdAward_2.getAttribute("data-sofar") + "-")
// 							+ (thirdAward_3 == null ? "" : thirdAward_3.getAttribute("data-sofar") + "-")
// 							+ (thirdAward_4 == null ? "" : thirdAward_4.getAttribute("data-sofar") + "-")
// 							+ (thirdAward_5 == null ? "" : thirdAward_5.getAttribute("data-sofar") + "-" )
// 							+ (thirdAward_6 == null ? "" : thirdAward_6.getAttribute("data-sofar"));
// 		// Giai bon
// 		const fourthAward_1 = document.getElementById("rs_4_0");
// 		const fourthAward_2 = document.getElementById("rs_4_1");
// 		const fourthAward_3 = document.getElementById("rs_4_2");
// 		const fourthAward_4 = document.getElementById("rs_4_3");
// 		const fourthAward = (fourthAward_1 == null ? "" : fourthAward_1.getAttribute("data-sofar") + "-")
// 							+ (fourthAward_2 == null ? "" : fourthAward_2.getAttribute("data-sofar") + "-")
// 							+ (fourthAward_3 == null ? "" : fourthAward_3.getAttribute("data-sofar") + "-")
// 							+ (fourthAward_4 == null ? "" : fourthAward_4.getAttribute("data-sofar"));
// 		// Giai nam
// 		const fifthAward_1 = document.getElementById("rs_5_0");
// 		const fifthAward_2 = document.getElementById("rs_5_1");
// 		const fifthAward_3 = document.getElementById("rs_5_2");
// 		const fifthAward_4 = document.getElementById("rs_5_3");
// 		const fifthAward_5 = document.getElementById("rs_5_4");
// 		const fifthAward_6 = document.getElementById("rs_5_5");
// 		const fifthAward = (fifthAward_1 == null ? "" : fifthAward_1.getAttribute("data-sofar") + "-")
// 							+ (fifthAward_2 == null ? "" : fifthAward_2.getAttribute("data-sofar") + "-")
// 							+ (fifthAward_3 == null ? "" : fifthAward_3.getAttribute("data-sofar") + "-")
// 							+ (fifthAward_4 == null ? "" : fifthAward_4.getAttribute("data-sofar") + "-")
// 							+ (fifthAward_5 == null ? "" : fifthAward_5.getAttribute("data-sofar") + "-")
// 							+ (fifthAward_6 == null ? "" : fifthAward_6.getAttribute("data-sofar"));
// 		// Giai sau
// 		const sixthAward_1 = document.getElementById("rs_6_0");
// 		const sixthAward_2 = document.getElementById("rs_6_1");
// 		const sixthAward_3 = document.getElementById("rs_6_2");
// 		const sixthAward = (sixthAward_1 == null ? "" : sixthAward_1.getAttribute("data-sofar") + "-")
// 							+ (sixthAward_2 == null ? "" : sixthAward_2.getAttribute("data-sofar") + "-")
// 							+ (sixthAward_3 == null ? "" : sixthAward_3.getAttribute("data-sofar"));
// 		// Giai bay
// 		const seventhAward_1 = document.getElementById("rs_7_0");
// 		const seventhAward_2 = document.getElementById("rs_7_1");
// 		const seventhAward_3 = document.getElementById("rs_7_2");
// 		const seventhAward_4 = document.getElementById("rs_7_3");
// 		const seventhAward = (seventhAward_1 == null ? "" : seventhAward_1.getAttribute("data-sofar") + "-")
// 							+ (seventhAward_2 == null ? "" : seventhAward_2.getAttribute("data-sofar") + "-")
// 							+ (seventhAward_3 == null ? "" : seventhAward_3.getAttribute("data-sofar") + "-")
// 							+ (seventhAward_4 == null ? "" : seventhAward_4.getAttribute("data-sofar"));

// 		// Tong hop ket qua
// 		if (specialAwardNum != "" || firstAwardNum != "" || secondAward != "" || thirdAward != "" || fourthAward != "" || fifthAward != "" || sixthAward != "" || seventhAward != "") {
// 			let award = "";
// 			award = award.concat("{\"specialAward\":", "\""+specialAwardNum+"\",",
// 						"\"firstAward\":","\""+firstAwardNum+"\",",
// 						"\"secondAward\":","\""+secondAward+"\",",
// 						"\"thirdAward\":","\""+thirdAward+"\",",
// 						"\"fourthAward\":","\""+fourthAward+"\",",
// 						"\"fifthAward\":","\""+fifthAward+"\",",
// 						"\"sixthAward\":","\""+sixthAward+"\",",
// 						"\"seventhAward\":","\""+seventhAward+"\",",
// 						"\"lotoAward\":\"\"}");
// 			//console.log(award);

// 			// var data = { "c" : "210", "date": getCurrentDate(), "data":award, "rb":"Chrome Extension" };
// 			// var url = new URL("https://backend.fomo.win/api_backend");
// 			// for (let i in data) { url.searchParams.append(i, data[i]); }
// 			// fetch(url);
// 			// console.log("Push to DB success");
// 		}
// 	// }
// };

// function getCurrentDate() {
// 	let today = new Date();
// 	let dd = today.getDate();
// 	let mm = today.getMonth() + 1; 
// 	const yyyy = today.getFullYear();

//     dd = (dd < 10) ? `0${dd}` : dd; 
// 	mm = (mm < 10) ? `0${mm}` : mm;
// 	return `${yyyy}-${mm}-${dd}`;
// }


