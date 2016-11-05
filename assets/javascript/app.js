$(document).ready(function(){ 

	//Global Variables
	//----------------------------------------------------------
	var topics = ["hockey", "baseball", "football", "lacrosse", "snowboarding", "golf"];
	var searchWord = [];
	var gifSelect = [];
	
	
	//ajax
	//----------------------------------------------------------
	function displayGifs() {
		var apiKey = "dc6zaTOxFJmzC";
		var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&limit=10&rating=pg&api_key=" + apiKey;
		

		$.ajax({url: giphyURL, method: 'GET'}).done(function(response) {
				//clear gifs from webpage
				$('#gifs').empty();
				//loop to create gifs on webpage when button clicked
				for(var i=0; i<10; i++) {
				$('#gifs').append('<iframe src=' + response.data[i].images.fixed_height.url+ '>');
				}

				//on click event to change image to gif.  Double click to go back.
				/*$('iframe').on('click', function() {
					gifSelect = [];
					var gifValue = $(this).val();
					gifSelect.push(gifSelect)
					console.log(gifSelect);*/

				//maybe another ajax to grab the gif instead of image
				//double click to go back to image

				})
			/*})*/
	};

	
	//functions
	//--------------------------------------------------------------

	//creates buttons and gives them a class
	function buildButtons() {
		//empty buttons from #gifButtons div
		$('#gifButtons').empty();
		//repopulate buttons in topics array
		for(var i = 0; i < topics.length; i++) {
			var button = $('<button value=' + topics[i] + '>');
			button.addClass('gifButtons');
			button.attr('data-name', topics[i]);
			button.text(topics[i]);
			$('#gifButtons').append(button);
			console.log(topics);
		}
	}

	//UI
	//----------------------------------------------------------------
	//builds the initial site sports buttons
	buildButtons();

	//on click function to run buttons word to giphy for search response
	$('button').on("click", function() {
		var value = $(this).val();
		searchWord = [];
		searchWord.push(value);
		displayGifs();

	});

	//on click to create new sports topic button
	$('#addGif').on('click', function() {

		var sport = $('#gif-input').val().trim();
		topics.push(sport);
		buildButtons();
		return false;
		
		
	})




//for ratings	
				/*$('#gifs').append("rating: " + response.data[i].rating );*/
				//for images
				/*$('#gifs').append('<iframe src=' + response.data[i].images.fixed_height_still.url + '>');*/
				//for gifs






});