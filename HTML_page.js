


/* Used to keep the old border color when changing to highlight the element */
var old_border;

/* Gets Rid of the text box when clicked (after read contents) and its contents and unblurs the rest of the screen */
function bodyClick(){
    document.getElementById("boxActive").setAttribute("id", "boxInactive");

    document.getElementById("boxInactive").innerHTML = "";

    document.getElementById("textParagraph").style.filter = "blur(0px)";
}





/* HIGHLIGHTS THE GIVEN ELEMENT (IF PRESENT) WHEN HOVERED OVER (PLUS HIGHLIGHTS THE WORD)*/
/* PROMPTS THE MESSAGE BOX AND TYPES IN THE MESSAGE */
/* FOR ALL OF THE FOLLOWING */
/* GROUPED BY SPACING*/


function showLink(){
    document.getElementsByClassName("bodyLink")[0].setAttribute("id", "mouseoverElement");

    old_border = document.getElementById("mouseoverElement").style.borderColor;

    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}

function hideLink(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByClassName("bodyLink")[0].setAttribute("id", undefined);
}

function clickLink(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Orginally it was implemented to ease the access of research data/results inside research articles for academics. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}






function showList(){
    document.getElementsByTagName("ol")[0].setAttribute("id", "mouseoverElement"); 

    old_border = document.getElementById("mouseoverElement").style.borderColor;
    
    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}

function hideList(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByTagName("ol")[0].setAttribute("id", undefined);
}

function clickList(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Has been around since the beginning and as a result has been used for many purposes over time. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}






function showParagraph(){
    document.getElementsByTagName("p")[0].setAttribute("id", "mouseoverElement"); 

    old_border = document.getElementById("mouseoverElement").style.borderColor;
    
    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}

function hideParagraph(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByTagName("p")[0].setAttribute("id", undefined);
}

function clickParagraph(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "The perfect way to organise information on a website. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}






function showHeading(){
    document.getElementsByTagName("h5")[0].setAttribute("id", "mouseoverElement"); 

    old_border = document.getElementById("mouseoverElement").style.borderColor;
    
    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}

function hideHeading(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByTagName("h5")[0].setAttribute("id", undefined);
}

function clickHeading(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Gives the user a brief description of the contents of a website/paragraph. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickImage(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Can be sourced from local folders or from the net, example can be seen on the right of the first paragraph. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}






function showTable(){
    document.getElementsByTagName("table")[0].setAttribute("id", "mouseoverElement"); 

    old_border = document.getElementById("mouseoverElement").style.borderColor;
    
    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}
function hideTable(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByTagName("table")[0].setAttribute("id", undefined);
}
function clickTable(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Organizes information into rows and columns to display data in a structured format. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}




function clickHead(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Allows users to import external files into their work. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function showBody(){
    document.getElementsByTagName("body")[0].setAttribute("id", "mouseoverElement"); 

    old_border = document.getElementById("mouseoverElement").style.borderColor;
    
    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}
function hideBody(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByTagName("body")[0].setAttribute("id", undefined);
}
function clickBody(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Where users place all the information and occasionally where they improve structure of a website. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickDiv(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Introduced to HTML to ease structure by allowing elements to be grouped into 'divisisons'. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickStyle(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Allows the inclusion of styling feature in HTML documents allowing users to change the design at the 'document level'. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickScript(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "It's addition allowed javascript to be directly inputted into the HTML documents. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function showSpan(){
    document.getElementsByTagName("span")[0].setAttribute("id", "mouseoverElement"); 

    old_border = document.getElementById("mouseoverElement").style.borderColor;
    
    document.getElementById("mouseoverElement").style.borderColor = "#39FF14";
}
function hideSpan(){
    document.getElementById("mouseoverElement").style.borderColor = old_border;

    document.getElementsByTagName("span")[0].setAttribute("id", undefined);
}
function clickSpan(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Similar to divs, included for structural improvements to web design. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickButton(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Added to HTML to improve its interactivity. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
}





function clickTime(){

    document.getElementById("boxInactive").setAttribute("id", "boxActive"); 

    document.getElementById("boxActive").innerHTML = 
    "Incredibally important to companies and websites that collect data as it allows timeframes around usage data. <br> <br> <b> click here to escape </b>";

    document.getElementById("textParagraph").style.filter = "blur(3px)";
    
}


