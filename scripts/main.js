/*
    Constants
*/

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