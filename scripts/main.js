// pages
var mainPage = "http://www.zulily.com/",
    mainPageLogo = "http://www.zulily.com/?ref=logo",
    eventPage = "http://www.zulily.com/e/",
    productPage = "http://www.zulily.com/p/",
    cartPage = "https://www.zulily.com/2/cart";

var checkForSubPage = function(url) {
    if (url === mainPage || url === mainPageLogo) {
        // to do for main page
    } else if (url.indexOf(eventPage) === 0) {
        // to do for event page
    } else if (url.indexOf(productPage) === 0) {
        // todo for product page
    } else if (url === cartPage) {
        // todo for cart page
    }
};

console.log('testing 123');
console.log($);
console.log(React);
console.log($('img'));

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

