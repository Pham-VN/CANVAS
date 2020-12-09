var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var tab = ["bonjour", "vermicelle", "table"];
var tab_def = ["La salutation qu'on utilise durant la journée.","Aliment à base de semoule de blé."," Meuble à plateau horizontal posé sur un ou plusieurs pieds."];
var tab_couleur = ["red","White","blue","green","orange","brown","crimson","darkorange","darkgreen"];
var tab_font = ["Times New Roman", "Times", "serif","Arial", "Helvetica", "sans-serif"];


var ind = random_mot();

var a = document.getElementById('result'); // return the element has the ID attribute "result"

function drawLettre(size,font_family,color,text,x,y) { // draw lettre in canvas.
    context.font = size +"px"+" " + font_family;
    context.fillStyle = color;
    context.fillText(text, x,y);
}
function random_mot() { // get random number in the tab.
    var mot_random = Math.floor(Math.random() * tab.length);
    return mot_random; // 
}

function initial() {
    var x, y, size, index, couleur, font_family;
    var mot = tab[ind];
    for (var i = 0; i < mot.length; i++) {
        x = 100 + Math.floor(Math.random()*400); // random number in the range 100px to 500px 
        y = 100 + Math.floor(Math.random()*300);// random number in the range 100px to 400px 
        size = 30 + Math.floor(Math.random()* 70); // random number in the range 40px to px 
        index = Math.floor(Math.random()* tab_couleur.length);
        couleur = tab_couleur[index];
        font_family = Math.floor(Math.random()* tab_font.length);
        drawLettre(size,tab_font[font_family], couleur,mot[i],x,y); // draw lettre onto the canvas.
    }
}

function update() {
    context.clearRect(0,0,600,600); // clear a rectangle who has a the width 600px and height 600px.
    initial();// call the funtion who has a name "initial"
}

function comparer() {
    var mot = tab[ind];
    var inp = document.getElementById("input"); // return the element has the ID attribute "input".
    var p = document.getElementById("annonce"); // return the element has the ID attrubute "annonce".
    var a = inp.value; // get a value of input
    var lower_case = a.toLowerCase(); // method toLowerCase() converts a string to lowercase letters.
    if (lower_case === mot) { // if a is equal to word 
        p.innerHTML = "Bravo!!"; // return the HTML content "Bravo"
        ind = random_mot();
    } else {
        p.innerHTML = "Vous avez encore de la chance.";   // if the condition is false, return the HTML content "Vous avez encore de la chance.";
    }
}
//comparer();
function solution() {
    a.innerHTML = tab[ind]; // return the element has the ID attribute "result" and return the HTML content (inner HTML) of an element
}
function reset() {
    a.remove(); // remove element "result" from the DOM.
}
function definition() {
    var def = tab_def[ind];
    document.getElementById("definition").innerHTML= tab_def[ind];
}    

var bouge =(setInterval(update, 2000)); // call a funtion has the name 'update' at 2000 milliseconds.
