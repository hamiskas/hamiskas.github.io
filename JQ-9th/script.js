let counteR = 0;

$('#increasE').on('click', (event) => {
    counteR++; 
    $('h2').text(counteR);
});

$('#decreasE').on('click', (event) => {
    counteR--; 
    $('h2').text(counteR);
});
