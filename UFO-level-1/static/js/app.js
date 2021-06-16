// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((ufoSiting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSiting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });




  
var button = d3.select("#filter-btn");


var form = d3.select("form");

button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() {

    d3.event.preventDefault();

    tbody.selectAll("tr").remove();

    // Select the input element and get the raw HTML node
    var filterDates = d3.select("#datetime");
  
    // Get the value property of the input element
    var dateValues = filterDates.property("value");
  



     
    tableData.filter( i => {return (i.datetime === dateValues)}).forEach((ufoSiting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSiting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      




            }




 




