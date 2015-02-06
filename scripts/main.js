
// pages
var urlChecker = new UrlChecker();
console.log(urlChecker.route(window.location.href));

console.log('testing 123');

// $('body').html('<h1>This is to test what is going on</h1>');
var stuff = [];
stuff.push($('.clearfix')[4]);
stuff.push($('.clearfix')[6]);
stuff.push($('.clearfix')[7]);
stuff.push($('.clearfix')[8]);
stuff.push($('.clearfix')[9]);
stuff.push($('.clearfix')[10]);
$(stuff[1]).wrapAll('<div class="single-item" />');
//$('</div>').insertAfter(stuff[0]);
$('.single-item').slick();
/*{
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

console.log(stuff);*/

/*
    Constants
*/

