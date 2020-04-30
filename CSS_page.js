

// changes the elements attributes at each level according to the button clicked
function inLineClick() {
    document.getElementById("change").style.fontSize = "110%";
    document.getElementById("change").style.color = "blue";
    document.getElementById("change").style.backgroundColor = "#FCF3CF";
}

function documentClick() {
    document.getElementsByTagName("style")[1].innerHTML = "#change {font-size: 90%;background-color: #E8DAEF; color: green;}"
}

function externalClick() {
    document.getElementById("change").setAttribute("class", "changedExternal");
}




/* Used to keep the old border color when changing to highlight the element */
var old_border;

/* Gets Rid of the text box when clicked (after read contents) and its contents and unblurs the rest of the screen */

function bodyClick(){
    document.getElementById("boxActive").setAttribute("id", "boxInactive");

    document.getElementById("boxInactive").innerHTML = "";

    document.getElementById("textParagraph").style.filter = "blur(0px)";
}






/* PROMPTS THE MESSAGE BOX AND TYPES IN THE MESSAGE */
/* FOR ALL OF THE FOLLOWING */
/* GROUPED BY SPACING*/

function clickExternal(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Each page on this website differs in small ways, but they all have an overarching theme; with the same font, the same page structure (size of elements) and even the same nav bar style making each page look part of the bigger website. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickInternal(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "The image is internally styled as its dimension are different to any other element on this website, another element is the list as it is exclusive in the website. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}




function clickInline(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "There are many small changes you can make to a document using inline CSS like changing the background colour of a singal button (reset) to ensure it stands apart from the rest. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}