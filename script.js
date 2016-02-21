
//Nothing happens on the page until the document is loaded.
//Once loaded, we call the getData() function, defined below.
$(document).ready(function() {
	getData();
});


function getData() {

	//We bring our json file into our JavaScript environement with an AJAX call.
	//$.getJSON points to our json file, loads it, and stores it in a variable defined in the parenthesis...
	//In the case, we've opted to call it `schoolsData`
	$.getJSON("hickman.json", function(schoolsData) {
		//Once we have the data, we PASS it on to the next function
		//where we'll loop through the data and draw our chart.
		//We pass it to the next function by including it as an "argument" inside the parenthesis
		loopThroughData(schoolsData);
	});
}

//This is the function we'll use to draw our chart using the schools data.
//In order to use it in the function, we need to "catch" the data we passed from the other function
//by putting it in the parenthesis. In class we called is "s" to make the point that...
//...we can call it anything we want, but it's value will be the same as from where we passed it.
//I'm keeping the name "schoolsData" here for clarity.
function loopThroughData(schoolsData) {

  // The for loop:
	// 1) We define a variable called i, which is equal to 0.
	// 2) If i is less than the length of the data.movies array, proceed.
	// 3) Add 1 to i. (i++ is shorthand for i = i + 1)
  for (i=0; i<schoolsData.length; i++) {

		var schoolName = schoolsData[i]["SCHOOL_NAME"];
		var year = schoolsData[i]["YEAR"];
		var suspension = schoolsData[i]["SUSPENSION_RATE"];

		//If graduation percent is less thatn 50%...
		//We use the `<` operator to test for values less than 50%
		//And we use `&&` to indicate an AND condition,
		//Which is that the value must also be greater than 0.
		// if (gradPct < 60 && gradPct > 0) {
		// 	//...Do this.
		// 	console.log(year, schoolName, gradPct);
		// }

    var barWidth = suspension * 10;

//If the school name matches the one we're looking for, add some markup onto our page.
if (schoolName === "COLUMBIA-HICKMAN HIGH") {

  //All I'm doing here is writing some markup. The markup is exactly the same each time...
  //...except for three variables: the width of the bar (calculated above), the year and the graduation rate.
  //So we fill those in each time through the loop.
  $(".chart").append(
    "<div class='bar-item'>"+
      "<div class='bar' style='width: "+barWidth+"px'>"+year+"</div>"+
      "<div class='val'>"SUSPENSION_RATE"%</div>"+
    "</div>"
  );

  //See the style.css document for CSS to make it pretty.
}


}

}
