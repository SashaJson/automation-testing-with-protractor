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
