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
			/*$('#gifs').append("rating: " + results.data[i].rating );*/
			$('#gifs').append('<iframe src=' + results.data[i].images.fixed_height_still.url + '>');
			$('#gifs').append('<iframe src=' + results.data[i].images.fixed_height.url+ '>');
			$('<iframe src=' + results.data[i].images.fixed_height_still.url + '>').hide();
			/*$('#gifs').append('<img src=' + results.data[i].images.fixed_height_still.url + ' alt="Static Image" data-alt=' + results.data[i].images.fixed_height.url+ '>');*/
			$('#gifs').on('click', function() {


			})
		}
		

		})
	};

	
	//functions
	//--------------------------------------------------------------

	//creates buttons and gives them a class
	function buildButtons() {
		$('#gifButtons').empty();
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
		var sport = $('#gif-input').val().trim();
		topics.push(sport);
		buildButtons();
		/*var button = $('<button value=' + value2 + '>');
			button.addClass('gifButtons');
			button.attr('data-name', value2);
			button.text(value2);
			$('#gifButtons').append(button);*/
	})
console.log(topics);










});