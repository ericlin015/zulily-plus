/** @jsx React.DOM */

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
var kids = $('#category-kids');
var kidsRows = kids.children();
var kidsEvents = [];
var kidsChild = '';
for (var i = 1; i < kidsRows.length; i++) {
//  console.log(kidsRows.eq(i).children());
  kidsEvents.push(kidsRows[i]);
/*  for (var j = 0; j < kidsRows.eq(i).children().length; j++) {
    kidsEvents.push(kidsRows.eq(i).children()[j]);
  }*/
}

/*var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});*/

var kidsEventsHTML = '';

for (var i = 0; i < kidsEvents.length; i++) {
  kidsEventsHTML += kidsEvents[i].innerHTML;
  $('#' + kidsEvents[i].id).remove();
//var child = React.createElement('div', null, document.getElementById(kidsEvents[i].id).text());
//var root = React.createElement('div', { class: 'single-item' }, child);
//React.render(root, document.getElementById(kidsEvents[i].id));
//  React.render(React.createElement(HelloMessage, {name: "John"}), document.getElementById(kidsEvents[i].id));
}

//var child = React.createElement('div', null, kidsEventsHTML);
//var kidsCarousel = React.createElement('div', {class : 'single-item'}, child);
//React.render(kidsCarousel, document.body);

kidsEventsHTML = '<div class="single-item">' + kidsEventsHTML;
kidsEventsHTML += '</div>';
$(kidsEventsHTML).insertAfter( $( "#kids" ) );

console.log(kidsEventsHTML);


//$(stuff[1]).wrapAll('<div class="single-item" />');
//$('<div class="single-item"><div>1</div><div>2</div></div>').insertAfter(stuff[0]);
$('.single-item').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$("img.lazy").lazyload({ 
    event : "hi"
});

$("img.lazy").trigger("hi");


//location.reload();
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

