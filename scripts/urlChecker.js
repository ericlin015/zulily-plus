var UrlChecker = function() {
    this.mainPage = [
        'http://www.zulily.com/',
        'http://www.zulily.com/?ref=logo',
        'http://www.zulily.com/new-today/?ref=header',
        'http://www.zulily.com/last-day/?ref=header'
    ];
    this.categoryPage = [
        'http://www.zulily.com/girls/?ref=header',
        'http://www.zulily.com/boys/?ref=header',
        'http://www.zulily.com/women/?ref=header',
        'http://www.zulily.com/men/?ref=header',
        'http://www.zulily.com/shoes/?ref=header',
        'http://www.zulily.com/health-and-beauty/?ref=header',
        'http://www.zulily.com/baby-maternity/?ref=header',
        'http://www.zulily.com/toys-playtime/?ref=header',
        'http://www.zulily.com/home/?ref=header',
        'http://www.zulily.com/home/?ref=header'
    ];
    this.shipPage = 'http://www.zulily.com/readyship/?ref=header';
    this.trendingPage = 'http://www.zulily.com/trending/';
    this.sizePage = '//www.zulily.com/shop-by-size/';
    this.eventPage = 'http://www.zulily.com/e/';
    this.productPage = 'http://www.zulily.com/p/';
    this.cartPage = 'https://www.zulily.com/2/cart';

    this.route = function(url) {
        if (this.mainPage.indexOf(url) !== -1) {
            return 'MAIN';
        } else if (url.indexOf(this.trendingPage) === 0) {
            return 'TRENDING';
        } else if (url.indexOf(this.sizePage) !== 0) {
            return 'SIZE';
        } else if (url.indexOf(this.eventPage) === 0) {
            return 'EVENT';
        } else if (url.indexOf(this.productPage) === 0) {
            return 'PRODUCT';
        } else if (url === this.cartPage) {
            return 'CART';
        } else if (this.categoryPage.indexOf(url) !== -1) {
            return 'CATEGORY';
        } else if (url === this.shipPage) {
            return 'SHIP';
        }
    }
};