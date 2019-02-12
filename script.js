var randomColor0 = randomColor();
console.log(randomColor);
var randomColor1 = randomColor({ hue: "red" });
var randomColor2 = randomColor({ hue: "random", luminosity: "random" });
$(".colorbox").css(
    "background", randomColor0);

$(".colorbox2").css(
    "background", randomColor1);

$(".colorbox3").css(
    "background", randomColor2);
