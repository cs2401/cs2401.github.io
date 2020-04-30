

/* Erases the content on the help box when it is "not needed" */
function helpClick(){
document.getElementById("helpActive").setAttribute("id", "helpInactive");

    document.getElementById("helpInactive").innerHTML = "";

    document.getElementById("homeBody").style.filter = "blur(0px)";
}


/* Activates and prompts message of help box on home page */ 
function helpHome(){

    document.getElementById("helpInactive").setAttribute("id", "helpActive"); 

    document.getElementById("helpActive").innerHTML = 
    "To proceed through this website, click on one of the four pages below the welcome message. This will take you directly to the page you wish to view, to change pages from there you will see a nav bar at the top of each page. Please be sure to click the help button on each page to ensure you understand the interactive elements of the Webpage. <br> <br><ins> click here to escape </ins>";

    document.getElementById("homeBody").style.filter = "blur(3px)";
}


/* Activates and prompts message of help box on HTML page */ 
function helpHTML(){

    document.getElementById("helpInactive").setAttribute("id", "helpActive"); 

    document.getElementById("helpActive").innerHTML = 
    "If you wish to change pages there is a nav bar at the top of the page. On this page there are many boldened words which represent the different elements HTML has to offer. Hovering over a bold word should show you the element present on the screen (if it is part of the website) and clicking on a bold word will prompt a message (like this) with more information. <br> <br><ins> click here to escape </ins>";

}



/* Activates and prompts message of help box on CSS page */ 
function helpCSS(){

    document.getElementById("helpInactive").setAttribute("id", "helpActive"); 

    document.getElementById("helpActive").innerHTML = 
    "There are buttons that can be clicked in the 'Cascading' paragraph. Each button will perform changes to the style of this paragraph in three ways (1.Background Colour 2.Font Size 3.Font Color) at the level stated in the box. Also there are bold words that can be clicked to give examples of each casding level on this website. <br> <br><ins> click here to escape </ins>";
}


/* Activates and prompts message of help box on JavaScript page */ 
function helpJavaScript(){

    document.getElementById("helpInactive").setAttribute("id", "helpActive"); 

    document.getElementById("helpActive").innerHTML = 
    "The button in the purpose paragraph can be clicked multiple times to cycle through a text stream. Click the button in the AJAX paragraph for the data to be read, formatted and displayed (please be patient, it may take a few seconds, and occasionnaly it requires a refersh to work. Try different senarios for the form, it is very simple and only detects a small number of errors. <br> <br><ins> click here to escape </ins>";
}


/* Activates and prompts message of help box on Author page */ 
function helpAuthor(){

    document.getElementById("helpInactive").setAttribute("id", "helpActive"); 

    document.getElementById("helpActive").innerHTML = 
    "There are three links to visit that include the authors Linkedin, Student email address and his Resume. <br> <br><ins> click here to escape </ins>";

    document.getElementById("").style.filter = "blur(3px)";
}


