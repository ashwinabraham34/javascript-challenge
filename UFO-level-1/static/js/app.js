// from data.js
var tableData = data;

// iterating data object into table 
function displayData (ufodata) {
    var tbody = d3.select(`tbody`);
    ufodata.forEach((uforecord) => {
        var row = tbody.append(`tr`);
        Object.entries(uforecord).forEach(([key, value]) => {
            var cell = row.append(`td`);
            cell.html(value);
        });
    });
};

//for new data
function deletetable() {
    d3.select(`tbody`)
    .selectAll(`tr`).remove()
    .selectAll(`td`).remove();
};

//display data available 
console.log(tableData);
displayData(tableData);

//filter button variable 
var filterbutton = d3.select(`#filter-btn`);
// filter button click event 
filterbutton.on(`click`, function(event) {
    d3.event.preventDefault();
    deletetable();
    var InputDate = d3.select(`#datetime`).property(`value`);

    if (InputDate.trim() === ``) {
         // empty date input giving the whole data available
         var FilterBox = tableData;
    }
    // show what is inputted
    else {
        var FilterBox = tableData.filter(ufodata => 
            ufodata.datetime === InputDate.trim());
    };

    // if inputted data is not available 
    if (FilterBox.length == 0) {
        d3.select(`tbody`)
        .append(`tr`)
        .append(`td`)
            .attr(`colspan`, 9)
            .html(`<h4> You can't catch me &#128406;</h4>`);
    };
    console.log(FilterBox);
    displayData(FilterBox);
});
