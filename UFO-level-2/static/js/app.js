// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select Table

var tbody = d3.select("tbody");

// Populate with all data

tableData.forEach((ufoSiting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSiting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });


// get list of unique cities 
cityList = [];
  
tableData.forEach((ufoSiting) => {
  Object.entries(ufoSiting).forEach(([key, value]) => {
    if(key === "city" && !cityList.includes(value)) 
    cityList.push(value);
    });
  });

cityList.sort();

// set each city as a searchable option
var cityselect = d3.select("#datalistOptions");

cityList.forEach(i => {
  var option = cityselect.append("option");
  option.attr("value",i);
 });


// get list of unique states
  
stateList = [];
  
tableData.forEach((ufoSiting) => {
  Object.entries(ufoSiting).forEach(([key, value]) => {
    if(key === "state" && !stateList.includes(value)){ 
    stateList.push(value);}
    });
  });
  
stateList.sort();

// set each state as a dropdown menu option
var sateselect = d3.select("#state");
  
stateList.forEach(i => {
  var option = sateselect.append("option");
  var optionValue = option.attr("value",i);
  optionValue.text(i);
  });

// get list of unique countries

countryList = [];
  
tableData.forEach((ufoSiting) => {
  Object.entries(ufoSiting).forEach(([key, value]) => {
    if(key === "country" && !countryList.includes(value)){ 
    countryList.push(value);}
    });
  });
      
// set each country as a dropdown option
var countryselect = d3.select("#country");
      
countryList.forEach(i => {
  var option = countryselect.append("option");        
  var optionValue = option.attr("value",i);
  optionValue.text(i);
  });

// get list of unique shapes
shapeList = [];

tableData.forEach((ufoSiting) => {
  Object.entries(ufoSiting).forEach(([key, value]) => {
    if(key === "shape" && !shapeList.includes(value)){ 
    shapeList.push(value);}
    });
  });

shapeList.sort();
              
// set each shape as a dropdown option
var shapeselect = d3.select("#shape");
              
shapeList.forEach(i => {
  var option = shapeselect.append("option");                 
  var optionValue = option.attr("value",i);
  optionValue.text(i);
  });
                
  
// select filter button
var button = d3.select("#filter-btn");

// select form
var form = d3.select("form");

// call filter function
button.on("click", runFilter);
form.on("submit", runFilter);


// select clear button
var clearButton = d3.select("#clear-btn");

// clear table filters by reloading page
clearButton.on("click", () => {location.reload(); return false});


// function to filter table based on form selections


function runFilter() {

  // prevent refresh
  d3.event.preventDefault();
  
  // remove all rows
  tbody.selectAll("tr").remove();
  
  // select datetime element
  var filterDates = d3.select("#datetime");
  
  // Get the value property of the input element
  var dateValues = filterDates.property("value");
    
  // Select the input element and get the raw HTML node
  var filterState = d3.select("#state");
      
  // Get the value property of the input element
  var stateValues = filterState.property("value");
      
  // Select the input element and get the raw HTML node
  var filterCity = d3.select("#city");
      
  // Get the value property of the input element
  var cityValues = filterCity.property("value");

  // Select the input element and get the raw HTML node
  var filterCountry = d3.select("#country");
      
  // Get the value property of the input element
  var countryValues = filterCountry.property("value");

  // Select the input element and get the raw HTML node
  var filterShape = d3.select("#shape");
      
  // Get the value property of the input element
  var shapeValues = filterShape.property("value");


  // Populate table with filter data, ignoring nulls
  tableData.filter( i => {
    return (i.datetime === (dateValues ? dateValues : i.datetime)) 
      && (i.state === (stateValues ? stateValues : i.state)) 
      && (i.city === (cityValues ? cityValues : i.city)) 
      && (i.country === (countryValues ? countryValues : i.country)) 
      && (i.shape === (shapeValues ? shapeValues : i.shape))
    }).forEach((ufoSiting) => {
          var row = tbody.append("tr");
          Object.entries(ufoSiting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
          });
  };
    
    





