$('.firsT').on('click', (event) => {
     console.log('Yeah, you clicked me') 
});
$('.seconD').on('click', (event) => {
    $('.firsT').text('Clicked_2nd')
});
$('.thirD').on('click', (event) => {
    $('button').css('background', 'red')
});