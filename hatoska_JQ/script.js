let names = (['Jani', 'Sanyi', 'Gabi', 'Zsolt']);
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
names.forEach((abcd) => {   let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };  
    if (`${abcd}` === 'Zsolt') {
        $('ul').append(`<li><strong>${abcd}</strong></li>`)
    }
    else {
      $('ul').append(`<li>${abcd}</li>`)
    }
});
$('body').append(`<h1>${additionalBlock.title}</h1>`);
$('body').append(`<p>${additionalBlock.text}</p>`);