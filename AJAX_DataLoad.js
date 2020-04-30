
//http://ergast.com/api/f1/drivers.json
//https://randomuser.me/api/?results=5

function loadData(){

    var url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations';

    fetch(url)
        .then( function(resp) {
            return resp.json();
        })
        .then( function(data) {

            var cases = 0;
            var deaths = 0;

            // Gets the total num of cases and deaths and writes them into the HTML page
            cases = data.latest.confirmed;
            deaths = data.latest.deaths;

            console.log(deaths);
            console.log(cases);
            console.log(data);

            //addes the values for confirmed cases and deaths into their spans
            document.getElementById("cases").innerHTML = cases;
            document.getElementById("deaths").innerHTML = deaths;


            document.getElementsByTagName("caption")[0].innerHTML = "COVID19 Cases Australia";            

            //Adds the heading for the table that exists (but is currently invisible)
            document.getElementsByTagName("th")[0].innerHTML = "State";
            document.getElementsByTagName("th")[1].innerHTML = "Confirmed Cases";

            //Makes the whole div visible so that the data can be seen
            document.getElementById("covid").style.visibility = "visible";

            /*makes the table styling visible by changing it to a class that is defined at 
            the document level styling*/
            document.getElementsByTagName("table")[0].setAttribute("class", "dataAdded");

            // Varible is used as a counter to go through the table data tabs
            var i = 0;
            
            let locations = data.locations;
            return locations.map(
                function(location) {
                    var countryname = location.country;
                    if(countryname == "Australia") {

                        /* Since there is no other table on the page we can reference the data tabs of the 
                        table by simply indexing through them, the first one (0 initially) will fill the top 
                        left corner data tab (with the state name) the next will fill the top right with the 
                        number of cases and then it will go to the 1 down on the right and so on.*/

                        // Adds the name of the state to the left side of the table
                        document.getElementsByTagName("td")[i].innerHTML = location.province;

                        //counter goes up 1 so the next data value on the table is on the right
                        i += 1;

                        // Adds the num of cases to the right side
                        document.getElementsByTagName("td")[i].innerHTML = location.latest.confirmed;
                        
                        i += 1;
                        //document.getElementById("covid").innerHTML = location.latest.confirmed;
                    }
                }
            )
                        
        })
        .catch( function(error) {
            console.log(error);
        });

}

