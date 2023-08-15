// first image dice;

var randomnumber1= Math.floor(Math.random() * 6)+1; //1-6
var randomimage = "dice" + randomnumber1 + ".png"; // img dice1-dice6.png;
var randomimagesource="images/" + randomimage;// imgages/.dice1.png-imgages/.dice6.png;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);


// for second image dice
var randomnumber2= Math.floor(Math.random() * 6)+1; //1-6
var randomimage2 = "dice" + randomnumber2 + ".png"; // img dice1-dice6.png;
var randomimagesource2="images/" + randomimage2;// imgages/.dice1.png-imgages/.dice6.png;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Pslayer1 win";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player2 win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
