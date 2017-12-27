function play(sound){
   var audio = document.getElementById("audio");
    audio.setAttribute('src', sound);
   audio.play();
}
function stopAudio(){
   var audio = document.getElementById("audio");
   audio.pause();
   $('#audio-background').css('background-image', 'url(../img/fractal.jpg)');
   $(document.body).css('background-image', 'none');
}

function changeImage(a) {
    $('#audio-background').css('background-image', 'url('+a+')');
    // $(document.body).css('background-image', 'url('+a+')');
}
