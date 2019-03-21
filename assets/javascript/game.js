var targetNumber = 24;
<div id="crystals"></div>

$("#number-to-guess").text(targetNumber);

var counter = 0;
var numberOptions = [2, 4, 6, 3];
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("assets/images/photo-1521133573892-e44906baee46.jpeg");
    var imageCrystal2 = $("assets/images/photo-1533737338828-ebebc30718b3.jpeg");
    var imageCrystal3 = $("assets/images/photo-1534592302589-d4f8f14c6f47.jpeg");
    var imageCrystal4 = $("assets/images/photo-1546608135-e5de34abc308.jpeg");
    imageCrystal.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    imageCrystal4.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/photo-1521133573892-e44906baee46.jpeg");
    imageCrystal2.attr("src", "assets/images/photo-1533737338828-ebebc30718b3.jpeg");
    imageCrystal3.attr("src", "assets/images/photo-1534592302589-d4f8f14c6f47.jpeg");
    imageCrystal4.attr("src", "assets/images/photo-1546608135-e5de34abc308.jpeg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[i]);
    imageCrystal3.attr("data-crstalvalue", numberOptions[i]);
    imageCrystal4.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
    $("#crystals").append(imageCrystal2);
    $("#crystals").append(imageCrystal3);
    $("#crystals").append(imageCrystal4);
}

$(".crystal-image").on("click", function() {

    var carystalValue = ($(this).attr(data-crystalvalue));
    crystalValue = pareseInt(crystalValue);
    counter += crystalValue;
}