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

function runFilter() {

    d3.event.preventDefault();

    tbody.selectAll("tr").remove();

    // Select the input element and get the raw HTML node
    var filterDates = d3.select("#datetime");
  
    // Get the value property of the input element
    var dateValues = filterDates.property("value");
    console.log(dateValues);

       // Select the input element and get the raw HTML node
       var filterState = d3.select("#state");
  
       // Get the value property of the input element
       var stateValues = filterState.property("value");
       console.log(stateValues);


    // options = [dateValues, stateValues]       
    // switch (options) {



    // }

    var obj = {
        datetime: dateValues,
        state: stateValues}


        filterob = Object.entries(obj).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})

        console.log(filterob);

     
    tableData.filter( i => {return (i.datetime === dateValues) || (i.state === stateValues)}).forEach((ufoSiting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSiting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      



    // tableData.filter( i => {
    //     Object.entries(filterob).forEach([key,value]) => i.value)
        
    //     return (i.datetime === dateValues) || (i.state === stateValues)}
    
    
    
    // ).forEach((ufoSiting) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoSiting).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });


    //   function findActiveFilters() {
    //     return filters.filter(d => d.value);
    //   }

    //   function runFilter(arr,filter){
    //     return arr.filter( d => {
    //       return d[filter.key] == filter.value
    //     })
    //   }

    //   function filterData() {
    //     let filteredData = [];
    //     let activeFilters = findActiveFilters();
    //     activeFilters.forEach(d => {
    //       if (filteredData.length == 0) {
    //         filteredData = runFilter(allData, d);
    //       } else {
    //         filteredData = runFilter(filteredData, d);
    //       }
    //     });
    //     return filteredData;
    //   }
      
        
    //     Object.entries(filterob).forEach(([key,value]) => tableData.filter( i => {return (i.key === value)}).forEach((ufoSiting) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoSiting).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   }))


        }
//     tokeep = [dateValues, stateValues]
// tableData.filter(function(d,i){ return tokeep.indexOf(d.name) >= 0 }).forEach((ufoSiting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSiting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

// Object.values(obj)

// const filteredHomes = json.homes.filter( x => 

//     Object.entries(filterob).forEach([key,value]) =>
//     x.key === value

//     x.price <= 1000 && 
//     x.sqft >= 500 && 
//     x.num_of_beds >=2 && 
//     x.num_of_baths >= 2.5
//   );
  
// tokeep = ["option1", "option2", "option3"]
// data.filter(function(d,i){ return tokeep.indexOf(d.name) >= 0 })



//   Object.entries(obj).forEach(([key, value]) => tableData.filter( i => {return (i.key === value)}).forEach((ufoSiting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSiting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   }));
  

    

    // tableData.filter( i => {return i.datetime === dateValues});


    // tableData.filter( i => {return (i.datetime === dateValues) || (i.state === stateValues)}).forEach((ufoSiting) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoSiting).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });




 cityList = []

tableData.forEach((ufoSiting) => {
    Object.entries(ufoSiting).forEach(([key, value]) => {if(key === "city" && !cityList.includes(value)) cityList.push(value);});
  });

console.log(cityList.sort())

stateList = []

tableData.forEach((ufoSiting) => {
    Object.entries(ufoSiting).forEach(([key, value]) => {if(key === "state" && !stateList.includes(value)) stateList.push(value);});
  });


  var sateselect = d3.select("#state");

  stateList.forEach(i => {
    var option = sateselect.append("option");
    
      var optionValue = option.attr("value",i);
      optionValue.text(i);
    });
  


console.log(stateList.sort())

// Object.entries(obj).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})



// var tier = "nsfw deck";
// var output = "You’ll receive "

// switch (tier) {
//   case "deck of legends":
//     output += "a custom card, ";
//   case "collector's deck":
//     output += "a signed version of the Exploding Kittens deck, ";
//   case "nsfw deck":
//     output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
//   default:
//     output += "one copy of the Exploding Kittens card game.";
// }




// .filter(function(d) { return d.datetime === dateValues})


// data.filter(function(d){ return d.name == "toto" })
    // Print the value to the console

    // Create a custom filtering function
// function selectDate(date) {
//     return tableData.datetime > date;
//   }
  
//   tableData.forEach(ufoSiting.filter(dates => ufoSiting.datetime>dateValues) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSiting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  
// Create a custom filtering function
// function selectYounger(person) {
//     return person.age < 30;
//   }
  
//   // filter() uses the custom function as its argument
//   var youngSimpsons = simpsons.filter(selectYounger);
  

//   const filteredByValue = Object.fromEntries(
//     Object.entries(romNumbers).filter(([key, value]) => value === 5) )





//   tableData.forEach((ufoSiting) => {
//       Object.entries(ufoSiting.datetime).filter(([key,value]))

//   });


//   // filter() uses the custom function as its argument
//   var youngSimpsons = simpsons.filter(selectYounger);
//   Object.keys(userInfo).forEach(key => console.log(key));


//   users.forEach((user) => {
//     console.log(user);
  
//     // Get the entries for each object in the array
//     Object.entries(user).forEach(([key, value]) => {
//       // Log the key and value
//       console.log(`Key: ${key} and Value ${value}`);
//     });
//   });


//   data.records = data.records.filter( i => ids.includes( i.empid ) );


//   tableData.filter( i => dateValues.includes(i.datetime));


//     return dateValues;

  



