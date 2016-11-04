$(document).ready(function(){ 

	//Global Variables
	//----------------------------------------------------------
	var topics = ["hockey", "baseball", "football", "lacrosse", "snowboarding", "golf"];
	/*var apiKey = "dc6zaTOxFJmzC";*/
	var searchWord = [];
	/*var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + searchWord[0] + "&limit=10&&api_key=" + apiKey;*/


	//runs ajax to giphy to pull gifs to the website
	function pullGifs() {
		var apiKey = "dc6zaTOxFJmzC";
		var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + searchWord[0] + "&limit=10&rating=pg&api_key=" + apiKey;
	$.ajax({url: giphyURL, method: 'GET'})
		.done(function(results) {
			$('#gifs').empty();
			console.log(giphyURL);
			console.log(results);
			for(var i=0; i<10; i++) {
			$('#gifs').append("rating: " + results.data[i].rating );
			/*$('#gifs').append('<iframe src=' + results.data[i].images.fixed_height_still.url + '>');*/
			$('#gifs').append('<iframe src=' + results.data[i].embed_url+ '>');
			$('#gifs').on('click', function() {


			})
		}
		

		})
	};

	
	//functions
	//--------------------------------------------------------------

	//creates buttons and gives them a class
	function buildButtons() {
		for(var i = 0; i < topics.length; i++) {
			var button = $('<button value=' + topics[i] + '>');
			button.addClass('gifButtons');
			button.attr('data-name', topics[i]);
			button.text(topics[i]);
			$('#gifButtons').append(button);
		}
	}
	buildButtons();

	//on click function to run buttons word to giphy for search results
	$('button').on("click", function() {
		var value = $(this).val();
		searchWord = [];
		searchWord.push(value);
		pullGifs();

	});

	$('#addGif').on("click", function() {
		var value2 = $('#gif-input').val();
		topics.push(value2);
		
		var button = $('<button value=' + topics[5] + '>');
			button.addClass('gifButtons');
			button.attr('data-name', topics[5]);
			button.text(topics[5]);
			$('#gifButtons').append(button);
	})
console.log(topics);










});