

$("#hole").on('animationiteration', function () {
    var randomNumber=-Math.floor(Math.random()*600+200);
    console.log(randomNumber);
    $("#hole").css("top", randomNumber+"px");
});
