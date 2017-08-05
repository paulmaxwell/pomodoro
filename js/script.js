var sessionCount = 25;
var breakCount = 5;

var sessionMemory = 25;
var breakMemory = 5;

var min;
var sec;

$(document).ready(function() {

	var alarm = document.getElementById("alarm");

	$("#reset, #timerDisplay, #timeType").hide();


	$("#start").click(function() {
		$("#start, .bottom-row").hide();
		$("#timerDisplay, #reset, #timeType").show();
		$("#timeType").html("Session Time:");
		$("#timerDisplay").html(sessionCount + ":00");

		var count = setInterval(sessionTimer, 1000);
		sessionCount = sessionCount * 60;
		breakCount = breakCount * 60;

		function sessionTimer() {
			
			sessionCount -= 1;

			min = Math.floor(sessionCount / 60);
			if (min < 10) {min = "0" + min;}
			sec = Math.floor(sessionCount % 60);
			if (sec < 10) {sec = "0" + sec}
			var minSecTime = min + ":" + sec;

			$("#timerDisplay").html(minSecTime);

			if (sessionCount <= 0) {
				alarm.play();
				clearInterval(count);
				count = setInterval(breakTimer, 1000);
			};

			function breakTimer() {
				$("#timeType").html("Break Time:");

				min = Math.floor(breakCount / 60);
				if (min < 10) {min = "0" + min;}
				sec = Math.floor(breakCount % 60);
				if (sec < 10) {sec = "0" + sec}
				var minSecTime = min + ":" + sec;

				$("#timerDisplay").html(minSecTime);

				breakCount -= 1;

				if (breakCount == -1) {
					alarm.play();
					clearInterval(count);
				}
			};// end breakTimer function

		};// end sessionTimer function


		$("#reset").click(function() {
			clearInterval(count);
			sessionCount = sessionMemory;
			breakCount = breakMemory;

			$("#reset, #timeType, #timerDisplay").hide();
			$(".bottom-row, #start").show();
		});


	});// end start click function




	$("#breakMinusFive").click(function() {
		breakCount -= 1;
		breakMemory -= 1;
		$("#breakNum").html(breakCount);
	});

	$("#breakPlusFive").click(function() {
		breakCount += 1;
		breakMemory += 1;
		$("#breakNum").html(breakCount);
	});

	$("#sessionMinusFive").click(function() {
		sessionCount -= 1;
		sessionMemory -= 1;
		$("#sessionNum").html(sessionCount);
	});

	$("#sessionPlusFive").click(function() {
		sessionCount += 1;
		sessionMemory += 1;
		$("#sessionNum").html(sessionCount);
	});



});