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
for (var i = 1; i < kidsRows.length; i++) {
//  console.log(kidsRows.eq(i));
  if (kidsRows.eq(i)[0].className !== 'homepage-filler columns-1') {
    kidsEvents.push(kidsRows[i]);
  }
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
  if (kidsEvents[i].className !== 'gift-card filler-tile block first') {
    kidsEventsHTML += kidsEvents[i].innerHTML;
  }
  $('#' + kidsEvents[i].id).remove();
//var child = React.createElement('div', null, document.getElementById(kidsEvents[i].id).text());
//var root = React.createElement('div', { class: 'single-item' }, child);
//React.render(root, document.getElementById(kidsEvents[i].id));
//  React.render(React.createElement(HelloMessage, {name: "John"}), document.getElementById(kidsEvents[i].id));
}

//var child = React.createElement('div', null, kidsEventsHTML);
//var kidsCarousel = React.createElement('div', {class : 'single-item'}, child);
//React.render(kidsCarousel, document.body);

kidsEventsHTML = '<div class="multiple-items">' + kidsEventsHTML;
kidsEventsHTML += '</div>';
$(kidsEventsHTML).insertAfter( $( "#kids" ) );







// Women
var women = $('#category-women');
var womenRows = women.children();
var womenEvents = [];
for (var i = 1; i < womenRows.length; i++) {
//  if (womenRows.eq(i)[0].className !== 'homepage-filler columns-1') {
    womenEvents.push(womenRows[i]);
//  }

}

var womenEventsHTML = '';

for (var i = 0; i < womenEvents.length; i++) {
//  if (womenEvents[i].className !== 'gift-card filler-tile block first') {
    womenEventsHTML += womenEvents[i].innerHTML;
//  }
  $('#' + womenEvents[i].id).remove();
}

womenEventsHTML = '<div class="multiple-items">' + womenEventsHTML;
womenEventsHTML += '</div>';
$(womenEventsHTML).insertAfter( $( "#women" ) );





// men
var men = $('#category-mens');
var menRows = men.children();
var menEvents = [];
for (var i = 1; i < menRows.length; i++) {
//  if (womenRows.eq(i)[0].className !== 'homepage-filler columns-1') {
    menEvents.push(menRows[i]);
//  }

}
//console.log(menEvents);
var menEventsHTML = '';

for (var i = 0; i < menEvents.length; i++) {
//  if (womenEvents[i].className !== 'gift-card filler-tile block first') {
    menEventsHTML += menEvents[i].innerHTML;
//  }
    var menEventsChildrenLength = menEvents[i].children.length;
  for (var j = 0; j < menEventsChildrenLength; j++) {
//    console.log(menEvents[i].children[j].id);
    $('#' + menEvents[i].children[0].id).remove();    
  }
}

menEventsHTML = '<div class="multiple-items">' + menEventsHTML;
menEventsHTML += '</div>';
$(menEventsHTML).insertAfter( $( "#mens" ) );

while ($('#category-mens').children().length > 2) {
  $('#category-mens').children()[2].remove();
}





// Home
var home = $('#category-home');
var homeRows = home.children();
var homeEvents = [];
for (var i = 1; i < homeRows.length; i++) {
  if (homeRows.eq(i)[0].className !== 'homepage-filler columns-1') {
    homeEvents.push(homeRows[i]);
  }

}

var homeEventsHTML = '';

var homeEventsLength = homeEvents.length;
for (var i = 0; i < homeEventsLength; i++) {
//  if (womenEvents[i].className !== 'gift-card filler-tile block first') {
    homeEventsHTML += homeEvents[i].innerHTML;
//  }
    var homeEventsChildrenLength = homeEvents[i].children.length;
  for (var j = 0; j < homeEventsChildrenLength; j++) {
//    console.log(menEvents[i].children[j].id);
    $('#' + homeEvents[i].children[0].id).remove();    
  }

}

homeEventsHTML = '<div class="multiple-items">' + homeEventsHTML;
homeEventsHTML += '</div>';
$(homeEventsHTML).insertAfter( $( "#home" ) );








// carousel stuff
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$("img.lazy").lazyload({ 
    event : "hi"
});

$("img.lazy").trigger("hi");


// delete homepage fillers
$('.homepage-filler').remove();
