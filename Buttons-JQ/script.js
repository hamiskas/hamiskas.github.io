let clickeD = 0;
$('.firsT').on('click', (event) => {
     console.log('Yeah, you clicked me') 
});
$('.seconD').on('click', (event) => {
    $('.firsT').text('Clicked_2nd')
});
$('.thirD') .on('click', (event) => {
   if (clickeD === 0) {
      //var color = document.getElementById('coloR').value;
       var color = $('#coloR') .val();
       $('button') .css('background', `${color}`)
       $('button.thirD') .css('background', 'lightgrey');
    }
    $('button.thirD') .text("Out_of_order: "+clickeD+"x");
    clickeD++;
});
