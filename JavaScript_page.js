

/*this function changes the text in a paragraph (and color) repeatidly to show a message */
function dynamicChange(){

    //the state the text is in
    var state = document.getElementById("fillText").className;

    //skips throught the different states to show the message without refreshing the page
    // updates the state after each button push
    if(state == "state1") {
        document.getElementById("fillText").innerHTML = 
        "HTML elements and their CSS style can be manipulated using the DOM and JavaScript";
        document.getElementById("fillText").style.color = "red";
        
        state = "state2";
    }
    else if(state == "state2") {
        document.getElementById("fillText").innerHTML = 
        "These elements are being updated dynamically in the browser";
        document.getElementById("fillText").style.color = "blue";
        
        state = "state3";
    }
    else if(state == "state3") {
        document.getElementById("fillText").innerHTML = 
        "This means they are updated without needing to refresh the browser (like any other change would require)";
        document.getElementById("fillText").style.color = "green";
        
        state = "state4";
    }
    else {
        document.getElementById("fillText").innerHTML = "";

        state = "state1";
    }

    //Updates the state so that the next text can be shown
    document.getElementById("fillText").setAttribute("class", state);
}


// Checks if the first name, last name and phone number are all valid
function validateForm() {

    var first = document.forms["example"]["fName"].value;
    var last = document.forms["example"]["lName"].value;
    var phone = document.forms["example"]["phone"].value;
    var male = document.forms["example"]["gender"].value;


    // checks if all the fields are filled
    if (first == "" || last == "" || phone == "") {
        alert("All elements must be filled out");
        return false;
    }

    var num = parseInt(phone);
    console.log(typeof(num));
    console.log(num);

    //checks if the phone number is valid (correct length and does only includes numbers)
    if(num<1000000000){
        alert("Invalid phone number: must be 10 digits and cannot include letters");
        return false;
    }

    // checks if either name contains numbers which it should not
    if(/\d/.test(first) == true || /\d/.test(last) == true) {
        alert("First or last name cannot contain numbers");
        return false;
    }

}