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



  cityList = [];
  cityList.sort();

  tableData.forEach((ufoSiting) => {
      Object.entries(ufoSiting).forEach(([key, value]) => {if(key === "city" && !cityList.includes(value)) cityList.push(value);});
    });
  
  console.log(cityList.sort())

 var cityselect = d3.select("#datalistOptions");

 cityList.forEach(i => {
  var option = cityselect.append("option");
  var optionValue = option.attr("value",i);


 });



  
  stateList = [];
  
  tableData.forEach((ufoSiting) => {
      Object.entries(ufoSiting).forEach(([key, value]) => {if(key === "state" && !stateList.includes(value)) stateList.push(value);});
    });
  
  stateList.sort();

  var sateselect = d3.select("#state");
  
    stateList.forEach(i => {
      var option = sateselect.append("option");
      
        var optionValue = option.attr("value",i);
        optionValue.text(i);
      });



  countryList = []
  
  tableData.forEach((ufoSiting) => {
      Object.entries(ufoSiting).forEach(([key, value]) => {if(key === "country" && !countryList.includes(value)) countryList.push(value);});
    });
      
      
      var countryselect = d3.select("#country");
      
        countryList.forEach(i => {
          var option = countryselect.append("option");
          
            var optionValue = option.attr("value",i);
            optionValue.text(i);
          });


shapeList = []
  
tableData.forEach((ufoSiting) => {
  Object.entries(ufoSiting).forEach(([key, value]) => {if(key === "shape" && !shapeList.includes(value)) shapeList.push(value);});
    });
              
              
var shapeselect = d3.select("#shape");
              
shapeList.forEach(i => {
var option = shapeselect.append("option");
                  
var optionValue = option.attr("value",i);
    optionValue.text(i);
    });
                
  
  
  


//   tableData.forEach((ufoSiting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSiting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  
var button = d3.select("#filter-btn");


var form = d3.select("form");

button.on("click", runFilter);
form.on("submit", runFilter);



// var clearButton = d3.select("#clear-btn");

// clearButton.on("click", runClear);


// function runClear () {

//   d3.select("#datetime").attr("value",null);
//   d3.select("#datetime").text("");




// }

// function runFilter() {

//     d3.event.preventDefault();

//     tbody.selectAll("tr").remove();

//     // Select the input element and get the raw HTML node
//     var filterDates = d3.select("#datetime");
  
//     // Get the value property of the input element
//     var dateValues = filterDates.property("value");
//     console.log(dateValues);

//        // Select the input element and get the raw HTML node
//        var filterState = d3.select("#state");
  
//        // Get the value property of the input element
//        var stateValues = filterState.property("value");
//        console.log(stateValues);


    // options = [dateValues, stateValues]       
    // switch (options) {


      function runFilter() {

        d3.event.preventDefault();
    
        tbody.selectAll("tr").remove();
    
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



    
    
         
        tableData.filter( i => {return (i.datetime === (dateValues ? dateValues : i.datetime)) 
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
          
    
    
    
    
                }
    
    





