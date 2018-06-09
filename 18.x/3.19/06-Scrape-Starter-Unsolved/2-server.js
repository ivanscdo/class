// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");

// var scrapedSite = "https://www.heb.com/category/weekly-ad-deals?zipcode=78758"

// Make a request call to grab the HTML body from the site of your choice
// request("http://www.nytimes.com", function(error, response, html) {
// request("https://www.heb.com/category/weekly-ad-deals?id=476", function(error, response, html) {
request("https://www.wholefoodsmarket.com/sales-flyer/domain", function(error, response, html) {
  
  

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  // $("h2.story-heading").each(function(i, element) {

  // $("div.weeklyaditem_meta.text-ellipsis").each(function(i, element) {
  // $("div.prices-text").each(function(i, element) {
  $("div.views-row.views-row-odd").each(function(i, element) {
    
    

    // var link = $(element).children().attr("href");
    // var title = $(element).children().text();
    // var title = $(element).children().text();

    // var salePrice = $(element).children().text();

    // var salePrice = $(element).attr("class", "my_price").text();
    // var salePrice = $(element).hasClass("my_price");

    // var perItem = $(element).attr("class", "sub_price").text();
    // var regPrice = $(element).attr("class", "reg_line").text();

    if ( !$(element).children(".views-field.views-field-field-flyer-product-name").children().text() ) {
      return;
    } else {
      var itemName = $(element).children(".views-field.views-field-field-flyer-product-name").children().text();
    }

    if ( $(element).children(".views-field.views-field-nothing").children().children().children(".prices-text").children().children(".my_price").text() ) {

      var salePrice = $(element).children(".views-field.views-field-nothing").children().children().children(".prices-text").children().children(".my_price").text();

    } else {

      var salePrice = $(element).children(".views-field.views-field-nothing").children().children().children(".prices-text").children(".sale_line").text();

    }

    var regPrice = $(element).children(".views-field.views-field-nothing").children().children().children(".prices-text").children(".reg_line").text();

    var validDates = $(element).children(".views-field.views-field-nothing").children().children(".views-field.views-field-field-flyer-end-date").children().text();

    // var findTest = $(element).find($(".views-field.views-field-field-flyer-end-date")).children().eq(1).text();

    // var findTest_2 = $(element).find($(".views-field.views-field-field-flyer-end-date")).children().eq(2).text();

    var findTest = [];

    findTest.push(
      $(element).find($(".views-field.views-field-field-flyer-end-date")).children().eq(1).text()
    );

    findTest.push(" - ");

    findTest.push(
      $(element).find($(".views-field.views-field-field-flyer-end-date")).children().eq(2).text()
    );




    

    
    

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      item_name: itemName,
      sale_price: salePrice,
      // perItem: perItem,
      regular_price: regPrice,
      valid_dates: validDates,
      find_test: findTest.join(" ")
      // find_test: {
      //   valid_from: findTest,
      //   valid_to: findTest_2
      // }
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
