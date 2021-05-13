$('#addHero-form').submit(function (event) {
    $('#addHero-Alert').addClass('hide');
    if ($('#heroInput').val() == '') {
        $('#addHero-Alert').removeClass('hide');
        $('#addHero-Alert').text('You did not enter anything!');
    } else {
        $('#hero-list').append('<li class="list-group-item">' + $('#heroInput').val() + '</li>');
        $('#heroInput').val('');
    }
    event.preventDefault();
});

$('#vote-form').submit(function (event) {
    var movie1Votes = $('#movieVotes1').text();
    var movie2Votes = $('#movieVotes2').text();
    var movie3Votes = $('#movieVotes3').text();
    var movie4Votes = $('#movieVotes4').text();
    var movie5Votes = $('#movieVotes5').text();
    if($('#heroMovieRadio1').is(':checked')) {
        movie1Votes = parseInt(movie1Votes) + 1;
        $('#movieVotes1').text(movie1Votes);
    } else if($('#heroMovieRadio2').is(':checked')) {
        movie2Votes = parseInt(movie2Votes) + 1;
        $('#movieVotes2').text(movie2Votes);
    } else if($('#heroMovieRadio3').is(':checked')) {
        movie3Votes = parseInt(movie3Votes) + 1;
        $('#movieVotes3').text(movie3Votes);
    } else if($('#heroMovieRadio4').is(':checked')) {
        movie4Votes = parseInt(movie4Votes) + 1;
        $('#movieVotes4').text(movie4Votes);
    } else if($('#heroMovieRadio5').is(':checked')) {
        movie5Votes = parseInt(movie5Votes) + 1;
        $('#movieVotes5').text(movie5Votes);
    }
    event.preventDefault();
});
