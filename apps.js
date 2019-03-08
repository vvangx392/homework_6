$(document).ready(function(){

    $('button').on('click', function() {
        var sports = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var sportsDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var sportsImage = $('<img/>');

                    sportsImage.addClass('anImg')

                    sportsImage.attr('src', results[i].images.fixed_height.url);

                    sportsImage.attr('data-still', results[i].images.fixed_height_still.url)

                    sportsImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    sportsDiv.append(p);

                    sportsDiv.append(sportsImage);

                    sportsDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var sports = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var sportsButton = $("#gif-input").val();
            //adds the new animal

            var newButton = $("<button/>").addClass( "btn btn-info animal").attr('data-name',sportsButton).html(sportsButton).css({'margin': '5px'});
            
            $("#sportsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportsButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(sportsButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var sportsDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var sportsImage = $('<img/>');

                    sportsImage.addClass('anImg')

                    sportsImage.attr('src', results[i].images.fixed_height_still.url);

                    sportsImage.attr('data-still', results[i].images.fixed_height_still.url)

                    sportsImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    sportsDiv.append(p);

                    sportsDiv.append(sportsImage);

                    sportsDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});