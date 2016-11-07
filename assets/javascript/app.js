$(document).ready(function(){ 

	//Global Variables
	//----------------------------------------------------------
	var topics = ["hockey", "baseball", "football", "lacrosse", "snowboarding", "golf"];
	var searchWord = [];

	
	
	
	//AJAX
	//----------------------------------------------------------
	function displayGifs() {
		var apiKey = "dc6zaTOxFJmzC";
		var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&limit=10&rating=pg&api_key=" + apiKey;
		

		$.ajax({url: giphyURL, method: 'GET'}).done(function(response) {
			//clear gifs from webpage
			$('#gifs').empty();
			console.log(giphyURL);
			//loop to create gifs on webpage when button clicked
			for(var i=0; i<10; i++) {
				/*$('#gifs').append("rating: " + response.data[i].rating )*/
				var gifImage = $('<img src=' + response.data[i].images.fixed_height_still.url + '>');
				var gifGif = $('<iframe src=' + response.data[i].images.fixed_height.url + '>')
				gifImage.attr('data-value', response.data[i].images.fixed_height.url);
				$('#gifs').append(gifImage);
				$('#gifs').append(gifGif);
				$('iframe').hide();
			}

			$('#gifs').on("click", "img", function() {
				$('img').hide();
				$('iframe').show();
			});	
		});
			
	};

	
	//Functions
	//--------------------------------------------------------------

	//creates buttons and gives them a class
	function buildButtons() {
		//empty buttons from #gifButtons div
		$('#pageButtons').empty();
		//repopulate buttons in topics array
		for(var i = 0; i < topics.length; i++) {
			var button = $('<button value=' + topics[i] + '>');
			button.addClass('gifButtons');
			button.attr('data-name', topics[i]);
			button.text(topics[i]);
			$('#pageButtons').append(button);
			
		}
			$('.gifButtons').on("click", function() {
		var value = $(this).val();
		searchWord = [];
		searchWord.push(value);
		displayGifs();

	})
	};

	//User Interaction
	//----------------------------------------------------------------
	//builds the initial site sports buttons
	buildButtons();

	//on click to create new sports topic button
	$('#addGif').on('click', function() {
		//gets the value of #gif-input and trims the word, pushes to topics
		var sport = $('#gif-input').val().trim();
		topics.push(sport);
		buildButtons();
		console.log(topics);
		return false;
		
		
	})
});