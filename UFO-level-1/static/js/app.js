// from data.js
var tableData = data;

// YOUR CODE HERE!

// select table 
var tbody = d3.select("tbody");

// populate table with data
tableData.forEach((ufoSiting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSiting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });

// select filter button
var button = d3.select("#filter-btn");

// select form
var form = d3.select("form");

// call filter function
button.on("click", runFilter);
form.on("submit", runFilter);

// function to filter based on form input
function runFilter() {

  // prevent refresh
  d3.event.preventDefault();

  // clear all table data
  tbody.selectAll("tr").remove();

  // Select the input element and get the raw HTML node
  var filterDates = d3.select("#datetime");
  
  // Get the value property of the input element
  var dateValues = filterDates.property("value");
  
  // populate table with filtered data
  tableData.filter( i => {
    return (i.datetime === dateValues)
    }).forEach((ufoSiting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSiting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
      });
     
  }




 




