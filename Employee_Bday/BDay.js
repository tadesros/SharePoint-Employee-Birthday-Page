//<script src="//code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
//<script type="text/javascript">

//******************************************
//Outside function to prevent any Conflicts
//******************************************
(function () {
	//Document READY function
	$(document).ready(function () {
		//Get todays month as an integer value
		var today = new Date();
		//Get todays day value as an integer
		var tdMonth = today.getMonth() + 1;
		//    var tdDay   = today.getDay() + 1;
		var mDate = today.getDate();

		//Call on load
		popUsers(tdMonth);
	}); //End of document Ready
	// *********************************************************
	/*      Function Declarations             */
	// *********************************************************
	function popUsers(bMonth) {
		var requestUri =
			_spPageContextInfo.webAbsoluteUrl +
			"/_vti_bin/ListData.svc/EMPBDAYNANNV/?$filter=month(Birthday) eq " +
			bMonth +
			"&$top=3000&$select=Surname,Employee,Location,Birthday,BMonth,BDay&$orderby=Birthday";

		console.log(requestUri);

		$.ajax({
			url: requestUri,
			type: "GET",
			dataType: "json",
			headers: {
				accept: "application/json; odata=verbose",
				"content-type": "application/json;odata=verbose",
			},
			success: onSuccess,
			error: onError,
		});
	}
	//**********************************************************
	function onError(error) {
		alert(JSON.stringify(error));
	}
	//***********************************************************
	function onSuccess(data) {

		var monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		//Get todays day value
		//Get todays month as an integer value
		var today = new Date();

		//Get todays day value as an integer add one to adjust date
		var tdDay = today.getDate();
		var curMonth = today.getMonth();


		//Get data results
		var items = data.d.results;

		var curMonthNm = monthNames[curMonth];

		//Create Table Birthdays
		var tableContent =
			'<table id="monthBdays" class="dTable" style="width:100%" border="1 px"><caption class="cdt">' +
			curMonthNm +
			' Birthdays</caption><thead class="dth"><tr class="dtr"><th class="dthdr">Surname</th>' +
			'<th class="dthdr">Name</th>' +
			'<th class="dthdr">Location</th></thead><tbody>';

		//Create Table today Bdays
		var tableToday =
			'<table id="todayBday" class="dTable" style="width:100%" border="1 px"><caption class="cdt">Todays Birthdays</caption><thead class="dth"><tr class="dtr"><th class="dthdr">Surname</th>' +
			'<th class="dthdr">Name</th>' +
			'<th class="dthdr">Location</th></tr></thead><tbody>';

		// Enter loop for checking each value
		for (var i = 0; i < items.length; i++) {
			//If null value is present go ahead and overwrite with nothing
			var nameStr;

			if (items[i].Surname) {
				nameStr = items[i].Surname;
			} else {
				nameStr = "";
			}

			//Check to see if current user has a birthday of today
			if (tdDay === items[i].BDay) {
				tableContent += '<tr class="tdt">';
				tableToday += '<td class="dtd">' + nameStr + "</td>";
				tableToday += '<td class="dtd">' + items[i].Employee + "</td>";
				tableToday += '<td class="dtd">' + items[i].Location + "</td>";
				tableToday += "</tr>";
			}

			tableContent += '<tr class="tdt">';
			tableContent += '<td class="dtd">' + nameStr + "</td>";
			tableContent += '<td class="dtd">' + items[i].Employee + "</td>";
			tableContent += '<td class="dtd">' + items[i].Location + "</td>";
			tableContent += "</tr>";
		} //For Loop

		//Append to table
		$("#todayBdays").append(tableToday);
		$("#monthBdays").append(tableContent);
	} //End of On Success
	//*****************************************

	function onError(error) {
		alert("Error");
	}
	//*****************************************
})(); //End of outside function

//</script>
